<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>username:{{name}}</p>
        <button @click="change"> Reset </button>
        <p> username:{{userAge}}</p>
    </div>
</template>

<script>
import {eventBus} from '../main';

export default{
    props:['name','userAge'],
    methods:{
        change(){
            this.name = 'max';
            this.$emit('changeName',this.name);
        }
    },
    created(){
        eventBus.$on('changedAge', (age) => {
            this.userAge=age;
        })
    }
};
</script>

<style scoped>
    div {
        background-color: lightcoral; 
    }
</style>
