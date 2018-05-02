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
    'about': r => require.ensure([], () => r(require('./page/about')), 'about'),
    'alert': r => require.ensure([], () => r(require('./page/alert')), 'alert'),
    'affix': r => require.ensure([], () => r(require('./page/affix')), 'affix'),
    'angular-kui': r => require.ensure([], () => r(require('./page/angular-kui')), 'angular-kui'),
    'card': r => require.ensure([], () => r(require('./page/card')), 'card'),
    'carousel': r => require.ensure([], () => r(require('./page/carousel')), 'carousel'),
    'collapse': r => require.ensure([], () => r(require('./page/collapse')), 'collapse'),
    'colorpicker': r => require.ensure([], () => r(require('./page/colorpicker')), 'colorpicker'),
    'button': r => require.ensure([], () => r(require('./page/button')), 'button'),
    'breadcrumb': r => require.ensure([], () => r(require('./page/breadcrumb')), 'breadcrumb'),
    'backtop': r => require.ensure([], () => r(require('./page/backtop')), 'backtop'),
    'badge': r => require.ensure([], () => r(require('./page/badge')), 'badge'),
    'checkbox': r => require.ensure([], () => r(require('./page/checkbox')), 'checkbox'),
    'datepicker': r => require.ensure([], () => r(require('./page/datepicker')), 'datepicker'),
    'install': r => require.ensure([], () => r(require('./page/install')), 'install'),
    'log': r => require.ensure([], () => r(require('./page/log')), 'log'),
    'input': r => require.ensure([], () => r(require('./page/input')), 'input'),
    'form': r => require.ensure([], () => r(require('./page/form')), 'form'),
    'loading': r => require.ensure([], () => r(require('./page/loading')), 'loading'),
    'icon': r => require.ensure([], () => r(require('./page/icon')), 'icon'),
    'react-kui': r => require.ensure([], () => r(require('./page/react-kui')), 'react-kui'),
    'notice': r => require.ensure([], () => r(require('./page/notice')), 'notice'),
    'upload': r => require.ensure([], () => r(require('./page/upload')), 'upload'),
    'poptip': r => require.ensure([], () => r(require('./page/poptip')), 'poptip'),
    'message': r => require.ensure([], () => r(require('./page/message')), 'message'),
    'modal': r => require.ensure([], () => r(require('./page/modal')), 'modal'),
    'menu': r => require.ensure([], () => r(require('./page/menu')), 'menu'),
    'radio': r => require.ensure([], () => r(require('./page/radio')), 'radio'),
    'layout': r => require.ensure([], () => r(require('./page/layout')), 'layout'),
    'page': r => require.ensure([], () => r(require('./page/page')), 'page'),
    'kyui-loader': r => require.ensure([], () => r(require('./page/kyui-loader')), 'kyui-loader'),
    'select': r => require.ensure([], () => r(require('./page/select')), 'select'),
    'slider': r => require.ensure([], () => r(require('./page/slider')), 'slider'),
    'switch': r => require.ensure([], () => r(require('./page/switch')), 'switch'),
    'start': r => require.ensure([], () => r(require('./page/start')), 'start'),
    'steps': r => require.ensure([], () => r(require('./page/steps')), 'steps'),
    'sponsor': r => require.ensure([], () => r(require('./page/sponsor')), 'sponsor'),
    'table': r => require.ensure([], () => r(require('./page/table')), 'table'),
    'tag': r => require.ensure([], () => r(require('./page/tag')), 'tag'),
    'tabs': r => require.ensure([], () => r(require('./page/tabs')), 'tabs'),
    'timeline': r => require.ensure([], () => r(require('./page/timeline')), 'timeline'),
    'tooltip': r => require.ensure([], () => r(require('./page/tooltip')), 'tooltip'),
    'theme': r => require.ensure([], () => r(require('./page/theme')), 'theme'),
    'tree': r => require.ensure([], () => r(require('./page/tree')), 'tree')
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