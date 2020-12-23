<template>
<slot-data>
<active-user 
 :username="user.name"
 :userage="user.age"
 ></active-user>
<user-data @add-data="addcontact"></user-data>
 
 <button @click="setcomponent('active-goal')">Active goal</button>
 <button @click="setcomponent('manage-goal')">manage goal </button>
<!--<active-goal v-if="selectedcomponent === 'active-goal'"></active-goal>
<manage-goal v-if="selectedcomponent === 'manage-goal'"></manage-goal>-->
<keep-alive>
<component :is="selectedcomponent">    <!-- this is dynamic way use component as element with bind is-->
</component>
</keep-alive>   <!-- this inbuild component alive data when page load or switch to another field..-->


</slot-data>


</template>






<script>
import activeUser from './components/activeUser.vue'; // locally registered component
export default{
  components:{
    activeUser : activeUser      //locally 
  },
  data(){
    return{
      selectedcomponent : 'active-goal',
      user:{
        name:'vishakha ganatra',
        age:21
      }
    };
  },
  methods:{
    addcontact(name,age){
      this.user ={
        name:name,
        age:+age // + convert string to number

      };
    },
    setcomponent(cmp){
      this.selectedcomponent=cmp;
    }
  }
  
  
}
  </script>
 <!-- using scoped inside style it will only affect to this section...-->
  
  
  
 <!-- <style scoped>     
  section{
    margin:30px;
    padding:15px;
    text-align:center;
    border:2px solid black; 

  }
  </style>-->