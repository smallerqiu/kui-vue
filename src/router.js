import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 解决 vue-router在3.0版本以上重复路由报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}


let children = [
	{ path: '/start/getting-started', component: () => import(/*webpackChunkName:'start'*/'./views/start.md') },
	{ path: '/start/language', component: () => import(/*webpackChunkName:'i18n'*/'./views/i18n.md') },
	{ path: '/start/logs', component: () => import(/*webpackChunkName:'logs'*/'./views/log.md') },
	{ path: '/start/ssr', component: () => import(/*webpackChunkName:'ssr'*/'./views/ssr.md') },
	{ path: '/start/theme', component: () => import(/*webpackChunkName:'theme'*/'./views/theme.md') },
	{ path: '/start/dark-mode', component: () => import(/*webpackChunkName:'dark-mode'*/'./views/dark-mode/index') },
	{ path: '/start/components', component: () => import(/*webpackChunkName:'kit'*/'./views/all.jsx') },
	
	{ path: '/notices/alert', component: () => import(/*webpackChunkName:'alert'*/'../components/alert/demo'), },
	{ path: '/navigation/affix', component: () => import(/*webpackChunkName:'affix'*/'../components/affix/demo'), },
	{ path: '/datas/avatar', component: () => import(/*webpackChunkName:'avatar'*/'../components/avatar/demo'), },
	{ path: '/datas/card', component: () => import(/*webpackChunkName:'card'*/'../components/card/demo'), },
	{ path: '/datas/carousel', component: () => import(/*webpackChunkName:'carousel'*/'../components/carousel/demo'), },
	{ path: '/datas/collapse', component: () => import(/*webpackChunkName:'collapse'*/'../components/collapse/demo'), },
	{ path: '/other/colorpicker', component: () => import(/*webpackChunkName:'colorpicker'*/'../components/colorPicker/demo'), },
	{ path: '/forms/checkbox', component: () => import(/*webpackChunkName:'checkbox'*/'../components/checkbox/demo'), },
	{ path: '/basic/button', component: () => import(/*webpackChunkName:'button'*/'../components/button/demo'), },
	{ path: '/navigation/breadcrumb', component: () => import(/*webpackChunkName:'breadcrumb'*/'../components/breadcrumb/demo'), },
	{ path: '/navigation/backtop', component: () => import(/*webpackChunkName:'backtop'*/'../components/backtop/demo'), },
	{ path: '/notices/badge', component: () => import(/*webpackChunkName:'badge'*/'../components/badge/demo'), },
	{ path: '/forms/datepicker', component: () => import(/*webpackChunkName:'datepicker'*/'../components/datePicker/demo'), },
	{ path: '/datas/descriptions', component: () => import(/*webpackChunkName:'descriptions'*/'../components/descriptions/demo'), },
	{ path: '/notices/drawer', component: () => import(/*webpackChunkName:'drawer'*/'../components/drawer/demo'), },
	{ path: '/navigation/dropdown', component: () => import(/*webpackChunkName:'dropdown'*/'../components/dropdown/demo'), },
	{ path: '/layouts/divider', component: () => import(/*webpackChunkName:'divider'*/'../components/divider/demo'), },
	{ path: '/notices/empty', component: () => import(/*webpackChunkName:'empty'*/'../components/empty/demo'), },
	{ path: '/forms/form', component: () => import(/*webpackChunkName:'form'*/'../components/form/demo'), },
	{ path: '/layouts/grid', component: () => import(/*webpackChunkName:'grid'*/'../components/grid/demo'), },
	{ path: '/datas/image', component: () => import(/*webpackChunkName:'image'*/'../components/image/demo'), },
	{ path: '/forms/input', component: () => import(/*webpackChunkName:'input'*/'../components/input/demo'), },
	{ path: '/forms/inputnumber', component: () => import(/*webpackChunkName:'inputnumber'*/'../components/inputNumber/demo'), },
	{ path: '/basic/icons', component: () => import(/*webpackChunkName:'icon'*/'../components/icon/demo'), },
	{ path: '/layouts/layout', component: () => import(/*webpackChunkName:'layout'*/'../components/layout/demo'), },
	{ path: '/notices/loading', component: () => import(/*webpackChunkName:'loading'*/'../components/loading/demo'), },
	{ path: '/notices/message', component: () => import(/*webpackChunkName:'message'*/'../components/message/demo'), },
	{ path: '/notices/modal', component: () => import(/*webpackChunkName:'modal'*/'../components/modal/demo'), },
	{ path: '/navigation/menu', component: () => import(/*webpackChunkName:'menu'*/'../components/menu/demo'), },
	{ path: '/notices/notice', component: () => import(/*webpackChunkName:'notice'*/'../components/notice/demo'), },
	{ path: '/forms/radio', component: () => import(/*webpackChunkName:'radio'*/'../components/radio/demo'), },
	{ path: '/notices/rate', component: () => import(/*webpackChunkName:'rate'*/'../components/rate/demo'), },
	{ path: '/forms/select', component: () => import(/*webpackChunkName:'select'*/'../components/select/demo'), },
	{ path: '/forms/slider', component: () => import(/*webpackChunkName:'slider'*/'../components/slider/demo'), },
	{ path: '/notices/skeleton', component: () => import(/*webpackChunkName:'skeleton'*/'../components/skeleton/demo'), },
	{ path: '/layouts/space', component: () => import(/*webpackChunkName:'space'*/'../components/space/demo'), },
	{ path: '/notices/spin', component: () => import(/*webpackChunkName:'spin'*/'../components/spin/demo'), },
	{ path: '/forms/switch', component: () => import(/*webpackChunkName:'switch'*/'../components/switch/demo'), },
	{ path: '/datas/table', component: () => import(/*webpackChunkName:'table'*/'../components/table/demo'), },
	{ path: '/notices/tag', component: () => import(/*webpackChunkName:'tag'*/'../components/tag/demo'), },
	{ path: '/navigation/tabs', component: () => import(/*webpackChunkName:'tabs'*/'../components/tabs/demo'), },
	{ path: '/datas/timeline', component: () => import(/*webpackChunkName:'timeline'*/'../components/timeline/demo'), },
	{ path: '/notices/tooltip', component: () => import(/*webpackChunkName:'tooltip'*/'../components/tooltip/demo'), },
	{ path: '/datas/tree', component: () => import(/*webpackChunkName:'tree'*/'../components/tree/demo'), },
	{ path: '/notices/poptip', component: () => import(/*webpackChunkName:'poptip'*/'../components/poptip/demo'), },
	{ path: '/notices/popconfirm', component: () => import(/*webpackChunkName:'popconfirm'*/'../components/popconfirm/demo'), },
	{ path: '/notices/progress', component: () => import(/*webpackChunkName:'progress'*/'../components/progress/demo'), },
	{ path: '/navigation/page', component: () => import(/*webpackChunkName:'page'*/'../components/page/demo'), },
	{ path: '/forms/upload', component: () => import(/*webpackChunkName:'upload'*/'../components/upload/demo'), },
];

import Layout from './components/Layout'

let routes =[
	{ path: '/', component: () => import(/*webpackChunkName:'home'*/'./views/index') },
	{ path: '/test', component: () => import(/*webpackChunkName:'test'*/'./views/test') },
	{
		path: '/',
		component: Layout,
		children
	}
]
let routers = new Router({
	routes,
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || { x: 0, y: 0 }
	}
})


routers.beforeEach(function (to, from, next) {
	typeof (_hmt) != 'undefined' && _hmt.push(['_trackPageview', to.path]);
	// loading.start('line');
	// kui.Loading.start();
	next()

})
routers.afterEach((to, from, next) => {
	// (process.env.NODE_ENV == 'development') &&
	// loading.finish();
	// kui.Loading.finish();
});
export default routers