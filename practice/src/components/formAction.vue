<template>
<form>
<h1>Contact Details</h1>
<div class="form-control">
<label for="number" id="number">Your No.</label>
<input type="tel" id="number" v-model="formdata.enteredname" />
</div>
<div class="form=control">
<label for="email" id="email">Email id </label>
<input type="email" id="email" v-model="formdata.enteredemail"/>

<button>submit</button>

</div>
</form>
</template>

<script>
export default{
    props:['formAction'],
    data(){
        return{
            formdata:{
            enteredname:'',
            enteredemail:'',
            },
            step : 1
        };
    },
    methods:{
        submitForm(){
            this.$emit("update:formAction",this.formdata)
        }
    }
};

</script>