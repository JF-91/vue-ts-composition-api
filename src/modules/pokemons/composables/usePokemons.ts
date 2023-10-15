import type { Pokemon } from '@/modules/pokemons/interfaces/';
import { getPokemons} from '../helpers/getPokemons'
import { computed, ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';



// const usePokemons = () => {
    
//     const pokemons = ref<Pokemon[]>([]);
//     const isLoading = ref<boolean>(true);

//     //para que no hagan mas peticiones cada vez que se cargue la página
//     if(pokemons.value.length === 0){

//         getPokemons().then((data) => {
//             pokemons.value = data
//             isLoading.value = false
//         });
//     }

//     return{
//         pokemons,
//         isLoading,
//         count : computed(() => pokemons.value.length),
//     }
// }

// export default usePokemons

export const usePokemons = () => {

    const { data: pokemons, isLoading , error, isError} = useQuery(
        ['pokemons'], 
        getPokemons,



    );

    const count = computed(() => pokemons.value?.length ?? 0);

    return{
        pokemons,
        isLoading,
        count,
        error,
        isError
    }
}