<script>
import{store} from '../store'
export default {
    name: "SinglePoster",
    data() {
        return {
            store,
            baseUrl: "https://image.tmdb.org/t/p/",
            sizeUrl: "w342",
        }
    },
    props:{
        posterMovie:{
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
        posterSerie:{
            /**
             * @property {string} backdrop_path
             * @property {string} first_air_date
             * @property {array}  genre_ids
             * @property {number} id
             * @property {string} name
             * @property {array}  origin_contry
             * @property {string} original_language
             * @property {string} original_name
             * @property {string} overview
             * @property {number} popularity
             * @property {string} poster_path
             * @property {number} vote_average
             * @property {number} vote_count
             */
            type: Object,
            required: true,
        }
    },
    computed:{
        data() {
            return {
            
            }
        },
        getImage(){
            return `${this.baseUrl}${this.sizeUrl}${this.poster.poster_path}`
        }
    }
}
</script>

<template>
    <div class="card text-bg-dark">
        <img :src="getImage" class="card-img" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title"></h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.</p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
    </div>
</template>