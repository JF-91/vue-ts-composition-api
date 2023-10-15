import type { Pokemon } from "@/modules/pokemons/interfaces";
import { reactive } from "vue";

interface Store {

    // interface for the state
    pokemons: {
        list: Pokemon[] ;
        count: number;
        isLoading: boolean;
        hasError: boolean;
        errorMessage?: string ;
    },

    //Actions / Methods
    startLoadingPokemons: () => Promise<void>;
    loadedPokemons: (data: Pokemon[]) => void;
    loadPokemonsFailed: (error: string) => void;
    getPokemonById: (id: number) => Promise<Pokemon | undefined> ;

}


const store = reactive<Store>({
    pokemons: {
        list: [],
        count: 0,
        isLoading: false,
        hasError: false,
        errorMessage: "",
    },
    startLoadingPokemons: async function(): Promise<void> {
        this.pokemons = {
            ...this.pokemons,
            isLoading: true,
            hasError: false,
            errorMessage: undefined
        }
    },
    loadedPokemons: function(data: Pokemon[]):void {
        this.pokemons = {
            list: data,
            count: data.length,
            isLoading: false,
            hasError: false,
            errorMessage: undefined,
        } 
    },
    loadPokemonsFailed: function(error: string):void {
        this.pokemons = {
            ...this.pokemons,
            hasError: true,
            isLoading: false,
            errorMessage: error
        }
    },
    getPokemonById: async function(id: number): Promise<Pokemon | undefined>  {
        return  this.pokemons.list.find(pokemon => pokemon.id === id);
    }
});

// store.startLoadingPokemons();

export default store;