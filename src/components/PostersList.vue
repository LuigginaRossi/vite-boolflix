<script>
import SinglePoster from './SinglePoster.vue';
import {store, fetchPosters } from '../store'

export default {
    components: { SinglePoster },
    data(){
        return{
            store,
        }
    },
    // created(){
    //     fetchPosters();    
    // },
}
</script>
    
<template>
    <!-- {{store.series[0]}} -->
    <!-- {{store.movies[0]}} -->

    <h4 class=" pb-3">Movies</h4>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4 pb-4">
        <div class="col" v-for="singlePoster in store.movies">
            <SinglePoster :poster="singlePoster"></SinglePoster>
        </div>
    </div>
    
    <h4 class=" py-3">Series</h4>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6  g-4 pb-4">
        <div class="col" v-for="singlePoster in store.series">
            <SinglePoster :poster="singlePoster"></SinglePoster>
        </div>
    </div>

</template>

<style scoped>
    .row{
        overflow: auto;
        flex-wrap: nowrap;

    }
    .col:hover{
        z-index: 4;
        transform:  scale(1.15);
    }
  
</style>