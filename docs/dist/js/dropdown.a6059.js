/*! kui-vue v2.1.9 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+qlZ":function(t,e,i){"use strict";var s=i("rMEQ"),n=i("Ff65");var o={directives:{resize:i("7+I9").a},components:{Code:s.a,Collapse:n.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},a=i("KHd+"),c=Object(a.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[i("div",{ref:"demo",staticClass:"k-demo-main"},[i("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),i("div",{staticClass:"k-desc"},[i("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),i("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[i("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),i("div",{staticClass:"k-demo-line"}),t._v(" "),i("Collapse",[i("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=c},ojxE:function(t,e,i){"use strict";i.r(e);var s={components:{Demo:i("+qlZ").a},data:function(){return{}}},n=i("KHd+"),o=Object(n.a)(s,function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("下拉菜单")]),t._v(" "),i("h3",[t._v("代码示例")])])}],!1,null,null,null);e.default=o.exports}}]);