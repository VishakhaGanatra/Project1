<template>
<h2>{{age}}</h2>
</template>

<script>
import {inject} from 'vue';
export default{
    setup(){
    const age=inject('userAge');

    return{age:age};
    }
}
</script>