import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


let router = []
let children = []

let r = ['install', 'start', 'log', 'index', 'input', 'button', 'select', 'switch',
    'checkbox', 'radio', 'datepicker', 'table', 'grid', 'page', 'modal']
r.map((x) => {
    children.push({
        path: `/${x}`,
        component: resolve => require([`./ui/${x}`], resolve)
    })
})
router.push({
    path: '/',
    component: resolve => require(['./layout'], resolve),
    children: children
})

export default new Router({
    routes: router
})