<!--  this give output of name and age.. 
to do it dynamically define props..
-->



<template>
<slot-data>
<template v-slot:header>  <!--use v-slot for define another slot inside template -->
<h2>vishuuu</h2>
</template>
<h2>{{ username }}</h2>
<h3> {{ userage }}</h3>

</slot-data>



 </template>

<script>
export default{
    props:{
        username:{
            type:String,
            required:true
        },
        userage:{
            type:Number,
            required:true
        }
    }
}


</script>
<!--<style scoped>     
  section{
    margin:30px;
    padding:15px;
    text-align:center;
    border:2px solid black; 

  }  
  </style>-->