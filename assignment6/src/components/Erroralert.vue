<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default{
    
}
</script>

<style scopped>
dialog {
  position: fixed;
  top: 20vh;
  width: 40%;
  left: 30%;
  padding: 1rem;
}
</style>
