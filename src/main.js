import Modal from './components/modal/modal'
// const Modal = () => import('./components/modal/modal')
import './assets/style/common.less'
import _ from 'lodash'
// import sum from './sum'
import axios from 'axios'
// import Vue from 'vue'
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
}
const app = new App()
// console.log(sum(1,2))
console.log(_.camelCase('Foo Bar'))
// new Vue()
axios.get('aaa')
