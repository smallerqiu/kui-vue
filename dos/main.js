import Vue from 'vue'
import App from './app'
import router from './router'
import kui from '../src/index'
import './demo.less'
import vueHljs from "./Hljs"

Vue.use(vueHljs)
Vue.use(kui)

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    // store
})