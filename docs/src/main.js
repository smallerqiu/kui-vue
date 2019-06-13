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