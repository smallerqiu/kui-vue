import 'babel-polyfill'
import Vue from 'vue'
import App from './app'
import router from './router'
import kui from '../src/index'
import './assets/demo.less'

import Code from "./components/code"
import Demo from "./components/demo"

Vue.use(Code)
Vue.use(Demo)
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