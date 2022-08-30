import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Copy from 'vue-clipboard2'
Vue.use(Copy)


import kui from '../components'
import '../components/styles/index.less'
Vue.use(kui)

import './assets/css/index.less'
import './assets/img/theme.jpg'
import Demo from './components/demo'
Vue.component('demo', Demo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


var _hmt = _hmt || [], host = window.location.hostname;
// console.log(process)
if (host != 'localhost' && host != '127.0.0.1') {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2cd83ff4bed8ca08c9962d0c458d8e16";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
}