import Vue from 'vue'
import Console from './components/console.vue'
import './assets/console.less'
import store from './store'
const app = new Vue({
  el: '#console',
  store,
  render: h => h(Console)
})

export default app
