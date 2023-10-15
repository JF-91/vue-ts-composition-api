<script setup  lang="ts">
import { defineComponent, nextTick, ref } from 'vue';

const counter = ref(10)
const increase = () => {
    counter.value++
    nextTick(
        () => {
            console.log('nexttick')
        }
    );
}

// export default  defineComponent({
    
//     setup(){
//         const counter = ref(10)
        
//         const increase = () => {
//             counter.value++
//         }

//         return {
//             counter,
//             increase
//         }
//     }
// })
    

</script>

<template>
    <div>
        <h1>Counter view: {{ counter }}</h1>
        <button @click="increase">+1</button>
    </div>
</template>

<style scoped lang="scss">

</style>