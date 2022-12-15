<script>
import Main from './components/Main.vue';
import SearchBar from './components/SearchBar.vue';

import {store, fetchPosters} from './store';

  export default{
    components: { Main, SearchBar },
    data() {
      return {
        store,
      }
    },
    methods:{
      onSearch(filters){
        this.store.activeFilters = filters;
        fetchPosters();
        console.log(filters);
      },
    }
  }
</script>

<template>
  <div class="container py-4">
    <SearchBar @search="onSearch"></SearchBar>
    <template :class="store.activeFilters.titlePoster ? 'd-block': 'd-none'">
        <Main></Main>
    </template>
  </div>
  
</template>

<style lang="scss">
  @use "./styles/general.scss" as *;
  .container{
    height: 100vh;
  }
</style>
