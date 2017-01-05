import Vue from 'vue'
import Console from './components/console.vue'
import './assets/tetris.css'

new Vue({
  el: '#app',
  render: h => h(Console)
})
