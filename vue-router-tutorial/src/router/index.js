import Vue from 'vue'
import allProducts from '../components/all-products'
import productDetails from '../components/product-details.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: allProducts
  
    },
    {
      path: '/product/details/:id',
      component: productDetails
  
    }
    
  ]
})
