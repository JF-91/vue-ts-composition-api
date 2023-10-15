<template >

    <nav>
        <RouterLink v-for="link in links" :key="link.name" :to="link.path">
          {{ link.title  }}
        </RouterLink>

    </nav>


</template>
<script setup lang="ts" > 
import type { IRouterLink} from '@/router/list-routes-nav'
interface Props {
  title?: string;
  links: IRouterLink[];
  isSecondary?: boolean;

}
//para definer las popperties del componente y default prop
withDefaults(defineProps<Props>(), {
  title: 'Vite ',
  isSecondary: false
})

</script>
<style lang="scss" scoped>
    nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media (min-width: 1024px) {
  
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>@/router/list-routes-nav