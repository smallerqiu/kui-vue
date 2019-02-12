/*! kui-vue v2.0.4 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+qlZ":function(t,e,v){"use strict";var o=v("rMEQ"),n=v("Ff65");var _={directives:{resize:v("7+I9").a},components:{Code:o.a,Collapse:n.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},e="k-demo-".concat(this.layout),v=this.layout,e in t?Object.defineProperty(t,e,{value:v,enumerable:!0,configurable:!0,writable:!0}):t[e]=v,t)];var t,e,v},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},d=v("KHd+"),s=Object(d.a)(_,function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[v("div",{ref:"demo",staticClass:"k-demo-main"},[v("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),v("div",{staticClass:"k-desc"},[v("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),v("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),v("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[v("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),v("div",{staticClass:"k-demo-line"}),t._v(" "),v("Collapse",[v("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null);s.options.__file="demo.vue";var i=s.exports;e.a=i},n0Qt:function(t,e,v){"use strict";v.r(e);var o={base:'<Input placeholder="请输入内容..." />\n<Input placeholder="disabled..." disabled />',clearable:'<Input type="text" placeholder="请输入内容..." clearable></Input>',withIcon:'<Input type="text" placeholder="请输入内容..." icon="ios-person" @iconClick="iconClick"></Input>\n<Input type="text" placeholder="请输入内容..." icon="ios-search" @iconClick="iconClick"></Input>\n<script> \nexport default {  \n  methods: {\n    iconClick() {\n      this.$Message.info("点击图标事件");\n    }\n  }\n};\n<\/script>',size:'<Input type="text" placeholder="请输入内容..."></Input>\n<Input type="text" mini placeholder="请输入内容..."></Input>',textArea:'<Input type="textarea" :rows="4" placeholder="请输入内容..."></Input>\n<Input type="textarea" :rows="1" placeholder="请输入内容..."></Input>'},n=o,_={components:{Demo:v("+qlZ").a},data:function(){return{code:n}},methods:{iconClick:function(){this.$Message.info("点击图标事件")}}},d=v("KHd+"),s=Object(d.a)(_,function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",[v("h2",[t._v("Input 输入框")]),t._v(" "),v("Alert",[t._v("注意：非 template/render 模式下，需使用 k-input。")]),t._v(" "),v("h3",[t._v("代码示例")]),t._v(" "),v("Row",{attrs:{gutter:"8"}},[v("Col",{attrs:{span:"12"}},[v("Demo",{attrs:{title:"基础用法",layout:"vertical"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("Input",{attrs:{width:"200",placeholder:"请输入内容..."}}),t._v(" "),v("br"),t._v(" "),v("Input",{attrs:{width:"200",placeholder:"disabled...",disabled:""}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("使用\n        "),v("code",[t._v("v-model")]),t._v("进行数据双向绑定")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),v("Demo",{attrs:{title:"可清除",layout:"vertical"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("Input",{attrs:{type:"text",width:"200",placeholder:"请输入内容...",clearable:""}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过设置\n        "),v("code",[t._v("clearble")]),t._v("属性可控制是否显示清空按钮")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.clearable))])]),t._v(" "),v("Demo",{attrs:{title:"带图标",layout:"vertical"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("Input",{attrs:{type:"text",width:"200",placeholder:"请输入用户名...","icon-align":"left",icon:"ios-person"},on:{iconClick:t.iconClick}}),t._v(" "),v("Input",{attrs:{type:"text",width:"200",placeholder:"请输入内容...",icon:"ios-search"},on:{iconClick:t.iconClick}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过设置\n        "),v("code",[t._v("icon")]),t._v("属性，可设置按钮图标，"),v("code",[t._v("icon-align")]),t._v(" 设置显示位置\n        "),v("code",[t._v("iconClick")]),t._v("可触发图标点击事件")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.withIcon))])])],1),t._v(" "),v("Col",{attrs:{span:"12"}},[v("Demo",{attrs:{title:"尺寸",layout:"vertical"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("Input",{attrs:{type:"text",width:"200",placeholder:"请输入..."}}),t._v(" "),v("Input",{attrs:{type:"text",width:"200",mini:"",placeholder:"mini",icon:"ios-person"},on:{iconClick:t.iconClick}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过设置\n        "),v("code",[t._v("mini")]),t._v("可设置组件大小，\n        "),v("code",[t._v("width")]),t._v("属性可控制组件宽度")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.size))])]),t._v(" "),v("Demo",{attrs:{title:"文本域",layout:"vertical"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("Input",{attrs:{width:"300",type:"textarea",rows:4,placeholder:"请输入内容..."}}),t._v(" "),v("Input",{attrs:{width:"300",type:"textarea",rows:1,placeholder:"请输入内容..."}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("当\n        "),v("code",[t._v("type")]),t._v("属性取值为\n        "),v("code",[t._v("textarea")]),t._v("时组件呈现文本玉")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.textArea))])])],1)],1),t._v(" "),v("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"table-border"},[v("table",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("输入框类型，可选值为 text、password、textarea、url、email、date")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("text")])]),t._v(" "),v("tr",[v("td",[t._v("width")]),t._v(" "),v("td",[t._v("组件的宽度")]),t._v(" "),v("td",[t._v("String,Number")]),t._v(" "),v("td",[t._v("200")])]),t._v(" "),v("tr",[v("td",[t._v("value ")]),t._v(" "),v("td",[t._v("绑定的值，可使用 v-model 双向绑定 ")]),t._v(" "),v("td",[t._v("String | Number")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("icon ")]),t._v(" "),v("td",[t._v("输入框图标，仅在 text 类型下有效 ")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("icon-align ")]),t._v(" "),v("td",[t._v("输入框图标位置，可选值为left、right，仅在 type=text 类型下有效 ")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("right")])]),t._v(" "),v("tr",[v("td",[t._v("placeholder")]),t._v(" "),v("td",[t._v("占位文本 ")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("disabled")]),t._v(" "),v("td",[t._v("设置输入框为禁用状态")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("readonly")]),t._v(" "),v("td",[t._v("设置输入框为只读")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("maxlength")]),t._v(" "),v("td",[t._v("最大输入长度")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("rows")]),t._v(" "),v("td",[t._v("文本域默认行数，仅在 textarea 类型下有效")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("number")]),t._v(" "),v("td",[t._v("将用户的输入转换为 Number 类型")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("autocomplete")]),t._v(" "),v("td",[t._v("原生的自动完成功能，可选值为 off 和 on")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("spellcheck")]),t._v(" "),v("td",[t._v("原生的 spellcheck 属性")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("enter")]),t._v(" "),v("td",[t._v("按下回车键时触发")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("focus")]),t._v(" "),v("td",[t._v("输入框聚焦时触发")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("blur")]),t._v(" "),v("td",[t._v("输入框失去焦点时触发")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("keyup")]),t._v(" "),v("td",[t._v("原生的 keyup 事件")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("keydown")]),t._v(" "),v("td",[t._v("原生的 keydown 事件")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("keypress")]),t._v(" "),v("td",[t._v("原生的 keypress 事件")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("iconClick")]),t._v(" "),v("td",[t._v("icon的点击事件")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])])])])}],!1,null,null,null);s.options.__file="input.vue";e.default=s.exports}}]);