import '@babel/polyfill'
import Vue from 'vue'
import App from './app'
import router from './router'
import kui from '@/index'
import './assets/demo.less'
import Copy from 'vue-clipboard2'

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

var _hmt = _hmt || [], host = window.location.hostname
setTimeout(function () {
  if (host != 'localhost' && host != '127.0.0.1') {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?2cd83ff4bed8ca08c9962d0c458d8e16";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  }
}, 1000);