import Vue from 'vue'
import loading from '@/components/loading'
// Vue.use(kui);
import Router from 'vue-router'

Vue.use(Router)


let router = []
let children = []

// 此种编译后，无法实现按需加载，会打包在一个文件
/* let r = ['','install', 'start', 'log', 'input', 'button', 'select', 'switch', 'form', 'colorpicker', 'loading',
    'icon', 'timeline', 'theme', 'react-kui', 'angular-kui', 'alert', 'message', 'notice', 'upload', 'poptip', 'menu', 'tabs', 'badge',
    'checkbox', 'radio', 'datepicker', 'table', 'layout', 'page', 'modal', 'kui-loader', 'sponsor', 'about'];
r.map((x) => {
    children.push({
        path: `/${x}`,
        component: resolve => require([x==''?'./views/index':`./views/${x}`], resolve),
        // component: r => require.ensure([], () => r(require(x==''?'/views/index':`./views/${x}`)), x)
    })
}) */

let R = {
    'about': r => require.ensure([], () => r(require('./views/about')), 'about'),
    'alert': r => require.ensure([], () => r(require('./views/alert')), 'alert'),
    'affix': r => require.ensure([], () => r(require('./views/affix')), 'affix'),
    'angular-kui': r => require.ensure([], () => r(require('./views/angular-kui')), 'angular-kui'),
    'card': r => require.ensure([], () => r(require('./views/card')), 'card'),
    'carousel': r => require.ensure([], () => r(require('./views/carousel')), 'carousel'),
    'collapse': r => require.ensure([], () => r(require('./views/collapse')), 'collapse'),
    'colorpicker': r => require.ensure([], () => r(require('./views/colorpicker')), 'colorpicker'),
    'color': r => require.ensure([], () => r(require('./views/color')), 'color'),
    'checkbox': r => require.ensure([], () => r(require('./views/checkbox')), 'checkbox'),
    'button': r => require.ensure([], () => r(require('./views/button')), 'button'),
    'breadcrumb': r => require.ensure([], () => r(require('./views/breadcrumb')), 'breadcrumb'),
    'backtop': r => require.ensure([], () => r(require('./views/backtop')), 'backtop'),
    'badge': r => require.ensure([], () => r(require('./views/badge')), 'badge'),
    'datepicker': r => require.ensure([], () => r(require('./views/datepicker')), 'datepicker'),
    'form': r => require.ensure([], () => r(require('./views/form')), 'form'),
    'font': r => require.ensure([], () => r(require('./views/font')), 'font'),
    'grid': r => require.ensure([], () => r(require('./views/grid')), 'grid'),
    'install': r => require.ensure([], () => r(require('./views/install')), 'install'),
    'input': r => require.ensure([], () => r(require('./views/input')), 'input'),
    'icon': r => require.ensure([], () => r(require('./views/icon')), 'icon'),
    'kui-loader': r => require.ensure([], () => r(require('./views/kui-loader')), 'kui-loader'),
    'log': r => require.ensure([], () => r(require('./views/log')), 'log'),
    'layout': r => require.ensure([], () => r(require('./views/layout')), 'layout'),
    'loading': r => require.ensure([], () => r(require('./views/loading')), 'loading'),
    'message': r => require.ensure([], () => r(require('./views/message')), 'message'),
    'modal': r => require.ensure([], () => r(require('./views/modal')), 'modal'),
    'menu': r => require.ensure([], () => r(require('./views/menu')), 'menu'),
    'notice': r => require.ensure([], () => r(require('./views/notice')), 'notice'),
    'radio': r => require.ensure([], () => r(require('./views/radio')), 'radio'),
    'react-kui': r => require.ensure([], () => r(require('./views/react-kui')), 'react-kui'),
    'select': r => require.ensure([], () => r(require('./views/select')), 'select'),
    'ssr': r => require.ensure([], () => r(require('./views/ssr')), 'ssr'),
    'switch': r => require.ensure([], () => r(require('./views/switch')), 'switch'),
    'start': r => require.ensure([], () => r(require('./views/start')), 'start'),
    'steps': r => require.ensure([], () => r(require('./views/steps')), 'steps'),
    'sponsor': r => require.ensure([], () => r(require('./views/sponsor')), 'sponsor'),
    'table': r => require.ensure([], () => r(require('./views/table')), 'table'),
    'tag': r => require.ensure([], () => r(require('./views/tag')), 'tag'),
    'tabs': r => require.ensure([], () => r(require('./views/tabs')), 'tabs'),
    'timeline': r => require.ensure([], () => r(require('./views/timeline')), 'timeline'),
    'tooltip': r => require.ensure([], () => r(require('./views/tooltip')), 'tooltip'),
    'theme': r => require.ensure([], () => r(require('./views/theme')), 'theme'),
    'tree': r => require.ensure([], () => r(require('./views/tree')), 'tree'),
    'treeselect': r => require.ensure([], () => r(require('./views/treeselect')), 'treeselect'),
    'test': r => require.ensure([], () => r(require('./views/test')), 'test'),
    'poptip': r => require.ensure([], () => r(require('./views/poptip')), 'poptip'),
    'page': r => require.ensure([], () => r(require('./views/page')), 'page'),
    'upload': r => require.ensure([], () => r(require('./views/upload')), 'upload'),
};

for (let x in R) {
    children.push({ path: `/${x}`, name: x, component: R[x] })
}
let index = r => require.ensure([], () => r(require('./views/index')), 'home');

router.push(
    { path: '/', component: index },
    {
        path: '/',
        component: resolve => require(['./layout'], resolve),
        children: children
    })
let routers = new Router({
    routes: router, mode: 'hash', scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return savedPosition || { x: 0, y: 0 }
    }
})
let development = window.location.hostname != 'localhost' && window.location.hostname != '127.0.0.1'
routers.beforeEach(function (to, from, next) {
    loading.start('line');
    next()
})
routers.afterEach((to, from, next) => {
    !development && typeof (_hmt) != 'undefined' && _hmt.push(['_trackPageview', to.path]);
    loading.finish();
});
export default routers