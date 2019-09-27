// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

Vue.config.productionTip = false
window.$ = window.jquery = require('jquery')
/* eslint-disable no-new */



import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vuex from 'vuex'

Vue.use(Vuex)
import storage from './store/index'
const store = new Vuex.Store(storage)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
