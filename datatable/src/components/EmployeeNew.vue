<template>
<form-new></form-new>
<div class="container pt-3 pb-5" >
<h2>BootstrapVue Datatable</h2>
<b-row>
<b-col md="3">
<b-form-input type="search" placeholder="Search" v-model="filter" >
</b-form-input>
<br>
</b-col>
</b-row>
<b-row>
<b-col>
<b-table striped hover :items="posts" :filter="filter" 
    :per-page="perPage"  :current-page="currentPage" :total-rows="rows"></b-table>
</b-col>
<b-col md="12" class="justify-center text-center">
<b-pagination v-model="currentPage" :per-page="perPage"  :current-page="currentPage" :total-rows="rows" align="center" pills size="lg"></b-pagination>
</b-col>
</b-row>
</div>
</template>



<script>
import FormNew from './components/FormNew.vue';
export default{
    components:{
        FormNew
    },
    props:['posts'],
    data(){
        return{
        filter:"",
        currentPage:1,
        perPage:4,
        }
    },
    mounted(){
        console.log(this.posts)
    },
     computed: {
      rows() {
        return this.posts.length
      }
    }
}
</script>