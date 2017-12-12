import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


let router = []
let children = []

let r = ['index', 'button']
r.map((x) => {
    children.push({
        path: `/${x}`,
        component: resolve => require([`/dos/ui/${x}`], resolve)
    })
})
routes.push({
    path: '/',
    component: resolve => require(['/dos/app'], resolve),
    children: children
})

export default new Router({
    routes: router
})