/*! kui-vue v2.3.2 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+qlZ":function(t,e,n){"use strict";n("MnsJ");var a=n("rMEQ"),l=n("Ff65");var v={directives:{resize:n("7+I9").a},components:{Code:a.a,Collapse:l.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},s=n("KHd+"),p=Object(s.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=p},HJ4M:function(t,e,n){"use strict";n.r(e);var a=n("+qlZ"),l={base:'<Collapse v-model="acitve">\n  <Panel title="我是标题" name="1">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="2">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="3">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n</Collapse>\n<script>\nexport default {\n  data() {\n    return {\n      acitve: \'1\',\n    }\n  }\n}\n<\/script>',accrodion:'<Collapse v-model="acitve" accrodion>\n  <Panel title="我是标题" name="1">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="2">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="3">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n</Collapse>\n<script>\nexport default {\n  data() {\n    return {\n      acitve: \'1\',\n    }\n  }\n}\n<\/script>',collapse:'<Collapse v-model="acitve">\n  <Panel title="我是标题" name="1">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <Collapse v-model="acitve">\n      <Panel title="我是标题" name="1">\n        <p>我是内容，要写很多文字</p>\n        <p>我是内容，要写很多文字</p>\n        <p>我是内容，要写很多文字</p>\n      </Panel>\n      <Panel title="我是标题" name="2">\n        <p>我是内容，要写很多文字</p>\n        <p>我是内容，要写很多文字</p>\n        <p>我是内容，要写很多文字</p>\n      </Panel>\n    </Collapse>\n  </Panel>\n  <Panel title="我是标题" name="2">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="3">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n</Collapse>\n<script>\nexport default {\n  data() {\n    return {\n      acitve: \'1\',\n    }\n  }\n}\n<\/script>',sample:'<Collapse v-model="acitve" sample>\n  <Panel title="我是标题" name="1">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="2">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="3">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n</Collapse>\n<script>\nexport default {\n  data() {\n    return {\n      acitve: \'1\',\n    }\n  }\n}\n<\/script>'},v=l,s={components:{Demo:a.a},data:function(){return{code:v,acitve:"1",acitve1:"1",acitve2:"1",acitve3:"1"}}},p=n("KHd+"),i=Object(p.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Collapse 折叠面板")]),e._v(" "),n("p",[e._v("可以折叠/展开的内容区域。")]),e._v(" "),n("h3",[e._v("代码示例")]),e._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{layout:"vertical",title:"基础"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Collapse",{model:{value:e.acitve,callback:function(t){e.acitve=t},expression:"acitve"}},[n("Panel",{attrs:{title:"我是标题",name:"1"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])]),e._v(" "),n("Panel",{attrs:{title:"我是标题",name:"2"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])]),e._v(" "),n("Panel",{attrs:{title:"我是标题",name:"3"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])])],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("默认可以同时展开一个或者多个面板")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),n("Demo",{attrs:{layout:"vertical",title:"手风琴"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Collapse",{attrs:{accrodion:""},model:{value:e.acitve1,callback:function(t){e.acitve1=t},expression:"acitve1"}},[n("Panel",{attrs:{title:"我是标题",name:"1"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])]),e._v(" "),n("Panel",{attrs:{title:"我是标题",name:"2"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])]),e._v(" "),n("Panel",{attrs:{title:"我是标题",name:"3"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])])],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("只允许同时展开一个面板")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.accrodion))])])],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{layout:"vertical",title:"嵌套面板"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Collapse",{model:{value:e.acitve2,callback:function(t){e.acitve2=t},expression:"acitve2"}},[n("Panel",{attrs:{title:"我是标题",name:"1"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("Collapse",{model:{value:e.acitve3,callback:function(t){e.acitve3=t},expression:"acitve3"}},[n("Panel",{attrs:{title:"我是标题",name:"1"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])]),e._v(" "),n("Panel",{attrs:{title:"我是标题",name:"2"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])])],1)],1),e._v(" "),n("Panel",{attrs:{title:"我是标题",name:"2"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])]),e._v(" "),n("Panel",{attrs:{title:"我是标题",name:"3"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])])],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("嵌套折叠面板。")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.collapse))])]),e._v(" "),n("Demo",{attrs:{layout:"vertical",title:"简洁模式"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Collapse",{attrs:{sample:""},model:{value:e.acitve1,callback:function(t){e.acitve1=t},expression:"acitve1"}},[n("Panel",{attrs:{title:"我是标题",name:"1"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])]),e._v(" "),n("Panel",{attrs:{title:"我是标题",name:"2"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])]),e._v(" "),n("Panel",{attrs:{title:"我是标题",name:"3"}},[n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")]),e._v(" "),n("p",[e._v("我是内容，要写很多文字")])])],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("一套没有边框的简洁样式。")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.sample))])])],1)],1),e._v(" "),n("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",[t._v("当前激活的面板的 name，可以使用 v-model 双向绑定")]),t._v(" "),n("td",[t._v("Array | String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("accordion")]),t._v(" "),n("td",[t._v("是否开启手风琴模式，开启后每次至多展开一个面板 ")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("sample")]),t._v(" "),n("td",[t._v("是否开启简洁模式")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("change")]),t._v(" "),n("td",[t._v("切换面板时触发回调，返回当前选项卡的展开折叠状态")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])])}],!1,null,null,null);e.default=i.exports},MnsJ:function(t,e,n){var a=n("WArN");"string"==typeof a&&(a=[[t.i,a,""]]);var l={insert:"head",singleton:!1};n("LboF")(a,l);a.locals&&(t.exports=a.locals)},WArN:function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,"",""])}}]);