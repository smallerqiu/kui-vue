/*! kui-vue v1.9.9 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"+qlZ":function(t,a,e){"use strict";var o=e("rMEQ"),d=e("Ff65");var n={directives:{resize:e("7+I9").a},components:{Code:o.a,Collapse:d.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},a="k-demo-".concat(this.layout),e=this.layout,a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t)];var t,a,e},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},i=e("KHd+"),l=Object(i.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[e("div",{ref:"demo",staticClass:"k-demo-main"},[e("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),e("div",{staticClass:"k-desc"},[e("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),e("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[e("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),e("div",{staticClass:"k-demo-line"}),t._v(" "),e("Collapse",[e("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null);l.options.__file="demo.vue";var s=l.exports;a.a=s},"T+DQ":function(t,a,e){"use strict";e.r(a);var o={base:'<p>{{checked}}</p>\n<Radio v-model="checked" @change="change">测试</Radio>\n<Button @click="checked=!checked">Click me</Button>',disabled:'<Radio label="葡萄🍇" disabled :value="true"></Radio>\n<Radio label="梨子🍐" disabled></Radio>',group:'<p>当前选中值：{{data}}</p>\n<RadioGroup v-model="data" @change="change">\n  <Radio label="0">苹果🍎</Radio>\n  <Radio label="1">橘子🍊</Radio>\n  <Radio label="2">香蕉🍌</Radio>\n  <Radio label="3">栗子🌰</Radio>\n  <Radio label="4">葡萄🍇</Radio>\n  <Radio label="5" disabled>梨子🍐</Radio>\n</RadioGroup>\n<Button @click="data=\'\'">清除</Button>\n<Button @click="data=\'0\'">选中苹果</Button>\ndata() {\n  return {\n    checked:true,\n    data: "0",\n  };\n},\nmethods: {\n  change(v) {\n    console.log(v);\n  }\n}',groupbutton:'<RadioGroup value="苹果">\n  <RadioButton label="苹果"></RadioButton>\n  <RadioButton label="橘子"></RadioButton>\n  <RadioButton label="香蕉"></RadioButton>\n  <RadioButton label="梨子"></RadioButton>\n</RadioGroup>\n<br/>\n<br/>\n<RadioGroup value="苹果"  mini>\n  <RadioButton label="苹果"></RadioButton>\n  <RadioButton label="橘子"></RadioButton>\n  <RadioButton label="香蕉"></RadioButton>\n  <RadioButton label="梨子" disabled></RadioButton>\n</RadioGroup>\n<br/>\n<br/>\n<RadioGroup value="苹果"  disabled mini>\n  <RadioButton label="苹果"></RadioButton>\n  <RadioButton label="橘子"></RadioButton>\n  <RadioButton label="香蕉"></RadioButton>\n  <RadioButton label="梨子" disabled></RadioButton>\n</RadioGroup>'},d=o,n={components:{Demo:e("+qlZ").a},data:function(){return{code:d,checked:!0,data:"0",data1:"苹果",data2:"苹果",data3:"苹果"}},methods:{change:function(t){console.log(t)}}},i=e("KHd+"),l=Object(i.a)(n,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("h2",[a._v("Radio 单选框")]),a._v(" "),e("h3",[a._v("代码示例")]),a._v(" "),e("Row",{attrs:{gutter:"8"}},[e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"基础",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("span",[a._v(a._s(a.checked))]),e("br"),a._v(" "),e("Radio",{on:{change:a.change},model:{value:a.checked,callback:function(t){a.checked=t},expression:"checked"}},[a._v("测试")]),a._v(" "),e("Button",{staticStyle:{margin:"0"},attrs:{mini:""},on:{click:function(t){a.checked=!a.checked}}},[a._v("Click me")])],1),a._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[a._v("单独使用可使用\n        "),e("code",[a._v("v-model")]),a._v("双向绑定数据")]),a._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[a._v(a._s(a.code.base))])]),a._v(" "),e("Demo",{attrs:{title:"组合使用"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("p",[a._v("当前选中值："+a._s(a.data))]),a._v(" "),e("RadioGroup",{on:{change:a.change},model:{value:a.data,callback:function(t){a.data=t},expression:"data"}},[e("Radio",{attrs:{label:"0"}},[a._v("苹果🍎")]),a._v(" "),e("Radio",{attrs:{label:"1"}},[a._v("橘子🍊")]),a._v(" "),e("Radio",{attrs:{label:"2"}},[a._v("香蕉🍌")]),a._v(" "),e("Radio",{attrs:{label:"3"}},[a._v("栗子🌰")]),a._v(" "),e("Radio",{attrs:{label:"4"}},[a._v("葡萄🍇")]),a._v(" "),e("Radio",{attrs:{label:"5",disabled:""}},[a._v("梨子🍐")])],1),a._v(" "),e("br"),a._v(" "),e("br"),a._v(" "),e("Button",{on:{click:function(t){a.data=""}}},[a._v("清除")]),a._v(" "),e("Button",{on:{click:function(t){a.data="0"}}},[a._v("选中苹果")])],1),a._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[a._v("结合\n        "),e("code",[a._v("RadioGroup")]),a._v("可以组合使用")]),a._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[a._v(a._s(a.code.group))])])],1),a._v(" "),e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"禁用",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Radio",{attrs:{label:"葡萄🍇",disabled:"",value:!0}}),a._v(" "),e("Radio",{attrs:{label:"梨子🍐",disabled:""}})],1),a._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[a._v("通过\n        "),e("code",[a._v("disabled")]),a._v("设置组件是否被禁用")]),a._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[a._v(a._s(a.code.disabled))])]),a._v(" "),e("Demo",{attrs:{title:"组合Button使用"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("RadioGroup",{on:{change:a.change},model:{value:a.data1,callback:function(t){a.data1=t},expression:"data1"}},[e("RadioButton",{attrs:{label:"苹果"}}),a._v(" "),e("RadioButton",{attrs:{label:"橘子"}}),a._v(" "),e("RadioButton",{attrs:{label:"香蕉"}}),a._v(" "),e("RadioButton",{attrs:{label:"梨子"}})],1),a._v(" "),e("br"),a._v(" "),e("br"),a._v(" "),e("RadioGroup",{attrs:{mini:""},on:{change:a.change},model:{value:a.data2,callback:function(t){a.data2=t},expression:"data2"}},[e("RadioButton",{attrs:{label:"苹果"}}),a._v(" "),e("RadioButton",{attrs:{label:"橘子"}}),a._v(" "),e("RadioButton",{attrs:{label:"香蕉"}}),a._v(" "),e("RadioButton",{attrs:{label:"梨子",disabled:""}})],1),a._v(" "),e("br"),a._v(" "),e("br"),a._v(" "),e("RadioGroup",{attrs:{disabled:"",mini:""},on:{change:a.change},model:{value:a.data3,callback:function(t){a.data3=t},expression:"data3"}},[e("RadioButton",{attrs:{label:"苹果"}}),a._v(" "),e("RadioButton",{attrs:{label:"橘子"}}),a._v(" "),e("RadioButton",{attrs:{label:"香蕉"}}),a._v(" "),e("RadioButton",{attrs:{label:"梨子",disabled:""}})],1)],1),a._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[a._v("结合\n        "),e("code",[a._v("RadioGroup")]),a._v(","),e("code",[a._v("RadioButton")]),a._v("可以组合使用")]),a._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[a._v(a._s(a.code.groupbutton))])])],1)],1),a._v(" "),e("h3",[a._v("Radio API")]),a._v(" "),a._m(0),a._v(" "),e("h3",[a._v("RadioGroup API")]),a._v(" "),a._m(1)],1)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("label")]),t._v(" "),e("td",[t._v("只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目")]),t._v(" "),e("td",[t._v(" String | Number")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("disabled")]),t._v(" "),e("td",[t._v("是否禁用当前项")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("change")]),t._v(" "),e("td",[t._v("在选项状态发生改变时触发，返回当前状态")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("change")]),t._v(" "),e("td",[t._v("在选项状态发生改变时触发，返回当前选中的项")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])])])])}],!1,null,null,null);l.options.__file="radio.vue";a.default=l.exports}}]);