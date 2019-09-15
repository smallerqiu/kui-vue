/*! kui-vue v2.3.2 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"+qlZ":function(t,e,s){"use strict";s("MnsJ");var o=s("rMEQ"),a=s("Ff65");var v={directives:{resize:s("7+I9").a},components:{Code:o.a,Collapse:a.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},n=s("KHd+"),i=Object(n.a)(v,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=i},"1h0Y":function(t,e,s){"use strict";s.r(e);var o=s("+qlZ"),a={base:'<Page :total="100" :curent="1" :pagesize="10"></Page>',size:'<Page :total="60" :curent="1" :pagesize="10" mini></Page>',sizer:'<Page :total="60" :current="1" show-sizer show-total show-elevator :pagesize="10" mini @change="test"></Page>'},v=a,n={components:{Demo:o.a},data:function(){return{code:v}},methods:{test:function(t){console.log(t)}}},i=s("KHd+"),_=Object(i.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Page 分页")]),t._v(" "),s("h3",[t._v("代码示例")]),t._v(" "),s("Demo",{attrs:{title:"基础",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Page",{attrs:{total:1e3,current:1,pagesize:10}})],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("基本分页，\n      "),s("code",[t._v("total")]),t._v("为总页数，\n      "),s("code",[t._v("current")]),t._v("为当前页码，\n      "),s("code",[t._v("pagesize")]),t._v("为页码分组")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),s("Demo",{attrs:{title:"尺寸",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Page",{attrs:{total:60,current:1,pagesize:10,mini:""},on:{change:t.test}})],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("设置\n      "),s("code",[t._v("mini")]),t._v("可设置组件小尺寸展示，\n      "),s("code",[t._v("change")]),t._v("为页码改变触发事件")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.size))])]),t._v(" "),s("Demo",{attrs:{title:"辅助分页",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Page",{attrs:{total:60,current:1,"show-sizer":"","show-total":"","show-elevator":"",pagesize:10,mini:""},on:{change:t.test}})],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可以切换每页显示的数量。")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.sizer))])]),t._v(" "),s("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("current")]),t._v(" "),s("td",[t._v("当前页码")]),t._v(" "),s("td",[t._v("Number,String")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("total")]),t._v(" "),s("td",[t._v("数据总数")]),t._v(" "),s("td",[t._v("Number,String")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("pagesize")]),t._v(" "),s("td",[t._v("每页条数")]),t._v(" "),s("td",[t._v("Number,String ")]),t._v(" "),s("td",[t._v("10")])]),t._v(" "),s("tr",[s("td",[t._v("show-sizer")]),t._v(" "),s("td",[t._v("是否显示页码组")]),t._v(" "),s("td",[t._v("Boolean ")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("show-total")]),t._v(" "),s("td",[t._v("是否显示总数")]),t._v(" "),s("td",[t._v("Boolean ")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("show-elevator")]),t._v(" "),s("td",[t._v("是否显示页码阶梯")]),t._v(" "),s("td",[t._v("Boolean ")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("size-data")]),t._v(" "),s("td",[t._v("自定义页码组数据")]),t._v(" "),s("td",[t._v("Array ")]),t._v(" "),s("td",[t._v("[10,15,20,30,40]")])]),t._v(" "),s("tr",[s("td",[t._v("mini")]),t._v(" "),s("td",[t._v("是否呈现迷你模式")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("页码改变的回调，返回改变后的页码")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("page-size-change")]),t._v(" "),s("td",[t._v("切换页码组改变的回调，返回改变后的page-size")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("-")])])])])}],!1,null,null,null);e.default=_.exports},MnsJ:function(t,e,s){var o=s("WArN");"string"==typeof o&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};s("LboF")(o,a);o.locals&&(t.exports=o.locals)},WArN:function(t,e,s){(t.exports=s("JPst")(!1)).push([t.i,"",""])}}]);