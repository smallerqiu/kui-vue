import Vue from 'vue'
// import loading from '@/components/loading'
//Vue.use(kui);
import Router from 'vue-router'

Vue.use(Router)


let router = []

let children = [
    { path: '/', component: () => import(/*webpackChunkName:'start'*/'./views/start') },
    { path: '/start', component: () => import(/*webpackChunkName:'start'*/'./views/start') },
    { path: '/log', component: () => import(/*webpackChunkName:'log'*/'./views/log') },
    { path: '/ssr', component: () => import(/*webpackChunkName:'ssr'*/'./views/ssr') },
    { path: '/theme', component: () => import(/*webpackChunkName:'theme'*/'./views/theme') },
    { path: '/kui-loader', component: () => import(/*webpackChunkName:'kui-loader'*/'./views/kui-loader') },
    //     { path: 'about', component: () => import(/*webpackChunkName:'about'*/'../components/about'), },
    { path: 'alert', component: () => import(/*webpackChunkName:'alert'*/'../components/alert/demo'), },
    //     { path: 'affix', component: () => import(/*webpackChunkName:'affix'*/'../components/affix/demo'), },
    //     { path: 'angular-kui', component: () => import(/*webpackChunkName:'angular-kui'*/'../components/angular-kui'), },
        { path: 'card', component: () => import(/*webpackChunkName:'card'*/'../components/card/demo'), },
    //     { path: 'carousel', component: () => import(/*webpackChunkName:'carousel'*/'../components/carousel/demo'), },
    //     { path: 'collapse', component: () => import(/*webpackChunkName:'collapse'*/'../components/collapse/demo'), },
    //     { path: 'colorpicker', component: () => import(/*webpackChunkName:'colorpicker'*/'../components/colorpicker'/demo), },
    //     { path: 'color', component: () => import(/*webpackChunkName:'color'*/'../components/color/demo'), },
    //     { path: 'checkbox', component: () => import(/*webpackChunkName:'checkbox'*/'../components/checkbox/demo'), },
    { path: 'button', component: () => import(/*webpackChunkName:'button'*/'../components/button/demo'), },
    { path: 'breadcrumb', component: () => import(/*webpackChunkName:'breadcrumb'*/'../components/breadcrumb/demo'), },
    //     { path: 'backtop', component: () => import(/*webpackChunkName:'backtop'*/'../components/backtop'/demo), },
    { path: 'badge', component: () => import(/*webpackChunkName:'badge'*/'../components/badge/demo'), },
    //     { path: 'datepicker', component: () => import(/*webpackChunkName:'datepicker'*/'../components/datepicker/demo'), },
    //     { path: 'dropdown', component: () => import(/*webpackChunkName:'dropdown'*/'../components/dropdown'/demo), },
    //     { path: 'drawer', component: () => import(/*webpackChunkName:'drawer'*/'../components/drawer/demo'), },
    //     { path: 'form', component: () => import(/*webpackChunkName:'form'*/'../components/form'/demo), },
    //     { path: 'font', component: () => import(/*webpackChunkName:'font'*/'../components/font/demo'), },
    { path: 'grid', component: () => import(/*webpackChunkName:'grid'*/'../components/grid/demo'), },
    //     { path: 'imagepreview', component: () => import(/*webpackChunkName:'image-preview'*/'../components/image-preview/demo'), },
    //     { path: 'input', component: () => import(/*webpackChunkName:'input'*/'../components/input/demo'), },
    { path: 'icon', component: () => import(/*webpackChunkName:'icon'*/'../components/icon/demo'), },
    //     { path: 'kui-loader', component: () => import(/*webpackChunkName:'kui-loader'*/'../components/kui-loader/demo'), },
    //     { path: 'log', component: () => import(/*webpackChunkName:'log'*/'../components/log/demo'), },
    { path: 'layout', component: () => import(/*webpackChunkName:'layout'*/'../components/layout/demo'), },
    //     { path: 'loading', component: () => import(/*webpackChunkName:'loading'*/'../components/loading/demo'), },
    //     { path: 'message', component: () => import(/*webpackChunkName:'message'*/'../components/message/demo'), },
    //     { path: 'modal', component: () => import(/*webpackChunkName:'modal'*/'../components/modal/demo'), },
    //     { path: 'menu', component: () => import(/*webpackChunkName:'menu'*/'../components/menu'/demo), },
    //     { path: 'notice', component: () => import(/*webpackChunkName:'notice'*/'../components/notice/demo'), },
    //     { path: 'radio', component: () => import(/*webpackChunkName:'radio'*/'../components/radio/demo'), },
    //     { path: 'react-kui', component: () => import(/*webpackChunkName:'react-kui'*/'../components/react-kui/demo'), },
    //     { path: 'select', component: () => import(/*webpackChunkName:'select'*/'../components/select/demo'), },
    //     { path: 'ssr', component: () => import(/*webpackChunkName:'ssr'*/'../components/ssr/demo'), },
    //     { path: 'switch', component: () => import(/*webpackChunkName:'switch'*/'../components/switch/demo'), },
    //     { path: 'start', component: () => import(/*webpackChunkName:'start'*/'../components/start/demo'), },
    //     { path: 'steps', component: () => import(/*webpackChunkName:'steps'*/'../components/steps/demo'), },
    //     { path: 'sponsor', component: () => import(/*webpackChunkName:'sponsor'*/'../components/sponsor/demo'), },
    //     { path: 'table', component: () => import(/*webpackChunkName:'table'*/'../components/table/demo'), },
    { path: 'tag', component: () => import(/*webpackChunkName:'tag'*/'../components/tag/demo'), },
    //     { path: 'tabs', component: () => import(/*webpackChunkName:'tabs'*/'../components/tabs/demo'), },
    //     { path: 'timeline', component: () => import(/*webpackChunkName:'timeline'*/'../components/timeline/demo'), },
    //     { path: 'tooltip', component: () => import(/*webpackChunkName:'tooltip'*/'../components/tooltip/demo'), },
    //     { path: 'theme', component: () => import(/*webpackChunkName:'theme'*/'../components/theme/demo'), },
    //     { path: 'tree', component: () => import(/*webpackChunkName:'tree'*/'../components/tree/demo'), },
    //     { path: 'treeselect', component: () => import(/*webpackChunkName:'treeselect'*/'../components/treeselect'), },
    //     { path: 'test', component: () => import(/*webpackChunkName:'test'*/'../components/test'), },
    //     { path: 'poptip', component: () => import(/*webpackChunkName:'poptip'*/'../components/poptip/demo'), },
    //     { path: 'page', component: () => import(/*webpackChunkName:'page'*/'../components/page/demo'), },
    //     { path: 'upload', component: () => import(/*webpackChunkName:'upload'*/'../components/upload/demo'), },
];


router.push(

    { path: '/test', component: () => import(/*webpackChunkName:'test'*/'./test') },
    {
        path: '/',
        component: () => import(/*webpackChunkName:'layout'*/'./layout'),
        children: children
    }
)
let routers = new Router({
    routes: router, mode: 'history', scrollBehavior(to, from, savedPosition) {
        //return期望滚动到哪个的位置
        //returnsavedPosition||{x:0,y:0}
        document.querySelector('.colMain') && (document.querySelector('.colMain').scrollTop = 0)
    }
})
routers.beforeEach(function (to, from, next) {
    typeof (_hmt) != 'undefined' && _hmt.push(['_trackPageview', to.path]);
    // loading.start('line');
    next()
})
routers.afterEach((to, from, next) => {
    // (process.env.NODE_ENV == 'development') &&
    // loading.finish();
});
export default routers