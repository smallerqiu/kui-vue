/*! kui-vue v1.9.9 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{FFUI:function(e,t,n){"use strict";n.r(t);var o={webpack:"import Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport App from 'components/app.vue';\nimport Routers from './router.js';\nimport kui from 'kui-vue'; \nimport 'kui-vue/dist/k-ui.css'; \n\nVue.use(VueRouter);\nVue.use(kui);\n\n// The routing configuration\nconst RouterConfig = {\n  routes: Routers\n};\nconst router = new VueRouter(RouterConfig);\n\nnew Vue({\n  el: '#app',\n  router: router,\n  render: h => h(App)\n});"},r=o,i={components:{Code:n("w3Nn").a},data:function(){return{code:r}}},_=n("KHd+"),v=Object(_.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("快速上手")]),e._v(" "),n("h3",[e._v("引入 KUI")]),e._v(" "),n("p",[e._v("一般在 webpack 入口页面 main.js 中如下配置：")]),e._v(" "),n("Code",{attrs:{lang:"js javascript"}},[e._v(e._s(e.code.webpack))]),e._v(" "),n("h3",[e._v("使用规范")]),e._v(" "),e._m(0),n("p",[e._v("以下组件，在非 template/render 模式下，需要加前缀 k-")]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("以下组件，在非 template/render 模式下，组件名要分隔")]),e._v(" "),e._m(2)],1)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("在非 template/render 模式下（例如使用 CDN 引用时），组件名要分隔，例如\n    "),n("code",[e._v("Buton")]),e._v(" 必须要写成\n    "),n("code",[e._v("k-button")]),e._v("。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"k-item-list"},[n("li",[e._v("Table :\n        "),n("code",[e._v("k-table")])]),e._v(" "),n("li",[e._v("Button:\n        "),n("code",[e._v("k-button")])]),e._v(" "),n("li",[e._v("Input :\n        "),n("code",[e._v("k-input")])]),e._v(" "),n("li",[e._v("Switch:\n        "),n("code",[e._v("k-switch")])]),e._v(" "),n("li",[e._v("Select:\n        "),n("code",[e._v("k-select")])]),e._v(" "),n("li",[e._v("Option:\n        "),n("code",[e._v("k-option")])]),e._v(" "),n("li",[e._v("Col:\n        "),n("code",[e._v("k-col")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"k-item-list"},[n("li",[e._v("ButtonGroup :\n        "),n("code",[e._v("button-group")])]),e._v(" "),n("li",[e._v("CheckboxGroup:\n        "),n("code",[e._v("checkbox-group")])]),e._v(" "),n("li",[e._v("FormItem :\n        "),n("code",[e._v("form-item")])]),e._v(" "),n("li",[e._v("DatePicker :\n        "),n("code",[e._v("date-picker")])]),e._v(" "),n("li",[e._v("ColorPicker :\n        "),n("code",[e._v("color-picker")])]),e._v(" "),n("li",[e._v("TimeLine :\n        "),n("code",[e._v("time-line")])]),e._v(" "),n("li",[e._v("TimeLineItem :\n        "),n("code",[e._v("time-line-item")])])])}],!1,null,null,null);v.options.__file="start.vue";t.default=v.exports}}]);