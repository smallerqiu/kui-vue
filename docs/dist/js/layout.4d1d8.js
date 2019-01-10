/*! kui-vue v2.0.0 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+qlZ":function(e,t,n){"use strict";var o=n("rMEQ"),a=n("Ff65");var r={directives:{resize:n("7+I9").a},components:{Code:o.a,Collapse:a.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(e={},t="k-demo-".concat(this.layout),n=this.layout,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)];var e,t,n},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},i=n("KHd+"),s=Object(i.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),n("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[n("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),n("div",{staticClass:"k-demo-line"}),e._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},[],!1,null,null,null);s.options.__file="demo.vue";var v=s.exports;t.a=v},KNpd:function(e,t,n){"use strict";n.r(t);var o={base:'<Layout class="demo-k-layout">\n  <Header>Header</Header>\n  <Content>Content</Content>\n  <Footer>Footer</Footer>\n</Layout>\n<Layout class="demo-k-layout">\n  <Header>Header</Header>\n  <Layout>\n    <Sider>Sider</Sider>\n    <Content>Content</Content>\n  </Layout>\n  <Footer>Footer</Footer>\n</Layout>\n<Layout class="demo-k-layout">\n  <Header>Header</Header>\n  <Layout>\n    <Content pull-left>Content</Content>\n    <Sider>Sider</Sider>\n  </Layout>\n  <Footer>Footer</Footer>\n</Layout>\n\n<Layout class="demo-k-layout">\n  <Sider>Sider</Sider>\n  <Layout>\n    <Header>Header</Header>\n    <Content>Content</Content>\n    <Footer>Footer</Footer>\n  </Layout>\n</Layout>',tmb:'<Layout>\n  <Header>\n    <Menu mode="horizontal" theme="dark" activeName="1" style="line-height:62px;">\n      <div style="width:120px;height:31px;background:#848b9c;float:left;margin: 15px 30px 0 0;"></div>\n      <MenuItem name="1" icon="ios-home">首页</MenuItem>\n      <MenuItem name="2" icon="logo-buffer">文章</MenuItem>\n      <MenuItem name="3" icon="ios-heart">评论</MenuItem>\n    </Menu>\n  </Header>\n  <Content style="padding:0 50px;">\n    <Breadcrumb style="margin:20px 0;">\n      <BreadcrumbItem to="/" icon="ios-home">Home</BreadcrumbItem>\n      <BreadcrumbItem to="/breadcrumb" icon="logo-buffer">breadcrumb</BreadcrumbItem>\n      <BreadcrumbItem icon="ios-heart">other</BreadcrumbItem>\n    </Breadcrumb>\n    <div style="border:1px solid #eee;padding:20px;height:200px;background:#fff">\n      Content\n    </div>\n  </Content>\n  <Footer>\n    2009-2018 &copy; KUI\n  </Footer>\n</Layout>',tlc:'<Layout>\n  <Header>\n    <Menu mode="horizontal" theme="dark" activeName="1" style="line-height:62px;">\n      <div style="width:120px;height:31px;background:#848b9c;float:left;margin: 15px 30px 0 0;"></div>\n      <MenuItem name="1" icon="ios-home">首页</MenuItem>\n      <MenuItem name="2" icon="logo-buffer">文章</MenuItem>\n      <MenuItem name="3" icon="ios-heart">评论</MenuItem>\n    </Menu>\n  </Header>\n  <Layout>\n    <Sider>\n      <Menu theme=\'dark\' active-name="1" width="auto">\n        <SubMenu name="0">\n          <template slot="title">\n            <Icon type="ios-paper" />我的产品\n          </template>\n          <MenuItem name="0-1">我的产品1</MenuItem>\n          <MenuItem name="0-2">我的产品2</MenuItem>\n          <MenuItem name="0-3">我的产品3</MenuItem>\n          <MenuItem name="0-4">我的产品4</MenuItem>\n        </SubMenu>\n        <SubMenu name="1">\n          <template slot="title">\n            <Icon type="logo-apple" />商品管理\n          </template>\n          <MenuItem name="1-1">商品信息</MenuItem>\n          <MenuItem name="1-2">商品列表</MenuItem>\n          <MenuItem name="1-3">商品新增</MenuItem>\n          <MenuItem name="1-4">商品筛选</MenuItem>\n        </SubMenu>\n\n        <SubMenu name="2">\n          <template slot="title">\n            <Icon type="md-walk" />用户管理\n          </template>\n          <MenuGroup title="超级管理">\n            <MenuItem name="2-1">用户信息</MenuItem>\n            <MenuItem name="2-2">用户列表</MenuItem>\n          </MenuGroup>\n          <MenuGroup title="普通管理">\n            <MenuItem name="2-3">用户新增</MenuItem>\n            <MenuItem name="2-4">用户筛选</MenuItem>\n          </MenuGroup>\n        </SubMenu>\n      </Menu>\n    </Sider>\n    <Content style="padding:20px 50px;">\n      <Breadcrumb style="margin:0 0 20px 0;">\n        <BreadcrumbItem to="/" icon="ios-home">Home</BreadcrumbItem>\n        <BreadcrumbItem to="/breadcrumb" icon="logo-buffer">breadcrumb</BreadcrumbItem>\n        <BreadcrumbItem icon="ios-heart">other</BreadcrumbItem>\n      </Breadcrumb>\n      <div style="border:1px solid #eee;padding:20px;height:200px;background:#fff">\n        Content\n      </div>\n    </Content>\n  </Layout>\n</Layout>'},a=o,r={components:{Demo:n("+qlZ").a},data:function(){return{code:a}}},i=n("KHd+"),s=Object(i.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Layout 布局")]),e._v(" "),n("p",[e._v("协助进行页面级整体布局。")]),e._v(" "),n("h3",[e._v("设计规则")]),e._v(" "),n("h4",[e._v("尺寸")]),e._v(" "),n("p",[e._v("一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。")]),e._v(" "),e._m(0),e._v(" "),n("h4",[e._v("交互")]),e._v(" "),e._m(1),e._v(" "),n("h4",[e._v("视觉")]),e._v(" "),n("p",[e._v("导航样式上需要根据信息层级合理的选择样式：")]),e._v(" "),e._m(2),e._v(" "),n("h3",[e._v("组件概述")]),e._v(" "),e._m(3),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("Alert",[e._v("功能不多，他就是简单的布局。未采用\n    "),n("code",[e._v("flex")])]),e._v(" "),n("h3",[e._v("代码示例")]),e._v(" "),n("Demo",{attrs:{title:"典型布局",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Layout",{staticClass:"demo-k-layout"},[n("Header",[e._v("Header")]),e._v(" "),n("Content",[e._v("Content")]),e._v(" "),n("Footer",[e._v("Footer")])],1),e._v(" "),n("Layout",{staticClass:"demo-k-layout"},[n("Header",[e._v("Header")]),e._v(" "),n("Layout",[n("Sider",[e._v("Sider")]),e._v(" "),n("Content",[e._v("Content")])],1),e._v(" "),n("Footer",[e._v("Footer")])],1),e._v(" "),n("Layout",{staticClass:"demo-k-layout"},[n("Header",[e._v("Header")]),e._v(" "),n("Layout",[n("Content",{attrs:{"pull-left":""}},[e._v("Content")]),e._v(" "),n("Sider",[e._v("Sider")])],1),e._v(" "),n("Footer",[e._v("Footer")])],1),e._v(" "),n("Layout",{staticClass:"demo-k-layout"},[n("Sider",[e._v("Sider")]),e._v(" "),n("Layout",[n("Header",[e._v("Header")]),e._v(" "),n("Content",[e._v("Content")]),e._v(" "),n("Footer",[e._v("Footer")])],1)],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("典型的页面布局。")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),n("Demo",{attrs:{title:"上中下布局",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Layout",[n("Header",[n("Menu",{staticStyle:{"line-height":"62px"},attrs:{mode:"horizontal",theme:"dark",activeName:"1"}},[n("div",{staticStyle:{width:"120px",height:"31px",background:"#848b9c",float:"left",margin:"15px 30px 0 0"}}),e._v(" "),n("MenuItem",{attrs:{name:"1",icon:"ios-home"}},[e._v("首页")]),e._v(" "),n("MenuItem",{attrs:{name:"2",icon:"logo-buffer"}},[e._v("文章")]),e._v(" "),n("MenuItem",{attrs:{name:"3",icon:"ios-heart"}},[e._v("评论")])],1)],1),e._v(" "),n("Content",{staticStyle:{padding:"0 50px"}},[n("Breadcrumb",{staticStyle:{margin:"20px 0"}},[n("BreadcrumbItem",{attrs:{to:"/",icon:"ios-home"}},[e._v("Home")]),e._v(" "),n("BreadcrumbItem",{attrs:{to:"/breadcrumb",icon:"logo-buffer"}},[e._v("breadcrumb")]),e._v(" "),n("BreadcrumbItem",{attrs:{icon:"ios-heart"}},[e._v("other")])],1),e._v(" "),n("div",{staticStyle:{border:"1px solid #eee",padding:"20px",height:"200px",background:"#fff"}},[e._v("\n            Content\n          ")])],1),e._v(" "),n("Footer",[e._v("\n          2009-2018 © KUI\n        ")])],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("最基本的『上-中-下』布局。 一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。\n    ")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.tmb))])]),e._v(" "),n("Demo",{attrs:{title:"顶部-侧边布局-通栏",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Layout",[n("Header",[n("Menu",{staticStyle:{"line-height":"62px"},attrs:{mode:"horizontal",theme:"dark",activeName:"1"}},[n("div",{staticStyle:{width:"120px",height:"31px",background:"#848b9c",float:"left",margin:"15px 30px 0 0"}}),e._v(" "),n("MenuItem",{attrs:{name:"1",icon:"ios-home"}},[e._v("首页")]),e._v(" "),n("MenuItem",{attrs:{name:"2",icon:"logo-buffer"}},[e._v("文章")]),e._v(" "),n("MenuItem",{attrs:{name:"3",icon:"ios-heart"}},[e._v("评论")])],1)],1),e._v(" "),n("Layout",[n("Sider",[n("Menu",{attrs:{theme:"dark","active-name":"1",width:"auto"}},[n("SubMenu",{attrs:{name:"0"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-paper"}}),e._v("我的产品\n                ")],1),e._v(" "),n("MenuItem",{attrs:{name:"0-1"}},[e._v("我的产品1")]),e._v(" "),n("MenuItem",{attrs:{name:"0-2"}},[e._v("我的产品2")]),e._v(" "),n("MenuItem",{attrs:{name:"0-3"}},[e._v("我的产品3")]),e._v(" "),n("MenuItem",{attrs:{name:"0-4"}},[e._v("我的产品4")])],2),e._v(" "),n("SubMenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"logo-apple"}}),e._v("商品管理\n                ")],1),e._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[e._v("商品信息")]),e._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[e._v("商品列表")]),e._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[e._v("商品新增")]),e._v(" "),n("MenuItem",{attrs:{name:"1-4"}},[e._v("商品筛选")])],2),e._v(" "),n("SubMenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"md-walk"}}),e._v("用户管理\n                ")],1),e._v(" "),n("MenuGroup",{attrs:{title:"超级管理"}},[n("MenuItem",{attrs:{name:"2-1"}},[e._v("用户信息")]),e._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[e._v("用户列表")])],1),e._v(" "),n("MenuGroup",{attrs:{title:"普通管理"}},[n("MenuItem",{attrs:{name:"2-3"}},[e._v("用户新增")]),e._v(" "),n("MenuItem",{attrs:{name:"2-4"}},[e._v("用户筛选")])],1)],2)],1)],1),e._v(" "),n("Content",{staticStyle:{padding:"20px 50px"}},[n("Breadcrumb",{staticStyle:{margin:"0 0 20px 0"}},[n("BreadcrumbItem",{attrs:{to:"/",icon:"ios-home"}},[e._v("Home")]),e._v(" "),n("BreadcrumbItem",{attrs:{to:"/breadcrumb",icon:"logo-buffer"}},[e._v("breadcrumb")]),e._v(" "),n("BreadcrumbItem",{attrs:{icon:"ios-heart"}},[e._v("other")])],1),e._v(" "),n("div",{staticStyle:{border:"1px solid #eee",padding:"20px",height:"200px",background:"#fff"}},[e._v("\n              Content\n            ")])],1)],1)],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。 ")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.tlc))])])],1)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"k-item-list"},[n("li",[e._v("顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。")]),e._v(" "),n("li",[e._v("顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。")]),e._v(" "),n("li",[e._v("顶部导航高度的范围计算公式为：48+8n。")]),e._v(" "),n("li",[e._v("侧边导航宽度的范围计算公式：200+8n。")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"k-item-list"},[n("li",[e._v("一级导航和末级的导航需要在可视化的层面被强调出来；")]),e._v(" "),n("li",[e._v("当前项应该在呈现上优先级最高；")]),e._v(" "),n("li",[e._v("当导航收起的时候，当前项的样式自动赋予给它的上一个层级；")]),e._v(" "),n("li",[e._v("左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"k-item-list"},[n("li",[n("strong",[e._v("大色块强调")]),e._v(" "),n("p",[e._v("建议用于底色为深色系时，当前页面父级的导航项。")])]),e._v(" "),n("li",[n("strong",[e._v("高亮火柴棍")]),e._v(" "),n("p",[e._v("当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。")])]),e._v(" "),n("li",[n("strong",[e._v("字体高亮变色")]),e._v(" "),n("p",[e._v("从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。")])]),e._v(" "),n("li",[n("strong",[e._v("字体放大")]),e._v(" "),n("p",[e._v("12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"k-item-list"},[n("li",[n("code",[e._v("Layout")]),e._v("：布局容器，其下可嵌套\n      "),n("code",[e._v("Header")]),e._v(" "),n("code",[e._v("Sider")]),e._v(" "),n("code",[e._v("Content")]),e._v(" "),n("code",[e._v("Footer")]),e._v("或\n      "),n("code",[e._v("Layout")]),e._v(" 本身，可以放在任何父容器中。")]),e._v(" "),n("li",[n("code",[e._v("Header")]),e._v("：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在\n      "),n("code",[e._v("Layout")]),e._v(" 中。")]),e._v(" "),n("li",[n("code",[e._v("Sider")]),e._v("：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在\n      "),n("code",[e._v("Layout")]),e._v(" 中。")]),e._v(" "),n("li",[n("code",[e._v("Content")]),e._v("：内容部分，自带默认样式，其下可嵌套任何元素，只能放在\n      "),n("code",[e._v("Layout")]),e._v(" 中。")]),e._v(" "),n("li",[n("code",[e._v("Footer")]),e._v("：底部布局，自带默认样式，其下可嵌套任何元素，只能放在\n      "),n("code",[e._v("Layout")]),e._v(" 中。")])])}],!1,null,null,null);s.options.__file="layout.vue";t.default=s.exports}}]);