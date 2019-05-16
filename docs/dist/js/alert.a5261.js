/*! kui-vue v2.1.6 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+qlZ":function(t,e,s){"use strict";var o=s("rMEQ"),r=s("Ff65");var n={directives:{resize:s("7+I9").a},components:{Code:o.a,Collapse:r.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},e="k-demo-".concat(this.layout),s=this.layout,e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t)];var t,e,s},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},c=s("KHd+"),l=Object(c.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[s("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=l},fZ5h:function(t,e,s){"use strict";s.r(e);var o=s("+qlZ"),r={base:'<Alert type="success">Success Text</Alert>\n<Alert type="info">Info Text</Alert>\n<Alert type="warning">Warning Text</Alert>\n<Alert type="error">Error Text</Alert>',icon:'<Alert type="success" showIcon>Success Text</Alert>\n<Alert type="info" showIcon>Info Text</Alert>\n<Alert type="warning" showIcon>Warning Text</Alert>\n<Alert type="error" showIcon>Error Text</Alert>',close:'<Alert type="success" showIcon closable>Success Text</Alert>\n<Alert type="info" showIcon closable>Info Text</Alert>\n<Alert type="warning" showIcon closable>Warning Text</Alert>\n<Alert type="error" showIcon closable>Error Text</Alert>'},n=r,c={components:{Demo:o.a},data:function(){return{code:n}}},l=s("KHd+"),a=Object(l.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Alert 警告提示")]),t._v(" "),s("h3",[t._v("代码示例")]),t._v(" "),s("Demo",{attrs:{title:"基础"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Alert",{attrs:{type:"success"}},[t._v("Success Text")]),t._v(" "),s("Alert",{attrs:{type:"info"}},[t._v("Info Text")]),t._v(" "),s("Alert",{attrs:{type:"warning"}},[t._v("Warning Text")]),t._v(" "),s("Alert",{attrs:{type:"error"}},[t._v("Error Text")])],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n      "),s("code",[t._v("type")]),t._v("来控制展示类型")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),s("Demo",{attrs:{title:"图标"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Alert",{attrs:{type:"success",showIcon:""}},[t._v("Success Text")]),t._v(" "),s("Alert",{attrs:{type:"info",showIcon:""}},[t._v("Info Text")]),t._v(" "),s("Alert",{attrs:{type:"warning",showIcon:""}},[t._v("Warning Text")]),t._v(" "),s("Alert",{attrs:{type:"error",showIcon:""}},[t._v("Error Text")])],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[s("code",[t._v("showIcon")]),t._v("来设置是否显示图标")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.icon))])]),t._v(" "),s("Demo",{attrs:{title:"可关闭"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Alert",{attrs:{type:"success",showIcon:"",closable:""}},[t._v("Success Text")]),t._v(" "),s("Alert",{attrs:{type:"info",showIcon:"",closable:""}},[t._v("Info Text")]),t._v(" "),s("Alert",{attrs:{type:"warning",showIcon:"",closable:""}},[t._v("Warning Text")]),t._v(" "),s("Alert",{attrs:{type:"error",showIcon:"",closable:""}},[t._v("Error Text")])],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[s("code",[t._v("closable")]),t._v("来控制是否显示可关闭按钮")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.close))])]),t._v(" "),s("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("按钮类型，可选值为success、info、warning、error或者不设置")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("warning")])]),t._v(" "),s("tr",[s("td",[t._v("show-icon")]),t._v(" "),s("td",[t._v("是否显示图标")]),t._v(" "),s("td",[t._v("Boolean ")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("closable")]),t._v(" "),s("td",[t._v("是否显示关闭按钮")]),t._v(" "),s("td",[t._v("Boolean ")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("close")]),t._v(" "),s("td",[t._v("关闭时触发的回调函数 ")]),t._v(" "),s("td",[t._v("Function ")]),t._v(" "),s("td",[t._v("-")])])])])}],!1,null,null,null);e.default=a.exports}}]);