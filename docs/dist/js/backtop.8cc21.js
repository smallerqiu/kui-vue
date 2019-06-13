/*! kui-vue v2.2.3 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+qlZ":function(t,e,n){"use strict";var o=n("rMEQ"),s=n("Ff65");var i={directives:{resize:n("7+I9").a},components:{Code:o.a,Collapse:s.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},a=n("KHd+"),c=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=c},Anko:function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,"\n.custom-backtop {\n  background: #2d94ff;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n}\n",""])},hig4:function(t,e,n){"use strict";n.r(e);var o=n("+qlZ"),s={base:"<BackTop></BackTop>",custom:'<BackTop bottom="90" right="100">\n    <div class="custom-backtop">UP</div>\n</BackTop>\n<style>\n.custom-backtop {\n  background: #2d94ff;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n}\n</style>\n'},i=s,a={components:{Demo:o.a},data:function(){return{code:i}}},c=(n("q0ej"),n("KHd+")),r=Object(c.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("BackTop")]),t._v(" "),n("p",[t._v("当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"基础用法",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n        向下滚动页面，灰色的按钮为默认效果。\n        "),n("BackTop")],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n        默认位置距离页面右部和底部 50px，滚动至距顶端 400px 时显示。\n      ")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])])],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"基础用法",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n        自定义按钮为蓝色的按钮\n        "),n("BackTop",{attrs:{bottom:"90",right:"100"}},[n("div",{staticClass:"custom-backtop"},[t._v("UP")])])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n        可以自定义回到顶部按钮的样式\n        "),n("code",[t._v("bottom")]),t._v("为90px，\n        "),n("code",[t._v("right")]),t._v("为100px\n      ")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.custom))])])],1)],1),t._v(" "),n("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("height")]),t._v(" "),n("td",[t._v("页面滚动高度达到该值时才显示\n          "),n("code",[t._v("BackTop")]),t._v("组件 ")]),t._v(" "),n("td",[t._v("String,Number")]),t._v(" "),n("td",[t._v("400")])]),t._v(" "),n("tr",[n("td",[t._v("bottom")]),t._v(" "),n("td",[t._v("组件距离底部的距离 ")]),t._v(" "),n("td",[t._v("String,Number ")]),t._v(" "),n("td",[t._v("40")])]),t._v(" "),n("tr",[n("td",[t._v("right")]),t._v(" "),n("td",[t._v("组件距离右部的距离 ")]),t._v(" "),n("td",[t._v("String,Number ")]),t._v(" "),n("td",[t._v("40")])]),t._v(" "),n("tr",[n("td",[t._v("click")]),t._v(" "),n("td",[t._v("点击按钮时触发 ")]),t._v(" "),n("td",[t._v("Function ")]),t._v(" "),n("td",[t._v("-")])])])])}],!1,null,null,null);e.default=r.exports},q0ej:function(t,e,n){"use strict";var o=n("un8C");n.n(o).a},un8C:function(t,e,n){var o=n("Anko");"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,s);o.locals&&(t.exports=o.locals)}}]);