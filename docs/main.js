import '@babel/polyfill'
import Vue from 'vue'
import App from './app'
import router from './router'

import kui from 'kui-vue'


import './assets/index.less'
import './assets/theme.jpg'
import Copy from 'vue-clipboard2'

import Demo from './components/demo'

Vue.component('demo', Demo)

Vue.use(Copy)
Vue.use(kui)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
})