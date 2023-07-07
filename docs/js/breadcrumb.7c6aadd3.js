/*!
 * kui-vue v3.3.5-c
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[5548],{4586:function(t,e,r){r.r(e),r.d(e,{default:function(){return F}});var a,n,o=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Breadcrumb 面包屑")]),e("p",[t._v("显示当前页面在系统层级结构中的位置，并能向上返回。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),e("ul",[e("li",[t._v("当系统拥有超过两级以上的层级结构时；")]),e("li",[t._v("当需要告知用户『你在哪里』时；")]),e("li",[t._v("当需要向上导航的功能时。")])]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],d=r(1001),c={},u=(0,d.Z)(c,o,m,!1,null,null,null),s=u.exports,l=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:"/"}},[t._v("Home")]),e("BreadcrumbItem",{attrs:{to:"/components/breadcrumb"}},[t._v("breadcrumb")]),e("BreadcrumbItem",[t._v("other")])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("基础用法")])]),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("to")]),t._v(" 添加跳转链接")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Breadcrumb>\n      <BreadcrumbItem to="/">Home</BreadcrumbItem>\n      <BreadcrumbItem to="/components/breadcrumb">breadcrumb</BreadcrumbItem>\n      <BreadcrumbItem>other</BreadcrumbItem>\n    </Breadcrumb>\n  </div>\n</template>\n\n')])])])],2)},i=[],p={},v=(0,d.Z)(p,l,i,!1,null,null,null),_=v.exports,b=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:"/",icon:t.Home}},[t._v("Home")]),e("BreadcrumbItem",{attrs:{to:"/components/breadcrumb",icon:t.Cloud}},[t._v("app")]),e("BreadcrumbItem",{attrs:{icon:t.Heart}},[t._v("other")])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"设置图标",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置图标"}},[t._v("设置图标")])]),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("icon")]),t._v(" 设置图标")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Breadcrumb>\n      <BreadcrumbItem to="/" :icon="Home">Home</BreadcrumbItem>\n      <BreadcrumbItem to="/components/breadcrumb" :icon="Cloud">app</BreadcrumbItem>\n      <BreadcrumbItem :icon="Heart">other</BreadcrumbItem>\n    </Breadcrumb>\n  </div>\n</template>\n<script>\nimport { Heart, Home, Cloud } from "kui-icons"\nexport default{\n  data() {\n    return {\n      Heart, Home, Cloud\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},h=[],B=r(5118),f={data(){return{Heart:B.Heart,Home:B.Home,Cloud:B.Cloud}}},H=f,I=(0,d.Z)(H,b,h,!1,null,null,null),C=I.exports,x=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:"/",icon:t.Home,separator:"~"}},[t._v("Home")]),e("BreadcrumbItem",{attrs:{to:"/components/breadcrumb",icon:t.Cloud,separator:"~"}},[t._v("breadcrumb")]),e("BreadcrumbItem",{attrs:{icon:t.Heart,separator:"~"}},[t._v("other")])],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"分隔符",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分隔符"}},[t._v("分隔符")])]),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("separator")]),t._v(" 设置分隔符")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Breadcrumb>\n    <BreadcrumbItem to="/" :icon="Home" separator="~">Home</BreadcrumbItem>\n    <BreadcrumbItem to="/components/breadcrumb" :icon="Cloud" separator="~">breadcrumb</BreadcrumbItem>\n    <BreadcrumbItem :icon="Heart" separator="~">other</BreadcrumbItem>\n  </Breadcrumb>\n</template>\n<script>\nimport { Heart, Home, Cloud } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Heart, Home, Cloud\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},k=[],g={data(){return{Heart:B.Heart,Home:B.Home,Cloud:B.Cloud}}},Z=g,w=(0,d.Z)(Z,x,k,!1,null,null,null),y=w.exports,D=function(){var t=this;t._self._c;return t._m(0)},S=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"breadcrumbitem-api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbitem-api"}},[t._v("BreadcrumbItem API")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("separator")]),e("td",[t._v("自定义分隔符")]),e("td",[t._v("String")]),e("td",[t._v("/")])]),e("tr",[e("td",[t._v("to")]),e("td",[t._v("自定义链接函数,和 "),e("code",{pre:!0},[t._v("vue-router")]),t._v(" 配合使用")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("replace")]),e("td",[t._v("路由跳转时，开启 "),e("code",{pre:!0},[t._v("replace")]),t._v(" 将不会向 "),e("code",{pre:!0},[t._v("history")]),t._v(" 添加新记录")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("按钮的图标")]),e("td",[t._v("String")]),e("td",[t._v("-")])])])])])}],A={},P=(0,d.Z)(A,D,S,!1,null,null,null),j=P.exports,q={render(){const t=arguments[0];return t("div",[t(s),t(_),t(C),t(y),t(j)])}},z=q,E=(0,d.Z)(z,a,n,!1,null,null,null),F=E.exports}}]);