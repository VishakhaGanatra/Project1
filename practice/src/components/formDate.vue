<template>
<form>
<h1>Contact Details</h1>
<div class="form-control">
<label for="number" id="number" >Your No.</label>
<input type="tel" id="number" v-model="formdata.enteredvalue" />
</div>
<div class="form=control">
<label for="email" id="email">Email id </label>
<input type="email" id="email" v-model="formdata.enteredemail"/>

</div>
</form>
</template>

<script>
export default{
    props: ['formDate'],
    data(){
        return{
            formdata:{
            enteredvalue:'',
            enteredemail:'',
            },
            step : 1
        };
    },
    methods:{
         submitForm(){
             this.$emit("update:formDate",this.formdata);
             //console.log(this.formdata)
         }
    }
}
</script>