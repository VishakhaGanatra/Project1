<template>
<ul>

<product-new v-for="product in products"
:key="product.id"
:id="product.id"
:image="product.image"
:title="product.title"
:description="product.description"
:price="product.price"
></product-new>
</ul>
</template>
<script>
import productNew from './productNew.vue';
export default{
    components:{
    productNew,
    //cartNew
  },
  inject:['products'],
  
}
</script>
