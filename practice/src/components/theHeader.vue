<template>
  <header>
    <nav>
      <ul class="nav nav-tabs">
        <li class="nav-item" @click="changeStep(1)">
          <a class="nav-link active" href="#">Personal Details</a>
        </li>
        <li class="nav-item" @click="changeStep(2)">
          <a class="nav-link" href="#">Contact Details</a>
        </li>
        <li class="nav-item" @click="changeStep(3)">
          <a class="nav-link" href="#">Job Details</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ["step"],
  methods: {
    changeStep(step) {
      this.$emit("updateStep", step);
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}
a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active {
  color: lightblue;
  border-color: lightblue;
  background-color: #1a037e;
}
</style>
