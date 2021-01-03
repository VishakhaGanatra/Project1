<template>
  <form>
    <div
      class="form-control"
      :class="{ invalid: !formdata.enteredname.isValid }"
    >
      <label for="firstname" id="firstname">Employee Name</label>
      <input
        type="text"
        id="firstname"
        v-model="formdata.enteredname.val"
        @blur="clearValidity('enteredname')"
      />
      <p v-if="!formdata.enteredname.isValid">
        Employee name must not be empty..
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !formdata.enteredvalue.isValid }"
    >
      <label for="name" id="name">Employee Id</label>
      <input
        type="text"
        id="name"
        v-model="formdata.enteredvalue.val"
        @blur="clearValidity('enteredvalue')"
      />
      <p v-if="!formdata.enteredvalue.isValid">
        Employee id must not be empty..
      </p>
    </div>
    <div
      class="form=control"
      :class="{ invalid: !formdata.enteredemail.isValid }"
    >
      <label for="email" id="email">Employee Email id </label>
      <input
        type="email"
        id="email"
        v-model="formdata.enteredemail.val"
        @blur="clearValidity('enteredemail')"
      />
      <p v-if="!formdata.enteredemail.isValid">
        Employee email must not be empty..
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !formdata.areas.isValid }">
      <h3>Area of interest</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="formdata.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="dancing"> Frontend </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="formdata.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="fullstack"
          value="fullstack"
          v-model="formdata.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="fullstack">FullStack</label>
      </div>
      <p v-if="!formdata.areas.isValid">areas must not be empty..</p>
    </div>
  </form>
</template>

<script>
export default {
  props: ["formAction"],
  data() {
    return {
      formdata: {
        enteredname: {
          val: "",
          isValid: true,
        },
        enteredvalue: {
          val: "",
          isValid: true,
        },

        enteredemail: {
          val: "",
          isValid: true,
        },
        areas: {
          val: [],
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
      if (this.formdata.enteredname.val === "") {
        this.formdata.enteredname.isValid = false;
        this.formIsValid = false;
      }
      if (this.formdata.enteredvalue.val === "") {
        this.formdata.enteredvalue.isValid = false;
        this.formIsValid = false;
      }
      if (this.formdata.enteredemail.val === "") {
        this.formdata.enteredemail.isValid = false;
        this.formIsValid = false;
      }
      if (this.formdata.areas.val.length === 0) {
        this.formdata.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.formValidate();
      if (!this.formIsValid) {
        return false;
      } else {
        this.$emit("update:formAction", this.formdata);
        return this.formdata;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}
input[type="radio"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
  padding: 0px;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}
</style>
