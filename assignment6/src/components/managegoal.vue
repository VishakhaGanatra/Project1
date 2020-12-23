<template>
  <div>
    <h2>Manage goal</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <Erroralert v-if="inputinvalid">
      <h2>input is invalid...</h2>
      <button @click="inputinvalid=false">Close</button>
    </Erroralert>
  </div>
</template>

<script>
import Erroralert from "./Erroralert.vue";
export default {
  components: { Erroralert },
  data() {
    return {
      inputinvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value; // it ref is samw as v-model
      if (enteredValue === "") {
        this.inputinvalid = true;
      }
    },
  },
};
</script>
