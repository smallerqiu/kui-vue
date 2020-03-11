import '@babel/polyfill'
import Vue from 'vue'
import App from './app'
import router from './router'
// import kui from '@/index'
// import './assets/atom-one-light.css'
import '../components/styles.js'

import './assets/index.less'

import kui from '../components'

import Copy from 'vue-clipboard2'

import Demo from './components/demo'
// import MD from './components/md'

Vue.component('demo', Demo)

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

/* function noDebuger() {

  function testDebuger() {
    var d = new Date();
    debugger;
    if (new Date() - d > 10) {
      // document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">年轻人，不要太好奇</div>';
      return true;
    }
    return false;
  }

  function start() {
    while (testDebuger()) {
      testDebuger();
    }
  }

  if (!testDebuger()) {
    window.onblur = function () {
      setTimeout(function () {
        start();
      }, 500)
    }
  } else {
    start();
  }
}
noDebuger() */