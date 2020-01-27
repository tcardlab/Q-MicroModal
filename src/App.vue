<template>
  <div id="q-app">
    <router-link to="/product/123">Product</router-link>
    <router-link to="/shipping">Shipping</router-link>
    <router-link to="/cart">Shopping cart</router-link>

    <route-wrapper/>
    <route-wrapper name="footer"/>
    <router-view name="modal"/>
  </div>
</template>

<script>
import Vue from 'vue'
import routeWrapper from './components/routeWrapper.js'
Vue.component('route-wrapper', routeWrapper)
import router from './router/index.js'

export default {
  name: 'App',
  router: router
}
</script>

<style>
.box {
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  max-width: 400px;
}

#q-app {
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  max-width: 400px;
}

.product {
  display: flex;
  align-items: flex-start;
}
.product__img {
  display: inline-block;
  border: 1px dashed;
  padding: 20px;
  font-size: 25px;
}
.product__info {
  padding: 0 20px;
}

.cart {
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  max-width: 400px;

  position: fixed;
  top: 100px;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background: white;
  z-index: 2;
}

.shipping-calculator {
  margin: 10px 0;
}

.glass {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  content: ' ';
  z-index: 1;
}

a {
  /*display: block;*/
  margin-right: 20px;
}

.footer {
  margin-top: 30px;
}
</style>
