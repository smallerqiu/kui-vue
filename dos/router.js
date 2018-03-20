import Vue from 'vue'
import loading from '../src/components/loading'
// Vue.use(kui);
import Router from 'vue-router'

Vue.use(Router)


let router = []
let children = []

// 此种编译后，无法实现按需加载，会打包在一个文件
/* let r = ['','install', 'start', 'log', 'input', 'button', 'select', 'switch', 'form', 'colorpicker', 'loading',
    'icon', 'timeline', 'theme', 'react-kui', 'angular-kui', 'alert', 'message', 'notice', 'upload', 'poptip', 'menu', 'tabs', 'badge',
    'checkbox', 'radio', 'datepicker', 'table', 'layout', 'page', 'modal', 'kyui-loader', 'sponsor', 'about'];
r.map((x) => {
    children.push({
        path: `/${x}`,
        component: resolve => require([x==''?'./ui/index':`./ui/${x}`], resolve),
        // component: r => require.ensure([], () => r(require(x==''?'/ui/index':`./ui/${x}`)), x)
    })
}) */

let R = {
    'install': r => require.ensure([], () => r(require('./ui/install')), 'install'),
    'start': r => require.ensure([], () => r(require('./ui/start')), 'start'),
    'log': r => require.ensure([], () => r(require('./ui/log')), 'log'),
    'input': r => require.ensure([], () => r(require('./ui/input')), 'input'),
    'button': r => require.ensure([], () => r(require('./ui/button')), 'button'),
    'select': r => require.ensure([], () => r(require('./ui/select')), 'select'),
    'switch': r => require.ensure([], () => r(require('./ui/switch')), 'switch'),
    'form': r => require.ensure([], () => r(require('./ui/form')), 'form'),
    'colorpicker': r => require.ensure([], () => r(require('./ui/colorpicker')), 'colorpicker'),
    'loading': r => require.ensure([], () => r(require('./ui/loading')), 'loading'),
    'icon': r => require.ensure([], () => r(require('./ui/icon')), 'icon'),
    'timeline': r => require.ensure([], () => r(require('./ui/timeline')), 'timeline'),
    'theme': r => require.ensure([], () => r(require('./ui/theme')), 'theme'),
    'react-kui': r => require.ensure([], () => r(require('./ui/react-kui')), 'react-kui'),
    'angular-kui': r => require.ensure([], () => r(require('./ui/angular-kui')), 'angular-kui'),
    'alert': r => require.ensure([], () => r(require('./ui/alert')), 'alert'),
    'message': r => require.ensure([], () => r(require('./ui/message')), 'message'),
    'notice': r => require.ensure([], () => r(require('./ui/notice')), 'notice'),
    'upload': r => require.ensure([], () => r(require('./ui/upload')), 'upload'),
    'poptip': r => require.ensure([], () => r(require('./ui/poptip')), 'poptip'),
    'menu': r => require.ensure([], () => r(require('./ui/menu')), 'menu'),
    'tabs': r => require.ensure([], () => r(require('./ui/tabs')), 'tabs'),
    'badge': r => require.ensure([], () => r(require('./ui/badge')), 'badge'),
    'checkbox': r => require.ensure([], () => r(require('./ui/checkbox')), 'checkbox'),
    'radio': r => require.ensure([], () => r(require('./ui/radio')), 'radio'),
    'datepicker': r => require.ensure([], () => r(require('./ui/datepicker')), 'datepicker'),
    'table': r => require.ensure([], () => r(require('./ui/table')), 'table'),
    'layout': r => require.ensure([], () => r(require('./ui/layout')), 'layout'),
    'page': r => require.ensure([], () => r(require('./ui/page')), 'page'),
    'modal': r => require.ensure([], () => r(require('./ui/modal')), 'modal'),
    'kyui-loader': r => require.ensure([], () => r(require('./ui/kyui-loader')), 'kyui-loader'),
    'sponsor': r => require.ensure([], () => r(require('./ui/sponsor')), 'sponsor'),
    'about': r => require.ensure([], () => r(require('./ui/about')), 'about')
};

for (let x in R) {
    children.push({ path: `/${x}`, name: x, component: R[x] })
}
let index = r => require.ensure([], () => r(require('./ui/index')), 'home');

router.push(
    { path: '/', component: index },
    {
        path: '/',
        component: resolve => require(['./layout'], resolve),
        children: children
    })
let routers = new Router({ routes: router, mode: 'history' })

routers.beforeEach(function (to, from, next) {
    loading.start('line');
    typeof (_hmt) != 'undefined' && _hmt.push(['_trackPageview', to.path]);
    next()
})
routers.afterEach(route => {
    loading.finish();
});
export default routers