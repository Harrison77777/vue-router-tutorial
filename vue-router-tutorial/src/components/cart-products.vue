<template>
    <div class="cart-section my-5 pt-5">
        <div class=" cart mt-5 pt-1 ">
            <div class="header">
                <h2>Cart Products</h2>
            </div>
            <div class="product-list clearfix">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>TotalPrice</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cart in allCartProducts" :key="cart.id">
                            <td width="100">{{cart.name}}</td>
                            <td>{{cart.product_quantity}}</td>
                            <td>{{cart.price}}</td>
                            <td>{{cart.total_price}}.00</td>
                            <td>
                                <form @submit.prevent="removeCartProduct(cart.id)">
                                    <button class=" btn btn-sm btn-danger" type="submit">X</button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-right" colspan="2"><strong>Total Price:</strong> </td>
                            <td class="text-center">${{TotalPrice}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>

    import axios from 'axios'

export default {
    name: 'Carts',
    data() {
        
        return {
             loading: true
        }
    },
    mounted() {
       
        
        // this.getCartProducts();
        this.$store.dispatch("fetchAllCartProducts")
       
    },
     computed: {
        allCartProducts(){
            return this.$store.getters.allCartProducts;
        },
        TotalPrice(){
           return this.$store.getters.countTotalPrice
        }
    },
    methods: {
            // getCartProducts(){
            //     let self = this
            //    axios({
            //             method:"get",
            //             url: "api/cart/get/all/products"
            //     }).then(res => {
            //        return self.carts = res.data.data
            //     }); 
            // }
          removeCartProduct(cartId){
              this.$store.dispatch('removeCart', cartId) 
              //this.$store.dispatch("fetchAllCartProducts")
          }  
    }
   

}
</script>
<style>
    
</style>