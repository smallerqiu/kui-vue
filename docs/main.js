import Vue from 'vue'
import App from './app'
import router from './router'

import kui from 'kui-vue'


import './assets/css/index.less'
import './assets/img/theme.jpg'
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

var _hmt = _hmt || [], host = window.location.hostname;
if (host != 'localhost' && host != '127.0.0.1') {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2cd83ff4bed8ca08c9962d0c458d8e16";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
}