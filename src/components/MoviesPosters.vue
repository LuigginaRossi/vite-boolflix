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
    {{store.posters[0]}}

    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col" v-for="singlePoster in store.posters">
            <SinglePoster :poster="singlePoster"></SinglePoster>
        </div>
    </div>
       

</template>