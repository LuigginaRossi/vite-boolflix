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
            if(this.poster.original_language == "en"){
                return `${this.flagBaseUrl}`+`en.png`

            } else if (this.poster.original_language == "da"){
                return this.flagBaseUrl +"da.png"

            } else if (this.poster.original_language == "es"){
                return this.flagBaseUrl +"es.png"

            } else if (this.poster.original_language == "ja"){
                return this.flagBaseUrl +"ja.png"

            } else if (this.poster.original_language == "us"){
                return this.flagBaseUrl + "us.png"

            } else if (this.poster.original_language == "it"){
                return this.flagBaseUrl +"it.png"

            } else if (this.poster.original_language == "de"){
                return this.flagBaseUrl +"de.png"
            }
        }
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
            <h6>Title: {{poster.title ?? poster.name}}</h6>
            <p class="card-text">{{poster.overview}}</p>
            <p class="card-text">
                <small>Language: {{poster.original_language}}</small>
                <img :src="flagUrl" alt=""><br>
                <!-- <img src="../assets/da.png" alt=""> -->
                <small>Vote: {{poster.vote_average}}</small>
            </p>
        </div>
    </div>
</template>
<style scoped>
    .card{
        height:100%
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
    }

    .card img{
        height: 100%;
        object-fit: cover;
    }
</style>