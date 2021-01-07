<template>
  <base-container title="Vuex" v-if="isAuth">
  <favourite-new></favourite-new>
  <the-counter></the-counter>
  <button @click="Addone"> Add 10 </button>
  <container-new></container-new>
  </base-container>

  <base-container title="Auth">
  <Authentication-New></Authentication-New>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import containerNew from './components/containerNew.vue';
import FavouriteNew from './components/FavouriteNew.vue';
import AuthenticationNew from './components/AuthenticationNew.vue';
//import theCounter from './components/theCounter.vue';
export default {
  components: {
    BaseContainer,
    containerNew,
    FavouriteNew ,
    AuthenticationNew,
    //theCounter
  },
  data(){
    return{
      //counter : 0
    };
  },

  computed:{
        isAuth(){
        return this.$store.getters.Userisauth;
        },
        
    },
  
  methods:{
    Addone(){
       //this.$store.state.counter++;
      //this.$store.commit('increase', {value: 10}); //mutation with payload..
      this.$store.dispatch('numbers/increase', {value: 10});// for action

    }
  }
}; 
</script>

<style>
* {
  box-sizing: border-box;

}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
