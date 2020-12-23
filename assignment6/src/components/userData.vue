<!-- it take name and age field ...
when form is submitted then name nd age of user will be changed so first store username & age in eneteredname & enteredage filed then listen with v-model and create custom event emit with custom name add-data

 -->


<template>
<slot-data>
<form @submit.prevent="submitData">
<label>Name:</label>
<input type="text" v-model="enteredName"/><br><br>
<label>Age:</label>
<input type="text" v-model="enteredAge"/><br><br>
<button> Add details</button>
</form>
</slot-data>



</template>

<script>
export default{
    emits:['add-data'],
    data(){
        return{
            enteredName:'',
            enteredAge:''
        };
        
    },
    methods:{
        submitData(){
            this.$emit('add-data',this.enteredName,this.enteredAge);
            
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