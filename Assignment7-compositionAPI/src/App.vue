<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="user.detailsareVisible">{{goal}}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="setData">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import {reactive} from 'vue';
export default {
  setup(){
   // const courseGoal = ref('finish the course');
    //const detailsareVisible = ref(false);

    // const user= ref({
    //   courseGoal : 'finish the course',
    //   detailsareVisible : false
    // })

    const user=reactive({
      courseGoal : 'finish the course',
      detailsareVisible : false
    })

    function dataVisible(){
      //detailsareVisible.value = !.detailsareVisible.value;   ...normal ref
      // user.value.detailsareVisible = !user.value.detailsareVisible; ..ref object
        user.detailsareVisible = !user.detailsareVisible;
    }
  //   return{goal : user.value.courseGoal,detailsareVisible:user.value.detailsareVisible, setData:dataVisible,user:user};         ...ref object
  // }
   return{goal:user.courseGoal , detailsareVisible : user.detailsareVisible , setData : dataVisible,user:user};

  }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>