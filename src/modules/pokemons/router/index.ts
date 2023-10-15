import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = 'pokemons';
export const pokemonRoute: RouteRecordRaw = {

    path: `/${ROUTE_NAME}`,
    component: ()=> import('@/modules/pokemons/layouts/PokemonLayout.vue'),
    redirect: `/${ROUTE_NAME}/list`,
    children: [
        {
            path: `/${ROUTE_NAME}/list`,
            props: {title:"Pokemon list"},
            name:'pokemon-list',
            component: ()=> import('@/modules/pokemons/views/PokemonList.vue'),
        },
        {
            path: `/${ROUTE_NAME}/by/:id`,
            props: {title:"Pokemon por ID"},
            name:'pokemon-by-id',
            component: ()=> import('@/modules/pokemons/views/PokemonById.vue'),
        },
        {
            path: `/${ROUTE_NAME}/search`,
            props: {title:"Pokemon search"},
            name:'pokemon-search',
            component: ()=> import('@/modules/pokemons/views/PokemonSearch.vue'),
        },
        {
            path: `/${ROUTE_NAME}/list-native`,
            props: {title:"Pokemon Native"},
            name:'pokemon-native',
            component: ()=> import('@/modules/pokemons/views/PokemonListNative.vue'),
        }

    ]
    

}