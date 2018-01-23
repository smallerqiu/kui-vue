import Vue from 'Vue'
import Router from 'vue-router'

Vue.use(Router)


let router = []
let children = []

let r = ['', 'install', 'start', 'log', 'index', 'input', 'button', 'select', 'switch', 'form', 'colorpicker',
    'icon', 'timeline', 'theme', 'react-kui', 'angular-kui', 'alert', 'message', 'notice', 'upload',
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
var _hmt = _hmt || [];(function() { var hm = document.createElement("script"); hm.src = "https://hm.baidu.com/hm.js?2cd83ff4bed8ca08c9962d0c458d8e16"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();

routers.beforeEach(function (to, from, next) {
    typeof (_hmt) != 'undefined' && _hmt.push(['_trackPageview', to.path]);
    next()
})
export default routers