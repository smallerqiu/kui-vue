/*! kui-vue v2.0.8 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+qlZ":function(e,t,c){"use strict";var n=c("rMEQ"),l=c("Ff65");var o={directives:{resize:c("7+I9").a},components:{Code:n.a,Collapse:l.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(e={},t="k-demo-".concat(this.layout),c=this.layout,t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e)];var e,t,c},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},a=c("KHd+"),s=Object(a.a)(o,function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[c("div",{ref:"demo",staticClass:"k-demo-main"},[c("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),c("div",{staticClass:"k-desc"},[c("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),c("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),c("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[c("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),c("div",{staticClass:"k-demo-line"}),e._v(" "),c("Collapse",[c("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},[],!1,null,null,null).exports;t.a=s},GL9v:function(e,t,c){"use strict";c.r(t);var n={base:'<p>{{checked}}</p>\n<Checkbox v-model="checked">单选框 </Checkbox>\n<Button @click="checked=!checked">Click me</Button>\n<script>\nexport default {\n  data() {\n    return {\n      checked: true,\n    };\n  }\n<\/script>',disabled:'<CheckboxGroup :value="[\'苹果🍎\',\'香蕉🍌\']">\n  <Checkbox label="苹果🍎" disabled></Checkbox>\n  <Checkbox label="葡萄🍇" disabled></Checkbox>\n  <Checkbox label="香蕉🍌" disabled></Checkbox>\n  <Checkbox label="栗子🌰" disabled></Checkbox>\n</CheckboxGroup>',group:'<CheckboxGroup v-model="data">\n  <Checkbox label="苹果🍎"></Checkbox>\n  <Checkbox label="橘子🍊"></Checkbox>\n  <Checkbox label="香蕉🍌"></Checkbox>\n  <Checkbox label="栗子🌰"></Checkbox>\n  <Checkbox label="葡萄🍇" disabled></Checkbox>\n  <Checkbox label="梨子🍐" disabled></Checkbox>\n</CheckboxGroup>\n<Button @click="data=[]">清除</Button>\n<Button @click="data=[\'苹果🍎\']">选中苹果</Button>\n<script>\nexport default {\n  data() {\n    return {\n      checked: true,\n      data: ["苹果🍎", "香蕉🍌", "葡萄🍇"],\n    };\n  }\n<\/script>\n',checkAll:'<Checkbox :value="checkAll" :indeterminate="indeterminate" @click.prevent.native="handelCheckAll">全选</Checkbox>\n<CheckboxGroup v-model="check" @change="handelCheck">\n  <Checkbox label="苹果🍎"></Checkbox>\n  <Checkbox label="葡萄🍇"></Checkbox>\n  <Checkbox label="香蕉🍌"></Checkbox>\n  <Checkbox label="栗子🌰"></Checkbox>\n</CheckboxGroup>\n<script>\nexport default {\n  data() {\n  return {\n    checkAll: false,\n    indeterminate: false,\n    check: []\n  };\n  },\n  methods: {\n  handelCheckAll(v) {\n    if (this.indeterminate) {\n      this.checkAll = false;\n    } else {\n      this.checkAll = !this.checkAll;\n    }\n    this.indeterminate = false;\n\n    if (this.checkAll) {\n      this.check = ["苹果🍎", "香蕉🍌", "葡萄🍇", "栗子🌰"];\n    } else {\n      this.check = [];\n    }\n  },\n  handelCheck(data) {\n    if (data.length === 4) {\n      this.indeterminate = false;\n      this.checkAll = true;\n    } else if (data.length > 0) {\n      this.indeterminate = true;\n      this.checkAll = false;\n    } else {\n      this.indeterminate = false;\n      this.checkAll = false;\n    }\n  }\n  }\n};\n<\/script>\n'},l=n,o={components:{Demo:c("+qlZ").a},data:function(){return{code:l,checked:!0,data:["苹果🍎","香蕉🍌","葡萄🍇"],checkAll:!1,indeterminate:!1,check:[],test:[],check1:[]}},mounted:function(){var t=this;setTimeout(function(e){t.test=["122","2🍌","3🍇"]},3e3)},methods:{test1:function(e){console.log(e)},handelCheckAll:function(e){console.log(e),this.indeterminate?this.checkAll=!1:this.checkAll=!this.checkAll,this.indeterminate=!1,this.checkAll?this.check=["苹果🍎","香蕉🍌","葡萄🍇","栗子🌰"]:this.check=[]},handelCheck:function(e){4===e.length?(this.indeterminate=!1,this.checkAll=!0):(0<e.length?this.indeterminate=!0:this.indeterminate=!1,this.checkAll=!1)}}},a=c("KHd+"),s=Object(a.a)(o,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("h2",[t._v("Checkbox 多选框")]),t._v(" "),c("h3",[t._v("代码示例 ")]),t._v(" "),c("Row",{attrs:{gutter:"8"}},[c("Col",{attrs:{span:"12"}},[c("Demo",{attrs:{title:"基础用法"}},[c("div",{attrs:{slot:"content"},slot:"content"},[c("p",[t._v(t._s(t.checked))]),t._v(" "),c("Checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("单选框 ")]),t._v(" "),c("Button",{on:{click:function(e){t.checked=!t.checked}}},[t._v("Click me")])],1),t._v(" "),c("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("单独使用 ,使用\n        "),c("code",[t._v("v-model")]),t._v(" 可以双向绑定数据。")]),t._v(" "),c("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),c("Demo",{attrs:{title:"组合使用"}},[c("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.data)),c("br"),t._v(" "),c("CheckboxGroup",{model:{value:t.data,callback:function(e){t.data=e},expression:"data"}},[c("Checkbox",{attrs:{label:"苹果🍎"}}),t._v(" "),c("Checkbox",{attrs:{label:"橘子🍊"}}),t._v(" "),c("Checkbox",{attrs:{label:"香蕉🍌"}}),t._v(" "),c("Checkbox",{attrs:{label:"栗子🌰"}}),t._v(" "),c("Checkbox",{attrs:{label:"葡萄🍇"}}),t._v(" "),c("Checkbox",{attrs:{label:"梨子🍐"}})],1),t._v(" "),c("Button",{on:{click:function(e){t.data=[]}}},[t._v("清除")]),t._v(" "),c("Button",{on:{click:function(e){t.data=["苹果🍎"]}}},[t._v("选中苹果")])],1),t._v(" "),c("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("结合\n        "),c("code",[t._v("CheckboxGroup")]),t._v("来组合使用,通过\n        "),c("code",[t._v("disabled")]),t._v("可以设置组件是否被禁用")]),t._v(" "),c("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.group))])])],1),t._v(" "),c("Col",{attrs:{span:"12"}},[c("Demo",{attrs:{title:"可不用"}},[c("div",{attrs:{slot:"content"},slot:"content"},[c("CheckboxGroup",{attrs:{value:["苹果🍎","香蕉🍌"]}},[c("Checkbox",{attrs:{label:"苹果🍎",disabled:""}}),t._v(" "),c("Checkbox",{attrs:{label:"葡萄🍇",disabled:""}}),t._v(" "),c("Checkbox",{attrs:{label:"香蕉🍌",disabled:""}}),t._v(" "),c("Checkbox",{attrs:{label:"栗子🌰",disabled:""}})],1)],1),t._v(" "),c("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过"),c("code",[t._v("disabled")]),t._v("设置不可用")]),t._v(" "),c("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])]),t._v(" "),c("Demo",{attrs:{title:"全选"}},[c("div",{attrs:{slot:"content"},slot:"content"},[c("Checkbox",{attrs:{value:t.checkAll,indeterminate:t.indeterminate},nativeOn:{click:function(e){return e.preventDefault(),t.handelCheckAll(e)}}},[t._v("全选")]),t._v(" "),c("CheckboxGroup",{on:{change:t.handelCheck},model:{value:t.check,callback:function(e){t.check=e},expression:"check"}},[c("Checkbox",{attrs:{label:"苹果🍎"}}),t._v(" "),c("Checkbox",{attrs:{label:"葡萄🍇"}}),t._v(" "),c("Checkbox",{attrs:{label:"香蕉🍌"}}),t._v(" "),c("Checkbox",{attrs:{label:"栗子🌰"}})],1)],1),t._v(" "),c("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("全选组合 ")]),t._v(" "),c("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.checkAll))])]),t._v(" "),c("Demo",{attrs:{title:"全选"}},[c("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n        "+t._s(t.check1)+"\n        "),c("CheckboxGroup",{on:{change:t.test1},model:{value:t.check1,callback:function(e){t.check1=e},expression:"check1"}},t._l(t.test,function(e,t){return c("Checkbox",{key:t,attrs:{label:e}})}),1)],1),t._v(" "),c("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("全选组合 ")]),t._v(" "),c("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.checkAll))])])],1)],1),t._v(" "),c("h3",[t._v("API")]),t._v(" "),t._m(0),t._v(" "),c("h3",[t._v("CheckboxGroup API")]),t._v(" "),t._m(1)],1)},[function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"table-border"},[c("table",[c("tr",[c("th",[e._v("属性")]),e._v(" "),c("th",[e._v("说明")]),e._v(" "),c("th",[e._v("类型")]),e._v(" "),c("th",[e._v("默认值")])]),e._v(" "),c("tr",[c("td",[e._v("value")]),e._v(" "),c("td",[e._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),e._v(" "),c("td",[e._v("Boolean")]),e._v(" "),c("td",[e._v("false")])]),e._v(" "),c("tr",[c("td",[e._v("label")]),e._v(" "),c("td",[e._v("只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目")]),e._v(" "),c("td",[e._v(" String | Number")]),e._v(" "),c("td",[e._v("-")])]),e._v(" "),c("tr",[c("td",[e._v("disabled")]),e._v(" "),c("td",[e._v("是否禁用当前项")]),e._v(" "),c("td",[e._v("Boolean")]),e._v(" "),c("td",[e._v("false")])]),e._v(" "),c("tr",[c("td",[e._v("change")]),e._v(" "),c("td",[e._v("在选项状态发生改变时触发，返回当前状态")]),e._v(" "),c("td",[e._v("Function")]),e._v(" "),c("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"table-border"},[c("table",[c("tr",[c("th",[e._v("属性")]),e._v(" "),c("th",[e._v("说明")]),e._v(" "),c("th",[e._v("类型")]),e._v(" "),c("th",[e._v("默认值")])]),e._v(" "),c("tr",[c("td",[e._v("value")]),e._v(" "),c("td",[e._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),e._v(" "),c("td",[e._v("Boolean")]),e._v(" "),c("td",[e._v("false")])]),e._v(" "),c("tr",[c("td",[e._v("disabled")]),e._v(" "),c("td",[e._v("是否禁用当前项")]),e._v(" "),c("td",[e._v("Boolean")]),e._v(" "),c("td",[e._v("false")])]),e._v(" "),c("tr",[c("td",[e._v("change")]),e._v(" "),c("td",[e._v("在选项状态发生改变时触发，返回当前选中的项")]),e._v(" "),c("td",[e._v("Function")]),e._v(" "),c("td",[e._v("-")])])])])}],!1,null,null,null);t.default=s.exports}}]);