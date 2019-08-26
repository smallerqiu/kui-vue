/*! kui-vue v2.2.8 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+qlZ":function(t,e,r){"use strict";r("MnsJ");var o=r("rMEQ"),a=r("Ff65");var s={directives:{resize:r("7+I9").a},components:{Code:o.a,Collapse:a.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},c=r("KHd+"),n=Object(c.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[r("div",{ref:"demo",staticClass:"k-demo-main"},[r("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),r("div",{staticClass:"k-desc"},[r("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),r("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),r("div",{staticClass:"k-demo-line"}),t._v(" "),r("Collapse",[r("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=n},MnsJ:function(t,e,r){var o=r("WArN");"string"==typeof o&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};r("LboF")(o,a);o.locals&&(t.exports=o.locals)},WArN:function(t,e,r){(t.exports=r("JPst")(!1)).push([t.i,"",""])},"XXu+":function(t,e,r){"use strict";r.r(e);var o=r("+qlZ"),a={base:'<Breadcrumb>\n  <BreadcrumbItem to="/">Home</BreadcrumbItem>\n  <BreadcrumbItem to="/breadcrumb">breadcrumb</BreadcrumbItem>\n  <BreadcrumbItem>other</BreadcrumbItem>\n</Breadcrumb>',icon:'<Breadcrumb>\n  <BreadcrumbItem to="/" icon="ios-home">Home</BreadcrumbItem>\n  <BreadcrumbItem to="/breadcrumb" icon="logo-buffer">breadcrumb</BreadcrumbItem>\n  <BreadcrumbItem icon="ios-heart">other</BreadcrumbItem>\n</Breadcrumb>',separator:'<Breadcrumb>\n  <BreadcrumbItem to="/" icon="home" separator="~">Home</BreadcrumbItem>\n  <BreadcrumbItem to="/breadcrumb" icon="logo-buffer" separator="~">breadcrumb</BreadcrumbItem>\n  <BreadcrumbItem icon="ios-heart" separator="~">other</BreadcrumbItem>\n</Breadcrumb>'},s=a,c={components:{Demo:o.a},data:function(){return{code:s}}},n=r("KHd+"),d=Object(n.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Breadcrumb 面包屑")]),t._v(" "),r("p",[t._v("显示当前页面在系统层级结构中的位置，并能向上返回。")]),t._v(" "),r("h3",[t._v("代码示例")]),t._v(" "),r("Demo",{attrs:{title:"基础用法"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("Breadcrumb",[r("BreadcrumbItem",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("BreadcrumbItem",{attrs:{to:"/breadcrumb"}},[t._v("breadcrumb")]),t._v(" "),r("BreadcrumbItem",[t._v("other")])],1)],1),t._v(" "),r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n            通过\n            "),r("code",[t._v("to")]),t._v("添加跳转链接\n        ")]),t._v(" "),r("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),r("Demo",{attrs:{title:"设置图标"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("Breadcrumb",[r("BreadcrumbItem",{attrs:{to:"/",icon:"ios-home"}},[t._v("Home")]),t._v(" "),r("BreadcrumbItem",{attrs:{to:"/breadcrumb",icon:"logo-buffer"}},[t._v("breadcrumb")]),t._v(" "),r("BreadcrumbItem",{attrs:{icon:"ios-heart"}},[t._v("other")])],1)],1),t._v(" "),r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n            通过\n            "),r("code",[t._v("icon")]),t._v("设置图标\n        ")]),t._v(" "),r("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.icon))])]),t._v(" "),r("Demo",{attrs:{title:"分隔符"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("Breadcrumb",[r("BreadcrumbItem",{attrs:{to:"/",icon:"ios-home",separator:"~"}},[t._v("Home")]),t._v(" "),r("BreadcrumbItem",{attrs:{to:"/breadcrumb",icon:"logo-buffer",separator:"~"}},[t._v("breadcrumb")]),t._v(" "),r("BreadcrumbItem",{attrs:{icon:"ios-heart",separator:"~"}},[t._v("other")])],1)],1),t._v(" "),r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n            通过\n            "),r("code",[t._v("separator")]),t._v("设置分隔符\n        ")]),t._v(" "),r("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.separator))])]),t._v(" "),r("h3",[t._v("BreadcrumbItem API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-border"},[r("table",[r("tr",[r("th",[t._v("属性")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")])]),t._v(" "),r("tr",[r("td",[t._v("separator")]),t._v(" "),r("td",[t._v("自定义分隔符")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("/")])]),t._v(" "),r("tr",[r("td",[t._v("to")]),t._v(" "),r("td",[t._v("自定义链接函数,和\n                    "),r("code",[t._v("vue-router")]),t._v("配合使用 ")]),t._v(" "),r("td",[t._v("String ")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("replace")]),t._v(" "),r("td",[t._v("路由跳转时，开启 replace 将不会向 history 添加新记录")]),t._v(" "),r("td",[t._v("Boolean ")]),t._v(" "),r("td",[t._v("false")])]),t._v(" "),r("tr",[r("td",[t._v("icon")]),t._v(" "),r("td",[t._v("按钮的图标")]),t._v(" "),r("td",[t._v("String ")]),t._v(" "),r("td",[t._v("-")])])])])}],!1,null,null,null);e.default=d.exports}}]);