/*import Modal from './components/modal/modal'
import './assets/style/common.less'
// import _ from 'lodash'
// import sum from './sum'
const App = function () {
  let div = document.createElement('div')
  div.setAttribute('id', 'app')
  document.body.appendChild(div)
  let dom = document.getElementById('app')
  let modal = new Modal()
  dom.innerHTML = modal.template({
    title: '标题',
    content: '内容',
    footer: '底部'
  })
  // console.log(_.camelCase('Foo Bar'))
}

const app = new App()*/

import Vue from 'vue'
import App from './app.vue'
import './assets/style/basic.css'
new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
})
