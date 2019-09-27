import axios from 'axios'
export default {
    state:{
        products : [],
        carts: []
    },
    getters:{
        allProducts(state) {
            return state.products
        },
        allCartProducts(state){
            return state.carts
        },
        countTotalPrice(state){
            let totalPrice = 0
            state.carts.forEach(cart => {
                totalPrice += cart.price
            });
            return totalPrice
        }
    },
    
    actions:{
        fetchAllProducts(context){

            axios({
                method: "get",
                url: "api/product/all/v1"
            }).then(res => {
                
                context.commit('getProducts', res.data.data)
            })

            // const response =  axios.get("api/product/all/v1")
            // context.commit('getProducts', response.data.data)
            //commit('allProducts', response.data.data)
        },
         fetchAllCartProducts(context){
            axios({
                method: "get",
                url: "api/cart/get/all/products"
            }).then(res => {
                
                context.commit('CartProducts', res.data.data)
            })
            // const response =  axios.get('api/cart/get/all/products')
            // //console.log(response.data.data);
            // context.commit('CartProducts', response.data.data)
        },
         addToCart(context = 0, payload){
             axios({
                method:"post",
                url:"api/cart/add/v1/"+payload 
            }).then(res => {
                console.log(res.data);
                
            })
        
        },
         removeCart(context, payload){
           const res =  axios.delete('api/cart/delete/v1/'+payload)
            
            context.commit('deleteCartProduct', payload)
           
        }
    },
    mutations:{
        getProducts(state, data){
            return state.products = data
        },
        CartProducts(state, data){
            return state.carts = data
        },
        deleteCartProduct(state,cartId){
           return state.carts = state.carts.filter(cart => {
                return cart.id != cartId
            })
        }

    }
}