<template>
    <div class="container">
    <app-grid :quotes="quotes"></app-grid>
    </div>
</template>

<script>
import QuoteGrid from './component/Quotegrid.vue';
    export default {
        components:{
            appGrid : QuoteGrid
        },
        data:function(){
            return{
                quotes:[
                    'hello'
                ],
                maxQuotes : 10
            }
        }
        
    }
</script>

<style>
</style>
