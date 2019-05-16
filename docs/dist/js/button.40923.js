/*! kui-vue v2.1.6 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+qlZ":function(t,o,e){"use strict";var n=e("rMEQ"),s=e("Ff65");var i={directives:{resize:e("7+I9").a},components:{Code:n.a,Collapse:s.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},o="k-demo-".concat(this.layout),e=this.layout,o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t)];var t,o,e},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},r=e("KHd+"),a=Object(r.a)(i,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[e("div",{ref:"demo",staticClass:"k-demo-main"},[e("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),e("div",{staticClass:"k-desc"},[e("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),e("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[e("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),e("div",{staticClass:"k-demo-line"}),t._v(" "),e("Collapse",[e("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;o.a=a},"0rU2":function(t,o,e){"use strict";e.r(o);var n={base:'<Button>Default</Button>\n<Button type="primary">Primary</Button>\n<Button type="primary" hollow>hollow</Button>\n<Button type="primary" circle>circle</Button> \n<Button type="link" circle>link</Button>',disabled:'<Button type="primary">Primary</Button>\n<Button disabled type="primary">disabled</Button>',withIcon:'<Button type="primary" icon="ios-search">搜索</Button>\n<Button type="success" icon="ios-cloud-upload">上传</Button>\n<Button type="danger" icon="ios-cloud-download">下载</Button>\n<Button type="primary" icon="ios-play"/>\n<Button type="primary" icon="ios-pause"></Button>\n<Button type="primary" icon="ios-square"></Button>',size:'<Button type="primary">Primary</Button>\n<Button type="primary" mini>mini</Button>',group:"<ButtonGroup>\n  <Button>待发货</Button>\n  <Button>已发货</Button>\n  <Button>已签收</Button>\n</ButtonGroup>\n<ButtonGroup circle>\n  <Button>待发货</Button>\n  <Button>已发货</Button>\n  <Button>已签收</Button>\n  </ButtonGroup>\n  <ButtonGroup mini>\n  <Button>待发货</Button>\n  <Button>已发货</Button>\n  <Button>已签收</Button>\n</ButtonGroup>"},s=n,i={components:{Demo:e("+qlZ").a},data:function(){return{code:s}}},r=e("KHd+"),a=Object(r.a)(i,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"demo-button"},[e("h2",[t._v("Button 按钮")]),t._v(" "),e("Alert",[t._v("注意：非 template/render 模式下，需使用 k-button。")]),t._v(" "),e("h3",[t._v("代码示例")]),t._v(" "),e("Row",{attrs:{gutter:"8"}},[e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"基础",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",[t._v("Default")]),t._v(" "),e("Button",{attrs:{type:"primary"}},[t._v("Primary")]),t._v(" "),e("Button",{attrs:{type:"primary",hollow:""}},[t._v("hollow")]),t._v(" "),e("Button",{attrs:{type:"primary",circle:""}},[t._v("circle")]),t._v(" "),e("Button",{attrs:{type:"link",circle:""}},[t._v("link")])],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("使用\n        "),e("code",[t._v("type")]),t._v("、\n        "),e("code",[t._v("hollow")]),t._v("、\n        "),e("code",[t._v("circle")]),t._v("属性来定义\n        "),e("code",[t._v("Button")]),t._v(" 的样式。")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base)+" ")])]),t._v(" "),e("Demo",{attrs:{title:"带图标",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{attrs:{type:"primary",icon:"ios-search"}},[t._v("搜索")]),t._v(" "),e("Button",{attrs:{type:"success",icon:"ios-cloud-upload"}},[t._v("上传")]),t._v(" "),e("Button",{attrs:{type:"danger",icon:"ios-cloud-download"}},[t._v("下载")]),t._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-play"}}),t._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-pause"}}),t._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-square"}})],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过添加\n        "),e("code",[t._v("icon")]),t._v("属性 设置按钮按钮图标。")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.withIcon))])])],1),t._v(" "),e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"禁用",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{attrs:{type:"primary"}},[t._v("Primary")]),t._v(" "),e("Button",{attrs:{disabled:"",type:"primary"}},[t._v("disabled")])],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过添加\n        "),e("code",[t._v("disabled")]),t._v("属性可将按钮设置为不可用状态。")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])]),t._v(" "),e("Demo",{attrs:{title:"尺寸",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{attrs:{type:"primary"}},[t._v("Primary")]),t._v(" "),e("Button",{attrs:{type:"primary",mini:""}},[t._v("mini")])],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过添加\n        "),e("code",[t._v("mini")]),t._v("属性 设置按钮尺寸大小。")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.size))])])],1)],1),t._v(" "),e("Demo",{attrs:{title:"按钮组合",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("ButtonGroup",[e("Button",[t._v("待发货")]),t._v(" "),e("Button",[t._v("已发货")]),t._v(" "),e("Button",[t._v("已签收")])],1),t._v(" "),e("ButtonGroup",{attrs:{circle:""}},[e("Button",[t._v("待发货")]),t._v(" "),e("Button",[t._v("已发货")]),t._v(" "),e("Button",[t._v("已签收")])],1),t._v(" "),e("ButtonGroup",{attrs:{mini:""}},[e("Button",[t._v("待发货")]),t._v(" "),e("Button",[t._v("已发货")]),t._v(" "),e("Button",[t._v("已签收")])],1)],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("将多个\n      "),e("code",[t._v("Button")]),t._v("放入\n      "),e("code",[t._v("ButtonGroup")]),t._v("内，可实现按钮组合的效果。")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.group))])]),t._v(" "),e("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("按钮类型，可选值为primary、link、success、warning、danger或者不设置")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("mini")]),t._v(" "),e("td",[t._v("按钮尺寸大小")]),t._v(" "),e("td",[t._v("Boolean ")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("circle")]),t._v(" "),e("td",[t._v("按钮是否圆角")]),t._v(" "),e("td",[t._v("Boolean ")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("hollow")]),t._v(" "),e("td",[t._v("按钮是否颜色镂空")]),t._v(" "),e("td",[t._v("Boolean ")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("按钮的图标")]),t._v(" "),e("td",[t._v("String ")]),t._v(" "),e("td",[t._v("-")])])])])}],!1,null,null,null);o.default=a.exports}}]);