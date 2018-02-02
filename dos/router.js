import Vue from 'Vue'
import kui from '../src/index'
Vue.use(kui);
import Router from 'vue-router'

Vue.use(Router)


let router = []
let children = []

let r = ['', 'install', 'start', 'log', 'index', 'input', 'button', 'select', 'switch', 'form', 'colorpicker','loading',
    'icon', 'timeline', 'theme', 'react-kui', 'angular-kui', 'alert', 'message', 'notice', 'upload','poptip','menu','tabs','badge',
    'checkbox', 'radio', 'datepicker', 'table', 'layout', 'page', 'modal', 'kyui-loader', 'sponsor', 'about']
r.map((x) => {
    children.push({
        path: `/${x}`,
        component: resolve => require([x == '' ? './ui/index' : `./ui/${x}`], resolve)
    })
})
router.push({
    path: '/',
    component: resolve => require(['./layout'], resolve),
    children: children
})
let routers = new Router({
    routes: router,
    mode: 'history'
})

routers.beforeEach(function (to, from, next) {
    kui.Loading.start('line');
    typeof (_hmt) != 'undefined' && _hmt.push(['_trackPageview', to.path]);
    next()
})
routers.afterEach(route => {
    kui.Loading.finish();
});
export default routers