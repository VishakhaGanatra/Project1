<template>
<computed-new></computed-new>
  <section class="container">
    <h2>{{ user.name }}</h2>
   <!-- <provide-inject></provide-inject>-->

    <h2>{{user.age}}</h2>
    <button @click="setAge">change age </button>
  </section>
</template>

<script>
// import {ref} from 'vue';
import {reactive} from 'vue';
export default {
  setup(){
    // ...............    using ref .............
    // const uName=ref('vishu');
     //const uAge =ref(31);
          // provide('userAge',uAge)     provide&inject

    // function setNewage(){
    //   uAge.value=21;
    // }
    // return{userName : uName , age : uAge , setAge :setNewage}
        
    // const user = ref({

    //   name : 'vishakha',
    //   age : '22'
    // })
    //const uName = ref('vishakha'); //using ref insted od data
   // setTimeout(() => {         //here if ant to change name after 2s we can't directly assign without ref...ref is object and inside it value property to change item.
     // user.name='max';
     // user.age=23;
   // },2000)
    // return {userName : user.value.name , age: user.value.age , user:user};
       // .............reactive..............
       const user = reactive({       //reactive use only when u have object..
      name : 'vishakha',
       age : '22'
     });

     function setNewage(){      //fuction insted of methods.. using reactive
       user.age=30;
     }



    
    return {user:user,setAge:setNewage,};
  
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>