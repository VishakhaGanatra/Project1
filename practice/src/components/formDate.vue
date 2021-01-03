<template>
  <form>
    <div
      class="form-control"
      :class="{ invalid: !formdata.enteredvalue.isValid }"
    >
      <label for="number" id="number">Your No.</label>
      <input
        type="number"
        id="number"
        v-model="formdata.enteredvalue.val"
        @blur="clearValidity('enteredvalue')"
      />

      <p v-if="!formdata.enteredvalue.isValid">this must not be empty..</p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !formdata.enterednumber.isValid }"
    >
      <label for="number" id="number">Emergency Contact</label>
      <input
        type="number"
        id="number"
        v-model="formdata.enterednumber.val"
        @blur="clearValidity('enterednumber')"
      />
      <p v-if="!formdata.enterednumber.isValid">this must not be empty..</p>
    </div>
    <div
      class="form=control"
      :class="{ invalid: !formdata.enteredemail.isValid }"
    >
      <label for="email" id="email">Email id </label>
      <input
        type="email"
        id="email"
        v-model="formdata.enteredemail.val"
        @blur="clearValidity('enteredemail')"
      />
      <p v-if="!formdata.enteredemail.isValid">this must not be empty..</p>
    </div>
  </form>
</template>

<script>
export default {
  props: ["formDate"],
  data() {
    return {
      formdata: {
        enteredvalue: {
          val: "",
          isValid: true,
        },

        enterednumber: {
          val: "",
          isValid: true,
        },
        enteredemail: {
          val: "",
          isValid: true,
        },
      },
      step: 1,
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this.formdata[input].isValid = true;
    },
    formValidate() {
      this.formIsValid = true;
      if (this.formdata.enteredvalue.val === "") {
        this.formdata.enteredvalue.isValid = false;
        this.formIsValid = false;
      }
      if (this.formdata.enterednumber.val === "") {
        this.formdata.enterednumber.isValid = false;
        this.formIsValid = false;
      }
      if (this.formdata.enteredemail.val === "") {
        this.formdata.enteredemail.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.formValidate();
      if (!this.formIsValid) {
        return false;
      } else {
        this.$emit("update:formDate", this.formdata);
        //console.log(this.formdata)
        return this.formdata;
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
