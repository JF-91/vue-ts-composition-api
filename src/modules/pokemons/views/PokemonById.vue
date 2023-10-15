<script setup lang="ts">
import { useRoute } from 'vue-router';
import store from '@/store';
import   PokemonCard from '../components/PokemonCard.vue'
import { useQuery } from '@tanstack/vue-query';


const route = useRoute();
const {id } = route.params;

useQuery(['pokemon', id], async () => {
    return await store.getPokemonById(parseInt(id as string));
})

console.log(store.getPokemonById(parseInt(id as string)));

</script>
<template >
    <div>
        <h1>Pokemon By ID  {{ id }}</h1>
        <div>
        <h1>Pokemon {{ store.pokemons.list[parseInt(id as string)].name }}</h1>
        <span v-if="store.pokemons.isLoading" >Cargando...</span>
        <span v-else-if="store.pokemons.hasError">{{ store.pokemons.errorMessage }}</span>

        <div v-else>
            <h3>{{ store.pokemons.count }}</h3>
            <PokemonCard :pokemon=" store.pokemons.list[parseInt(id as string)-1]"/>
            
        </div>
    </div>
    </div>
</template>
<style lang="scss" scoped></style>