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
        component: resolve => require([x==''?'./page/index':`./page/${x}`], resolve),
        // component: r => require.ensure([], () => r(require(x==''?'/page/index':`./page/${x}`)), x)
    })
}) */

let R = {
    'test': r => require.ensure([], () => r(require('./page/test')), 'test'),
    'breadcrumb': r => require.ensure([], () => r(require('./page/breadcrumb')), 'breadcrumb'),
    'backtop': r => require.ensure([], () => r(require('./page/backtop')), 'backtop'),
    'install': r => require.ensure([], () => r(require('./page/install')), 'install'),
    'start': r => require.ensure([], () => r(require('./page/start')), 'start'),
    'log': r => require.ensure([], () => r(require('./page/log')), 'log'),
    'input': r => require.ensure([], () => r(require('./page/input')), 'input'),
    'button': r => require.ensure([], () => r(require('./page/button')), 'button'),
    'select': r => require.ensure([], () => r(require('./page/select')), 'select'),
    'slider': r => require.ensure([], () => r(require('./page/slider')), 'slider'),
    'switch': r => require.ensure([], () => r(require('./page/switch')), 'switch'),
    'form': r => require.ensure([], () => r(require('./page/form')), 'form'),
    'colorpicker': r => require.ensure([], () => r(require('./page/colorpicker')), 'colorpicker'),
    'card': r => require.ensure([], () => r(require('./page/card')), 'card'),
    'loading': r => require.ensure([], () => r(require('./page/loading')), 'loading'),
    'icon': r => require.ensure([], () => r(require('./page/icon')), 'icon'),
    'timeline': r => require.ensure([], () => r(require('./page/timeline')), 'timeline'),
    'theme': r => require.ensure([], () => r(require('./page/theme')), 'theme'),
    'react-kui': r => require.ensure([], () => r(require('./page/react-kui')), 'react-kui'),
    'angular-kui': r => require.ensure([], () => r(require('./page/angular-kui')), 'angular-kui'),
    'alert': r => require.ensure([], () => r(require('./page/alert')), 'alert'),
    'affix': r => require.ensure([], () => r(require('./page/affix')), 'affix'),
    'message': r => require.ensure([], () => r(require('./page/message')), 'message'),
    'notice': r => require.ensure([], () => r(require('./page/notice')), 'notice'),
    'upload': r => require.ensure([], () => r(require('./page/upload')), 'upload'),
    'poptip': r => require.ensure([], () => r(require('./page/poptip')), 'poptip'),
    'tooltip': r => require.ensure([], () => r(require('./page/tooltip')), 'tooltip'),
    'menu': r => require.ensure([], () => r(require('./page/menu')), 'menu'),
    'tabs': r => require.ensure([], () => r(require('./page/tabs')), 'tabs'),
    'badge': r => require.ensure([], () => r(require('./page/badge')), 'badge'),
    'checkbox': r => require.ensure([], () => r(require('./page/checkbox')), 'checkbox'),
    'radio': r => require.ensure([], () => r(require('./page/radio')), 'radio'),
    'datepicker': r => require.ensure([], () => r(require('./page/datepicker')), 'datepicker'),
    'table': r => require.ensure([], () => r(require('./page/table')), 'table'),
    'tag': r => require.ensure([], () => r(require('./page/tag')), 'tag'),
    'layout': r => require.ensure([], () => r(require('./page/layout')), 'layout'),
    'page': r => require.ensure([], () => r(require('./page/page')), 'page'),
    'modal': r => require.ensure([], () => r(require('./page/modal')), 'modal'),
    'kyui-loader': r => require.ensure([], () => r(require('./page/kyui-loader')), 'kyui-loader'),
    'sponsor': r => require.ensure([], () => r(require('./page/sponsor')), 'sponsor'),
    'about': r => require.ensure([], () => r(require('./page/about')), 'about')
};

for (let x in R) {
    children.push({ path: `/${x}`, name: x, component: R[x] })
}
let index = r => require.ensure([], () => r(require('./page/index')), 'home');

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