import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/shared/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/shared/views/AboutView.vue')
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('@/counter/views/CounterView.vue')
    },
    {
      path:'/pokemon',
      name:'pokemon',
      component: () => import('@/Pokemons/layouts/PokemonLayout.vue')
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/shared/views/NotFoundView.vue')
    }
  ]
})

export default router
