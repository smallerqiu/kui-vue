/*! kui-vue v2.3.4 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"+qlZ":function(t,o,e){"use strict";e("MnsJ");var n=e("rMEQ"),i=e("Ff65");var c={directives:{resize:e("7+I9").a},components:{Code:n.a,Collapse:i.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},l=e("KHd+"),v=Object(l.a)(c,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[e("div",{ref:"demo",staticClass:"k-demo-main"},[e("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),e("div",{staticClass:"k-desc"},[e("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),e("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),e("div",{staticClass:"k-demo-line"}),t._v(" "),e("Collapse",[e("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;o.a=v},MnsJ:function(t,o,e){var n=e("WArN");"string"==typeof n&&(n=[[t.i,n,""]]);var i={insert:"head",singleton:!1};e("LboF")(n,i);n.locals&&(t.exports=n.locals)},WArN:function(t,o,e){(t.exports=e("JPst")(!1)).push([t.i,"",""])},XjKo:function(t,o,e){"use strict";e.r(o);var n={base:'<Poptip trigger="hover" title="标题" content="内容">\n   <Button>hover激活</Button>\n</Poptip>\n<Poptip trigger="click" title="标题" content="内容">\n   <Button>click激活</Button>\n</Poptip>\n<Poptip title="标题" content="内容" dark>\n   <Button>深色模式</Button>\n</Poptip>',position:'<Poptip title="标题" content="内容" placement="top-left"><Button>上左</Button></Poptip>\n<Poptip title="标题" content="内容" placement="top"><Button>上</Button></Poptip>\n<Poptip title="标题" content="内容" placement="top-right"><Button>上右</Button></Poptip>\n<Poptip title="标题" content="内容" placement="right-top"><Button>右上</Button></Poptip>\n<Poptip title="标题" content="内容" placement="right"><Button>右</Button></Poptip>\n<Poptip title="标题" content="内容" placement="right-bottom"><Button>右下</Button> </Poptip>\n<Poptip title="标题" content="内容" placement="bottom-right"><Button>下右</Button></Poptip>\n<Poptip title="标题" content="内容" placement="bottom"><Button>下</Button></Poptip>\n<Poptip title="标题" content="内容" placement="bottom-left"><Button>下左</Button></Poptip>\n<Poptip title="标题" content="内容" placement="left-bottom"><Button>左下</Button></Poptip>\n<Poptip title="标题" content="内容" placement="left"><Button>左</Button></Poptip>\n<Poptip title="标题" content="内容" placement="left-top"><Button>左上</Button></Poptip>',slot:'<Poptip content="内容" placement="right-top">\n   <Button>Click me</Button>\n   <div slot="content" class="k-table k-table-border">\n    <table>\n     <thead>\n     <tr>\n      <th>姓名</th>\n      <th>电话</th>\n      <th>住址</th>\n     </tr>\n     </thead>\n      <tr>\n      <td>张山</td>\n      <td>13256652545</td>\n      <td>广东省深圳市宝安区软件产业基地三诺大厦19楼</td>\n     </tr> <tr>\n      <td>王二</td>\n      <td>36254525658</td>\n      <td>浙江省杭州市阿里西溪园区3A18楼</td>\n     </tr>\n    </table>\n   </div>\n</Poptip>',confirm:'<Poptip confirm title="您确认删除这条内容吗？" @ok="ok" @cancel="cancel"> \n  <Button>删除</Button> \n</Poptip>\n<Poptip confirm title="Are you OK?" @ok="ok" @cancel="cancel" ok-text="yes" cancel-text="no"> \n  <Button>自定义</Button>\n </Poptip>',longtext:'<Poptip title="我是一个非常长的标题题题题题题题题题题题题题题" content="我是一个非常长的内容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容">\n   <Button>长文本</Button>\n</Poptip>\n<Poptip width="200"  content="我是一个非常长的内容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容">\n   <Button>长内容</Button>\n</Poptip>\n<Poptip confirm title="缺定要删除吗，删除了不能撤回，删库跑路的绝佳操作,码农必备技能啊。" @ok="ok" @cancel="cancel" >\n   <Button>长文本确认</Button>\n</Poptip>'},i=n,c={components:{Demo:e("+qlZ").a},data:function(){return{code:i}},methods:{ok:function(){this.$Message.info("你点了确定")},cancel:function(){this.$Message.info("你点了取消")}}},l=e("KHd+"),v=Object(l.a)(c,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("h2",[t._v("Poptip 气泡提示")]),t._v(" "),e("Alert",[t._v("注意：若展开的气泡被父级元素遮挡，请设置组件 属性 `transfer=true`。")]),t._v(" "),e("h3",[t._v("代码示例")]),t._v(" "),e("Row",{attrs:{gutter:"8"}},[e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"基本"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Poptip",{attrs:{trigger:"hover",title:"标题",content:"内容",placement:"top-left"}},[e("Button",[t._v("hover激活")])],1),t._v(" "),e("Poptip",{attrs:{trigger:"click",title:"标题",content:"内容"}},[e("Button",[t._v("click激活")])],1),t._v(" "),e("Poptip",{attrs:{title:"标题",content:"内容",dark:""}},[e("Button",[t._v("深色模式")])],1)],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可以分别使用\n        "),e("code",[t._v("click")]),t._v("和\n        "),e("code",[t._v("hover")]),t._v("来触发展示,\n        "),e("code",[t._v("dark")]),t._v("开启暗黑模式")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),e("Demo",{attrs:{title:"确认框"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Poptip",{attrs:{confirm:"",title:"您确认删除这条内容吗？",placement:"top-left"},on:{ok:t.ok,cancel:t.cancel}},[e("Button",[t._v("删除")])],1),t._v(" "),e("Poptip",{attrs:{confirm:"",title:"Are you OK?","ok-text":"yes","cancel-text":"no"},on:{ok:t.ok,cancel:t.cancel}},[e("Button",[t._v("自定义")])],1)],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("启用\n        "),e("code",[t._v("confirm")]),t._v("来自定义一个确认框模式")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.confirm))])]),t._v(" "),e("Demo",{attrs:{title:"长文本"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Poptip",{attrs:{title:"我是一个非常长的标题题题题题题题题题题题题题题",placement:"top-left",content:"我是一个非常长的内容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容"}},[e("Button",[t._v("长文本")])],1),t._v(" "),e("Poptip",{attrs:{width:"200",content:"我是一个非常长的内容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容容"}},[e("Button",[t._v("长内容")])],1),t._v(" "),e("Poptip",{attrs:{confirm:"",title:"缺定要删除吗，删除了不能撤回，删库跑路的绝佳操作,码农必备技能啊。",width:"300"},on:{ok:t.ok,cancel:t.cancel}},[e("Button",[t._v("长文本确认")])],1)],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("启用\n        "),e("code",[t._v("confirm")]),t._v("来自定义一个确认框模式")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.longtext))])])],1),t._v(" "),e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"嵌套"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Poptip",{attrs:{trigger:"click",content:"内容",placement:"left-top"}},[e("Button",[t._v("Click me")]),t._v(" "),e("div",{staticClass:"k-table k-table-border",attrs:{slot:"content"},slot:"content"},[e("table",[e("thead",[e("tr",[e("th",[t._v("姓名")]),t._v(" "),e("th",[t._v("电话")]),t._v(" "),e("th",[t._v("住址")])])]),t._v(" "),e("tr",[e("td",[t._v("张山")]),t._v(" "),e("td",[t._v("13256652545")]),t._v(" "),e("td",[t._v("广东省深圳市宝安区软件产业基地三诺大厦19楼")])]),t._v(" "),e("tr",[e("td",[t._v("王二")]),t._v(" "),e("td",[t._v("36254525658")]),t._v(" "),e("td",[t._v("浙江省杭州市阿里西溪园区3A18楼")])])])])],1)],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),e("code",[t._v("slot=content")]),t._v("来自定义展示内容")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.slot))])]),t._v(" "),e("Demo",{attrs:{title:"位置"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("div",{staticStyle:{"margin-left":"80px","white-space":"nowrap"}},[e("Poptip",{attrs:{title:"标题",content:"内容",placement:"top-left"}},[e("Button",[t._v("上左")])],1),t._v(" "),e("Poptip",{attrs:{title:"标题",content:"内容",placement:"top"}},[e("Button",[t._v("上边")])],1),t._v(" "),e("Poptip",{attrs:{title:"标题",content:"内容",placement:"top-right"}},[e("Button",[t._v("上右")])],1)],1),t._v(" "),e("div",{staticStyle:{float:"left",height:"150px",width:"80px"}},[e("Poptip",{attrs:{title:"标题",content:"内容",placement:"left-top"}},[e("Button",[t._v("左上")])],1),t._v(" "),e("Poptip",{attrs:{title:"标题",content:"内容",placement:"left"}},[e("Button",[t._v("左边")])],1),t._v(" "),e("Poptip",{attrs:{title:"标题",content:"内容",placement:"left-bottom"}},[e("Button",[t._v("左下")])],1)],1),t._v(" "),e("div",{staticStyle:{"margin-left":"300px",height:"150px",width:"80px"}},[e("Poptip",{attrs:{title:"标题",content:"内容",placement:"right-top"}},[e("Button",[t._v("右上")])],1),t._v(" "),e("Poptip",{attrs:{title:"标题",content:"内容",placement:"right"}},[e("Button",[t._v("右边")])],1),t._v(" "),e("Poptip",{attrs:{title:"标题",content:"内容",placement:"right-bottom"}},[e("Button",[t._v("右下")])],1)],1),t._v(" "),e("div",{staticStyle:{"margin-left":"80px","white-space":"nowrap"}},[e("Poptip",{attrs:{title:"标题",content:"内容",placement:"bottom-left"}},[e("Button",[t._v("下左")])],1),t._v(" "),e("Poptip",{attrs:{title:"标题",content:"内容",placement:"bottom"}},[e("Button",[t._v("下边")])],1),t._v(" "),e("Poptip",{attrs:{title:"标题",content:"内容",placement:"bottom-right"}},[e("Button",[t._v("下右")])],1)],1)]),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[e("code",[t._v("Poptip")]),t._v("的位置一共有12种，通过\n        "),e("code",[t._v("placement")]),t._v("控制")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.position))])])],1)],1),t._v(" "),e("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("trigger")]),t._v(" "),e("td",[t._v("触发方式，可选值为hover（悬停）click（点击）,在 confirm 模式下，只有 click 有效")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("click")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("显示的标题")]),t._v(" "),e("td",[t._v("String ")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("content")]),t._v(" "),e("td",[t._v("显示的正文内容，只在非 confirm 模式下有效")]),t._v(" "),e("td",[t._v("String ")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("placement")]),t._v(" "),e("td",[t._v("提示框出现的位置，可选值为top，top-left，top-right，bottom，bottom-left，bottom-right，left，left-top，left-bottom，right，right-top，right-bottom")]),t._v(" "),e("td",[t._v("String ")]),t._v(" "),e("td",[t._v("top")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px")]),t._v(" "),e("td",[t._v("String ")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("confirm")]),t._v(" "),e("td",[t._v("是否开启对话框模式")]),t._v(" "),e("td",[t._v("Boolean ")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("transfer")]),t._v(" "),e("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("ok-text")]),t._v(" "),e("td",[t._v("确定按钮的文字，只在 confirm 模式下有效")]),t._v(" "),e("td",[t._v("String ")]),t._v(" "),e("td",[t._v("确定")])]),t._v(" "),e("tr",[e("td",[t._v("cancel-text")]),t._v(" "),e("td",[t._v("取消按钮的文字，只在 confirm 模式下有效")]),t._v(" "),e("td",[t._v("String ")]),t._v(" "),e("td",[t._v("取消")])]),t._v(" "),e("tr",[e("td",[t._v("cancel")]),t._v(" "),e("td",[t._v("点击取消的回调，只在 confirm 模式下有效")]),t._v(" "),e("td",[t._v("Function ")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("ok")]),t._v(" "),e("td",[t._v("点击确定的回调，只在 confirm 模式下有效")]),t._v(" "),e("td",[t._v("Function ")]),t._v(" "),e("td",[t._v("-")])])])])}],!1,null,null,null);o.default=v.exports}}]);