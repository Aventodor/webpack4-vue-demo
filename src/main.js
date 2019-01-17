import 'babel-polyfill'
import Modal from './components/modal/modal'
import './assets/style/common.less'
import _ from 'lodash'
import sum from './sum'
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
new App()
console.log(_.camelCase('Foo Bar'))
console.log(sum(1, 2))
