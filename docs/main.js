import '@babel/polyfill'
import Vue from 'vue'
import App from './app'
import router from './router'
// import kui from '@/index'
import './assets/demo.less'
import './assets/atom-one-light.css'
import '../components/styles'
import kui from '../components'
import Copy from 'vue-clipboard2'

import Demo from './components/demo'
import MD from './components/md'

Vue.component('demo', Demo)
Vue.component('MD', MD)

Vue.use(Copy)
Vue.use(kui)
// router.beforeEach(function (transition) {
//     console.log(transition)
// })
new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  // store
})