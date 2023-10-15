<script setup lang="ts">
import  { useQuery } from '@tanstack/vue-query';
import PokemonCardList from '../components/PokemonCardList.vue';
import store from '@/store';
import { getPokemons } from '../helpers/getPokemons';



useQuery(
    ['pokemons'], 
    getPokemons,
    {
        select: (data) => {
            store.loadedPokemons(data);
        }
    }
);



</script>
<template>
    <div>
        <h1>Pokemon List Native</h1>
        <span v-if="store.pokemons.isLoading" >Cargando...</span>
        <span v-else-if="store.pokemons.hasError">{{ store.pokemons.errorMessage }}</span>

        <div v-else>
            <h3>{{ store.pokemons.count }}</h3>
            <PokemonCardList :pokemons="store.pokemons.list ?? []" />
            
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>