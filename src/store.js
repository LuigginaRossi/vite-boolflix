import axios from 'axios';

import{reactive} from 'vue';


export const store = reactive({
    movies:[],
    series:[],
    posters:[],

    activeFilters: {},
    includeAdult: Boolean,
    
})

export function fetchPosters (){
    const rootUrl = "https://api.themoviedb.org/3/"
    axios.get( rootUrl+"search/movie?", {
        params:{
            api_key: "985105856f74a10690c0481645c8edf7",
            query: store.activeFilters.titlePoster,
        }
    })
    .then(resp=>{

        store.movies = resp.data.results;
        console.log(resp.data.results)

    })

    axios.get( rootUrl+"search/tv?", {
        params:{
            api_key: "985105856f74a10690c0481645c8edf7",
            query: store.activeFilters.titlePoster,
            include_adult: store.includeAdult,
        }
    })
    .then(resp=>{
        store.series= resp.data.results;
        console.log(resp.data.results)

        // store.posters = [...store.movies, ...store.series];
        // console.log(store.posters)
    })
    .catch((error)=>{
        console.log(error);
        console.log(error.response.status);
    
      // this.ajaxError= "A causa di un errore l'operazione non è andata a buon fine!!";
        
    });
}

export function searchBtnClik (){
    
}