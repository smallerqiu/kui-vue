/*! kui-vue v2.3.4 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+qlZ":function(t,e,a){"use strict";a("MnsJ");var s=a("rMEQ"),o=a("Ff65");var n={directives:{resize:a("7+I9").a},components:{Code:s.a,Collapse:o.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},v=a("KHd+"),r=Object(v.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[a("div",{ref:"demo",staticClass:"k-demo-main"},[a("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),a("div",{staticClass:"k-desc"},[a("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),a("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),a("div",{staticClass:"k-demo-line"}),t._v(" "),a("Collapse",[a("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=r},MnsJ:function(t,e,a){var s=a("WArN");"string"==typeof s&&(s=[[t.i,s,""]]);var o={insert:"head",singleton:!1};a("LboF")(s,o);s.locals&&(t.exports=s.locals)},WArN:function(t,e,a){(t.exports=a("JPst")(!1)).push([t.i,"",""])},qZJc:function(t,e,a){"use strict";a.r(e);var s={base:"<DatePicker></DatePicker>",clearable:"<DatePicker clearable></DatePicker>",size:"<DatePicker></DatePicker>\n<DatePicker mini></DatePicker>",date:'<Row gutter="10">\n    <Col span="6">\n    <h4>年</h4>\n    <DatePicker format="YYYY"></DatePicker>\n    </Col>\n    <Col span="6">\n    <h4>月</h4>\n    <DatePicker format="MM"></DatePicker>\n    </Col>\n    <Col span="6">\n    <h4>时间</h4>\n    <DatePicker format="YYYY-MM-DD HH:mm:ss"></DatePicker>\n    </Col>\n  </Row>',range:'<Row padding="10">\n    <Col span="8">\n    <h4>范围</h4>\n    <DatePicker :value="[]"></DatePicker>\n    </Col>\n    <Col span="8">\n    <h4>范围符号</h4>\n    <DatePicker range-separator="至" :value="[]"></DatePicker>\n    </Col>\n  </Row>',disabled:'<Row padding="10">\n    <Col span="8">\n    <h4>局部禁用</h4>\n    <DatePicker :disabled-date="disabledDate"></DatePicker>\n    </Col>\n    <Col span="8">\n    <h4>禁用</h4>\n    <DatePicker disabled></DatePicker>\n    </Col>\n  </Row>\n  methods: { \n    disabledDate: time => {\n      var day = time.getDay();\n      return day === 0 || day === 6;\n    }\n  }',lang:'英文：\n  <DatePicker lang="en"></DatePicker> \n  中文：\n  <DatePicker></DatePicker>'},o=s,n={components:{Demo:a("+qlZ").a},data:function(){return{base:"",code:o}},methods:{disabledDate:function(t){var e=t.getDay();return 0===e||6===e}}},v=a("KHd+"),r=Object(v.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("DatePicker 日期选择器")]),e._v(" "),a("Alert",{attrs:{type:"info"}},[e._v("注意：非 template/render 模式下，需使用 date-picker。")]),e._v(" "),a("Alert",[e._v("注意：若下拉被父级元素遮挡，请设置组件 属性 `transfer=true`。")]),e._v(" "),a("h3",[e._v("代码示例")]),e._v(" "),a("Row",{attrs:{gutter:"8"}},[a("Col",{attrs:{span:"12"}},[a("Demo",{attrs:{title:"基础用法",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("DatePicker",{model:{value:e.base,callback:function(t){e.base=t},expression:"base"}}),e._v("\n        "+e._s(e.base)+"\n      ")],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("可使用\n        "),a("code",[e._v("v-model")]),e._v("进行数据双向绑定")]),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),a("Demo",{attrs:{title:"可清除",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("DatePicker",{attrs:{clearable:""}})],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过设置\n          "),a("code",[e._v("clearable")]),e._v("属性可控制是否显示清空按钮")])]),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.clearable))])]),e._v(" "),a("Demo",{attrs:{title:"尺寸",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("DatePicker"),e._v(" "),a("DatePicker",{attrs:{mini:""}})],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过设置\n          "),a("code",[e._v("mini")]),e._v("可设置组件大小，\n          "),a("code",[e._v("width")]),e._v("属性可控制组件宽度")])]),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.size))])]),e._v(" "),a("Demo",{attrs:{title:"日期单位",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Row",{attrs:{gutter:"10"}},[a("Col",{attrs:{span:"8"}},[e._v(" 年\n          "),a("DatePicker",{attrs:{format:"YYYY"}})],1),e._v(" "),a("Col",{attrs:{span:"8"}},[e._v(" 月\n          "),a("DatePicker",{attrs:{format:"MM"}})],1),e._v(" "),a("Col",{attrs:{span:"8"}},[e._v(" 时间\n          "),a("DatePicker",{attrs:{format:"YYYY-MM-DD HH:mm:ss"}})],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n        "),a("code",[e._v("format")]),e._v("来控制显示年月日或者其他格式")]),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.date))])])],1),e._v(" "),a("Col",{attrs:{span:"12"}},[a("Demo",{attrs:{title:"选择日期范围",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Row",{attrs:{padding:"10"}},[a("Col",{attrs:{span:"8"}},[a("h4",[e._v("范围")]),e._v(" "),a("DatePicker",{attrs:{value:[]}})],1),e._v(" "),a("Col",{attrs:{span:"8"}},[a("h4",[e._v("范围符号")]),e._v(" "),a("DatePicker",{attrs:{"range-separator":"至",value:[]}})],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("可以通过\n        "),a("code",[e._v("range-separator")]),e._v("来设置展示分隔符")]),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.range))])]),e._v(" "),a("Demo",{attrs:{title:"禁用",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Row",{attrs:{padding:"10"}},[a("Col",{attrs:{span:"8"}},[a("h4",[e._v("局部禁用")]),e._v(" "),a("DatePicker",{attrs:{"disabled-date":e.disabledDate}})],1),e._v(" "),a("Col",{attrs:{span:"8"}},[a("h4",[e._v("禁用")]),e._v(" "),a("DatePicker",{attrs:{disabled:""}})],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("设置\n          "),a("code",[e._v("disabled")]),e._v("属性来控制组件是否可用")])]),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.disabled))])]),e._v(" "),a("Demo",{attrs:{title:"多语言",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v("英文：\n        "),a("DatePicker",{attrs:{lang:"en"}}),e._v("\n        中文：\n        "),a("DatePicker")],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n        "),a("code",[e._v("lang")]),e._v("来控制语言类型，目前有英文和中文两种，默认中文\n        "),a("code",[e._v("zh-cn")])]),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.lang))])])],1)],1),e._v(" "),a("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-border"},[a("table",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("默认时间值")]),t._v(" "),a("td",[t._v("Date, Array, String")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("是否禁用")]),t._v(" "),a("td",[t._v("Boolen")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("mini")]),t._v(" "),a("td",[t._v("组件尺寸大小")]),t._v(" "),a("td",[t._v("Boolean ")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("rangeSeparator")]),t._v(" "),a("td",[t._v("日期区间间隔符")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("～")])]),t._v(" "),a("tr",[a("td",[t._v("clearable")]),t._v(" "),a("td",[t._v("是否显示清除图标")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("placeholder")]),t._v(" "),a("td",[t._v("提示语")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("lang")]),t._v(" "),a("td",[t._v("本地化，提供2中语言切换 中英，zh，en")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("zh")])]),t._v(" "),a("tr",[a("td",[t._v("transfer")]),t._v(" "),a("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("disabledDate")]),t._v(" "),a("td",[t._v("范围分离")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("format")]),t._v(" "),a("td",[t._v("时间格式化，支持YYYY-MM-DD HH:mm:ss ")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("YYYY-MM-DD")])]),t._v(" "),a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("默认值改变之后的回调，返回当前选择的时间，字符串")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("-")])])])])}],!1,null,null,null);e.default=r.exports}}]);