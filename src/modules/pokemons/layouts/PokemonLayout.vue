<script setup lang="ts">
import NavbarApp from '@/shared/components/NavbarApp.vue'; 
import  { IRouterLink } from '@/router/list-routes-nav';
import { pokemonRoute } from '../router';

const routerCustom: IRouterLink[] = pokemonRoute.children?.map( ({name, path,  props})=>{
        //si es  null = ?? ""
    return {
        name: name?.toString()  ?? "",
        path: path?.toString()  ?? "",
        title: ( props as { title?: string}).title ?? "",
        visible: ( props as { visible?: boolean}).visible ?? true
    }
}) || [];

</script>
<template >
    <div>
        <h1>Pokemon Layout</h1>
        <NavbarApp class="pokemon_sub_nav"  title="Vite"  :links="routerCustom"/>
        
        <Suspense>
            <RouterView/>
            <template  #fallback>
                Loading...
            </template>
        </Suspense>
    </div>
</template>
<style lang="scss" scoped>
    $base-color: #036;
    .pokemon_sub_nav {
        margin-top: 2rem;
        width: 100%;
        font-size: 12px;
        text-align: center;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
       
       

        @for $i from 1 through 3 {
        a:nth-child(3n + #{$i}) {
            background-color: lighten($base-color, $i * 5%);
            }
        }
    }
    
</style>