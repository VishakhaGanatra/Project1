<template>
<ul>
<li :class="{active: selection === 'poor'}">
<button @click="activate('poor')"   type="button"> Poor </button></li>
<li :class="{active: selection === 'avarage'}">
<button @click="activate('avarage')" type="button"> Avarage </button></li>
<li :class="{active: selection === 'great'}">
<button @click="activate('great')" type="button"> great </button></li>

</ul>


</template>

<script>
export default{
     props:['modelValue'],
     emits :['update : modelValue'],
    data(){
        return{
            selection : this.modelValue,
        };
    },
    methods:{
        activate(option){
            this.selection = option;
            this.$emit('update:modelValue',option);

        }
    }


}</script>


 

<style scoped>
.active {
    border-color : blue;
}
.active button{
    color: blue;
}
ul{
    list-style:none;
    margin:10px;
    padding:0;
    display:flex;
}
li{
    margin:10px;
    padding:5px;
    display:flex;
    justify-content:center;
    text-align:center;
}
</style>