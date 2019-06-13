/*! kui-vue v2.2.3 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+qlZ":function(t,o,e){"use strict";var s=e("rMEQ"),l=e("Ff65");var n={directives:{resize:e("7+I9").a},components:{Code:s.a,Collapse:l.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},v=e("KHd+"),a=Object(v.a)(n,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[e("div",{ref:"demo",staticClass:"k-demo-main"},[e("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),e("div",{staticClass:"k-desc"},[e("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),e("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),e("div",{staticClass:"k-demo-line"}),t._v(" "),e("Collapse",[e("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;o.a=a},aTpQ:function(t,o,e){"use strict";e.r(o);var s={base:'<Row>\n  <Col span="12">col-12</Col>\n  <Col span="12">col-12</Col>\n</Row>\n<Row>\n  <Col span="8">col-8</Col>\n  <Col span="8">col-8</Col>\n  <Col span="8">col-8</Col>\n</Row>\n<Row>\n  <Col span="6">col-6</Col>\n  <Col span="6">col-6</Col>\n  <Col span="6">col-6</Col>\n  <Col span="6">col-6</Col>\n</Row>',gutter:'<Row gutter="10" class="pd">\n  <Col span="6">\n    <div>col-6</div>\n  </Col>\n  <Col span="6">\n    <div>col-6</div>\n  </Col>\n  <Col span="6">\n    <div>col-6</div>\n  </Col>\n  <Col span="6">\n    <div>col-6</div>\n  </Col>\n</Row>',offset:'<Row>\n  <Col span="8">col-8</Col>\n  <Col span="8" offset=8>col-8 | offset-8</Col>\n</Row>\n<Row>\n  <Col span="6">col-6</Col>\n  <Col span="6" offset=6>col-6 | offset-6</Col>\n  <Col span="6">col-6</Col>\n</Row>\n<Row>\n  <Col span="12" offset=12>col-12 offset-12</Col>\n</Row>'},l=s,n={components:{Demo:e("+qlZ").a},data:function(){return{code:l}}},v=e("KHd+"),a=Object(v.a)(n,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"demo-grid"},[e("h2",[t._v("Grid 栅格")]),t._v(" "),e("p",[t._v("采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题")]),t._v(" "),e("p",[t._v("两个概念，行row和列col，具体使用方法如下：")]),t._v(" "),t._m(0),t._v(" "),e("Alert",[t._v("注意：非 template/render 模式下，需使用 k-col。")]),t._v(" "),e("h3",[t._v("代码示例")]),t._v(" "),e("Demo",{attrs:{title:"基础",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Row",[e("Col",{attrs:{span:"12"}},[t._v("col-12")]),t._v(" "),e("Col",{attrs:{span:"12"}},[t._v("col-12")])],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v("col-8")])],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),e("Col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),e("Col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),e("Col",{attrs:{span:"6"}},[t._v("col-6")])],1)],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[e("code",[t._v("col")]),t._v("必须放在\n      "),e("code",[t._v("row")]),t._v("里面")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),e("Demo",{attrs:{title:"分栏间隔",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Row",{staticClass:"pd",attrs:{gutter:"10"}},[e("Col",{attrs:{span:"6"}},[e("div",[t._v("col-6")])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",[t._v("col-6")])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",[t._v("col-6")])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",[t._v("col-6")])])],1)],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("使用\n      "),e("code",[t._v("gutter")]),t._v("熟悉来设置分栏的间隔")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.gutter))])]),t._v(" "),e("Demo",{attrs:{title:"栅格偏移",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Row",[e("Col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),e("Col",{attrs:{span:"8",offset:"8"}},[t._v("col-8 | offset-8")])],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),e("Col",{attrs:{span:"6",offset:"6"}},[t._v("col-6 | offset-6")]),t._v(" "),e("Col",{attrs:{span:"6"}},[t._v("col-6")])],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"12",offset:"12"}},[t._v("col-12 offset-12")])],1)],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过设置\n      "),e("code",[t._v("offset")]),t._v("属性，将列进行左右偏移，偏移栅格数为\n      "),e("code",[t._v("offset")]),t._v("的值。")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.offset))])]),t._v(" "),e("h3",[t._v("Row API")]),t._v(" "),t._m(1),t._v(" "),e("h3",[t._v("Col API")]),t._v(" "),t._m(2)],1)},[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ul",{staticClass:"k-item-list"},[e("li",[t._v("使用\n      "),e("code",[t._v("row")]),t._v("在水平方向创建一行")]),t._v(" "),e("li",[t._v("将一组\n      "),e("code",[t._v("col")]),t._v("插入在\n      "),e("code",[t._v("row")]),t._v("中")]),t._v(" "),e("li",[t._v("在每个\n      "),e("code",[t._v("col")]),t._v("中，键入自己的内容")]),t._v(" "),e("li",[t._v("通过设置\n      "),e("code",[t._v("col")]),t._v("的\n      "),e("code",[t._v("span")]),t._v("参数，指定跨越的范围，其范围是1到24")]),t._v(" "),e("li",[t._v("每个\n      "),e("code",[t._v("row")]),t._v("中的\n      "),e("code",[t._v("col")]),t._v("总和应该为24")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("gutter")]),t._v(" "),e("td",[t._v("栅格间距，单位 px，左右平分")]),t._v(" "),e("td",[t._v("String,Number")]),t._v(" "),e("td",[t._v("0")])])])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("span")]),t._v(" "),e("td",[t._v("栅格的占位格数，可选值为0~24的整数")]),t._v(" "),e("td",[t._v("String,Number")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("offset")]),t._v(" "),e("td",[t._v("栅格左侧的间隔格数，可选值为1~24的整数")]),t._v(" "),e("td",[t._v("String,Number")]),t._v(" "),e("td",[t._v("-")])])])])}],!1,null,null,null);o.default=a.exports}}]);