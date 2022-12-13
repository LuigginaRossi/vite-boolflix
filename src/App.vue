<script>
import Main from './components/Main.vue';
import SearchBar from './components/SearchBar.vue';

  export default{
    components: { Main, SearchBar }
}
</script>

<template>
  <div class="container py-5">
    <h1>Boolflix</h1>
    <SearchBar></SearchBar>
    <Main></Main>
  </div>
  
</template>

<style lang="scss">
  @use "./styles/general.scss" as *;



</style>
