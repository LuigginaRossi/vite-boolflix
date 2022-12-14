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
        fetchPosters();
        this.store.activeFilters = filters;
        console.log(filters);
      }
    }
  }
</script>

<template>
  <div class="container py-5">
    <h1>Boolflix</h1>
    <SearchBar @search="onSearch"></SearchBar>
    <Main></Main>
  </div>
  
</template>

<style lang="scss">
  @use "./styles/general.scss" as *;



</style>
