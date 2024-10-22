/*!
 * kui-vue v3.4.7
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[5548],{7047:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var a=function(){this._self._c;return this._m(0)};a._withStripped=!0;var n=r(1900),o=(0,n.Z)({},a,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Breadcrumb 面包屑")]),t._v(" "),e("p",[t._v("显示当前页面在系统层级结构中的位置，并能向上返回。")]),t._v(" "),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),t._v(" "),e("ul",[e("li",[t._v("当系统拥有超过两级以上的层级结构时；")]),t._v(" "),e("li",[t._v("当需要告知用户『你在哪里』时；")]),t._v(" "),e("li",[t._v("当需要向上导航的功能时。")])]),t._v(" "),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],!1,null,null,null).exports,d=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("BreadcrumbItem",{attrs:{to:"/components/breadcrumb"}},[t._v("breadcrumb")]),t._v(" "),e("BreadcrumbItem",[t._v("other")])],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("基础用法")])]),t._v(" "),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("to")]),t._v(" 添加跳转链接")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Breadcrumb>\n      <BreadcrumbItem to="/">Home</BreadcrumbItem>\n      <BreadcrumbItem to="/components/breadcrumb">breadcrumb</BreadcrumbItem>\n      <BreadcrumbItem>other</BreadcrumbItem>\n    </Breadcrumb>\n  </div>\n</template>\n\n')])])])],2)};d._withStripped=!0;var m=(0,n.Z)({},d,[],!1,null,null,null).exports,c=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:"/",icon:t.Home}},[t._v("Home")]),t._v(" "),e("BreadcrumbItem",{attrs:{to:"/components/breadcrumb",icon:t.Cloud}},[t._v("app")]),t._v(" "),e("BreadcrumbItem",{attrs:{icon:t.Heart}},[t._v("other")])],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"设置图标",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置图标"}},[t._v("设置图标")])]),t._v(" "),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("icon")]),t._v(" 设置图标")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Breadcrumb>\n      <BreadcrumbItem to="/" :icon="Home">Home</BreadcrumbItem>\n      <BreadcrumbItem to="/components/breadcrumb" :icon="Cloud">app</BreadcrumbItem>\n      <BreadcrumbItem :icon="Heart">other</BreadcrumbItem>\n    </Breadcrumb>\n  </div>\n</template>\n<script>\nimport { Heart, Home, Cloud } from "kui-icons"\nexport default{\n  data() {\n    return {\n      Heart, Home, Cloud\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};c._withStripped=!0;var v=r(2324),u={data(){return{Heart:v.Heart,Home:v.Home,Cloud:v.Cloud}}},_=(0,n.Z)(u,c,[],!1,null,null,null).exports,s=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:"/",icon:t.Home,separator:"~"}},[t._v("Home")]),t._v(" "),e("BreadcrumbItem",{attrs:{to:"/components/breadcrumb",icon:t.Cloud,separator:"~"}},[t._v("breadcrumb")]),t._v(" "),e("BreadcrumbItem",{attrs:{icon:t.Heart,separator:"~"}},[t._v("other")])],1)],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"分隔符",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分隔符"}},[t._v("分隔符")])]),t._v(" "),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("separator")]),t._v(" 设置分隔符")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Breadcrumb>\n    <BreadcrumbItem to="/" :icon="Home" separator="~">Home</BreadcrumbItem>\n    <BreadcrumbItem to="/components/breadcrumb" :icon="Cloud" separator="~">breadcrumb</BreadcrumbItem>\n    <BreadcrumbItem :icon="Heart" separator="~">other</BreadcrumbItem>\n  </Breadcrumb>\n</template>\n<script>\nimport { Heart, Home, Cloud } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Heart, Home, Cloud\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};s._withStripped=!0;var l={data(){return{Heart:v.Heart,Home:v.Home,Cloud:v.Cloud}}},i=(0,n.Z)(l,s,[],!1,null,null,null).exports,p=function(){this._self._c;return this._m(0)};p._withStripped=!0;var b=(0,n.Z)({},p,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"breadcrumbitem-api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbitem-api"}},[t._v("BreadcrumbItem API")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("separator")]),t._v(" "),e("td",[t._v("自定义分隔符")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("/")])]),t._v(" "),e("tr",[e("td",[t._v("to")]),t._v(" "),e("td",[t._v("自定义链接函数,和 "),e("code",{pre:!0},[t._v("vue-router")]),t._v(" 配合使用")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("replace")]),t._v(" "),e("td",[t._v("路由跳转时，开启 "),e("code",{pre:!0},[t._v("replace")]),t._v(" 将不会向 "),e("code",{pre:!0},[t._v("history")]),t._v(" 添加新记录")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("按钮的图标")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])])])])])}],!1,null,null,null).exports,h={render(){const t=arguments[0];return t("div",[t(o),t(m),t(_),t(i),t(b)])}},B=h,f=(0,n.Z)(B,undefined,undefined,!1,null,null,null).exports}}]);