/*!
 * kui-vue v3.3.5-c
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[6227],{1793:function(t,n,r){r.r(n),r.d(n,{default:function(){return b}});var e,o,a=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"markdown-body"},[n("h1",[t._v("Loading 加载进度")]),n("p",[t._v("进度加载。")]),n("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),n("ul",[n("li",[t._v("异步请求时展示进度")])]),n("h2",{attrs:{id:"示例",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("示例")])]),n("p",[t._v("模拟路由加载")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("// # router.js\n\nimport Vue from 'vue'\nimport Router from 'vue-router'\nimport kui from 'kui-vue'\n\nVue.use(Router)\nlet router = new Router({\n  ....\n})\nrouter.beforeEach((to, from, next) => {\n  kui.Loading.start();\n  next();\n});\n\nrouter.afterEach(route => {\n  kui.Loading.finish();\n});\n")])]),n("p",[t._v("模拟ajax 请求")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("// 以jQuery的Ajax为例，部分代码省略\nimport $ from 'jquery';\nexport default {\n  methods: {\n    getData () {\n      this.$Loading.start();\n      $.ajax({\n        url: '/api/someurl',\n        type: 'get',\n        success: () => {\n          this.$Loading.finish();\n        }\n        error: () => {\n          this.$Loading.error();\n        },\n      });\n    }\n  }\n}\n")])]),n("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],s=r(1001),u={},d=(0,s.Z)(u,a,i,!1,null,null,null),l=d.exports,c=function(){var t=this,n=t._self._c;return n("Demo",[n("template",{slot:"component"},[n("div",[n("Button",{on:{click:function(n){return t.start()}}},[t._v("start")]),n("Button",{on:{click:t.finish}},[t._v("finish")]),n("Button",{on:{click:t.error}},[t._v("error")]),n("Button",{on:{click:function(n){return t.upload(30)}}},[t._v("upload 30%")]),n("Button",{on:{click:function(n){return t.upload(80)}}},[t._v("upload 80%")]),n("Button",{on:{click:function(n){return t.destroy()}}},[t._v("destroy")])],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),n("p",[t._v("最简单的用法。")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button @click="start()">start</Button>\n    <Button @click="finish">finish</Button>\n    <Button @click="error">error</Button>\n    <Button @click="upload(30)">upload 30%</Button>\n    <Button @click="upload(80)">upload 80%</Button>\n    <Button @click="destroy()">destroy</Button>\n  </div>\n</template>\n<script>\nexport default{\n  methods: {\n    upload(percent){\n      this.$Loading.upload(percent);\n    },\n    start() {\n      this.$Loading.start();\n    },\n    finish() {\n      this.$Loading.finish();\n    },\n    error() {\n      this.$Loading.error();\n    },\n    destroy(){\n      this.$Loading.destroy();\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},v=[],h={methods:{upload(t){this.$Loading.upload(t)},start(){this.$Loading.start()},finish(){this.$Loading.finish()},error(){this.$Loading.error()},destroy(){this.$Loading.destroy()}}},p=h,_=(0,s.Z)(p,c,v,!1,null,null,null),f=_.exports,g=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"markdown-body"},[n("h2",{attrs:{id:"loading-api",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loading-api"}},[t._v("Loading API")])]),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("start")]),n("td",[t._v("开始加载")]),n("td",[t._v("Function")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("finish")]),n("td",[t._v("完成加载")]),n("td",[t._v("Function")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("error")]),n("td",[t._v("加载错误")]),n("td",[t._v("Function")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("update")]),n("td",[t._v("手动更新进度")]),n("td",[t._v("Function(percent)")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("destroy")]),n("td",[t._v("vue的$.destroy()")]),n("td",[t._v("Function")]),n("td",[t._v("-")])])])])])}],k={},B=(0,s.Z)(k,g,m,!1,null,null,null),L=B.exports,x={render(){const t=arguments[0];return t("div",{class:"demo-loading"},[t(l),t(f),t(L)])}},y=x,$=(0,s.Z)(y,e,o,!1,null,null,null),b=$.exports}}]);