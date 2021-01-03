<template>
  <the-header
    ref="header"
    @updateStep="changeStep"
    v-model:step="step"
  ></the-header>
  <keep-alive>
    <form-new
      v-if="step === 1"
      ref="form1"
      v-model:formNew="form1Data"
    ></form-new>
  </keep-alive>
  <keep-alive>
    <form-date
      v-if="step === 2"
      ref="form2"
      v-model:formDate="form2Data"
    ></form-date>
  </keep-alive>
  <keep-alive>
    <form-action
      v-if="step === 3"
      ref="form3"
      v-model:formAction="form3Data"
    ></form-action>
  </keep-alive>
  <base-button @click="next" v-if="step !== 3 && step !== 4">Next</base-button>
  <base-button @click="previous" v-if="step !== 3 && step !== 4"
    >Previous</base-button
  >
  <base-button @click="next" v-if="step === 3">Submit</base-button>
  <form-final
    v-if="step === 4"
    v-model:form1Data="form1Data"
    v-model:form2Data="form2Data"
    v-model:form3Data="form3Data"
  ></form-final>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      form1Data: [],
      form2Data: [],
      form3Data: [],
    };
  },
  methods: {
    next() {
      if (this.step === 1) {
        if (this.$refs.form1.submitForm()) {
          this.step++;
        }
      } else if (this.step === 2) {
        if (this.$refs.form2.submitForm()) {
          this.step++;
        }
      } else if (this.step === 3) {
        if (this.$refs.form3.submitForm()) {
          this.step++;
        }
      }
      // console.log(this.form1Data);
      // console.log(this.form2Data);
      // console.log(this.form3Data);
    },
    changeStep(step) {
      this.step = parseInt(step);
    },
    previous() {
      this.step--;
    },
  },
};
</script>
