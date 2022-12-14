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
    created(){
        fetchPosters();
           
    },
}
</script>
    
<template>
    <!-- {{store.series[0]}} -->
    <!-- {{store.movies[0]}} -->

    <h2 class="text-center py-4">Movies</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4">
        <div class="col" v-for="singlePoster in store.movies">
            <SinglePoster :poster="singlePoster"></SinglePoster>
        </div>
    </div>
    
    <h2 class="text-center py-4">Series</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6  g-4">
        <div class="col" v-for="singlePoster in store.series">
            <SinglePoster :poster="singlePoster"></SinglePoster>
        </div>
    </div>

</template>