import Vue from 'vue'
import Router from 'vue-router'
import kui from 'kui-vue'

Vue.use(Router)

// 解决 vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

let router = []

let docs = [
	{ path: 'start', component: () => import(/*webpackChunkName:'start'*/'./views/start') },
	{ path: 'use-in-vue', component: () => import(/*webpackChunkName:'use-in-vue'*/'./views/use-in-vue') },
	{ path: 'i18n', component: () => import(/*webpackChunkName:'i18n'*/'./views/i18n') },
	{ path: 'log', component: () => import(/*webpackChunkName:'log'*/'./views/log') },
	{ path: 'ssr', component: () => import(/*webpackChunkName:'ssr'*/'./views/ssr') },
	{ path: 'theme', component: () => import(/*webpackChunkName:'theme'*/'./views/theme') },
	{ path: 'kui-loader', component: () => import(/*webpackChunkName:'kui-loader'*/'./views/kui-loader') },
	{ path: 'dark-mode', component: () => import(/*webpackChunkName:'kui-loader'*/'./views/dark-mode/index') },
]
let components = [
	{ path: 'all', component: () => import(/*webpackChunkName:'all'*/'./views/all.jsx') },
	{ path: 'alert', component: () => import(/*webpackChunkName:'alert'*/'../components/alert/demo'), },
	{ path: 'affix', component: () => import(/*webpackChunkName:'affix'*/'../components/affix/demo'), },
	{ path: 'avatar', component: () => import(/*webpackChunkName:'avatar'*/'../components/avatar/demo'), },
	{ path: 'card', component: () => import(/*webpackChunkName:'card'*/'../components/card/demo'), },
	{ path: 'carousel', component: () => import(/*webpackChunkName:'carousel'*/'../components/carousel/demo'), },
	{ path: 'collapse', component: () => import(/*webpackChunkName:'collapse'*/'../components/collapse/demo'), },
	{ path: 'colorpicker', component: () => import(/*webpackChunkName:'colorpicker'*/'../components/colorPicker/demo'), },
	{ path: 'checkbox', component: () => import(/*webpackChunkName:'checkbox'*/'../components/checkbox/demo'), },
	{ path: 'button', component: () => import(/*webpackChunkName:'button'*/'../components/button/demo'), },
	{ path: 'breadcrumb', component: () => import(/*webpackChunkName:'breadcrumb'*/'../components/breadcrumb/demo'), },
	{ path: 'backtop', component: () => import(/*webpackChunkName:'backtop'*/'../components/backtop/demo'), },
	{ path: 'badge', component: () => import(/*webpackChunkName:'badge'*/'../components/badge/demo'), },
	{ path: 'datepicker', component: () => import(/*webpackChunkName:'datepicker'*/'../components/datePicker/demo'), },
	{ path: 'descriptions', component: () => import(/*webpackChunkName:'descriptions'*/'../components/descriptions/demo'), },
	{ path: 'drawer', component: () => import(/*webpackChunkName:'drawer'*/'../components/drawer/demo'), },
	{ path: 'dropdown', component: () => import(/*webpackChunkName:'dropdown'*/'../components/dropdown/demo'), },
	{ path: 'divider', component: () => import(/*webpackChunkName:'divider'*/'../components/divider/demo'), },
	{ path: 'empty', component: () => import(/*webpackChunkName:'empty'*/'../components/empty/demo'), },
	{ path: 'form', component: () => import(/*webpackChunkName:'form'*/'../components/form/demo'), },
	{ path: 'grid', component: () => import(/*webpackChunkName:'grid'*/'../components/grid/demo'), },
	{ path: 'image', component: () => import(/*webpackChunkName:'image'*/'../components/image/demo'), },
	{ path: 'input', component: () => import(/*webpackChunkName:'input'*/'../components/input/demo'), },
	{ path: 'icon', component: () => import(/*webpackChunkName:'icon'*/'../components/icon/demo'), },
	{ path: 'layout', component: () => import(/*webpackChunkName:'layout'*/'../components/layout/demo'), },
	{ path: 'loading', component: () => import(/*webpackChunkName:'loading'*/'../components/loading/demo'), },
	{ path: 'message', component: () => import(/*webpackChunkName:'message'*/'../components/message/demo'), },
	{ path: 'modal', component: () => import(/*webpackChunkName:'modal'*/'../components/modal/demo'), },
	{ path: 'menu', component: () => import(/*webpackChunkName:'menu'*/'../components/menu/demo'), },
	{ path: 'notice', component: () => import(/*webpackChunkName:'notice'*/'../components/notice/demo'), },
	{ path: 'radio', component: () => import(/*webpackChunkName:'radio'*/'../components/radio/demo'), },
	{ path: 'rate', component: () => import(/*webpackChunkName:'rate'*/'../components/rate/demo'), },
	{ path: 'select', component: () => import(/*webpackChunkName:'select'*/'../components/select/demo'), },
	{ path: 'slider', component: () => import(/*webpackChunkName:'slider'*/'../components/slider/demo'), },
	{ path: 'skeleton', component: () => import(/*webpackChunkName:'skeleton'*/'../components/skeleton/demo'), },
	{ path: 'space', component: () => import(/*webpackChunkName:'space'*/'../components/space/demo'), },
	{ path: 'spin', component: () => import(/*webpackChunkName:'spin'*/'../components/spin/demo'), },
	{ path: 'switch', component: () => import(/*webpackChunkName:'switch'*/'../components/switch/demo'), },
	// { path: 'steps', component: () => import(/*webpackChunkName:'steps'*/'../components/steps/demo'), },
	{ path: 'table', component: () => import(/*webpackChunkName:'table'*/'../components/table/demo'), },
	{ path: 'tag', component: () => import(/*webpackChunkName:'tag'*/'../components/tag/demo'), },
	{ path: 'tabs', component: () => import(/*webpackChunkName:'tabs'*/'../components/tabs/demo'), },
	{ path: 'timeline', component: () => import(/*webpackChunkName:'timeline'*/'../components/timeline/demo'), },
	{ path: 'tooltip', component: () => import(/*webpackChunkName:'tooltip'*/'../components/tooltip/demo'), },
	{ path: 'tree', component: () => import(/*webpackChunkName:'tree'*/'../components/tree/demo'), },
	// { path: 'treeselect', component: () => import(/*webpackChunkName:'treeselect'*/'../components/treeselect'), },
	{ path: 'poptip', component: () => import(/*webpackChunkName:'poptip'*/'../components/poptip/demo'), },
	{ path: 'popconfirm', component: () => import(/*webpackChunkName:'popconfirm'*/'../components/popconfirm/demo'), },
	{ path: 'progress', component: () => import(/*webpackChunkName:'progress'*/'../components/progress/demo'), },
	{ path: 'page', component: () => import(/*webpackChunkName:'page'*/'../components/page/demo'), },
	{ path: 'upload', component: () => import(/*webpackChunkName:'upload'*/'../components/upload/demo'), },
];

import layout from './layout'

router.push(
	{ path: '/', component: () => import(/*webpackChunkName:'home'*/'./index') },
	{ path: '/test', component: () => import(/*webpackChunkName:'test'*/'./test') },
	{
		path: '/components',
		component: layout,
		children: components
	},
	{
		path: '/docs',
		component: layout,
		children: docs
	}
)
let routers = new Router({
	routes: router,
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