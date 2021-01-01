<template>
<base-dialog v-if="inputIsInvalid" title="input invalid">
<template v-slot:default>
<p>Input is invalid please enter valid input...</p>
</template>
<template v-slot:actions>
<base-button @click="inputIsInvalid=false">okay</base-button></template>
</base-dialog>
<base-card>
<form @submit.prevent="submitData">

<div class="form-control">
<label for="title" > Title </label>
<input type="text" id="title" name="title"  v-model="enteredTitle"/>
</div>

<div class="form-control">
<label for="description" > Discription </label>
<textarea id="description" name="description" rows="3" v-model="enteredDescription"></textarea>
</div>

<div class="form-control">
<label for="link" > Link </label>
<input type="url" id="link" name="link" v-model="enteredLink"/>
</div>

<base-button type="submit">Add resource</base-button>
</form>
</base-card>

</template>

<script>
export default{
    emits : ['add-contact'],
    data(){
        return{
            enteredTitle:'',
            enteredDescription:'',
            enteredLink:'',
            inputIsInvalid : false
        };
    },
    methods:{
        submitData(){
          console.log('data', this.enteredLink)
            this.$emit(
            'add-contact',
            this.enteredTitle,
            this.enteredDescription,
            this.enteredLink)

            if(this.enteredTitle.trim() === '' || this.enteredDescription.trim() === '' || this.enteredLink.trim() === ''){
              this.inputIsInvalid = true;

            }

        }

    }


}
</script>


<style scopped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>