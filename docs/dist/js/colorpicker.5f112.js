/*! kui-vue v2.1.9 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+qlZ":function(t,e,o){"use strict";var s=o("rMEQ"),i=o("Ff65");var a={directives:{resize:o("7+I9").a},components:{Code:s.a,Collapse:i.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},n=o("KHd+"),l=Object(n.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[o("div",{ref:"demo",staticClass:"k-demo-main"},[o("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),o("div",{staticClass:"k-desc"},[o("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),o("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[o("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),o("div",{staticClass:"k-demo-line"}),t._v(" "),o("Collapse",[o("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=l},ya5q:function(t,e,o){"use strict";o.r(e);var s={components:{Demo:o("+qlZ").a},data:function(){return{defaultColor:"#eeece1",base:'<ColorPicker v-model="defaultColor"></ColorPicker>'}}},i=o("KHd+"),a=Object(i.a)(s,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("ColorPicker 颜色")]),e._v(" "),o("Alert",[e._v("注意：非 template/render 模式下，需使用 color-picker。")]),e._v(" "),o("h3",[e._v("代码示例")]),e._v(" "),o("Demo",{attrs:{title:"基础用法"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("p",[e._v(e._s(e.defaultColor))]),e._v(" "),o("ColorPicker",{model:{value:e.defaultColor,callback:function(t){e.defaultColor=t},expression:"defaultColor"}})],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("数据模型是从offce 颜色组件扒下来的。")]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.base))])]),e._v(" "),o("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("value")]),t._v(" "),o("td",[t._v("绑定的值，可使用 v-model 双向绑定")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("'#000000'")])]),t._v(" "),o("tr",[o("td",[t._v("transfer")]),t._v(" "),o("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("change")]),t._v(" "),o("td",[t._v("当绑定值变化时触发，返回当前值")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])])])])}],!1,null,null,null);e.default=a.exports}}]);