<template>
<div class="container"> 
<user-list></user-list>
</div>
  <div class="container">
    <div class="block" :class="{animate :animatedBlock}"></div>
    <button @click="animateblock">Animate</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible"> <!--open is props define in basemodel-->
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal> <!-- we cant wrap transition component here coz transition component only afftected when it hase only one child element but here transition hase one chiled base-model but base-model hase 2 chiled div & dialog so it's directly connected to transition thtas why transition wrap inside dialog in base-model-->
  <div class="container">
  <transition :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @enter-cancelled="entercancel" @leave-cancelled="leavecancel">   <!-- component it has three class active,from ,to for enter and leave
  css : false means we wont use css transition we use js animation  -->
  <p v-if="ParaisVisible">This is shown sometimes...</p>
  </transition>
  <button @click="toggleMethods">Toggle </button>
  </div>
  <div class="container"> <!-- here we have two child of transition but both buton can not shown on page at same time thats why we can use transition here-->
  <transition name="fade-button" mode="in-out"> <!-- mode is inbuilt it hase two property in-out & out-in-->
  <button @click="showUser" v-if="!Usersarevisible">Show user </button>
  <button @click="hideUser" v-else>hide user</button>
  </transition>
  </div>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  


<script>
import userList from './components/userList.vue';
export default {
  components:{
    userList
  },
  data() {
    return { 
      dialogIsVisible: false,
      animatedBlock : false,
      ParaisVisible: false,
      Usersarevisible : false,
      enterCancel : null,
      leaveCancel : null
     };
  }, 
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateblock(){
      this.animatedBlock = true;

    },
    toggleMethods(){
      this.ParaisVisible = !this.ParaisVisible;
    },
    showUser(){
      this.Usersarevisible = true;
    },
    hideUser(){
      this.Usersarevisible = false;
    },
    beforeEnter(el){
      console.log('before');
      console.log(el);
      el.style.opacity = 0;  //using js we can set animation
    },
    enter(el,done){
      console.log('after');
      console.log(el);
      let round =1;
      this.enterCancel= setInterval(() => {
        el.style.opacity = round * 0.01;
        round ++ ;
        if(round > 10){
          clearInterval(this.enterCancel);
          done();
        }

      }, 20);
      
    },
    afterEnter(el){
      console.log('after-enter');
      console.log(el);
    },
    beforeLeave(el){
      console.log('before-leave');
      console.log(el);
    },
    leave(el,done){
      console.log('leave');
      console.log(el);
      let round =1;
      this.leaveCancel= setInterval(() => {
        el.style.opacity = 1-round * 0.01;
        round ++ ;
        if(round > 100){
          clearInterval(this.leaveCancel);
          done();
        }

      }, 20);
    },
    afterLeave(el){
      console.log('after-leave');
      console.log(el);
    },
    entercancel(el){
      console.log(el);
      clearInterval(this.enterCancel);
    },
    leavecancel(el){
      console.log(el);
      clearInterval(this.leaveCancel);
    }
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition : transform 0.3s ease-out;*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate{
  /*transform : translateX(-150px);*/
  animation : hello 0.3s ease-out forwards;
}
@keyframes hello{
  0% {
    transform : translateX(0) scale(1);
  }

  70%{
    transform : translateX(-120px) scale(1.1);
  }

  100%{
    transform :translateX(-150px) scale(1);
  }
}
/*.v-enter-from{
  opacity:0;
  transition:translateY(-30px);
}*/
/*.v-enter-active{
  transition:all 0.3s ease-out;
  animation: hello 0.3s ease-out;
}*/
/*.v-enter-to{
  opacity:1;
  transition:translateY(0);
}*/
/*.v-leave-from{
  opacity:1;
  transition:translateY(0);
}*/
/*.v-leave-active{
  transition:all 0.3s ease-in;
  animation: hello 0.3s ease-in;  
}*/
/*.v-leave-to{
  opacity:0;
  transition:translateY(30px);
}*/

.fade-button-enter-from,
.fade-button-leave-from{
  opacity:0;
  transform:translateY(-30px);
}
.fade-button-active{
  animation : hello 0.3s ease-out;
}
.fade-button-leave-active{
  animation: hello 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-to{
    opacity:0;
  transform:translateY(30px);

}
</style>