import Vue from 'vue'
import App from './app.vue'
import './assets/style/basic.css'
import axios from './http'
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
})
