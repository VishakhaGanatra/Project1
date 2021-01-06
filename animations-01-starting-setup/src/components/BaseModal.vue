<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="model">
  <dialog open v-if="open">
    <slot></slot>
  </dialog>
  </transition>
</template>

<script>
export default {
  props:['open'],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}
@keyframes hello{
  0% {
    transform : translateX(0) scale(1);
  }

  70%{
    transform : translateX(-120px) scale(1.1);
  }

  100%{
    transform :translateX(-150px) scale(1);
  }
}
.model-enter-active{
  animation : hello 0.3s ease-out;
}
.model-leave-active{
  animation : hello 0.3s ease-in;
}

</style>