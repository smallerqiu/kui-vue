import Vue from 'vue'
import App from './app'
import router from './router'
import kui from '../index'
import './demo.less'

Vue.use(kui)

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    // store
})