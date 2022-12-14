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
    <form @submit.prevent="onSearchClick">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search Title" aria-label="Example text with button addon"
                aria-describedby="button-addon1" v-model="filters.titlePoster">
            <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
        </div>
    </form>
    
</template>
<style scoped>
</style>