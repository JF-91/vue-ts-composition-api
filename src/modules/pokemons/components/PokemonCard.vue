
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import type { Pokemon } from '../interfaces/pokemon'
interface Props{
    pokemon: Pokemon
}

const props = defineProps<Props>();

const router = useRouter();

const goTo = ()=>{
    router.push({
        name: 'pokemon-by-id',
        params: {
            id: props.pokemon.id
        }
    })
}


</script>
<template >
    <div class="card" @click="goTo">
        <img :src="pokemon.frontSprite" :alt="pokemon.name">
        <h3>{{ pokemon.name }}</h3>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 200px;
        height: 300px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        cursor: pointer;
    }

    img{
        width: 150px;
        border-radius: 5px 5px 0 0;
        box-shadow: 0px 2px 10px 0px rgba(255, 255, 255, 0.1);
        transition: all .2s ease-in-out;
        &:hover{
            transform: scale(1.5);
            box-shadow: 0px 2px 10px 0px rgba(255, 255, 255, 0.3);
            transition: all .2s ease-in-out;
        }
    }
    
</style>