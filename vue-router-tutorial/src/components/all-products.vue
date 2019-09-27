<template>
  <div class="my-5 pt-5">
    <div class="container">
      <h1>All Products</h1>
      <div v-if="loading" class="row">
        <div v-for="product in getAllProducts" :key="product.id" class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <router-link class="anchor" :to="{path: '/product/details/'+product.id}">
              <img class="card-img-top" :src="product.photo" alt />
              <div class="card-body">
                <h4 class="card-title">{{product.name}}</h4>
                <h6 class="card-title">
                  <strong>Brand: {{product.brand_name}}</strong>
                </h6>
                <div class="price-section">
                  <div v-if="product.discount_price > 0" class="price">
                    <h6>
                      Previous price:
                      <strike>${{product.price}}.00</strike>
                    </h6>

                    <h6>Present Price: ${{product.discount_price}}.00</h6>
                  </div>
                  <h6 v-else>price: ${{product.price}}.00</h6>
                </div>
              </div>
            </router-link>
            <div class="card-footer text-center">
              <form @submit.prevent="addToCart(product.id)">
                <button class="btn btn-sm btn-primary" type="submit">Add To Cart</button> 
              </form>
              <!-- <a class="btn btn-sm btn-primary" href="#">Add To Cart</a> -->
            </div>
          </div>
        </div>
      </div>
      <h3 v-else>Loading....</h3>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Todos",
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.$store.dispatch("fetchAllProducts");
  },
  computed: {
    getAllProducts() {
      return this.$store.getters.allProducts;
    }
  },

  methods: {
    //   // fetchAllUsers() {
    //   //   let self = this;
    //   //   axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
    //   //     setTimeout(function() {
    //   //       self.users = res.data;
    //   //       self.loading = true;
    //   //     }, 300);
    //   //   });
    //   // },
    //   fetchAllProducts() {
    //     let self = this;
    //     axios({
    //       method: "get",
    //       url: "api/product/all/v1"
    //     }).then(res => {
    //       self.products = res.data.data;
    //       self.loading = true;
    //     });
    //   }
    addToCart(productId){
      this.$store.dispatch('addToCart', productId)
      this.$store.dispatch("fetchAllCartProducts")
    }

  }
};
</script>
<style>

a.anchor {
  color: #000;
  text-decoration: none;
}
</style>