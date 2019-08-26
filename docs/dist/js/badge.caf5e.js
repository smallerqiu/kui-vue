/*! kui-vue v2.2.8 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+qlZ":function(t,e,o){"use strict";o("MnsJ");var d=o("rMEQ"),a=o("Ff65");var n={directives:{resize:o("7+I9").a},components:{Code:d.a,Collapse:a.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},s=o("KHd+"),i=Object(s.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[o("div",{ref:"demo",staticClass:"k-demo-main"},[o("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),o("div",{staticClass:"k-desc"},[o("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),o("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),o("div",{staticClass:"k-demo-line"}),t._v(" "),o("Collapse",[o("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=i},MnsJ:function(t,e,o){var d=o("WArN");"string"==typeof d&&(d=[[t.i,d,""]]);var a={insert:"head",singleton:!1};o("LboF")(d,a);d.locals&&(t.exports=d.locals)},WArN:function(t,e,o){(t.exports=o("JPst")(!1)).push([t.i,"",""])},akxJ:function(t,e,o){"use strict";o.r(e);var d=o("+qlZ"),a={base:'<Badge count="3">\n  <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>',dot:'<Badge dot>\n  <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>\n<Badge dot style="margin-left:20px;">\n  <Icon type="ios-calendar-outline" size="50" color="orange"></Icon>\n</Badge>\n<Badge dot style="margin-left:20px;">\n  <a href="#">我是一个连接</a>\n</Badge>',maxCount:'<Badge count="100" max-count="99">\n  <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>\n<Badge count="10055" max-count="999" style="margin-left:60px;">\n  <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>',color:'<Badge count="100" max-count="99" color="orange">\n  <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>\n<Badge dot color="green" style="margin-left:60px;">\n  <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>',badge:'<Badge count="10" style="margin-left:20px;"></Badge>\n<Badge count="20" color="blue" style="margin-left:40px;"></Badge>',other:'<div v-for="i in m" style="margin:15px 0;" :key="i">\n<Badge count="+" @click="add">\n   <Button>增加</Button>\n</Badge>\n<Badge count="-" @click="del" style="margin-left:20px;">\n   <Input width="200"></Input>\n</Badge>\n</div>\ndata() {\n  return {\n    m: 1,\n    code: code\n  }\n}'},n=a,s={components:{Demo:d.a},data:function(){return{m:1,code:n}}},i=o("KHd+"),c=Object(i.a)(s,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Badge 徽标")]),e._v(" "),o("h3",[e._v("代码示例")]),e._v(" "),o("Row",{attrs:{gutter:"8"}},[o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{layout:"vertical",title:"基础"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Badge",{attrs:{count:"3"}},[o("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})])],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("code",[e._v("Badge")]),e._v("基础使用")]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),o("Demo",{attrs:{layout:"vertical",title:"点"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Badge",{attrs:{dot:""}},[o("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})]),e._v(" "),o("Badge",{staticStyle:{"margin-left":"20px"},attrs:{dot:""}},[o("Icon",{attrs:{type:"ios-calendar-outline",size:"50",color:"orange"}})],1),e._v(" "),o("Badge",{staticStyle:{"margin-left":"20px"},attrs:{dot:""}},[o("a",{attrs:{href:"#"}},[e._v("我是一个连接")])])],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("设置\n        "),o("code",[e._v("dot")]),e._v("来展示一个点")]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.dot))])]),e._v(" "),o("Demo",{attrs:{layout:"vertical",title:"数字隐藏"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Badge",{attrs:{count:"100","max-count":"99"}},[o("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})]),e._v(" "),o("Badge",{staticStyle:{"margin-left":"60px"},attrs:{count:"10055","max-count":"999"}},[o("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})])],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("数字模式超出隐藏，设置\n        "),o("code",[e._v("max-count")]),e._v("配合\n        "),o("code",[e._v("count")])]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.maxCount))])])],1),e._v(" "),o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{layout:"vertical",title:"颜色"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Badge",{attrs:{count:"100","max-count":"99",color:"orange"}},[o("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})]),e._v(" "),o("Badge",{staticStyle:{"margin-left":"60px"},attrs:{dot:"",color:"green"}},[o("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})])],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("code",[e._v("color")]),e._v("属性可以自定义颜色")]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.color))])])],1),e._v(" "),o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{layout:"vertical",title:"单独使用"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Badge",{staticStyle:{"margin-left":"20px"},attrs:{count:"10"}}),e._v(" "),o("Badge",{staticStyle:{"margin-left":"40px"},attrs:{count:"20",color:"blue"}})],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"}),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.badge))])]),e._v(" "),o("Demo",{attrs:{layout:"vertical",title:"组合使用"}},[o("div",{attrs:{slot:"content"},slot:"content"},e._l(e.m,function(t){return o("div",{key:t,staticStyle:{margin:"15px 0"}},[o("Badge",{attrs:{count:"+"},on:{click:function(){e.m++}}},[o("Button",[e._v("Item"+e._s(t)+":")])],1),e._v(" "),o("Badge",{staticStyle:{"margin-left":"20px"},attrs:{count:"-"},on:{click:function(){1!=e.m&&e.m--}}},[o("Input",{attrs:{width:"200"}})],1)],1)}),0),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("Badge的使用场景不光是数字或者是提醒的展示，在很多场合可以当按钮使用")]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.other))])])],1)],1),e._v(" "),o("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("count")]),t._v(" "),o("td",[t._v("显示的文字")]),t._v(" "),o("td",[t._v("String，Number")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("max-count")]),t._v(" "),o("td",[t._v("展示封顶的数字值，高于的部分会以+号显示")]),t._v(" "),o("td",[t._v("String，Number")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("dot")]),t._v(" "),o("td",[t._v("不展示数字，只有一个小红点")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])])])])}],!1,null,null,null);e.default=c.exports}}]);