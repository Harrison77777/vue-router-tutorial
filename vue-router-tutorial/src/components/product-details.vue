<template>
    <div class="user-details-section mt-5 pt-5">
        <div class="container">
            // user details url https://jsonplaceholder.typicode.com/users/1
            <div class="row">
                <div class="col-md-6">
                    <img height="500" width="300" class="card-img-top rounded" :src="product.photo" alt />
                </div>
                <div class="col-md-6">
                    <div class="user-info">
                        <h5>Name : {{ product.name }}</h5>
                        <h6>Model : {{ product.model }}</h6>
                        <h6>Brand : {{ product.brand }}</h6>
                        <h6>Category : {{ product.category }}</h6>
                        <div v-if="product.discount_price > 0" class="price">
                           <h6>Previous price : <strike>${{ product.price }}.00</strike></h6>
                           <h5>Present price : ${{ product.discount_price }}.00</h5> 
                        </div>
                        <h5 v-else>${{ product.price }}.00</h5>
                    </div>
                   
                    <a @click.prevent="addToCart(product.id)" href="#" class="btn btn-sm btn-primary">Add To Cart</a>
                   
                </div>
                
            </div>
            <hr>
            <div class="product-description">
                <h4>Description</h4>
                <p>{{ product.description }}</p>
            </div>
        </div>


    </div>
</template>
<script>
import axios from 'axios'
    export default {
        name: 'productDetails',
        data(){
            return{
                product: []
            }
        },
        mounted() {
            this.fetchProductDatails()
        },
        methods: {
            fetchProductDatails(){
                let self = this

                // axios.get('api/product/details/v1/' + this.$route.pramas.id)
                //     .then(res => {
                //         self.item = res.data.data
                //         console.log(res);
                //     })
                axios({
                    method:'get',
                    url : 'api/product/details/v1/'+this.$route.params.id
                }).then(res => {

                   return self.product = res.data.data;
                    
                })
            },
            addToCart(productId){
                this.$store.dispatch('addToCart',productId)
                this.$store.dispatch('fetchAllCartProducts')
            }
        },
    }
</script>
<style scoped>
    img {
        width: 350px;
    }

    .user-info {
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
    }
</style>