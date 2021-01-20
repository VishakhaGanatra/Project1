<template>
<section>
    <h2>Your Cart</h2>

<ul>
<cart-new v-for="crt in cart"
:key="crt.id"
:id="crt.productId"
:propId ="crt.productId"
:title="crt.title"
:image="crt.image"
:price="crt.price"
:gty="crt.gty"
></cart-new>
</ul>
</section>
</template>

<script>
import cartNew from './cartNew.vue';
export default{
    components:{
       cartNew
    },
    inject:['cart'],
    
  
}
</script>






<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
 text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>