<template>
<h1>using props</h1>
<h2>{{userName}}</h2>
<h2>{{age}}</h2>
</template>


<script>
import {computed} from 'vue';
export default{
    props:['firstName','lastName','age'],

    setup(props){
        const user= computed(function(){
            return props.firstName + ' ' + props.lastName;
        })

        return{userName:user}
    }
    // computed:{
    //     userName(){
    //     return this.firstName + ' ' + this.lastName;
    // }
    // }


}
</script>