/*! kui-vue v2.0.8 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"+qlZ":function(t,o,e){"use strict";var n=e("rMEQ"),i=e("Ff65");var l={directives:{resize:e("7+I9").a},components:{Code:n.a,Collapse:i.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},o="k-demo-".concat(this.layout),e=this.layout,o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t)];var t,o,e},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},s=e("KHd+"),a=Object(s.a)(l,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[e("div",{ref:"demo",staticClass:"k-demo-main"},[e("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),e("div",{staticClass:"k-desc"},[e("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),e("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[e("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),e("div",{staticClass:"k-demo-line"}),t._v(" "),e("Collapse",[e("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;o.a=a},jBOj:function(t,o,e){"use strict";e.r(o);var n=e("+qlZ"),i={base:'<Tooltip  content="我是提示内容">\n  <p>鼠标划过，我是一段文字</p>\n</Tooltip>',position:'<div style="margin-left:80px;white-space: nowrap;">\n  <Tooltip  content="Tooltip的显示内容" placement="top-left">\n    <Button>上左</Button>\n  </Tooltip>\n  <Tooltip  content="Tooltip的显示内容" placement="top">\n    <Button>上边</Button>\n  </Tooltip>\n  <Tooltip  content="Tooltip的显示内容" placement="top-right">\n    <Button>上右</Button>\n  </Tooltip>\n</div>\n<div style="float:left;height:150px;width:80px;">\n  <Tooltip  content="Tooltip的显示内容" placement="left-top">\n    <Button>左上</Button>\n  </Tooltip>\n  <Tooltip  content="Tooltip的显示内容" placement="left">\n    <Button>左边</Button>\n  </Tooltip>\n  <Tooltip  content="Tooltip的显示内容" placement="left-bottom">\n    <Button>左下</Button>\n  </Tooltip>\n</div>\n<div style="margin-left:300px;height:150px;width:80px;">\n  <Tooltip  content="Tooltip的显示内容" placement="right-top">\n    <Button>右上</Button>\n  </Tooltip>\n  <Tooltip  content="Tooltip的显示内容" placement="right">\n    <Button>右边</Button>\n  </Tooltip>\n  <Tooltip  content="Tooltip的显示内容" placement="right-bottom">\n    <Button>右下</Button>\n  </Tooltip>\n</div>\n<div style="margin-left:80px;white-space: nowrap;">\n  <Tooltip  content="Tooltip的显示内容" placement="bottom-left">\n    <Button>下左</Button>\n  </Tooltip>\n  <Tooltip  content="Tooltip的显示内容" placement="bottom">\n    <Button>下边</Button>\n  </Tooltip>\n  <Tooltip  content="Tooltip的显示内容" placement="bottom-right">\n    <Button>下右</Button>\n  </Tooltip>\n</div>',slot:'<Tooltip trigger="click">\n<Button>我是个演员</Button>\n<div slot="content">\n  <p>我独占一行，然后....</p>\n  <p>我独占一行，然后....</p>\n</div>\n</Tooltip>'},l=i,s={components:{Demo:n.a},data:function(){return{code:l}},methods:{ok:function(){this.$Message.info("你点了确定")},cancel:function(){this.$Message.info("你点了取消")}}},a=e("KHd+"),c=Object(a.a)(s,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("h2",[t._v("Tooltip 文字提示")]),t._v(" "),e("h3",[t._v("代码示例")]),t._v(" "),e("Row",{attrs:{gutter:"8"}},[e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"基本"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Tooltip",{attrs:{content:"我是提示内容"}},[e("p",[t._v("鼠标划过，我是一段文字")])])],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("Tooltip基本使用")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),e("Demo",{attrs:{title:"多行显示"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Tooltip",[e("Button",[t._v("我是个演员")]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[e("p",[t._v("我独占一行，然后....")]),t._v(" "),e("p",[t._v("我独占一行，然后....")])])],1)],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),e("code",[t._v("slot=content")]),t._v("来自定义展示内容")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.slot))])])],1),t._v(" "),e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"位置"}},[e("div",{staticStyle:{overflow:"hidden"},attrs:{slot:"content"},slot:"content"},[e("div",{staticStyle:{"margin-left":"80px","white-space":"nowrap"}},[e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"top-left"}},[e("Button",[t._v("上左")])],1),t._v(" "),e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"top"}},[e("Button",[t._v("上边")])],1),t._v(" "),e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"top-right"}},[e("Button",[t._v("上右")])],1)],1),t._v(" "),e("div",{staticStyle:{float:"left",height:"150px",width:"80px"}},[e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"left-top"}},[e("Button",[t._v("左上")])],1),t._v(" "),e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"left"}},[e("Button",[t._v("左边")])],1),t._v(" "),e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"left-bottom"}},[e("Button",[t._v("左下")])],1)],1),t._v(" "),e("div",{staticStyle:{"margin-left":"300px",height:"150px",width:"80px"}},[e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"right-top"}},[e("Button",[t._v("右上")])],1),t._v(" "),e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"right"}},[e("Button",[t._v("右边")])],1),t._v(" "),e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"right-bottom"}},[e("Button",[t._v("右下")])],1)],1),t._v(" "),e("div",{staticStyle:{"margin-left":"80px","white-space":"nowrap"}},[e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"bottom-left"}},[e("Button",[t._v("下左")])],1),t._v(" "),e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"bottom"}},[e("Button",[t._v("下边")])],1),t._v(" "),e("Tooltip",{attrs:{content:"Tooltip的显示内容",placement:"bottom-right"}},[e("Button",[t._v("下右")])],1)],1)]),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[e("code",[t._v("Tooltip")]),t._v("的位置一共有12种，通过\n        "),e("code",[t._v("placement")]),t._v("控制")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.position))])])],1)],1),t._v(" "),e("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("trigger")]),t._v(" "),e("td",[t._v("触发方式，可选值为hover（悬停）click（点击）")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("hover")])]),t._v(" "),e("tr",[e("td",[t._v("content")]),t._v(" "),e("td",[t._v("显示的正文内容")]),t._v(" "),e("td",[t._v("String ")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("breaked")]),t._v(" "),e("td",[t._v("显示的正文内容强制换行")]),t._v(" "),e("td",[t._v("Boolean ")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("placement")]),t._v(" "),e("td",[t._v("提示框出现的位置，可选值为top，top-left，top-right，bottom，bottom-left，bottom-right，left，left-top，left-bottom，right，right-top，right-bottom")]),t._v(" "),e("td",[t._v("String ")]),t._v(" "),e("td",[t._v("top")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("宽度，最小宽度为 150px")]),t._v(" "),e("td",[t._v("String，Number ")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("transfer")]),t._v(" "),e("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")])])])])}],!1,null,null,null);o.default=c.exports}}]);