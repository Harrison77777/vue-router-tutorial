<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <router-view></router-view>
        </div>
        <div class="col-md-4">
          <cartProducts></cartProducts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navbar from "./components/navbar";
  import router from "./router/index.js";
  import cartProducts from "./components/cart-products"
  import axios from 'axios'
  export default {
    components: {
      navbar,
      router,
      cartProducts
    }
  };
</script>

<style>

</style>