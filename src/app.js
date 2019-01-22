import Vue from 'vue'
import router from './router/router'
import App from './app.vue'
import './assets/style/basic.css'
import axios from './http'
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  render: function (h) {
    return h(App)
  }
})
