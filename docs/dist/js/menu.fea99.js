/*! kui-vue v2.0.0 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+qlZ":function(e,t,n){"use strict";var a=n("rMEQ"),m=n("Ff65");var v={directives:{resize:n("7+I9").a},components:{Code:a.a,Collapse:m.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(e={},t="k-demo-".concat(this.layout),n=this.layout,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)];var e,t,n},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},u=n("KHd+"),o=Object(u.a)(v,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),n("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[n("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),n("div",{staticClass:"k-demo-line"}),e._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},[],!1,null,null,null);o.options.__file="demo.vue";var _=o.exports;t.a=_},PzFe:function(e,t,n){"use strict";n.r(t);var a=n("+qlZ"),m={base:'<Menu mode="horizontal" :theme=\'theme\' active-name="1">\n<MenuItem name="1" icon="ios-paper">我的产品</MenuItem>\n<SubMenu name="1">\n  <template slot="title">\n    <Icon type="android-walk" />商品管理\n  </template>\n  <MenuItem name="1-1" >商品信息</MenuItem>\n  <MenuItem name="1-2" >商品列表</MenuItem>\n  <MenuItem name="1-3" >商品新增</MenuItem>\n  <MenuItem name="1-4" >商品筛选</MenuItem>\n</SubMenu>\n<SubMenu name="2">\n  <template slot="title">\n    <Icon type="md-walk" />用户管理\n  </template>\n  <MenuGroup title="超级管理">\n    <MenuItem name="2-1" >用户信息</MenuItem>\n    <MenuItem name="2-2" >用户列表</MenuItem>\n  </MenuGroup>\n  <MenuGroup title="普通管理">\n    <MenuItem name="2-3" >用户新增</MenuItem>\n    <MenuItem name="2-4" >用户筛选</MenuItem>\n  </MenuGroup>\n</SubMenu>\n<MenuItem name="4" icon="logo-apple">新闻管理</MenuItem>\n<MenuItem name="5" icon="ios-locke">权限管理</MenuItem>\n</Menu>\n<p>切换主题</p>\n<RadioGroup v-model="theme">\n    <Radio label="light"></Radio>\n    <Radio label="dark"></Radio>\n    <Radio label="primary"></Radio>\n</RadioGroup>',theme:'<Row>\n<Col span="8">\n  <Menu :theme=\'theme\' active-name="1" >\n    <SubMenu name="0">\n      <template slot="title">\n        <Icon type="ios-paper" />我的产品\n      </template>\n      <MenuItem name="0-1" >我的产品1</MenuItem>\n      <MenuItem name="0-2" >我的产品2</MenuItem>\n      <MenuItem name="0-3" >我的产品3</MenuItem>\n      <MenuItem name="0-4" >我的产品4</MenuItem>\n    </SubMenu>\n    <SubMenu name="1">\n      <template slot="title">\n        <Icon type="logo-apple" />商品管理\n      </template>\n      <MenuItem name="1-1" >商品信息</MenuItem>\n      <MenuItem name="1-2" >商品列表</MenuItem>\n      <MenuItem name="1-3" >商品新增</MenuItem>\n      <MenuItem name="1-4" >商品筛选</MenuItem>\n    </SubMenu>\n    \n    <SubMenu name="2">\n      <template slot="title">\n        <Icon type="md-walk" />用户管理\n      </template>\n      <MenuGroup title="超级管理">\n        <MenuItem name="2-1" >用户信息</MenuItem>\n        <MenuItem name="2-2" >用户列表</MenuItem>\n      </MenuGroup>\n      <MenuGroup title="普通管理">\n        <MenuItem name="2-3" >用户新增</MenuItem>\n        <MenuItem name="2-4" >用户筛选</MenuItem>\n      </MenuGroup>\n    </SubMenu>\n</Menu>\n</Col>\n<Col span="8">\n  <Menu :theme=\'theme\' active-name="1"  accordion>\n    <SubMenu name="0">\n      <template slot="title">\n        <Icon type="ios-paper" />我的产品\n      </template>\n      <MenuItem name="0-1" >我的产品1</MenuItem>\n      <MenuItem name="0-2" >我的产品2</MenuItem>\n      <MenuItem name="0-3" >我的产品3</MenuItem>\n      <MenuItem name="0-4" >我的产品4</MenuItem>\n    </SubMenu>\n    <SubMenu name="1">\n      <template slot="title">\n        <Icon type="logo-apple" />商品管理\n      </template>\n      <MenuItem name="1-1" >商品信息</MenuItem>\n      <MenuItem name="1-2" >商品列表</MenuItem>\n      <MenuItem name="1-3" >商品新增</MenuItem>\n      <MenuItem name="1-4" >商品筛选</MenuItem>\n    </SubMenu>\n    \n    <SubMenu name="2">\n      <template slot="title">\n        <Icon type="md-walk" />用户管理\n      </template>\n      <MenuGroup title="超级管理">\n        <MenuItem name="2-1" >用户信息</MenuItem>\n        <MenuItem name="2-2" >用户列表</MenuItem>\n      </MenuGroup>\n      <MenuGroup title="普通管理">\n        <MenuItem name="2-3" >用户新增</MenuItem>\n        <MenuItem name="2-4" >用户筛选</MenuItem>\n      </MenuGroup>\n        </SubMenu>\n    </Menu>\n    </Col>\n    <Col span="8">\n    <Menu :theme=\'theme\'  >\n      <MenuGroup title="超级管理">\n            <MenuItem name="2-1" >用户信息</MenuItem>\n            <MenuItem name="2-2" >用户列表</MenuItem>\n      </MenuGroup>\n      <MenuGroup title="普通管理">\n            <MenuItem name="2-3" >用户新增</MenuItem>\n            <MenuItem name="2-4" >用户筛选</MenuItem>\n      </MenuGroup>\n    </Menu>\n    </Col>\n  </Row>'},v=m,u={components:{Demo:a.a},data:function(){return{theme:"light",code:v}}},o=n("KHd+"),_=Object(o.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Menu 导航菜单")]),t._v(" "),n("Alert",[t._v("注意：非 template/render 模式下，需使用 k-menu。")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Demo",{attrs:{title:"顶部导航",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Menu",{attrs:{mode:"horizontal",theme:t.theme,"active-name":"1"}},[n("MenuItem",{attrs:{name:"1",icon:"ios-paper"}},[t._v("我的产品")]),t._v(" "),n("SubMenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"md-walk"}}),t._v("商品管理\n          ")],1),t._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[t._v("商品信息")]),t._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[t._v("商品列表")]),t._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[t._v("商品新增")]),t._v(" "),n("MenuItem",{attrs:{name:"1-4"}},[t._v("商品筛选")])],2),t._v(" "),n("SubMenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"md-walk"}}),t._v("用户管理\n          ")],1),t._v(" "),n("MenuGroup",{attrs:{title:"超级管理"}},[n("MenuItem",{attrs:{name:"2-1"}},[t._v("用户信息")]),t._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[t._v("用户列表")])],1),t._v(" "),n("MenuGroup",{attrs:{title:"普通管理"}},[n("MenuItem",{attrs:{name:"2-3"}},[t._v("用户新增")]),t._v(" "),n("MenuItem",{attrs:{name:"2-4"}},[t._v("用户筛选")])],1)],2),t._v(" "),n("MenuItem",{attrs:{name:"4",icon:"logo-apple"}},[t._v("新闻管理")]),t._v(" "),n("MenuItem",{attrs:{name:"5",icon:"ios-locke"}},[t._v("权限管理")])],1),t._v(" "),n("br"),t._v(" "),n("p",[t._v("切换主题")]),t._v(" "),n("br"),t._v(" "),n("RadioGroup",{model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}},[n("Radio",{attrs:{label:"light"}}),t._v(" "),n("Radio",{attrs:{label:"dark"}}),t._v(" "),n("Radio",{attrs:{label:"primary"}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("水平导航菜单，"),n("br"),t._v("可通过\n      "),n("code",[t._v("theme")]),t._v("属性来设置菜单主题，水平导航提供3种， 垂直2种，"),n("br"),t._v(" 通过\n      "),n("code",[t._v("select")]),t._v("事件可以取得点击菜单的name。\n    ")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),n("Demo",{attrs:{title:"侧栏导航",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Row",[n("Col",{attrs:{span:"8"}},[n("Menu",{attrs:{theme:t.theme,"active-name":"0-1","open-name":"0"}},[n("SubMenu",{attrs:{name:"0"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-paper"}}),t._v("我的产品\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"0-1"}},[t._v("我的产品1")]),t._v(" "),n("MenuItem",{attrs:{name:"0-2"}},[t._v("我的产品2")]),t._v(" "),n("MenuItem",{attrs:{name:"0-3"}},[t._v("我的产品3")]),t._v(" "),n("MenuItem",{attrs:{name:"0-4"}},[t._v("我的产品4")])],2),t._v(" "),n("SubMenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"logo-apple"}}),t._v("商品管理\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[t._v("商品信息")]),t._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[t._v("商品列表")]),t._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[t._v("商品新增")]),t._v(" "),n("MenuItem",{attrs:{name:"1-4"}},[t._v("商品筛选")])],2),t._v(" "),n("SubMenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"md-walk"}}),t._v("用户管理\n            ")],1),t._v(" "),n("MenuGroup",{attrs:{title:"超级管理"}},[n("MenuItem",{attrs:{name:"2-1"}},[t._v("用户信息")]),t._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[t._v("用户列表")])],1),t._v(" "),n("MenuGroup",{attrs:{title:"普通管理"}},[n("MenuItem",{attrs:{name:"2-3"}},[t._v("用户新增")]),t._v(" "),n("MenuItem",{attrs:{name:"2-4"}},[t._v("用户筛选")])],1)],2)],1)],1),t._v(" "),n("Col",{attrs:{span:"8"}},[n("Menu",{attrs:{theme:t.theme,"active-name":"0-1",accordion:"","open-name":"0"}},[n("SubMenu",{attrs:{name:"0"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-paper"}}),t._v("我的产品\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"0-1"}},[t._v("我的产品1")]),t._v(" "),n("MenuItem",{attrs:{name:"0-2"}},[t._v("我的产品2")]),t._v(" "),n("MenuItem",{attrs:{name:"0-3"}},[t._v("我的产品3")]),t._v(" "),n("MenuItem",{attrs:{name:"0-4"}},[t._v("我的产品4")])],2),t._v(" "),n("SubMenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"logo-apple"}}),t._v("商品管理\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[t._v("商品信息")]),t._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[t._v("商品列表")]),t._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[t._v("商品新增")]),t._v(" "),n("MenuItem",{attrs:{name:"1-4"}},[t._v("商品筛选")])],2),t._v(" "),n("SubMenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"md-walk"}}),t._v("用户管理\n            ")],1),t._v(" "),n("MenuGroup",{attrs:{title:"超级管理"}},[n("MenuItem",{attrs:{name:"2-1"}},[t._v("用户信息")]),t._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[t._v("用户列表")])],1),t._v(" "),n("MenuGroup",{attrs:{title:"普通管理"}},[n("MenuItem",{attrs:{name:"2-3"}},[t._v("用户新增")]),t._v(" "),n("MenuItem",{attrs:{name:"2-4"}},[t._v("用户筛选")])],1)],2)],1)],1),t._v(" "),n("Col",{attrs:{span:"8"}},[n("Menu",{attrs:{theme:t.theme,activeName:"2-1"}},[n("MenuGroup",{attrs:{title:"超级管理"}},[n("MenuItem",{attrs:{name:"2-1"}},[t._v("用户信息")]),t._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[t._v("用户列表")])],1),t._v(" "),n("MenuGroup",{attrs:{title:"普通管理"}},[n("MenuItem",{attrs:{name:"2-3"}},[t._v("用户新增")]),t._v(" "),n("MenuItem",{attrs:{name:"2-4"}},[t._v("用户筛选")])],1)],1)],1)],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n      通过设置\n      "),n("code",[t._v("mode")]),t._v("属性，切换菜单呈现。\n    ")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.theme))])]),t._v(" "),n("h3",[t._v("Menu API")]),t._v(" "),t._m(0),t._v(" "),n("h3",[t._v("MenuItem API")]),t._v(" "),t._m(1),t._v(" "),n("h3",[t._v("SubMenu API")]),t._v(" "),t._m(2),t._v(" "),n("h3",[t._v("MenuGroup API")]),t._v(" "),t._m(3)],1)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("mode")]),e._v(" "),n("td",[e._v("菜单类型，可选值为 horizontal（水平） 和 vertical（垂直）")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("vertical")])]),e._v(" "),n("tr",[n("td",[e._v("theme")]),e._v(" "),n("td",[e._v('主题，可选值为 light、dark、primary，其中 primary 只适用于 mode="horizontal"')]),e._v(" "),n("td",[e._v("String ")]),e._v(" "),n("td",[e._v("light")])]),e._v(" "),n("tr",[n("td",[e._v("active-name")]),e._v(" "),n("td",[e._v("激活菜单的 name 值")]),e._v(" "),n("td",[e._v("String | Number ")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("open-name")]),e._v(" "),n("td",[e._v("展开的菜单的 name 值，只针对mode=vertical 有效")]),e._v(" "),n("td",[e._v("String | Number ")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("accordion")]),e._v(" "),n("td",[e._v("是否开启手风琴模式，开启后每次至多展开一个子菜单")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("width")]),e._v(" "),n("td",[e._v('导航菜单的宽度，只在 mode="vertical" 时有效, 自动宽度其值为 “auto”')]),e._v(" "),n("td",[e._v("String|Number")]),e._v(" "),n("td",[e._v("240")])]),e._v(" "),n("tr",[n("td",[e._v("select")]),e._v(" "),n("td",[e._v("选择菜单（MenuItem）时触发,返回name")]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),n("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("name")]),e._v(" "),n("td",[e._v("菜单项的唯一标识，必填")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("name")]),e._v(" "),n("td",[e._v("菜单项的唯一标识，必填")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("title")]),e._v(" "),n("td",[e._v("子菜单标题，其slot对应值")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("title")]),e._v(" "),n("td",[e._v("分组标题")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("-")])])])])}],!1,null,null,null);_.options.__file="menu.vue";t.default=_.exports}}]);