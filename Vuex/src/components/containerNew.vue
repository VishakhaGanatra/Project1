<!-- Mutations & mapaction -->
<template>

<!--<button @click="Addone()">Add 2</button>-->
<button @click="increment"> Add1 </button>
<p>more on...</p>
</template>

<script>
    import { mapActions } from 'vuex';

export default{
    data(){
        return{};
    },
    methods:{
        //Addone(){
            //this.$store.state.counter += 2;
            //this.$store.commit('increment');//commint is inbuilt func ...using mutation
             //this.$store.dispatch('increment');   //action..
             ...mapActions('numbers',['increment'])
        //}
    }
}
</script>