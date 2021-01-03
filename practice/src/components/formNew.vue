<template>
  <form>
    <div class="form-control" :class="{ invalid: !formData.firstName.isValid }">
      <label for="FirstName">FirstName</label>
      <input
        type="text"
        id="FirstName"
        v-model.trim="formData.firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!formData.firstName.isValid">FirstName must not be empty..</p>
    </div>
    <div class="form-control" :class="{ invalid: !formData.lastName.isValid }">
      <label for="lastName">LastName</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="formData.lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!formData.lastName.isValid">lastName must not be empty..</p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !formData.description.isValid }"
    >
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="formData.description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!formData.description.isValid">
        description must not be empty..
      </p>
    </div>

    <div class="form-control" :class="{ invalid: !formData.areas.isValid }">
      <h3>Hobbies</h3>
      <div>
        <input
          type="checkbox"
          id="dancing"
          value="dancing"
          v-model="formData.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="dancing">Dancing </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="singing"
          value="singing"
          v-model="formData.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="singing">Singing </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="reading"
          value="reading"
          v-model="formData.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="reading">Reading</label>
      </div>
      <p v-if="!formData.areas.isValid">areas must not be empty..</p>
    </div>
  </form>
</template>

<script>
export default {
  props: ["formNew"],
  data() {
    return {
      step: 1,
      formData: {
        firstName: {
          val: "",
          isValid: true,
          required: true,
        },
        lastName: {
          val: "",
          isValid: true,
        },
        description: {
          val: "",
          isValid: true,
        },

        areas: {
          val: [],
          isValid: true,
        },
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this.formData[input].isValid = true;
    },
    formValidate() {
      this.formIsValid = true;
      if (this.formData.firstName.val === "") {
        this.formData.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.formData.lastName.val === "") {
        this.formData.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.formData.description.val === "") {
        this.formData.description.isValid = false;
        this.formIsValid = false;
      }

      if (this.formData.areas.val.length === 0) {
        this.formData.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.formValidate();
      if (!this.formIsValid) {
        return false;
      } else {
        this.$emit("update:formNew", this.formData);
        return this.formData;
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

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
