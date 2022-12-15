<script>
import SinglePoster from './SinglePoster.vue';
import {store, fetchPosters } from '../store'

export default {
    components: { SinglePoster },
    data(){
        return{
            store,
            currentIndex : 0,
        }
    },
    methods:{
        btnPrev(){
            //se i = o allora imposto all'ultimo indice disponibile:
            console.log(this.store.movies[0])
             if( this.currentIndex === 0 ){
                 this.currentIndex = this.store.movies.length -1;
                 console.log(this.store.movies.length)
             } else {
                 this.currentIndex --;
             }
        },
        btnNext(){
             //se i = slider.length allora lo imposto a 0:
             if( this.currentIndex === this.store.movies.length -1 ){
                this.currentIndex = 0;
            } else {
                this.currentIndex ++;
            }
            // this.currentIndex ++;
        },
    }
    // created(){
    //     fetchPosters();    
    // },
}
</script>
    
<template>
    <!-- {{store.series[0]}} -->
    <!-- {{store.movies[0]}} -->
    <div class="movie d-flex gap-3">

        <div @click="btnPrev" class="flex-shrink-0 btn btn-outline-light rounded-circle"><i class="fa-solid fa-chevron-left"></i></div>

        <div  class="movie-container flex-grow-1">
            <h4 class=" pb-3">Movies</h4>
            
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4 pb-4 justify-content center">
                <div class="col" v-for="singlePoster in store.movies" :class="{'active' : singlePoster === this.currentIndex}">
                    <SinglePoster  :poster="singlePoster"></SinglePoster>
                </div>
            </div>
        </div>
        
        <div @click="btnNext" class="flex-shrink-0 btn btn-outline-light rounded-circle"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
    
    
    <h4 class=" py-3">Series</h4>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6  g-4 pb-4 ">
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
        transform:  scale(1.13);
    }
    .btn{
        width: 10px;
        aspect-ratio: 1/1;
        align-self: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .active{
        opacity: 0;
    }
  
</style>