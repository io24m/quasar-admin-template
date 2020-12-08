import Vue from 'vue'

import store from './store/index'
import router from "./router"
import './plugins/axios.js'

import App from './App.vue'
import './plugins/quasar'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
