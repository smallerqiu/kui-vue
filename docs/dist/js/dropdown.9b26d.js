/*! kui-vue v2.3.4 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+qlZ":function(t,o,n){"use strict";n("MnsJ");var e=n("rMEQ"),r=n("Ff65");var s={directives:{resize:n("7+I9").a},components:{Code:e.a,Collapse:r.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},d=n("KHd+"),v=Object(d.a)(s,function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;o.a=v},MnsJ:function(t,o,n){var e=n("WArN");"string"==typeof e&&(e=[[t.i,e,""]]);var r={insert:"head",singleton:!1};n("LboF")(e,r);e.locals&&(t.exports=e.locals)},WArN:function(t,o,n){(t.exports=n("JPst")(!1)).push([t.i,"",""])},ojxE:function(t,o,n){"use strict";n.r(o);var e=n("+qlZ"),r={base:'<Dropdown>\n  <a style="margin-right:30px;">下拉菜单\n    <Icon type="ios-arrow-down" /></a>\n  <DropdownMenu slot="list">\n    <DropdownItem>苹果🍎</DropdownItem>\n    <DropdownItem>香蕉</DropdownItem>\n    <DropdownItem>橘子</DropdownItem>\n    <DropdownItem>葡萄</DropdownItem>\n  </DropdownMenu>\n</Dropdown>\n<Dropdown>\n  <Button>下拉菜单\n    <Icon type="ios-arrow-down" /></Button>\n  <DropdownMenu slot="list">\n    <DropdownItem>苹果🍎</DropdownItem>\n    <DropdownItem>香蕉</DropdownItem>\n    <DropdownItem>橘子</DropdownItem>\n    <DropdownItem>葡萄</DropdownItem>\n  </DropdownMenu>\n</Dropdown>',trigger:'<Dropdown>\n  <a style="margin-right:10px;">hover展开\n    <Icon type="ios-arrow-down" /></a>\n  <DropdownMenu slot="list">\n    <DropdownItem>苹果🍎</DropdownItem>\n    <DropdownItem>香蕉</DropdownItem>\n    <DropdownItem>橘子</DropdownItem>\n    <DropdownItem>葡萄</DropdownItem>\n  </DropdownMenu>\n</Dropdown>\n<Dropdown trigger="click">\n  <Button>click展开\n    <Icon type="ios-arrow-down" /></Button>\n  <DropdownMenu slot="list">\n    <DropdownItem>苹果🍎</DropdownItem>\n    <DropdownItem>香蕉</DropdownItem>\n    <DropdownItem>橘子</DropdownItem>\n    <DropdownItem>葡萄</DropdownItem>\n  </DropdownMenu>\n</Dropdown>\n<Dropdown trigger="custom" :visible="show">\n  <Button @click="show=true">custom展开\n    <Icon type="ios-arrow-down" /></Button>\n  <div slot="list" style="background:#fff;padding:10px;border:1px solid #ddd;">\n    我是自定义内容\n    <Button mini @click="show=false">关闭</Button>\n  </div>\n</Dropdown>',helper:'<Dropdown>\n  <Button>下拉菜单\n    <Icon type="ios-arrow-down" /></Button>\n  <DropdownMenu slot="list">\n    <DropdownItem>菜单一</DropdownItem>\n    <DropdownItem disabled>我被禁用了</DropdownItem>\n    <DropdownItem>菜单一</DropdownItem>\n    <DropdownItem selected>我被选中了</DropdownItem>\n    <DropdownItem icon="md-save">\n      <span>保存项目</span>\n      <span slot="shortcut">⌘+S</span></DropdownItem>\n    <DropdownItem icon="ios-cut">\n      <span>剪切</span>\n      <span slot="shortcut">⌘+X</span></DropdownItem>\n    <DropdownItem divided>我有一条线</DropdownItem>\n  </DropdownMenu>\n</Dropdown>'},s=r,d={components:{Demo:e.a},data:function(){return{show:!1,code:s}}},v=n("KHd+"),i=Object(v.a)(d,function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",[n("h2",[o._v("下拉菜单")]),o._v(" "),n("Alert",[o._v("注意：若下拉被父级元素遮挡，请设置组件 属性 `transfer=true`。")]),o._v(" "),n("h3",[o._v("代码示例")]),o._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Dropdown",[n("a",{staticStyle:{"margin-right":"30px"}},[o._v("下拉菜单\n            "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),o._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",[o._v("苹果🍎")]),o._v(" "),n("DropdownItem",[o._v("香蕉")]),o._v(" "),n("DropdownItem",[o._v("橘子")]),o._v(" "),n("DropdownItem",[o._v("葡萄")])],1)],1),o._v(" "),n("Dropdown",[n("Button",[o._v("下拉菜单\n            "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),o._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",[o._v("苹果🍎")]),o._v(" "),n("DropdownItem",[o._v("香蕉")]),o._v(" "),n("DropdownItem",[o._v("橘子")]),o._v(" "),n("DropdownItem",[o._v("葡萄")])],1)],1)],1),o._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[o._v("\n        下拉菜单配合"),n("code",[o._v("DropdownMenu，DropdownItem")]),o._v("使用,并标记"),n("code",[o._v('slot="list"')])]),o._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.base))])])],1),o._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"触发方式"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Dropdown",[n("a",{staticStyle:{"margin-right":"10px"}},[o._v("hover展开\n            "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),o._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",[o._v("苹果🍎")]),o._v(" "),n("DropdownItem",[o._v("香蕉")]),o._v(" "),n("DropdownItem",[o._v("橘子")]),o._v(" "),n("DropdownItem",[o._v("葡萄")])],1)],1),o._v(" "),n("Dropdown",{attrs:{trigger:"click"}},[n("Button",[o._v("click展开\n            "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),o._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",[o._v("苹果🍎")]),o._v(" "),n("DropdownItem",[o._v("香蕉")]),o._v(" "),n("DropdownItem",[o._v("橘子")]),o._v(" "),n("DropdownItem",[o._v("葡萄")])],1)],1),o._v(" "),n("Dropdown",{attrs:{trigger:"custom",visible:o.show}},[n("Button",{on:{click:function(t){o.show=!0}}},[o._v("custom展开\n            "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),o._v(" "),n("div",{staticStyle:{background:"#fff",padding:"10px",border:"1px solid #ddd"},attrs:{slot:"list"},slot:"list"},[o._v("\n            我是自定义内容\n            "),n("Button",{attrs:{mini:""},on:{click:function(t){o.show=!1}}},[o._v("关闭")])],1)],1)],1),o._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[o._v("\n        支持三种下拉展开方式"),n("code",[o._v("hover(默认)，click，custom")])]),o._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.trigger))])])],1)],1),o._v(" "),n("Demo",{attrs:{title:"辅助项"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Dropdown",[n("Button",[o._v("下拉菜单\n          "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),o._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",[o._v("菜单一")]),o._v(" "),n("DropdownItem",{attrs:{disabled:""}},[o._v("我被禁用了")]),o._v(" "),n("DropdownItem",[o._v("菜单一")]),o._v(" "),n("DropdownItem",{attrs:{selected:""}},[o._v("我被选中了")]),o._v(" "),n("DropdownItem",{attrs:{icon:"md-save"}},[n("span",[o._v("保存项目")]),o._v(" "),n("span",{attrs:{slot:"shortcut"},slot:"shortcut"},[o._v("⌘+S")])]),o._v(" "),n("DropdownItem",{attrs:{icon:"ios-cut"}},[n("span",[o._v("剪切")]),o._v(" "),n("span",{attrs:{slot:"shortcut"},slot:"shortcut"},[o._v("⌘+X")])]),o._v(" "),n("DropdownItem",{attrs:{divided:""}},[o._v("我有一条线")])],1)],1)],1),o._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[o._v("\n      通过"),n("code",[o._v('disabled、selected、divided、icon、slot="shortcut"')]),o._v("来控制单项的禁用、选中、隔横、图标、快捷键标识等状态\n    ")]),o._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.helper))])]),o._v(" "),n("h3",[o._v("Dropdown API")]),o._v(" "),o._m(0),o._v(" "),n("h3",[o._v("DropdownItem API")]),o._v(" "),o._m(1)],1)},[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("trigger")]),t._v(" "),n("td",[t._v("触发方式,支持hover(默认), click, custom 3种方式")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("hover")])]),t._v(" "),n("tr",[n("td",[t._v("visible")]),t._v(" "),n("td",[t._v("是否显示下拉菜单，trigger为custom可用")]),t._v(" "),n("td",[t._v("Boolen")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("transfer")]),t._v(" "),n("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])])])])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("icon")]),t._v(" "),n("td",[t._v("单项图标")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("单项是否被禁用")]),t._v(" "),n("td",[t._v("Boolen")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("selected")]),t._v(" "),n("td",[t._v("单项是否被选中")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("divided")]),t._v(" "),n("td",[t._v("单项是否有隔横")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])])])])}],!1,null,null,null);o.default=i.exports}}]);