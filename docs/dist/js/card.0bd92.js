/*! kui-vue v2.2.8 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+qlZ":function(t,e,s){"use strict";s("MnsJ");var n=s("rMEQ"),o=s("Ff65");var a={directives:{resize:s("7+I9").a},components:{Code:n.a,Collapse:o.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},i=s("KHd+"),r=Object(i.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=r},MnsJ:function(t,e,s){var n=s("WArN");"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};s("LboF")(n,o);n.locals&&(t.exports=n.locals)},SpRl:function(t,e,s){"use strict";s.r(e);var n={base:'<Card title="卡片标题" icon="ios-heart">\n  <span slot="extra" @click="$Message.info(\'刚刚摇了下\')">摇一摇</span>\n  <p>内容随便写， 欢迎使用</p>\n  <p>内容随便写， 欢迎使用</p>\n  <p>内容随便写， 欢迎使用</p>\n  <p>内容随便写， 欢迎使用</p>\n  <p>内容随便写， 欢迎使用</p>\n  <p>内容随便写， 欢迎使用</p>\n</Card>',border:'<Card title="卡片标题" icon="ios-heart" bordered>\n  <span slot="extra">摇一摇</span>\n  <p>内容随便写， 欢迎使用</p>\n  <p>内容随便写， 欢迎使用</p>\n  <p>内容随便写， 欢迎使用</p>\n  <p>内容随便写， 欢迎使用</p>\n  <p>内容随便写， 欢迎使用</p>\n  <p>内容随便写， 欢迎使用</p>\n</Card>'},o=n,a={components:{Demo:s("+qlZ").a},data:function(){return{code:o}}},i=s("KHd+"),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Card 卡片")]),e._v(" "),s("p",[e._v("一个有标题的大盒子")]),e._v(" "),s("h3",[e._v("代码示例")]),e._v(" "),s("Row",{attrs:{gutter:"8"}},[s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{title:"基础",layout:"vertical"}},[s("div",{staticStyle:{background:"#eee",padding:"15px"},attrs:{slot:"content"},slot:"content"},[s("Card",{attrs:{title:"卡片标题",icon:"ios-heart"}},[s("span",{attrs:{slot:"extra"},on:{click:function(t){return e.$Message.info("刚刚摇了下")}},slot:"extra"},[e._v("摇一摇")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")])])],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n                "),s("code",[e._v("title")]),e._v("和\n                "),s("code",[e._v("icon")]),e._v("可设置标题和图标")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])])],1),e._v(" "),s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{title:"边框",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Card",{attrs:{title:"卡片标题",icon:"ios-heart",bordered:""}},[s("span",{attrs:{slot:"extra"},slot:"extra"},[e._v("摇一摇")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")]),e._v(" "),s("p",[e._v("内容随便写， 欢迎使用")])])],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[s("code",[e._v("bordered")]),e._v("可以设置是否显示边框")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.border))])])],1)],1),e._v(" "),s("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("卡片的标题")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("icon")]),t._v(" "),s("td",[t._v("卡片标题的图标")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("bordered")]),t._v(" "),s("td",[t._v("卡片是否显示边框")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("extra")]),t._v(" "),s("td",[t._v("卡片标题扩展")]),t._v(" "),s("td",[t._v("slot")]),t._v(" "),s("td",[t._v("-")])])])])}],!1,null,null,null);e.default=r.exports},WArN:function(t,e,s){(t.exports=s("JPst")(!1)).push([t.i,"",""])}}]);