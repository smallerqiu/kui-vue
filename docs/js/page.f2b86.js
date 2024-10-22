/*!
 * kui-vue v3.4.7
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[9768],{2881:function(t,e,r){r.r(e),r.d(e,{default:function(){return S}});var a=function(){this._self._c;return this._m(0)};a._withStripped=!0;var n=r(1900),l=(0,n.Z)({},a,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Page 分页")]),t._v(" "),e("p",[t._v("采用分页的形式分隔长列表，每次只加载一个页面。")]),t._v(" "),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),t._v(" "),e("ul",[e("li",[t._v("当加载/渲染所有数据将花费很多时间时；")]),t._v(" "),e("li",[t._v("可切换页码浏览数据。")])]),t._v(" "),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],!1,null,null,null).exports,s=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-page"},[e("Page",{attrs:{total:50},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),t._v(" "),e("p",[t._v("基础分页。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-page">\n    <Page v-model:current="current" :total="50"/>\n  </div>\n</template>\n<script>\nexport default{\n  data(){\n    return {\n      current:1\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};s._withStripped=!0;var v={data(){return{current:1}}},o=(0,n.Z)(v,s,[],!1,null,null,null).exports,c=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-page"},[e("Page",{attrs:{total:200},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"更多",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[t._v("更多")])]),t._v(" "),e("p",[t._v("更多分页。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-page">\n    <Page v-model:current="current" :total="200"/>\n  </div>\n</template>\n<script>\nexport default{\n  data(){\n    return {\n      current:10\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};c._withStripped=!0;var _={data(){return{current:10}}},i=(0,n.Z)(_,c,[],!1,null,null,null).exports,d=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-page"},[e("Page",{attrs:{total:200,showSizer:""},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),t._v(" "),e("Page",{attrs:{total:200,showSizer:"","page-size":20},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),t._v(" "),e("Page",{attrs:{total:1e3,showSizer:"","page-size":30,"size-data":t.sizeData},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"条目数和自定义条目数",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#条目数和自定义条目数"}},[t._v("条目数和自定义条目数")])]),t._v(" "),e("p",[t._v("改变每页显示条目数。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-page">\n    <Page v-model:current="current" :total="200" showSizer/>\n    <Page v-model:current="current" :total="200" showSizer :page-size="20"/>\n    <Page v-model:current="current" :total="1000" showSizer :page-size="30" :size-data="sizeData"/>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      current: 3,\n      sizeData:[30,50,80,100]\n    }\n  }\n}\n<\/script>  \n\n')])])])],2)};d._withStripped=!0;var u={data(){return{current:3,sizeData:[30,50,80,100]}}},p=(0,n.Z)(u,d,[],!1,null,null,null).exports,h=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-page"},[e("Page",{attrs:{total:200,"show-elevator":""},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"跳转",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跳转"}},[t._v("跳转")])]),t._v(" "),e("p",[t._v("快速跳转到某一页。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-page">\n    <Page v-model:current="current" :total="200" show-elevator/>\n  </div>\n</template>\n<script>\nexport default{\n  data(){\n    return {\n      current:10\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};h._withStripped=!0;var m={data(){return{current:10}}},g=(0,n.Z)(m,h,[],!1,null,null,null).exports,f=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-page"},[e("Page",{attrs:{current:t.current,total:50,size:"small"}}),t._v(" "),e("Page",{attrs:{current:t.current,total:50,size:"small","show-sizer":""}}),t._v(" "),e("Page",{attrs:{current:t.current,total:50,size:"small","show-elevator":""}}),t._v(" "),e("Page",{attrs:{current:t.current,total:50,size:"small","show-elevator":"","show-total":""}})],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"尺寸",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#尺寸"}},[t._v("尺寸")])]),t._v(" "),e("p",[t._v("展示小尺寸。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-page">\n    <Page :current="current" :total="50" size="small"/>\n    <Page :current="current" :total="50" size="small" show-sizer/>\n    <Page :current="current" :total="50" size="small" show-elevator/>\n    <Page :current="current" :total="50" size="small" show-elevator show-total/>\n  </div>\n</template>\n<script>\nexport default{\n  data(){\n    return {\n      current:1\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};f._withStripped=!0;var z={data(){return{current:1}}},w=(0,n.Z)(z,f,[],!1,null,null,null).exports,x=function(){this._self._c;return this._m(0)};x._withStripped=!0;var b=(0,n.Z)({},x,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("current")]),t._v(" "),e("td",[t._v("当前页码")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("1")])]),t._v(" "),e("tr",[e("td",[t._v("total")]),t._v(" "),e("td",[t._v("数据总数")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("0")])]),t._v(" "),e("tr",[e("td",[t._v("page-size")]),t._v(" "),e("td",[t._v("每页条数")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("10")])]),t._v(" "),e("tr",[e("td",[t._v("show-sizer")]),t._v(" "),e("td",[t._v("是否显示页码组")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("show-total")]),t._v(" "),e("td",[t._v("是否显示总数")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("show-elevator")]),t._v(" "),e("td",[t._v("是否显示页码阶梯")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("size-data")]),t._v(" "),e("td",[t._v("自定义页码组数据")]),t._v(" "),e("td",[t._v("Array")]),t._v(" "),e("td",[t._v("[10,15,20,30,40]")])]),t._v(" "),e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("值为'small' 时，程序小尺寸")]),t._v(" "),e("td",[t._v("Sting")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("change")]),t._v(" "),e("td",[t._v("页码改变的回调，返回改变后的页码")]),t._v(" "),e("td",[t._v("Function(page)")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("page-size-change")]),t._v(" "),e("td",[t._v("切换页码组改变的回调，返回改变后的 "),e("code",{pre:!0},[t._v("page-size")])]),t._v(" "),e("td",[t._v("Function({current,pageSize})")]),t._v(" "),e("td",[t._v("-")])])])])])}],!1,null,null,null).exports,P={render(){const t=arguments[0];return t("div",[t(l),t(o),t(i),t(p),t(g),t(w),t(b)])}},C=P,S=(0,n.Z)(C,undefined,undefined,!1,null,null,null).exports}}]);