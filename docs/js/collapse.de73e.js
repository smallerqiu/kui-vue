/*!
 * kui-vue v3.4.7
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[922],{4865:function(t,e,n){n.r(e),n.d(e,{default:function(){return I}});var l=function(){this._self._c;return this._m(0)};l._withStripped=!0;var a=n(1900),i=(0,a.Z)({},l,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Collapse 折叠面板")]),t._v(" "),e("p",[t._v("可以折叠/展开的内容区域。")]),t._v(" "),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),t._v(" "),e("ul",[e("li",[t._v("对复杂区域进行分组和隐藏，保持页面的整洁。")]),t._v(" "),e("li",[t._v("‘手风琴’ 是一种特殊的折叠面板，只允许单个内容区域展开。")])]),t._v(" "),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],!1,null,null,null).exports,v=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-collapse"},[e("Collapse",{attrs:{value:["1"]}},[e("Panel",{key:"1",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),t._v(" "),e("Panel",{key:"2",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),t._v(" "),e("Panel",{key:"3",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])])],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),t._v(" "),e("p",[t._v("默认可以同时展开一个或者多个面板")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-collapse">\n    <Collapse :value="[\'1\']">\n      <Panel title="Panel title" key="1">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="2">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="3">\n        <div>{{text}}</div>\n      </Panel>\n    </Collapse>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      text : `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};v._withStripped=!0;var s={data(){return{text:"A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; "}}},r=(0,a.Z)(s,v,[],!1,null,null,null).exports,d=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-collapse"},[e("Collapse",{attrs:{value:["1"],accrodion:""}},[e("Panel",{key:"1",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),t._v(" "),e("Panel",{key:"2",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),t._v(" "),e("Panel",{key:"3",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])])],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"手风琴",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手风琴"}},[t._v("手风琴")])]),t._v(" "),e("p",[t._v("设置 "),e("code",{pre:!0},[t._v("accrodion")]),t._v(" 只允许同时展开一个面板")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-collapse">\n    <Collapse :value="[\'1\']" accrodion>\n      <Panel title="Panel title" key="1">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="2">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="3">\n        <div>{{text}}</div>\n      </Panel>\n    </Collapse>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      text : `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};d._withStripped=!0;var o={data(){return{text:"A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; "}}},_=(0,a.Z)(o,d,[],!1,null,null,null).exports,p=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-collapse"},[e("Collapse",{attrs:{value:["1"]}},[e("Panel",{key:"1",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))]),t._v(" "),e("Collapse",{attrs:{value:["1-1"]}},[e("Panel",{key:"1-1",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),t._v(" "),e("Panel",{key:"1-2",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])])],1)],1),t._v(" "),e("Panel",{key:"2",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),t._v(" "),e("Panel",{key:"3",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])])],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"嵌套面板",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#嵌套面板"}},[t._v("嵌套面板")])]),t._v(" "),e("p",[t._v("嵌套折叠面板。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-collapse">\n    <Collapse :value="[\'1\']">\n      <Panel title="Panel title" key="1">\n        <div>{{text}}</div>\n        <Collapse :value="[\'1-1\']">\n          <Panel title="Panel title" key="1-1">\n            <div>{{text}}</div>\n          </Panel>\n          <Panel title="Panel title" key="1-2">\n            <div>{{text}}</div>\n          </Panel>\n        </Collapse>\n      </Panel>\n      <Panel title="Panel title" key="2">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="3">\n        <div>{{text}}</div>\n      </Panel>\n    </Collapse>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      text : `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};p._withStripped=!0;var u={data(){return{text:"A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; "}}},c=(0,a.Z)(u,p,[],!1,null,null,null).exports,h=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-collapse"},[e("Collapse",{attrs:{value:["1"],sample:""}},[e("Panel",{key:"1",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),t._v(" "),e("Panel",{key:"2",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),t._v(" "),e("Panel",{key:"3",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])])],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"简洁模式",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简洁模式"}},[t._v("简洁模式")])]),t._v(" "),e("p",[t._v("设置 "),e("code",{pre:!0},[t._v("sample")]),t._v(" 呈现没有边框的简洁样式。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-collapse">\n    <Collapse :value="[\'1\']" sample>\n      <Panel title="Panel title" key="1">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="2">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="3">\n        <div>{{text}}</div>\n      </Panel>\n    </Collapse>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      text : `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};h._withStripped=!0;var m={data(){return{text:"A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; "}}},P=(0,a.Z)(m,h,[],!1,null,null,null).exports,x=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-collapse"},[e("Collapse",{attrs:{value:["1","2"]}},[e("Panel",{key:"1",attrs:{title:"Panel title"}},[e("Icon",{attrs:{slot:"extra",type:t.SettingsOutline},slot:"extra"}),t._v(" "),e("div",[t._v(t._s(t.text))])],1),t._v(" "),e("Panel",{key:"2",attrs:{title:"Panel title"}},[e("Icon",{attrs:{slot:"extra",type:t.SettingsOutline},slot:"extra"}),t._v(" "),e("div",[t._v(t._s(t.text))])],1),t._v(" "),e("Panel",{key:"3",attrs:{title:"Panel title"}},[e("Icon",{attrs:{slot:"extra",type:t.SettingsOutline},slot:"extra"}),t._v(" "),e("div",[t._v(t._s(t.text))])],1)],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"额外节点",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#额外节点"}},[t._v("额外节点")])]),t._v(" "),e("p",[t._v("可以同时展开多个面板。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-collapse">\n    <Collapse :value="[\'1\',\'2\']">\n      <Panel title="Panel title" key="1">\n        <Icon slot="extra" :type="SettingsOutline" />\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="2">\n        <Icon slot="extra" :type="SettingsOutline" />\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="3">\n        <Icon slot="extra" :type="SettingsOutline" />\n        <div>{{text}}</div>\n      </Panel>\n    </Collapse>\n  </div>\n</template>\n<script>\nimport { SettingsOutline } from \'kui-icons\'\nexport default {\n  data() {\n    return {\n      SettingsOutline,\n      text : `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};x._withStripped=!0;var g=n(2324),k={data(){return{SettingsOutline:g.SettingsOutline,text:"A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; "}}},y=(0,a.Z)(k,x,[],!1,null,null,null).exports,f=function(){this._self._c;return this._m(0)};f._withStripped=!0;var C=(0,a.Z)({},f,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("当前激活的面板的 "),e("code",{pre:!0},[t._v("name")]),t._v("，可以使用 "),e("code",{pre:!0},[t._v("v-model")]),t._v(" 双向绑定")]),t._v(" "),e("td",[t._v("Array , String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("accordion")]),t._v(" "),e("td",[t._v("是否开启手风琴模式，开启后每次至多展开一个面板")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("sample")]),t._v(" "),e("td",[t._v("是否开启简洁模式")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("change")]),t._v(" "),e("td",[t._v("切换面板时触发回调，返回当前选项卡的 "),e("code",{pre:!0},[t._v("name")])]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])])])]),t._v(" "),e("h2",{attrs:{id:"panel",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#panel"}},[t._v("Panel")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("当前激活的面板的标题")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("key")]),t._v(" "),e("td",[t._v("Vue 所需要的key")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("extra")]),t._v(" "),e("td",[t._v("卡片标题扩展")]),t._v(" "),e("td",[t._v("slot")]),t._v(" "),e("td",[t._v("-")])])])])])}],!1,null,null,null).exports,b={render(){const t=arguments[0];return t("div",[t(i),t(r),t(_),t(c),t(y),t(P),t(C)])}},S=b,I=(0,a.Z)(S,undefined,undefined,!1,null,null,null).exports}}]);