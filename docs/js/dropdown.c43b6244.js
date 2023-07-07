/*!
 * kui-vue v3.3.5-c
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[5493],{6221:function(t,e,n){n.r(e),n.d(e,{default:function(){return V}});var r,o,a=function(){var t=this;t._self._c;return t._m(0)},u=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Dropdown 下拉菜单")]),e("p",[t._v("向下弹出的列表。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),e("p",[t._v("当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。")]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],s=n(1001),m={},l=(0,s.Z)(m,a,u,!1,null,null,null),i=l.exports,c=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Dropdown",[e("Button",[t._v(" 滑动展开 "),e("Icon",{attrs:{type:t.ChevronDown}})],1),e("Menu",{attrs:{slot:"content"},slot:"content"},[e("MenuItem",[e("a",{attrs:{href:"javascript:;"}},[t._v("1st menu item")])]),e("MenuItem",[e("a",{attrs:{href:"javascript:;"}},[t._v("2nd menu item")])]),e("MenuItem",[e("a",{attrs:{href:"javascript:;"}},[t._v("3rd menu item")])])],1)],1),e("Dropdown",{attrs:{"show-placement-arrow":"",trigger:"normal",placement:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("Button",{attrs:{theme:"light"},on:{click:function(e){t.show=!t.show}}},[t._v(" Toggle "),e("Icon",{attrs:{type:t.ChevronDown}})],1),e("Menu",{attrs:{slot:"content"},slot:"content"},[e("MenuItem",[e("a",{attrs:{href:"javascript:;"}},[t._v("1st menu item")])]),e("MenuItem",[e("a",{attrs:{href:"javascript:;"}},[t._v("2nd menu item")])]),e("MenuItem",[e("a",{attrs:{href:"javascript:;"}},[t._v("3rd menu item")])])],1)],1),e("Dropdown",{attrs:{trigger:"click"}},[e("Button",{attrs:{theme:"light"}},[t._v(" Click me "),e("Icon",{attrs:{type:t.ChevronDown}})],1),e("Menu",{attrs:{slot:"content"},slot:"content"},[e("MenuItem",[e("a",{attrs:{href:"javascript:;"}},[t._v("1st menu item")])]),e("MenuItem",[e("a",{attrs:{href:"javascript:;"}},[t._v("2nd menu item")])]),e("MenuItem",[e("a",{attrs:{href:"javascript:;"}},[t._v("3rd menu item")])])],1)],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("基础用法")])]),e("p",[t._v("最简单的下拉菜单。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Dropdown>\n    <Button>\n      滑动展开 <Icon :type="ChevronDown" />\n    </Button>\n    <Menu slot="content">\n      <MenuItem>\n        <a href="javascript:;">1st menu item</a>\n      </MenuItem>\n      <MenuItem>\n        <a href="javascript:;">2nd menu item</a>\n      </MenuItem>\n      <MenuItem>\n        <a href="javascript:;">3rd menu item</a>\n      </MenuItem>\n    </Menu>\n  </Dropdown>\n  <Dropdown show-placement-arrow trigger="normal" placement="bottom" v-model="show">\n    <Button theme="light" @click="show=!show">\n      Toggle <Icon :type="ChevronDown" />\n    </Button>\n    <Menu slot="content">\n      <MenuItem>\n        <a href="javascript:;">1st menu item</a>\n      </MenuItem>\n      <MenuItem>\n        <a href="javascript:;">2nd menu item</a>\n      </MenuItem>\n      <MenuItem>\n        <a href="javascript:;">3rd menu item</a>\n      </MenuItem>\n    </Menu>\n  </Dropdown>\n\n  <Dropdown trigger="click" >\n    <Button theme="light">\n      Click me <Icon :type="ChevronDown" />\n    </Button>\n    <Menu slot="content">\n      <MenuItem>\n        <a href="javascript:;">1st menu item</a>\n      </MenuItem>\n      <MenuItem>\n        <a href="javascript:;">2nd menu item</a>\n      </MenuItem>\n      <MenuItem>\n        <a href="javascript:;">3rd menu item</a>\n      </MenuItem>\n    </Menu>\n  </Dropdown>\n</template>\n<script>\nimport { ChevronDown } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      ChevronDown,\n      show:false\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},p=[],d=n(5118),h={data(){return{ChevronDown:d.ChevronDown,show:!1}}},v=h,_=(0,s.Z)(v,c,p,!1,null,null,null),M=_.exports,w=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Dropdown",{attrs:{trigger:"contextmenu"},on:{click:t.handle}},[e("div",{staticClass:"demo-back",style:{textAlign:"center",height:"200px",lineHeight:"200px",color:"#999"}},[t._v("Right Click on here")]),e("Menu",{attrs:{slot:"content"},slot:"content"},[e("MenuItem",{key:"news"},[t._v("New file")]),e("MenuItem",{key:"edit"},[t._v("Edit")]),e("MenuItem",{key:"save",attrs:{icon:t.Save}},[t._v("Save")]),e("MenuItem",{key:"cut",attrs:{icon:t.Cut}},[t._v("Cut")]),e("MenuDivider"),e("MenuItem",{key:"exit"},[t._v("Exit")])],1)],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"右键菜单",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#右键菜单"}},[t._v("右键菜单")])]),e("p",[t._v("默认是移入触发菜单，可以点击鼠标右键触发。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Dropdown trigger="contextmenu" @click="handle">\n  <div :style="{\n        textAlign: \'center\', \n        height: \'200px\',\n        lineHeight: \'200px\',\n        color: \'#999\',\n      }" class="demo-back">Right Click on here</div>\n    <Menu slot="content">\n      <MenuItem key="news">New file</MenuItem>\n      <MenuItem key="edit">Edit</MenuItem>\n      <MenuItem key="save" :icon="Save">Save</MenuItem>\n      <MenuItem key="cut" :icon="Cut">Cut</MenuItem>\n      <MenuDivider />\n      <MenuItem key="exit">Exit</MenuItem>\n    </Menu>\n  </Dropdown>\n</template>\n\n<script>\nimport { Save, Cut } from \'kui-icons\'\nexport default {\n  data() {\n    return {\n      Save, Cut\n    }\n  },\n  methods:{\n    handle({key}){\n      this.$Message.info(\'Click on item \'+key)\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},f=[],I={data(){return{Save:d.Save,Cut:d.Cut}},methods:{handle({key:t}){this.$Message.info("Click on item "+t)}}},k=I,g=(0,s.Z)(k,w,f,!1,null,null,null),b=g.exports,D=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Dropdown",[e("Button",{attrs:{theme:"light"}},[t._v(" 分隔线 "),e("Icon",{attrs:{type:t.ChevronDown}})],1),e("Menu",{attrs:{slot:"content"},slot:"content"},[e("MenuItem",{key:"0"},[e("a",{attrs:{target:"_blank",href:"https://www.chuchur.com/"}},[t._v("1st menu item")])]),e("MenuItem",{key:"1"},[e("a",{attrs:{target:"_blank",href:"https://react.k-ui.cn/"}},[t._v("2nd menu item")])]),e("MenuDivider"),e("MenuItem",{key:"3",attrs:{disabled:""}},[t._v(" 3rd menu item（disabled） ")])],1)],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"其他元素",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他元素"}},[t._v("其他元素")])]),e("p",[t._v("分割线和不可用菜单项。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Dropdown>\n    <Button theme="light">\n      分隔线 <Icon :type="ChevronDown" />\n    </Button>\n    <Menu slot="content">\n      <MenuItem key="0">\n        <a target="_blank" href="https://www.chuchur.com/">1st menu item</a>\n      </MenuItem>\n      <MenuItem key="1">\n        <a target="_blank" href="https://react.k-ui.cn/">2nd menu item</a>\n      </MenuItem>\n      <MenuDivider />\n      <MenuItem key="3" disabled>\n        3rd menu item（disabled）\n      </MenuItem>\n    </Menu>\n  </Dropdown>\n</template>\n<script>\nimport { ChevronDown } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      ChevronDown\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},C=[],y={data(){return{ChevronDown:d.ChevronDown}}},x=y,B=(0,s.Z)(x,D,C,!1,null,null,null),j=B.exports,S=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{attrs:{id:"dropdown-demo-placement"}},[t._l(t.placements,(function(n,r){return[e("Dropdown",{attrs:{placement:n,"show-placement-arrow":""}},[e("Button",[t._v(t._s(n))]),e("Menu",{attrs:{slot:"content"},slot:"content"},[e("MenuItem",[e("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"http://www.chuchur.com/"}},[t._v("1st menu item")])]),e("MenuItem",[e("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"http://www.k-ui.cn/"}},[t._v("2nd menu item")])]),e("MenuItem",[e("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"http://react.k-ui.cn/"}},[t._v("3rd menu item")])])],1)],1)]}))],2)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"弹出位置",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#弹出位置"}},[t._v("弹出位置")])]),e("p",[t._v("支持 6 个弹出位置。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div id="dropdown-demo-placement">\n    <template v-for="(placement, index) in placements">\n      <Dropdown :placement="placement" show-placement-arrow>\n        <Button>{{ placement }}</Button>\n        <Menu slot="content">\n          <MenuItem>\n            <a target="_blank" rel="noopener noreferrer" href="http://www.chuchur.com/">1st menu item</a>\n          </MenuItem>\n          <MenuItem>\n            <a target="_blank" rel="noopener noreferrer" href="http://www.k-ui.cn/">2nd menu item</a>\n          </MenuItem>\n          <MenuItem>\n            <a target="_blank" rel="noopener noreferrer" href="http://react.k-ui.cn/">3rd menu item</a>\n          </MenuItem>\n        </Menu>\n      </Dropdown>\n    </template>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      placements: [\'bottom-left\', \'bottom\', \'bottom-right\', \'top-left\', \'top\', \'top-right\'],\n    };\n  },\n};\n<\/script>\n\n')])])])],2)},Z=[],A={data(){return{placements:["bottom-left","bottom","bottom-right","top-left","top","top-right"]}}},E=A,R=(0,s.Z)(E,S,Z,!1,null,null,null),H=R.exports,L=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Dropdown",[e("Button",{attrs:{theme:"light"}},[t._v(" 多级菜单 "),e("Icon",{attrs:{type:t.ChevronDown}})],1),e("Menu",{attrs:{slot:"content"},slot:"content"},[e("MenuItem",[t._v("1st menu item")]),e("MenuItem",[t._v("2nd menu item")]),e("SubMenu",{key:"test",attrs:{title:"sub menu"}},[e("MenuItem",[t._v("3rd menu item")]),e("MenuItem",[t._v("4th menu item")])],1),e("SubMenu",{attrs:{title:"disabled sub menu",disabled:""}},[e("MenuItem",[t._v("5d menu item")]),e("MenuItem",[t._v("6th menu item")])],1)],1)],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"多级菜单",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多级菜单"}},[t._v("多级菜单")])]),e("p",[t._v("传入的菜单里有多个层级。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Dropdown>\n    <Button theme="light">\n      多级菜单 <Icon :type="ChevronDown" />\n    </Button>\n    <Menu slot="content">\n      <MenuItem>1st menu item</MenuItem>\n      <MenuItem>2nd menu item</MenuItem>\n      <SubMenu key="test" title="sub menu">\n        <MenuItem>3rd menu item</MenuItem>\n        <MenuItem>4th menu item</MenuItem>\n      </SubMenu>\n      <SubMenu title="disabled sub menu" disabled>\n        <MenuItem>5d menu item</MenuItem>\n        <MenuItem>6th menu item</MenuItem>\n      </SubMenu>\n    </Menu>\n  </Dropdown>\n</template>\n<script>\nimport { ChevronDown } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      ChevronDown\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},N=[],P={data(){return{ChevronDown:d.ChevronDown}}},T=P,$=(0,s.Z)(T,L,N,!1,null,null,null),q=$.exports,z=function(){var t=this;t._self._c;return t._m(0)},F=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"dropdown-api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dropdown-api"}},[t._v("Dropdown API")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("默认是否显示下拉，可使用v-model绑定")]),e("td",[t._v("Boolean")]),e("td",[t._v("hover")])]),e("tr",[e("td",[t._v("trigger")]),e("td",[t._v("触发方式,支持hover(默认), click, custom 3种方式")]),e("td",[t._v("String")]),e("td",[t._v("hover")])]),e("tr",[e("td",[t._v("placement")]),e("td",[t._v("菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight")]),e("td",[t._v("String")]),e("td",[t._v("bottom-left")])]),e("tr",[e("td",[t._v("transfer")]),e("td",[t._v("默认渲染到body 上，如定位有问题，请尝试修改为 false")]),e("td",[t._v("Boolean")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("showPlacementArrow")]),e("td",[t._v("是否显示菜单箭头")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])])])])])}],G={},J=(0,s.Z)(G,z,F,!1,null,null,null),K=J.exports,O={render(){const t=arguments[0];return t("div",{class:"demo-dropdown"},[t(i),t(M),t(b),t(j),t(H),t(q),t(K)])}},Q=O,U=(0,s.Z)(Q,r,o,!1,null,null,null),V=U.exports}}]);