<template>
  <header-manage title="Project"></header-manage>

  <the-resource></the-resource>

</template>

<script>
export default {
  data() {
    return {
      //       storedresource: [
      //   {
      //     id: 'vue',
      //     title: 'vue js',
      //     description: 'this is vue js course',
      //     link: 'https://vuejs.org'
      //   },
      //   {
      //     id: 'google', 
      //     title: 'google',
      //     description: 'this is google',
      //     link: 'https://google.com'
      //   }
      // ]

    };
  },
  // provide(){
  //   return {
  //     storedresource: this.storedresource,
  //   }
  // }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
