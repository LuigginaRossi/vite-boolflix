<script>
import SinglePoster from './SinglePoster.vue';
import {store, fetchPosters } from '../store'

export default {
    components: { SinglePoster },
    data(){
        return{
            store,
            currentIndex : 0,
            firstAutoplay: null,
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
        },
        posterClick (indexImgClicked){
            this.currentIndex = indexImgClicked;
        },
        stopAutoplay (){
            clearInterval(this.firstAutoplay);
        },
        secondAutoplay(){
            this.firstAutoplay = setInterval(this.btnNext, 1500);
        }  
    },
    mounted() {
        this.firstAutoplay = setInterval(this.btnNext, 1500);   
    }
}
</script>
    
<template>

    <template :class="store.movies.length > 0 ? 'd-block': 'd-none'">
        <div class="movie d-flex gap-4 pb-4" @mouseover="stopAutoplay" @mouseleave="secondAutoplay">
        
            <div @click="btnPrev" class="flex-shrink-0 btn btn-outline-light rounded-circle">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
        
            <div class="movie-container flex-grow-1">
                <h4 class=" pb-3">Movies</h4>
        
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4 pb-4 justify-content center">
                    <div class="col" v-for="singlePoster, i in store.movies" :class="{'active' : i === this.currentIndex}"
                        @click="posterClick(i)">
                        <SinglePoster :poster="singlePoster"></SinglePoster>
                    </div>
                </div>
            </div>
        
            <div @click="btnNext" class="flex-shrink-0 btn btn-outline-light rounded-circle">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </template>
    
    <template  :class="store.series.length > 0 ? 'd-block': 'd-none'">
        <div class="serie-tv d-flex gap-4" @mouseover="stopAutoplay" @mouseleave="secondAutoplay">

            <div @click="btnPrev" class="flex-shrink-0 btn btn-outline-light rounded-circle">
                <i class="fa-solid fa-chevron-left"></i>
        </div>
        
            <div class="serie-container pb-4">
                <h4 class=" py-3">Series</h4>
        
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6  g-4 pb-4 ">
                    <div class="col" v-for="singlePoster, i in store.series" :class="{'active' : i === this.currentIndex}"
                        @click="posterClick(i)">
                        <SinglePoster :poster="singlePoster"></SinglePoster>
                    </div>
                </div>
            </div>
        
            <div @click="btnNext" class="flex-shrink-0 btn btn-outline-light rounded-circle">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        
        </div>
    </template>
    

</template>

<style scoped>
/* perchè usando il scss language non mi funzionava l'active? Domanda per tutor :D */
    .row{
        overflow: auto;
        flex-wrap: nowrap;
    }

    .movie-container,.serie-container{
        height: 40vh;
        align-items: center;
        justify-content: center;     
        overflow: auto; 
    }

    .row{
            height: 100%;
           
    }

    .col{
        border-bottom: 3.5px solid rgba(94, 255, 0, 0); 
        border-top: 3.5px solid rgba(0, 255, 8, 0); 
        border-radius: 10px;

            
    }
    .col:hover{
            z-index: 4;
            transform:  scale(1.1);
            border-top: 0;
            border-bottom: 0;
            }
    .btn{
        align-self: center;
    }
    .active{
        border-bottom: 3.5px solid red; 
        border-top: 3.5px solid rgb(255, 0, 0); 
    }
  
</style>