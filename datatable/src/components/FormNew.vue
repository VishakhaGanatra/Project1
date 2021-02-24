<template>
  <div>
    <b-form>
      <b-form-input
        type="text"
        placeholder="Enter Extn"
        v-model="formData.extn"
      ></b-form-input
      ><br />
      <b-form-input
        type="text"
        placeholder="Enter Your name"
        v-model="formData.name"
      ></b-form-input
      ><br />
      <b-form-input
        type="text"
        placeholder="Enter Office name"
        v-model="formData.office"
      ></b-form-input
      ><br />
      <b-form-input
        type="text"
        placeholder="Enter position"
        v-model="formData.position"
      ></b-form-input
      ><br />
      <b-form-input
        type="text"
        placeholder="Enter salary"
        v-model="formData.salary"
      ></b-form-input
      ><br />
      <b-form-input type="text" v-model="formData.start_date"></b-form-input>
      <b-button @click="submitData">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        extn: "",
        name: "",
        office: "",
        position: "",
        salary: "",
        start_date: "",
      },
    };
  },
  mounted() {
    if (this.$route.params.id) {
      axios
        .get(
          `https://employeedetails-73030-default-rtdb.firebaseio.com/data/${this.$route.params.id}/.json`
        )
        .then((res) => {
          this.formData = res.data;
        });
    }
  },
  methods: {
    submitData() {
    if (this.$route.params.id) {
        axios
        .put(
          `https://employeedetails-73030-default-rtdb.firebaseio.com/data/${this.$route.params.id}/.json`,
          this.formData
        )
        .then((res) => {
          console.log(res.data);
          alert("data editted");
        });
    }else{
      axios
        .post(
          "https://employeedetails-73030-default-rtdb.firebaseio.com/data/.json",
          this.formData
        )
        .then((res) => {
          console.log(res.data);
          alert("data submitted");
        });
        }
    },
  },
};
</script>
