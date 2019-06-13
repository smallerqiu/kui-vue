/*! kui-vue v2.2.3 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"+qlZ":function(t,e,o){"use strict";var a=o("rMEQ"),s=o("Ff65");var n={directives:{resize:o("7+I9").a},components:{Code:a.a,Collapse:s.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},c=o("KHd+"),l=Object(c.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[o("div",{ref:"demo",staticClass:"k-demo-main"},[o("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),o("div",{staticClass:"k-desc"},[o("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),o("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),o("div",{staticClass:"k-demo-line"}),t._v(" "),o("Collapse",[o("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=l},WhzG:function(t,e,o){"use strict";o.r(e);var a={base:"<Tag>标签1</Tag>\n<Tag>标签2</Tag>\n<Tag>标签3</Tag>\n<Tag closeable>标签4</Tag>",color:'<Tag color="blue">标签1</Tag>\n<Tag color="gray">标签2</Tag>\n<Tag color="green">标签3</Tag>\n<Tag color="red">标签4</Tag>\n<Tag color="orange">标签5</Tag>\n<Tag color="#2db7f5" closeable>自定义</Tag>',custom:'<Tag color="blue" closeable v-for="m in count" :key="m">标签{{m}}</Tag>\n<Tag @click="count++">增加</Tag>\n<script>\nexport default {\n  data() {\n    return {\n      count: 3\n    }\n  }\n}\n<\/script>\n'},s=a,n={components:{Demo:o("+qlZ").a},data:function(){return{code:s,count:3}}},c=o("KHd+"),l=Object(c.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Tag 标签")]),e._v(" "),o("p",[e._v("进行标记和分类的小标签。")]),e._v(" "),o("h3",[e._v("代码示例")]),e._v(" "),o("Demo",{attrs:{title:"基础"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Tag",[e._v("标签1")]),e._v(" "),o("Tag",[e._v("标签2")]),e._v(" "),o("Tag",[e._v("标签3")]),e._v(" "),o("Tag",{attrs:{closeable:""}},[e._v("标签4")])],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n      "),o("code",[e._v("closeable")]),e._v("显示关闭按钮，点击隐藏标签，触发\n      "),o("code",[e._v("close")]),e._v("回调")]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),o("Demo",{attrs:{title:"颜色"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Tag",{attrs:{color:"blue"}},[e._v("标签1")]),e._v(" "),o("Tag",{attrs:{color:"gray"}},[e._v("标签2")]),e._v(" "),o("Tag",{attrs:{color:"green"}},[e._v("标签3")]),e._v(" "),o("Tag",{attrs:{color:"red"}},[e._v("标签4")]),e._v(" "),o("Tag",{attrs:{color:"orange"}},[e._v("标签5")]),e._v(" "),o("Tag",{attrs:{color:"#2db7f5",closeable:""}},[e._v("自定义")])],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n      "),o("code",[e._v("color")]),e._v("定义标签颜色，默认提供5组颜色\n      "),o("code",[e._v("blue")]),e._v(" "),o("code",[e._v("gray")]),e._v(" "),o("code",[e._v("green")]),e._v(" "),o("code",[e._v("red")]),e._v(" "),o("code",[e._v("orange")]),e._v("\n      当然也可以自定义其他颜色\n    ")]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.color))])]),e._v(" "),o("Demo",{attrs:{title:"动态添加和删除"}},[o("div",{attrs:{slot:"content"},slot:"content"},[e._l(e.count,function(t){return o("Tag",{key:t,attrs:{color:"blue",closeable:""}},[e._v("标签"+e._s(t))])}),e._v(" "),o("Tag",{on:{click:function(t){e.count++}}},[e._v("增加")])],2),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n      "),o("code",[e._v("color")]),e._v("定义标签颜色，默认提供5组颜色\n      "),o("code",[e._v("blue")]),e._v(" "),o("code",[e._v("gray")]),e._v(" "),o("code",[e._v("green")]),e._v(" "),o("code",[e._v("red")]),e._v(" "),o("code",[e._v("orange")]),e._v("\n      当然也可以自定义其他颜色\n    ")]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.custom))])]),e._v(" "),o("h3",[e._v("Tag API")]),e._v(" "),e._m(0)],1)},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("closeable")]),t._v(" "),o("td",[t._v("是否显示关闭按钮")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("color")]),t._v(" "),o("td",[t._v("标签的颜色，默认提供5组颜色")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("close")]),t._v(" "),o("td",[t._v("关闭标签的回调事件")]),t._v(" "),o("td",[t._v("Function ")]),t._v(" "),o("td",[t._v("-")])])])])}],!1,null,null,null);e.default=l.exports}}]);