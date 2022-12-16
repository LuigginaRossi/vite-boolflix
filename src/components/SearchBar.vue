<script>
import{store, fetchPosters} from'../store';
export default {
    data() {
        return {
            store,
            filters:{
                titlePoster: "",
            }
        }
    },  
    emits:["search"],
    methods: {
        onSearchClick(){
            this.$emit("search", {...this.filters});  
        },
        // adultControlChange(){
        //     this.store.includeAdult = false;
        //     if(this.store.includeAdult === false){
        //         alert("Alcuni contenuti sono adatti solo ai maggiorenni. confermi di avere più di 18 anni?");
        //         return this.store.includeAdult = true;
        //     }else{
        //         return this.store.includeAdult = false;
        //     }
        //     fetchPosters()
        // },      
    },
}
</script>

<template>
    <div class="d-flex justify-content-between align-content-center">
        <h1 class="text-secondary py-3">Boolflix</h1>


        <!-- <div class="input-group px-4">
                <div class="input-group-text bg-none border-0">
                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"
                    @change="adultControlChange">
                    <span class="px-2 text-secondary">Include adult movies</span> 
                </div>
        </div> -->

        <form @submit.prevent="onSearchClick" class="align-self-center d-flex">

            <div class="input-group">
                <input type="text" class="form-control bg-none text-secondary" placeholder="Search Title" aria-label="Example text with button addon"
                    aria-describedby="button-addon1" v-model="filters.titlePoster">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>
    </div>
   
    
</template>
<style scoped>
    .bg-none{
        background: none;
    }
</style>