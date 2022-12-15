<script>
import{store} from'../store';
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
        }
    },
}
</script>

<template>
    <div class="d-flex justify-content-between align-content-center">
        <h1 class="text-secondary ">Boolflix</h1>
        <form @submit.prevent="onSearchClick" class="align-self-center">
            <div class="input-group">
                <input type="text" class="form-control bg-dark text-secondary" placeholder="Search Title" aria-label="Example text with button addon"
                    aria-describedby="button-addon1" v-model="filters.titlePoster">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>
    </div>
   
    
</template>
<style scoped>
</style>