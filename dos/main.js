import Vue from 'vue'
import app from './app'
import router from './router'


new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    store
})