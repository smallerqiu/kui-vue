/*!
 * kui-vue v3.3.7-rc1
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[7225],{5471:function(t,e,n){"use strict";n.r(e);var o=n(8081),a=n.n(o),r=n(3645),i=n.n(r)()(a());i.push([t.id,"\n.demo-k-layout[data-v-12c67d46] {\n    text-align: center;\n}\n.demo-k-layout >.k-layout[data-v-12c67d46] {\n    margin-bottom: 20px;\n    color: #fff\n}\n.demo-k-layout .k-layout-footer[data-v-12c67d46],.demo-k-layout .k-layout-header[data-v-12c67d46] {\n    background-color: var(--kui-color-main-60);\n    height:64px;\n    line-height:64px;\n}\n.demo-k-layout .k-layout-content[data-v-12c67d46] {\n    min-height: 120px;\n    line-height: 120px;\n    background-color: var(--kui-color-main-30);\n}\n.demo-k-layout .k-layout-sider[data-v-12c67d46] {\n    line-height: 120px;\n    background-color: var(--kui-color-main-10);\n    width:200px;\n}\n",""]),e.default=i},3645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);o&&i[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},8081:function(t){"use strict";t.exports=function(t){return t[1]}},3888:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return L}});var o=function(){this._self._c;return this._m(0)};o._withStripped=!0;var a=n(1900),r=(0,a.Z)({},o,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Layout 布局")]),t._v(" "),e("p",[t._v("协助进行页面级整体布局。")]),t._v(" "),e("h3",{attrs:{id:"设计规则",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计规则"}},[t._v("设计规则")])]),t._v(" "),e("h4",{attrs:{id:"尺寸",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#尺寸"}},[t._v("尺寸")])]),t._v(" "),e("p",[t._v("一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。")]),t._v(" "),e("ul",[e("li",[t._v("顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。")]),t._v(" "),e("li",[t._v("顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。")]),t._v(" "),e("li",[t._v("顶部导航高度的范围计算公式为：48+8n。")]),t._v(" "),e("li",[t._v("侧边导航宽度的范围计算公式：200+8n。")])]),t._v(" "),e("h4",{attrs:{id:"交互",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交互"}},[t._v("交互")])]),t._v(" "),e("ul",[e("li",[t._v("一级导航和末级的导航需要在可视化的层面被强调出来；")]),t._v(" "),e("li",[t._v("当前项应该在呈现上优先级最高；")]),t._v(" "),e("li",[t._v("当导航收起的时候，当前项的样式自动赋予给它的上一个层级；")]),t._v(" "),e("li",[t._v("左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。")])]),t._v(" "),e("h4",{attrs:{id:"视觉",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视觉"}},[t._v("视觉")])]),t._v(" "),e("p",[t._v("导航样式上需要根据信息层级合理的选择样式：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("大色块强调"),e("br"),t._v("\n建议用于底色为深色系时，当前页面父级的导航项。")])]),t._v(" "),e("li",[e("p",[t._v("高亮火柴棍"),e("br"),t._v("\n当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。")])]),t._v(" "),e("li",[e("p",[t._v("字体高亮变色"),e("br"),t._v("\n从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。")])]),t._v(" "),e("li",[e("p",[t._v("字体放大"),e("br"),t._v("\n12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。")])])]),t._v(" "),e("h3",{attrs:{id:"组件概述",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件概述"}},[t._v("组件概述")])]),t._v(" "),e("ul",[e("li",[e("code",{pre:!0},[t._v("Layout")]),t._v("：布局容器，其下可嵌套 "),e("code",{pre:!0},[t._v("Header")]),t._v(" "),e("code",{pre:!0},[t._v("Sider")]),t._v(" "),e("code",{pre:!0},[t._v("Content")]),t._v(" "),e("code",{pre:!0},[t._v("Footer")]),t._v(" 或 "),e("code",{pre:!0},[t._v("Layout")]),t._v(" 本身，可以放在任何父容器中。")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("Header")]),t._v("：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 "),e("code",{pre:!0},[t._v("Layout")]),t._v(" 中。")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("Sider")]),t._v("：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 "),e("code",{pre:!0},[t._v("Layout")]),t._v(" 中。")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("Content")]),t._v("：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 "),e("code",{pre:!0},[t._v("Layout")]),t._v(" 中。")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("Footer")]),t._v("：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 "),e("code",{pre:!0},[t._v("Layout")]),t._v(" 中。")])]),t._v(" "),e("blockquote",[e("p",[t._v("3.0 版本以后使用 "),e("code",{pre:!0},[t._v("flex")]),t._v(" 布局，请注意"),e("a",{attrs:{href:"http://caniuse.com/#search=flex"}},[t._v("浏览器兼容性")])])])])}],!1,null,null,null).exports,i=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-k-layout"},[e("Layout",[e("Header",[t._v("Header")]),t._v(" "),e("Content",[t._v("Content")]),t._v(" "),e("Footer",[t._v("Footer")])],1),t._v(" "),e("Layout",[e("Header",[t._v("Header")]),t._v(" "),e("Layout",[e("Sider",[t._v("Sider")]),t._v(" "),e("Content",[t._v("Content")])],1),t._v(" "),e("Footer",[t._v("Footer")])],1),t._v(" "),e("Layout",[e("Header",[t._v("Header")]),t._v(" "),e("Layout",[e("Content",[t._v("Content")]),t._v(" "),e("Sider",[t._v("Sider")])],1),t._v(" "),e("Footer",[t._v("Footer")])],1),t._v(" "),e("Layout",[e("Sider",[t._v("Sider")]),t._v(" "),e("Layout",[e("Header",[t._v("Header")]),t._v(" "),e("Content",[t._v("Content")]),t._v(" "),e("Footer",[t._v("Footer")])],1)],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"典型布局",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#典型布局"}},[t._v("典型布局")])]),t._v(" "),e("p",[t._v("典型的页面布局。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-k-layout">\n    <Layout>\n      <Header>Header</Header>\n      <Content>Content</Content>\n      <Footer>Footer</Footer>\n    </Layout>\n    <Layout>\n      <Header>Header</Header>\n      <Layout>\n        <Sider>Sider</Sider>\n        <Content>Content</Content>\n      </Layout>\n      <Footer>Footer</Footer>\n    </Layout>\n    <Layout>\n      <Header>Header</Header>\n      <Layout>\n        <Content>Content</Content>\n        <Sider>Sider</Sider>\n      </Layout>\n      <Footer>Footer</Footer>\n    </Layout>\n    <Layout>\n      <Sider>Sider</Sider>\n      <Layout>\n        <Header>Header</Header>\n        <Content>Content</Content>\n        <Footer>Footer</Footer>\n      </Layout>\n    </Layout>\n  </div>\n</template>\n<style scoped>\n.demo-k-layout {\n    text-align: center;\n}\n.demo-k-layout >.k-layout {\n    margin-bottom: 20px;\n    color: #fff\n}\n.demo-k-layout .k-layout-footer,.demo-k-layout .k-layout-header {\n    background-color: var(--kui-color-main-60);\n    height:64px;\n    line-height:64px;\n}\n.demo-k-layout .k-layout-content {\n    min-height: 120px;\n    line-height: 120px;\n    background-color: var(--kui-color-main-30);\n}\n.demo-k-layout .k-layout-sider {\n    line-height: 120px;\n    background-color: var(--kui-color-main-10);\n    width:200px;\n}\n</style>\n\n')])])])],2)};i._withStripped=!0;n(4513);var s=(0,a.Z)({},i,[],!1,null,"12c67d46",null).exports,l=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"k-demo-layout"},[e("Layout",{staticClass:"layout-back"},[e("Header",{staticClass:"demo-header"},[e("Row",{attrs:{type:"flex",align:"middle"}},[e("Col",{staticStyle:{width:"194px"}},[e("div",{staticClass:"logo-box"},[e("Icon",{staticClass:"logo",attrs:{type:t.LogoKui,size:"30"}}),t._v("\n            K UIKIT\n          ")],1)]),t._v(" "),e("Col",{attrs:{flex:"1"}},[e("Input",{staticStyle:{width:"200px"},attrs:{icon:t.Search,placeholder:"搜索功能",theme:"light",shape:"circle"}})],1),t._v(" "),e("Col",[e("Tooltip",{attrs:{title:"全屏显示",placement:"bottom"}},[e("Button",{attrs:{icon:t.Scan,theme:"normal"}})],1),t._v(" "),e("Button",{attrs:{type:"link"}},[t._v("帮助文档")]),t._v(" "),e("Button",{attrs:{icon:t.NotificationsOutline,theme:"normal"}}),t._v(" "),e("Avatar",{staticStyle:{background:"#3a95ff"},attrs:{size:40}},[t._v("K")])],1)],1)],1),t._v(" "),e("Layout",[e("Sider",{staticClass:"demo-back"},[e("Menu",{staticClass:"demo-left-menu",staticStyle:{"padding-top":"20px"},attrs:{value:["t1"],mode:"inline"}},[e("MenuItem",{key:"t1",attrs:{icon:t.Home}},[t._v("首页")]),t._v(" "),e("MenuItem",{key:"t2",attrs:{icon:t.StatsChart}},[t._v("数据统计")]),t._v(" "),e("MenuItem",{key:"t3",attrs:{icon:t.Settings}},[t._v("能源管理")])],1)],1),t._v(" "),e("Layout",{staticClass:"k-demo-main"},[e("Breadcrumb",{staticClass:"nav"},[e("BreadcrumbItem",[t._v("Home")]),t._v(" "),e("BreadcrumbItem",[t._v("List")]),t._v(" "),e("BreadcrumbItem",[t._v("App")])],1),t._v(" "),e("Content",{staticClass:"demo-back"},[t._v("\n            Content\n        ")])],1)],1)],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"顶部-侧边布局-通栏",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#顶部-侧边布局-通栏"}},[t._v("顶部-侧边布局-通栏")])]),t._v(" "),e("p",[t._v("同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="k-demo-layout">\n    <Layout class="layout-back">\n      <Header class="demo-header">\n        <Row type="flex" align="middle">\n          <Col style="width:194px">\n            <div class="logo-box">\n              <Icon :type="LogoKui" size="30" class="logo"/>\n              K UIKIT\n            </div>\n          </Col>\n          <Col flex="1">\n            <Input :icon="Search" placeholder="搜索功能" style="width:200px;" theme="light" shape="circle" />\n          </Col>\n          <Col>\n            <Tooltip title="全屏显示" placement="bottom">\n              <Button :icon="Scan" theme="normal"/>\n            </Tooltip>\n            <Button type="link">帮助文档</Button>\n            <Button :icon="NotificationsOutline" theme="normal"/>\n            <Avatar style="background:#3a95ff" :size="40">K</Avatar>\n          </Col>\n        </Row>\n      </Header>\n       <Layout>\n         <Sider class="demo-back">\n           <Menu :value="[\'t1\']" class="demo-left-menu" mode="inline" style="padding-top:20px;">\n            <MenuItem key="t1" :icon="Home">首页</MenuItem>\n            <MenuItem key="t2" :icon="StatsChart">数据统计</MenuItem>\n            <MenuItem key="t3" :icon="Settings">能源管理</MenuItem>\n          </Menu>\n         </Sider>\n         <Layout class="k-demo-main">  \n           <Breadcrumb class="nav">\n            <BreadcrumbItem>Home</BreadcrumbItem>\n            <BreadcrumbItem>List</BreadcrumbItem>\n            <BreadcrumbItem>App</BreadcrumbItem>\n          </Breadcrumb>\n          <Content class="demo-back">\n              Content\n          </Content>\n         </Layout>  \n       </Layout>\n    </Layout>\n  </div>\n</template>\n<script>\nimport { LogoKui, Home, StatsChart, Settings, Scan, NotificationsOutline,Search } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n     LogoKui, Home, StatsChart, Settings, Scan, NotificationsOutline,Search\n    }\n  }\n}\n<\/script>\n<style scoped lang="less">\n .k-demo-layout{\n   .demo-header{\n     border-bottom:1px solid var(--kui-color-border);\n     padding:15px 20px 15px 30px;\n     min-width:700px;\n   }\n  .logo-box {\n    /* width: 190px; */\n    position:relative;\n    z-index:801;\n    box-sizing: border-box;\n    display:flex;\n    align-items:center;   \n    .logo{\n      margin-right:8px;\n    }\n  } \n }\n .k-demo-layout .demo-left-menu{\n   height:100%;\n }\n.k-demo-layout .k-demo-main{\n   padding:0 24px 24px;\n }\n.k-demo-layout .k-demo-main .nav{\n   padding:16px 0;\n }\n.k-demo-layout .k-demo-main .k-layout-content{\n   /* background-color:#fff; */\n   padding:24px;\n   min-height:300px;\n }\n.k-demo-layout .k-layout-sider{\n  width:200px;\n }\n </style>\n\n')])])])],2)};l._withStripped=!0;var d=n(2324),c={data(){return{LogoKui:d.LogoKui,Home:d.Home,StatsChart:d.StatsChart,Settings:d.Settings,Scan:d.Scan,NotificationsOutline:d.NotificationsOutline,Search:d.Search}}},u=(0,a.Z)(c,l,[],!1,null,"3f782309",null).exports,m=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"k-demo-layout"},[e("Layout",{staticClass:"layout-back"},[e("Header",{staticClass:"demo-header"},[e("Row",{attrs:{type:"flex",align:"middle"}},[e("Col",{staticStyle:{width:"220px"}},[e("div",{staticClass:"logo-box"},[e("Icon",{staticClass:"logo",attrs:{type:t.LogoKui,size:"30"}}),t._v("\n            K UIKIT\n          ")],1)]),t._v(" "),e("Col",{attrs:{flex:"1"}},[e("Input",{staticStyle:{width:"200px"},attrs:{icon:t.Search,placeholder:"搜索功能",theme:"light",shape:"circle"}})],1),t._v(" "),e("Col",[e("Tooltip",{attrs:{title:"全屏显示",placement:"bottom"}},[e("Button",{attrs:{icon:t.Scan,theme:"normal"}})],1),t._v(" "),e("Button",{attrs:{type:"link"}},[t._v("帮助文档")]),t._v(" "),e("Button",{attrs:{icon:t.NotificationsOutline,theme:"normal"}}),t._v(" "),e("Avatar",{staticStyle:{background:"#3a95ff"},attrs:{size:40}},[t._v("K")])],1)],1)],1),t._v(" "),e("Content",{staticClass:"k-demo-main demo-back"},[e("Breadcrumb",{staticClass:"nav"},[e("BreadcrumbItem",[t._v("Home")]),t._v(" "),e("BreadcrumbItem",[t._v("List")]),t._v(" "),e("BreadcrumbItem",[t._v("App")])],1),t._v(" "),e("Layout",{staticClass:"demo-back"},[e("Sider",{staticStyle:{background:"transparent"}},[e("Menu",{staticClass:"demo-left-menu",attrs:{mode:"inline"},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[e("MenuItem",{key:"t1",attrs:{icon:t.Home}},[t._v("首页")]),t._v(" "),e("MenuItem",{key:"t2",attrs:{icon:t.StatsChart}},[t._v("数据统计")]),t._v(" "),e("MenuItem",{key:"t3",attrs:{icon:t.Settings}},[t._v("能源管理")])],1)],1),t._v(" "),e("Content",[t._v("Conent")])],1)],1),t._v(" "),e("Footer",{staticStyle:{background:"transparent"}},[t._v("KUI ©2018 Created by chuchur")])],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"顶部-侧边布局",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#顶部-侧边布局"}},[t._v("顶部-侧边布局")])]),t._v(" "),e("p",[t._v("拥有顶部导航及侧边栏的页面，多用于展示类网站。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="k-demo-layout">\n    <Layout class="layout-back">\n      <Header class="demo-header">\n        <Row type="flex" align="middle">\n          <Col style="width:220px">\n            <div class="logo-box">\n              <Icon :type="LogoKui" size="30" class="logo"/>\n              K UIKIT\n            </div>\n          </Col>\n          <Col flex="1">\n            <Input :icon="Search" placeholder="搜索功能" style="width:200px;" theme="light" shape="circle" />\n          </Col>\n          <Col>\n            <Tooltip title="全屏显示" placement="bottom">\n              <Button :icon="Scan" theme="normal"/>\n            </Tooltip>\n            <Button type="link">帮助文档</Button>\n            <Button :icon="NotificationsOutline" theme="normal"/>\n            <Avatar style="background:#3a95ff" :size="40">K</Avatar>\n          </Col>\n        </Row>\n      </Header>\n      <Content class="k-demo-main demo-back">\n        <Breadcrumb class="nav">\n            <BreadcrumbItem>Home</BreadcrumbItem>\n            <BreadcrumbItem>List</BreadcrumbItem>\n            <BreadcrumbItem>App</BreadcrumbItem>\n          </Breadcrumb>\n        <Layout class="demo-back">\n          <Sider style="background:transparent;">\n            <Menu  v-model="left" class="demo-left-menu" mode="inline">\n              <MenuItem key="t1" :icon="Home">首页</MenuItem>\n              <MenuItem key="t2" :icon="StatsChart">数据统计</MenuItem>\n              <MenuItem key="t3" :icon="Settings">能源管理</MenuItem>\n            </Menu>\n          </Sider>\n          <Content>Conent</Content>\n        </Layout> \n      </Content> \n      <Footer style="background:transparent;">KUI ©2018 Created by chuchur</Footer>\n    </Layout>\n  </div>\n</template>\n<script>\nimport { LogoKui, Home, StatsChart, Settings, Scan, Search, NotificationsOutline } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      LogoKui,Home, StatsChart, Settings, Scan, NotificationsOutline,Search,\n      left:[\'t1\']\n    }\n  }\n}\n<\/script>\n<style scoped lang="less">\n .k-demo-layout{\n   .demo-header{\n     border-bottom:1px solid var(--kui-color-border);\n     padding:15px 20px 15px 30px;\n     min-width:700px;\n   }\n  .logo-box {\n    /* width: 190px; */\n    position:relative;\n    z-index:801;\n    box-sizing: border-box;\n    display:flex;\n    align-items:center;\n    .logo{\n      margin-right:8px;\n    }\n  } \n }\n .k-demo-layout .demo-left-menu{\n   height:100%;\n }\n.k-demo-layout .k-demo-main{\n   padding:0 50px;\n }\n.k-demo-layout .k-demo-main .nav{\n   padding:16px 0;\n }\n.k-demo-layout .k-demo-main .k-layout-content{\n   padding:24px;\n   min-height:300px;\n }\n.k-demo-layout .k-layout-sider{\n  width:200px;\n }\n .k-demo-layout .k-layout-footer{\n  text-align:center;\n  color:#999;\n }\n </style>\n\n')])])])],2)};m._withStripped=!0;var p={data(){return{LogoKui:d.LogoKui,Home:d.Home,StatsChart:d.StatsChart,Settings:d.Settings,Scan:d.Scan,NotificationsOutline:d.NotificationsOutline,Search:d.Search,left:["t1"]}}},v=(0,a.Z)(p,m,[],!1,null,"3f830a67",null).exports,h=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"k-demo-layout"},[e("Layout",{staticClass:"layout-back"},[e("Header",{staticClass:"demo-header"},[e("Row",{attrs:{type:"flex",align:"middle"}},[e("Col",{staticStyle:{width:"194px"}},[e("div",{staticClass:"logo-box"},[e("Icon",{staticClass:"logo",attrs:{type:t.LogoKui,size:"30"}}),t._v("\n            K UIKIT\n          ")],1)]),t._v(" "),e("Col",{attrs:{flex:"1"}},[e("Menu",{staticClass:"demo-top-menu",attrs:{mode:"horizontal"},model:{value:t.top,callback:function(e){t.top=e},expression:"top"}},[e("MenuItem",{key:"t1"},[t._v("首页")]),t._v(" "),e("MenuItem",{key:"t2"},[t._v("新闻")]),t._v(" "),e("MenuItem",{key:"t3"},[t._v("知识库")])],1)],1),t._v(" "),e("Col",[e("Space",{attrs:{size:30}},[e("Input",{staticStyle:{width:"200px"},attrs:{icon:t.Search,theme:"light",shape:"circle",placeholder:"搜索"}}),t._v(" "),e("Button",{attrs:{icon:t.NotificationsOutline,theme:"normal"}}),t._v(" "),e("Avatar",{staticStyle:{background:"#3a95ff"},attrs:{size:40,shape:"square"}},[t._v("K")])],1)],1)],1)],1),t._v(" "),e("Content",{staticClass:"k-demo-main"},[e("Breadcrumb",{staticClass:"nav"},[e("BreadcrumbItem",[t._v("Home")]),t._v(" "),e("BreadcrumbItem",[t._v("List")]),t._v(" "),e("BreadcrumbItem",[t._v("App")])],1),t._v(" "),e("Content",{staticClass:"demo-back"},[t._v("Conent")])],1),t._v(" "),e("Footer",{staticStyle:{background:"transparent"}},[t._v("KUI ©2018 Created by chuchur")])],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"上中下布局",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上中下布局"}},[t._v("上中下布局")])]),t._v(" "),e("p",[t._v("最基本的『上-中-下』布局。"),e("br"),t._v("\n一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="k-demo-layout">\n    <Layout  class="layout-back">\n      <Header class="demo-header">\n        <Row type="flex" align="middle">\n          <Col style="width:194px">\n            <div class="logo-box">\n              <Icon :type="LogoKui" size="30" class="logo"/>\n              K UIKIT\n            </div>\n          </Col>\n          <Col flex="1">\n            <Menu mode="horizontal" v-model="top" class="demo-top-menu">\n              <MenuItem key="t1">首页</MenuItem>\n              <MenuItem key="t2">新闻</MenuItem>\n              <MenuItem key="t3">知识库</MenuItem>\n            </Menu>\n          </Col>\n          <Col>\n            <Space :size="30">\n              <Input :icon="Search" theme="light" shape="circle" placeholder="搜索" style="width:200px"/>\n              <Button :icon="NotificationsOutline" theme="normal"/>\n              <Avatar style="background:#3a95ff" :size="40" shape="square">K</Avatar>\n            </Space>\n          </Col>\n        </Row>\n      </Header> \n      <Content class="k-demo-main">\n        <Breadcrumb class="nav">\n            <BreadcrumbItem>Home</BreadcrumbItem>\n            <BreadcrumbItem>List</BreadcrumbItem>\n            <BreadcrumbItem>App</BreadcrumbItem>\n          </Breadcrumb>\n        <Content class="demo-back">Conent</Content>\n      </Content> \n      <Footer style="background:transparent;">KUI ©2018 Created by chuchur</Footer>\n    </Layout>\n  </div>\n</template>\n<script>\nimport { LogoKui, Search, NotificationsOutline  } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      LogoKui, NotificationsOutline, Search,\n      top:[\'t1\'],\n      left:[\'0-1\']\n    }\n  }\n}\n<\/script>\n<style scoped lang="less">\n .k-demo-layout{\n   .demo-header{\n     border-bottom:1px solid var(--kui-color-border);\n     padding:15px 20px 0px 30px;\n     min-width:900px;\n   }\n  .logo-box {\n    /* width: 190px; */\n    position:relative;\n    z-index:801;\n    box-sizing: border-box;\n    display:flex;\n    align-items:center;\n    .logo{\n      margin-right:8px;\n    }\n  } \n }\n.k-demo-layout .demo-top-menu{\n   border:none;\n   li {\n     line-height:31px;\n   }\n }\n.k-demo-layout .k-demo-main{\n   padding:0 50px;\n }\n.k-demo-layout .k-demo-main .nav{\n   padding:16px 0;\n }\n.k-demo-layout .k-demo-main .k-layout-content{\n   padding:24px;\n   min-height:300px;\n }\n .k-demo-layout .k-layout-footer{\n  text-align:center;\n  color:#999;\n }\n </style>\n\n')])])])],2)};h._withStripped=!0;var _={data(){return{LogoKui:d.LogoKui,NotificationsOutline:d.NotificationsOutline,Search:d.Search,top:["t1"],left:["0-1"]}}},y=(0,a.Z)(_,h,[],!1,null,"728bd0bf",null).exports,g=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"k-demo-layout"},[e("Layout",{staticClass:"layout-back"},[e("Sider",{staticClass:"demo-sider"},[e("div",{staticClass:"logo-box"},[e("Icon",{staticClass:"logo",attrs:{type:t.LogoKui,size:"30"}}),t._v("\n        KUI运营后台\n      ")],1),t._v(" "),e("Menu",{staticClass:"demo-top-menu",attrs:{mode:"inline"},model:{value:t.top,callback:function(e){t.top=e},expression:"top"}},[e("MenuItem",{key:"t1",attrs:{icon:t.Home}},[t._v("首页")]),t._v(" "),e("MenuItem",{key:"t2",attrs:{icon:t.StatsChart}},[t._v("数据统计")]),t._v(" "),e("MenuItem",{key:"t3",attrs:{icon:t.Settings}},[t._v("能源管理")])],1)],1),t._v(" "),e("Content",{staticClass:"k-demo-main"},[e("Breadcrumb",{staticClass:"nav"},[e("BreadcrumbItem",[t._v("Home")]),t._v(" "),e("BreadcrumbItem",[t._v("List")]),t._v(" "),e("BreadcrumbItem",[t._v("App")])],1),t._v(" "),e("div",{staticClass:"demo-back",staticStyle:{padding:"300px 0","text-align":"center",color:"#ddd",margin:"20px"}},[t._v("我是打酱油的")]),t._v(" "),e("Footer",[t._v("KUI ©2018 Created by chuchur")])],1)],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"固定侧边栏",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#固定侧边栏"}},[t._v("固定侧边栏")])]),t._v(" "),e("p",[t._v("当内容较长时，使用固定侧边栏可以提供更好的体验。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="k-demo-layout">\n    <Layout  class="layout-back">\n      <Sider class="demo-sider">\n        <div class="logo-box">\n          <Icon :type="LogoKui" size="30" class="logo"/>\n          KUI运营后台\n        </div>\n        <Menu mode="inline" v-model="top" class="demo-top-menu">\n          <MenuItem key="t1" :icon="Home">首页</MenuItem>\n          <MenuItem key="t2" :icon="StatsChart">数据统计</MenuItem>\n          <MenuItem key="t3" :icon="Settings">能源管理</MenuItem>\n        </Menu>\n      </Sider>\n      <Content class="k-demo-main">\n        <Breadcrumb class="nav">\n          <BreadcrumbItem>Home</BreadcrumbItem>\n          <BreadcrumbItem>List</BreadcrumbItem>\n          <BreadcrumbItem>App</BreadcrumbItem>\n        </Breadcrumb> \n        <div style="padding:300px 0;text-align:center;color:#ddd;margin:20px;" class="demo-back">我是打酱油的</div>\n        <Footer>KUI ©2018 Created by chuchur</Footer>\n      </Content> \n    </Layout>\n  </div>\n</template>\n<script>\nimport { LogoKui , Home, StatsChart, Settings } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      LogoKui, Home, StatsChart, Settings ,\n      top:[\'t1\'],\n      left:[\'0-1\']\n    }\n  }\n}\n<\/script>\n<style scoped lang="less"> \n.k-demo-layout{\n  height:360px;\n  overflow:hidden;\n}\n.k-demo-layout .demo-sider{\n  height: 360px; /*这里是例子，实际中请适当修改*/\n  left: 0;\n  width:200px;\n  border-right:1px solid var(--kui-color-border);\n}\n.k-demo-layout .logo-box {\n    box-sizing: border-box;\n    display:flex;\n    align-items:center;\n    padding:20px 0 20px 20px;    \n    .logo{\n      margin-right:8px;\n    }\n  } \n.k-demo-layout .k-demo-main{\n  overflow:auto;\n  height:360px;\n}\n.k-demo-layout .k-demo-main .nav{\n   padding:20px 0 0 20px;\n }\n.k-demo-layout .k-layout-footer{\n  text-align:center;\n  color:#999;\n }\n</style>\n\n')])])])],2)};g._withStripped=!0;var f={data(){return{LogoKui:d.LogoKui,Home:d.Home,StatsChart:d.StatsChart,Settings:d.Settings,top:["t1"],left:["0-1"]}}},k=(0,a.Z)(f,g,[],!1,null,"7c2ba3dd",null).exports,b=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"k-demo-layout"},[e("Layout",{staticClass:"layout-back"},[e("Sider",{staticClass:"demo-sider",style:{width:t.collapsed?"60px":"200px"}},[e("div",{staticClass:"logo-box"},[e("Icon",{staticClass:"logo",attrs:{type:t.LogoKui,size:"30"}}),t._v(" "),e("transition",[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}]},[t._v("KUI运营后台")])])],1),t._v(" "),e("Menu",{staticStyle:{border:"none"},attrs:{mode:"inline","inline-collapsed":t.collapsed},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[e("MenuItem",{key:"1-1",attrs:{icon:t.Home}},[e("span",[t._v("首页")])]),t._v(" "),e("MenuItem",{key:"1-2",attrs:{icon:t.StatsChart}},[e("span",[t._v("数据统计")])]),t._v(" "),e("MenuItem",{key:"1-3",attrs:{icon:t.Settings}},[e("span",[t._v("能源管理")])])],1),t._v(" "),e("Button",{staticClass:"btn-expand",attrs:{theme:"light",icon:t.collapsed?t.ChevronForward:t.ChevronBack},on:{click:t.toggle}})],1),t._v(" "),e("Content",{staticClass:"k-demo-main"},[e("Row",{staticClass:"header-nav",attrs:{type:"flex",align:"middle"}},[e("Col",{attrs:{flex:"1"}}),t._v(" "),e("Col",[e("Space",{attrs:{size:20}},[e("Input",{staticStyle:{width:"200px"},attrs:{icon:t.Search,theme:"light",shape:"circle",placeholder:"搜索"}}),t._v(" "),e("Button",{attrs:{icon:t.NotificationsOutline,theme:"normal"}}),t._v(" "),e("Avatar",{staticStyle:{background:"#3a95ff"},attrs:{size:40,shape:"square"}},[t._v("K")])],1)],1)],1),t._v(" "),e("Breadcrumb",{staticClass:"nav"},[e("BreadcrumbItem",[t._v("Home")]),t._v(" "),e("BreadcrumbItem",[t._v("List")]),t._v(" "),e("BreadcrumbItem",[t._v("App")])],1),t._v(" "),e("div",{staticClass:"demo-back",staticStyle:{padding:"200px 0","text-align":"center",color:"#ddd",margin:"20px"}},[t._v("我是打酱油的")]),t._v(" "),e("Footer",[t._v("KUI ©2018 Created by chuchur")])],1)],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"侧边布局/折叠模式",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#侧边布局/折叠模式"}},[t._v("侧边布局/折叠模式")])]),t._v(" "),e("p",[t._v("侧边两列式布局。页面横向空间有限时，侧边导航可收起。"),e("br"),t._v("\n侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="k-demo-layout">\n    <Layout class="layout-back">\n      <Sider class="demo-sider"\n        :style="{width:collapsed?\'60px\':\'200px\'}">\n        <div class="logo-box">\n          <Icon :type="LogoKui"\n            size="30"\n            class="logo" />\n          <transition>\n            <span v-show="!collapsed">KUI运营后台</span>\n          </transition>\n        </div>\n        <Menu mode="inline"\n          v-model="left"\n          :inline-collapsed="collapsed"\n          style="border:none;">\n          <MenuItem key="1-1"\n            :icon="Home"><span>首页</span></MenuItem>\n          <MenuItem key="1-2"\n            :icon="StatsChart"><span>数据统计</span></MenuItem>\n          <MenuItem key="1-3"\n            :icon="Settings"><span>能源管理</span></MenuItem>\n        </Menu>\n        <Button theme="light"\n          :icon="!collapsed ? ChevronBack : ChevronForward"\n          @click="toggle"\n          class="btn-expand" />\n      </Sider>\n      <Content class="k-demo-main">\n        <Row type="flex"\n          align="middle"\n          class="header-nav">\n          <Col flex="1">\n          </Col>\n          <Col>\n          <Space :size="20">\n            <Input :icon="Search"\n              theme="light"\n              shape="circle"\n              placeholder="搜索"\n              style="width:200px" />\n            <Button :icon="NotificationsOutline"\n              theme="normal" />\n            <Avatar style="background:#3a95ff"\n              :size="40"\n              shape="square">K</Avatar>\n          </Space>\n          </Col>\n        </Row>\n        <Breadcrumb class="nav">\n          <BreadcrumbItem>Home</BreadcrumbItem>\n          <BreadcrumbItem>List</BreadcrumbItem>\n          <BreadcrumbItem>App</BreadcrumbItem>\n        </Breadcrumb>\n        <div style="padding:200px 0;text-align:center;color:#ddd;margin:20px;"\n          class="demo-back">我是打酱油的</div>\n        <Footer>KUI ©2018 Created by chuchur</Footer>\n      </Content>\n    </Layout>\n  </div>\n</template>\n<script>\nimport { LogoKui,ChevronBack, NotificationsOutline, ChevronForward, Search, StatsChart, Home, Settings } from "kui-icons";\nexport default {\n  data() {\n    return {\n      LogoKui, Search, NotificationsOutline, ChevronBack, ChevronForward, StatsChart, Home, Settings,\n      left: [\'1-1\'],\n      collapsed: false\n    }\n  },\n  methods: {\n    toggle() {\n      this.collapsed = !this.collapsed\n    }\n  }\n}\n<\/script>\n<style scoped lang="less">\n.k-demo-layout {\n  .logo-box {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    padding: 16px 0 17px 16px;\n    /* background:var(--kui-color-gray-90); */\n    white-space: nowrap;\n    overflow: hidden;\n    .logo {\n      margin-right: 8px;\n    }\n  }\n  .header-nav {\n    border-bottom: 1px solid var(--kui-color-border);\n    padding-bottom: 10px;\n  }\n}\n.btn-expand {\n  position: absolute;\n  bottom: 10px;\n  left: 12px;\n}\n.k-demo-layout .demo-sider {\n  left: 0;\n  position: relative;\n  border-right: 1px solid var(--kui-color-border);\n  transition: all 0.3s ease 0s;\n}\n.k-demo-layout .k-demo-main .nav {\n  padding: 16px 0 0 16px;\n}\n.k-demo-layout .demo-top-menu {\n  line-height: 61px;\n}\n.k-demo-layout .k-demo-main {\n  overflow: auto;\n}\n.k-demo-layout .k-layout-footer {\n  text-align: center;\n  color: #999;\n}\n</style>\n\n')])])])],2)};b._withStripped=!0;var x={data(){return{LogoKui:d.LogoKui,Search:d.Search,NotificationsOutline:d.NotificationsOutline,ChevronBack:d.ChevronBack,ChevronForward:d.ChevronForward,StatsChart:d.StatsChart,Home:d.Home,Settings:d.Settings,left:["1-1"],collapsed:!1}},methods:{toggle(){this.collapsed=!this.collapsed}}},C=(0,a.Z)(x,b,[],!1,null,"e026679e",null).exports,S={render(){const t=arguments[0];return t("div",{class:"demo-layout"},[t(r),t(s),t(u),t(v),t(y),t(k),t(C)])}},I=S,L=(0,a.Z)(I,undefined,undefined,!1,null,null,null).exports},4513:function(t,e,n){var o=n(5471);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(5346).Z)("2c4faef2",o,!1,{})},5346:function(t,e,n){"use strict";function o(t,e){for(var n=[],o={},a=0;a<e.length;a++){var r=e[a],i=r[0],s={id:t+":"+a,css:r[1],media:r[2],sourceMap:r[3]};o[i]?o[i].parts.push(s):n.push(o[i]={id:i,parts:[s]})}return n}n.d(e,{Z:function(){return v}});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},i=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,d=!1,c=function(){},u=null,m="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,a){d=n,u=a||{};var i=o(t,e);return h(i),function(e){for(var n=[],a=0;a<i.length;a++){var s=i[a];(l=r[s.id]).refs--,n.push(l)}e?h(i=o(t,e)):i=[];for(a=0;a<n.length;a++){var l;if(0===(l=n[a]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete r[l.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],o=r[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(y(n.parts[a]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var i=[];for(a=0;a<n.parts.length;a++)i.push(y(n.parts[a]));r[n.id]={id:n.id,refs:1,parts:i}}}}function _(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function y(t){var e,n,o=document.querySelector("style["+m+'~="'+t.id+'"]');if(o){if(d)return c;o.parentNode.removeChild(o)}if(p){var a=l++;o=s||(s=_()),e=k.bind(null,o,a,!1),n=k.bind(null,o,a,!0)}else o=_(),e=b.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}var g,f=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function k(t,e,n,o){var a=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,a);else{var r=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}function b(t,e){var n=e.css,o=e.media,a=e.sourceMap;if(o&&t.setAttribute("media",o),u.ssrId&&t.setAttribute(m,e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}}]);