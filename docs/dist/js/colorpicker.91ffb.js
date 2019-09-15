/*! kui-vue v2.3.2 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+qlZ":function(t,e,s){"use strict";s("MnsJ");var o=s("rMEQ"),n=s("Ff65");var a={directives:{resize:s("7+I9").a},components:{Code:o.a,Collapse:n.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},i=s("KHd+"),l=Object(i.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=l},MnsJ:function(t,e,s){var o=s("WArN");"string"==typeof o&&(o=[[t.i,o,""]]);var n={insert:"head",singleton:!1};s("LboF")(o,n);o.locals&&(t.exports=o.locals)},WArN:function(t,e,s){(t.exports=s("JPst")(!1)).push([t.i,"",""])},ya5q:function(t,e,s){"use strict";s.r(e);var o={components:{Demo:s("+qlZ").a},data:function(){return{defaultColor:"#eeece1",base:'<ColorPicker v-model="defaultColor"></ColorPicker>'}}},n=s("KHd+"),a=Object(n.a)(o,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("ColorPicker 颜色")]),e._v(" "),s("Alert",{attrs:{type:"info"}},[e._v("注意：非 template/render 模式下，需使用 color-picker。")]),e._v(" "),s("Alert",[e._v("注意：若下拉被父级元素遮挡，请设置组件 属性 `transfer=true`。")]),e._v(" "),s("h3",[e._v("代码示例")]),e._v(" "),s("Demo",{attrs:{title:"基础用法"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[e._v(e._s(e.defaultColor))]),e._v(" "),s("ColorPicker",{model:{value:e.defaultColor,callback:function(t){e.defaultColor=t},expression:"defaultColor"}})],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("数据模型是从offce 颜色组件扒下来的。")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.base))])]),e._v(" "),s("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("绑定的值，可使用 v-model 双向绑定")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("'#000000'")])]),t._v(" "),s("tr",[s("td",[t._v("transfer")]),t._v(" "),s("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("当绑定值变化时触发，返回当前值")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("-")])])])])}],!1,null,null,null);e.default=a.exports}}]);