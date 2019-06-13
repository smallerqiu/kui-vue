import Vue from 'vue'
import loading from '@/components/loading'
//Vue.use(kui);
import Router from 'vue-router'

Vue.use(Router)


let router = []

//此种编译后，无法实现按需加载，会打包在一个文件
/*let r=['','install','start','log','input','button','select','switch','form','colorpicker','loading',
'icon','timeline','theme','react-kui','angular-kui','alert','message','notice','upload','poptip','menu','tabs','badge',
'checkbox','radio','datepicker','table','layout','page','modal','kui-loader','sponsor','about'];
r.map((x)=>{
children.push({
path:`/${x}`,
component:resolve=>require([x==''?'./views/index':`./views/${x}`],resolve),
//component:r=>require.ensure([],()=>r(require(x==''?'/views/index':`./views/${x}`),x)
})
})*/

let children = [
    { path: 'about', component: () => import(/*webpackChunkName:'about'*/'./views/about'), },
    { path: 'alert', component: () => import(/*webpackChunkName:'alert'*/'./views/alert'), },
    { path: 'affix', component: () => import(/*webpackChunkName:'affix'*/'./views/affix'), },
    { path: 'angular-kui', component: () => import(/*webpackChunkName:'angular-kui'*/'./views/angular-kui'), },
    { path: 'card', component: () => import(/*webpackChunkName:'card'*/'./views/card'), },
    { path: 'carousel', component: () => import(/*webpackChunkName:'carousel'*/'./views/carousel'), },
    { path: 'collapse', component: () => import(/*webpackChunkName:'collapse'*/'./views/collapse'), },
    { path: 'colorpicker', component: () => import(/*webpackChunkName:'colorpicker'*/'./views/colorpicker'), },
    { path: 'color', component: () => import(/*webpackChunkName:'color'*/'./views/color'), },
    { path: 'checkbox', component: () => import(/*webpackChunkName:'checkbox'*/'./views/checkbox'), },
    { path: 'button', component: () => import(/*webpackChunkName:'button'*/'./views/button'), },
    { path: 'breadcrumb', component: () => import(/*webpackChunkName:'breadcrumb'*/'./views/breadcrumb'), },
    { path: 'backtop', component: () => import(/*webpackChunkName:'backtop'*/'./views/backtop'), },
    { path: 'badge', component: () => import(/*webpackChunkName:'badge'*/'./views/badge'), },
    { path: 'datepicker', component: () => import(/*webpackChunkName:'datepicker'*/'./views/datepicker'), },
    { path: 'dropdown', component: () => import(/*webpackChunkName:'dropdown'*/'./views/dropdown'), },
    { path: 'form', component: () => import(/*webpackChunkName:'form'*/'./views/form'), },
    { path: 'font', component: () => import(/*webpackChunkName:'font'*/'./views/font'), },
    { path: 'grid', component: () => import(/*webpackChunkName:'grid'*/'./views/grid'), },
    { path: 'imagepreview', component: () => import(/*webpackChunkName:'image-preview'*/'./views/image-preview'), },
    { path: 'install', component: () => import(/*webpackChunkName:'install'*/'./views/install'), },
    { path: 'input', component: () => import(/*webpackChunkName:'input'*/'./views/input'), },
    { path: 'icon', component: () => import(/*webpackChunkName:'icon'*/'./views/icon'), },
    { path: 'kui-loader', component: () => import(/*webpackChunkName:'kui-loader'*/'./views/kui-loader'), },
    { path: 'log', component: () => import(/*webpackChunkName:'log'*/'./views/log'), },
    { path: 'layout', component: () => import(/*webpackChunkName:'layout'*/'./views/layout'), },
    { path: 'loading', component: () => import(/*webpackChunkName:'loading'*/'./views/loading'), },
    { path: 'message', component: () => import(/*webpackChunkName:'message'*/'./views/message'), },
    { path: 'modal', component: () => import(/*webpackChunkName:'modal'*/'./views/modal'), },
    { path: 'menu', component: () => import(/*webpackChunkName:'menu'*/'./views/menu'), },
    { path: 'notice', component: () => import(/*webpackChunkName:'notice'*/'./views/notice'), },
    { path: 'radio', component: () => import(/*webpackChunkName:'radio'*/'./views/radio'), },
    { path: 'react-kui', component: () => import(/*webpackChunkName:'react-kui'*/'./views/react-kui'), },
    { path: 'select', component: () => import(/*webpackChunkName:'select'*/'./views/select'), },
    { path: 'ssr', component: () => import(/*webpackChunkName:'ssr'*/'./views/ssr'), },
    { path: 'switch', component: () => import(/*webpackChunkName:'switch'*/'./views/switch'), },
    { path: 'start', component: () => import(/*webpackChunkName:'start'*/'./views/start'), },
    { path: 'steps', component: () => import(/*webpackChunkName:'steps'*/'./views/steps'), },
    { path: 'sponsor', component: () => import(/*webpackChunkName:'sponsor'*/'./views/sponsor'), },
    { path: 'table', component: () => import(/*webpackChunkName:'table'*/'./views/table'), },
    { path: 'tag', component: () => import(/*webpackChunkName:'tag'*/'./views/tag'), },
    { path: 'tabs', component: () => import(/*webpackChunkName:'tabs'*/'./views/tabs'), },
    { path: 'timeline', component: () => import(/*webpackChunkName:'timeline'*/'./views/timeline'), },
    { path: 'tooltip', component: () => import(/*webpackChunkName:'tooltip'*/'./views/tooltip'), },
    { path: 'theme', component: () => import(/*webpackChunkName:'theme'*/'./views/theme'), },
    { path: 'tree', component: () => import(/*webpackChunkName:'tree'*/'./views/tree'), },
    { path: 'treeselect', component: () => import(/*webpackChunkName:'treeselect'*/'./views/treeselect'), },
    { path: 'test', component: () => import(/*webpackChunkName:'test'*/'./views/test'), },
    { path: 'poptip', component: () => import(/*webpackChunkName:'poptip'*/'./views/poptip'), },
    { path: 'page', component: () => import(/*webpackChunkName:'page'*/'./views/page'), },
    { path: 'upload', component: () => import(/*webpackChunkName:'upload'*/'./views/upload'), },
];


router.push(
    { path: '/', component: () => import(/*webpackChunkName:'home'*/'./views/index') },
    { path: '/test', component: () => import(/*webpackChunkName:'test'*/'./test') },
    {
        path: '/',
        component: () => import(/*webpackChunkName:'layout'*/'./layout'),
        children: children
    })
let routers = new Router({
    routes: router, mode: 'hash', scrollBehavior(to, from, savedPosition) {
        //return期望滚动到哪个的位置
        //returnsavedPosition||{x:0,y:0}
        document.querySelector('.colMain') && (document.querySelector('.colMain').scrollTop = 0)
    }
})
routers.beforeEach(function (to, from, next) {
    typeof (_hmt) != 'undefined' && _hmt.push(['_trackPageview', to.path]);
    loading.start('line');
    next()
})
routers.afterEach((to, from, next) => {
    // (process.env.NODE_ENV == 'development') &&
    loading.finish();
});
export default routers