<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';
import PokemonCardList from '../components/PokemonCardList.vue'
const { pokemons, count, isLoading, error, isError } = usePokemons()



</script>
<template lang="">
    <div>
        <h1>Pokemon List</h1>
        <span v-if="isLoading" >Cargando...</span>
        <span v-else-if="isError">{{ error }}</span>

        <div v-else>
            <h3>{{ count }}</h3>
            <PokemonCardList :pokemons="pokemons" />
            
        </div>
    </div>
</template>
<style lang="scss" scoped></style>@/modules/pokemons/interfaces/PokemonResponse