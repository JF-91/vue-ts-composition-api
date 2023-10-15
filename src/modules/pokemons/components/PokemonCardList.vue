<script lang="ts" setup>

import type { Pokemon } from '../interfaces';
import PokemonCard from './PokemonCard.vue';




interface Props{
    pokemons: Pokemon[] 
}

 defineProps<Props>()




</script>


<template >
    <div class="card-list">
        <span v-for="pokemon in pokemons" :key="pokemon.id"  >
            <PokemonCard  :pokemon="pokemon"/>
        </span>
    </div>
</template>

<style lang="scss" scoped>
    .card-list{
        display: flex;
        flex-direction: row;
        flex-wrap:  wrap;
        justify-content: center;

}
</style>