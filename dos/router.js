import Vue from 'Vue'
import Router from 'vue-router'

Vue.use(Router)


let router = []
let children = []

let r = ['','install', 'start', 'log', 'index', 'input', 'button', 'select', 'switch','form','colorpicker','icon','timeline','theme','waiting',
    'checkbox', 'radio', 'datepicker', 'table', 'layout', 'page', 'modal','kyui-loader','sponsor','about']
r.map((x) => {
    children.push({
        path: `/${x}`,
        component: resolve => require([x==''?'./ui/index':`./ui/${x}`], resolve)
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