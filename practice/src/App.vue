<template>
  <form-new
    v-if="step === 1"
    ref="form1"
    v-model:formNew="form1Data"
  ></form-new>
  <form-date
    v-if="step === 2"
    ref="form2"
    v-model:formDate="form2Data"
  ></form-date>
  <form-action
    v-if="step === 3"
    ref="form3"
    v-model:formAction="form3Data"
  ></form-action>
  <button @click="next" v-if="step !== 4">Next</button>
  <button @click="previous" v-if="step !== 4">Previous</button>
  <form-final
    v-if="step === 4"
    v-model:form1Data="form1Data"
    v-model:form2Data="form2data"
    v-model:form3Data="form3Data"></form-final>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      form1Data: [],
      form2Data:[],
      form3Data:[]
    };
  },
  methods: {
    next() {
      this.step++;
      if(this.step === 2)
      {this.$refs.form1.submitForm()}
      else if(this.step === 3)
      {this.$refs.form2.submitForm()}
      else if(this.step === 4)
      {this.$refs.form3.submitForm()}
      console.log(this.form1Data);
      console.log(this.form2Data);
      console.log(this.form3Data);
      
    },
    previous() {
      this.step--;
    },
  },
};
</script>
