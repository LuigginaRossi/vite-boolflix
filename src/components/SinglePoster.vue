<script>
import{store} from '../store'
export default {
    name: "SinglePoster",
    props:{
        poster:{
            /**
             * @property {Boolean} adult
             * @property {string}  backdrop_path
             * @property {array}   genre_ids
             * @property {number}  id
             * @property {string}  original_language
             * @property {string}  original_title
             * @property {string}  overview
             * @property {number}  popularity
             * @property {string}  poster_path
             * @property {string}  release_date
             * @property {string}  title
             * @property {Boolean} video
             * @property {number}  vote_average
             * @property {number}  vote_count
             */
            type: Object,
            required: true,
    
        },
    },
    data() {
        return {
            store,
            baseUrl: "https://image.tmdb.org/t/p/",
            sizeUrl: "w342",
            flagBaseUrl: "src/assets/",
        }
    },
    computed:{
        getImage(){         
                return `${this.baseUrl}${this.sizeUrl}${this.poster.poster_path}`
        },
        flagUrl(){
            const languages= ["en", "da", "es", "ja", "us", "it", "de"]

            if(languages.includes(this.poster.original_language)){
                return `${this.flagBaseUrl}${this.poster.original_language}.png`
             }
        },
        starsVote(){
            //devo dividere il mio voto in 2 
            //arrotondo per difetto e stampo una stella per ogni voto
            //ciclo fino a 5 per stampare le 5 stelle:
            //qui pusho le mie stelline
            const toReturn= [];
            const halfVote= this.poster.vote_average / 2;
            const vote = Math.floor(halfVote);
            //calcolo con x5 
            const decimali = halfVote % 1 *10;
            //se c'è una mezza stella
            let halfStar = false;
         
            
            for (let i = 0; i < 5; i++) {

                if(i < vote){   
                    //true
                    toReturn.push(1);
                }else{
                   //false
                   if((decimali >= 5) && (halfStar == false)){
                     toReturn.push(3);
                     halfStar= true;
                   }else{
                       toReturn.push(2);
                   }
                }
            }

            return toReturn
        },
    }
}
</script>

<template>
    <div class="card text-bg-dark">
        <img v-if="poster.poster_path == null" src="../assets/default.jpg" alt="">
        <img v-else :src="getImage" class="card-img" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">
                Original Tilte: {{poster.original_title ?? poster.original_name}}
            </h5>
            <h6 v-if="!poster.original_title && !poster.original_name">Title: {{poster.title ?? poster.name}}</h6>
            <p class="card-text">{{poster.overview}}</p>
            <p class="card-text">
                <small>Language: {{poster.original_language}}</small>
                <img :src="flagUrl" alt=""><br>

                <small class="pb-3">Vote: {{poster.vote_average}}</small><br>

                <!-- <i v-for="star in starsVote"
                :class="star == true ? 'fa-solid' : 'fa-regular'" class="fa-star text-warning"></i> -->
                <i v-for="star in starsVote" class="text-warning"
                :class="{'fa-solid fa-star': star == 1 , 'fa-regular fa-star': star == 2, 'fa-solid fa-star-half-stroke': star ==3}"></i>
            </p>
        </div>
    </div>

</template>

<style scoped>
    .card{
        height:100%;
        overflow: hidden;
        box-shadow: 0 0 5px 5px rgba(255, 0, 0, 0.217);
        border: 0;
    }
    .card:hover{
        box-shadow: none;
        
    }
  
    .card-img-overlay{
        opacity: 0;
        transition: all .3 ease-in-out .3;
    }
    .card-img-overlay:hover{
        opacity: 1;
        background: rgba(255, 255, 255, .7);
        color: black;
        overflow: auto;
        box-shadow: 0 0 5px 5px red;
    }

    .card img{
        height: 100%;
        object-fit: cover;
    }

    .card-text img{
        width: 30px;
        padding-left: .3rem;
    }

    ::-webkit-scrollbar-thumb{
        background: linear-gradient( red, black);
    }

    ::-webkit-scrollbar-thumb:hover{
        background: linear-gradient(black, red);   
    }

</style>