import Vue from 'vue'
import App from './app'
import router from './router'
import kui from '../src/index'
import './demo.less'

import preCode from "./components/high"

Vue.use(preCode)
Vue.use(kui)

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    // store
})