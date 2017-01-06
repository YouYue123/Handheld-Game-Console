import Vue from 'vue'
import Console from './components/console.vue'
import './assets/console.less'

new Vue({
  el: '#console',
  render: h => h(Console)
})
