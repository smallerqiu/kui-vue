/*!
 * kui-vue v3.3.5-a
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[922],{2286:function(t,e,n){n.r(e),n.d(e,{default:function(){return W}});var l,a,i=function(){var t=this;t._self._c;return t._m(0)},s=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Collapse 折叠面板")]),e("p",[t._v("可以折叠/展开的内容区域。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t._v("何时使用 "),e("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[t._v("#")])]),e("ul",[e("li",[t._v("对复杂区域进行分组和隐藏，保持页面的整洁。")]),e("li",[t._v("‘手风琴’ 是一种特殊的折叠面板，只允许单个内容区域展开。")])]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t._v("代码演示 "),e("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[t._v("#")])])])}],o=n(1001),d={},v=(0,o.Z)(d,i,s,!1,null,null,null),r=v.exports,p=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-collapse"},[e("Collapse",{attrs:{value:["1"]}},[e("Panel",{key:"1",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),e("Panel",{key:"2",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),e("Panel",{key:"3",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[t._v("基本用法 "),e("a",{staticClass:"anchor",attrs:{href:"#基本用法"}},[t._v("#")])]),e("p",[t._v("默认可以同时展开一个或者多个面板")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-collapse">\n    <Collapse :value="[\'1\']">\n      <Panel title="Panel title" key="1">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="2">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="3">\n        <div>{{text}}</div>\n      </Panel>\n    </Collapse>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      text : `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},u=[],_={data(){return{text:"A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; "}}},c=_,m=(0,o.Z)(c,p,u,!1,null,null,null),h=m.exports,P=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-collapse"},[e("Collapse",{attrs:{value:["1"],accrodion:""}},[e("Panel",{key:"1",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),e("Panel",{key:"2",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),e("Panel",{key:"3",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"手风琴",tabindex:"-1"}},[t._v("手风琴 "),e("a",{staticClass:"anchor",attrs:{href:"#手风琴"}},[t._v("#")])]),e("p",[t._v("设置 "),e("code",{pre:!0},[t._v("accrodion")]),t._v(" 只允许同时展开一个面板")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-collapse">\n    <Collapse :value="[\'1\']" accrodion>\n      <Panel title="Panel title" key="1">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="2">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="3">\n        <div>{{text}}</div>\n      </Panel>\n    </Collapse>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      text : `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},x=[],g={data(){return{text:"A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; "}}},k=g,y=(0,o.Z)(k,P,x,!1,null,null,null),f=y.exports,C=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-collapse"},[e("Collapse",{attrs:{value:["1"]}},[e("Panel",{key:"1",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))]),e("Collapse",{attrs:{value:["1-1"]}},[e("Panel",{key:"1-1",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),e("Panel",{key:"1-2",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])])],1)],1),e("Panel",{key:"2",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),e("Panel",{key:"3",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"嵌套面板",tabindex:"-1"}},[t._v("嵌套面板 "),e("a",{staticClass:"anchor",attrs:{href:"#嵌套面板"}},[t._v("#")])]),e("p",[t._v("嵌套折叠面板。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-collapse">\n    <Collapse :value="[\'1\']">\n      <Panel title="Panel title" key="1">\n        <div>{{text}}</div>\n        <Collapse :value="[\'1-1\']">\n          <Panel title="Panel title" key="1-1">\n            <div>{{text}}</div>\n          </Panel>\n          <Panel title="Panel title" key="1-2">\n            <div>{{text}}</div>\n          </Panel>\n        </Collapse>\n      </Panel>\n      <Panel title="Panel title" key="2">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="3">\n        <div>{{text}}</div>\n      </Panel>\n    </Collapse>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      text : `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},b=[],I={data(){return{text:"A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; "}}},S=I,A=(0,o.Z)(S,C,b,!1,null,null,null),q=A.exports,O=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-collapse"},[e("Collapse",{attrs:{value:["1"],sample:""}},[e("Panel",{key:"1",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),e("Panel",{key:"2",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])]),e("Panel",{key:"3",attrs:{title:"Panel title"}},[e("div",[t._v(t._s(t.text))])])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"简洁模式",tabindex:"-1"}},[t._v("简洁模式 "),e("a",{staticClass:"anchor",attrs:{href:"#简洁模式"}},[t._v("#")])]),e("p",[t._v("设置 "),e("code",{pre:!0},[t._v("sample")]),t._v(" 呈现没有边框的简洁样式。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-collapse">\n    <Collapse :value="[\'1\']" sample>\n      <Panel title="Panel title" key="1">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="2">\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="3">\n        <div>{{text}}</div>\n      </Panel>\n    </Collapse>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      text : `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},Z=[],w={data(){return{text:"A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; "}}},B=w,F=(0,o.Z)(B,O,Z,!1,null,null,null),V=F.exports,j=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-collapse"},[e("Collapse",{attrs:{value:["1","2"]}},[e("Panel",{key:"1",attrs:{title:"Panel title"}},[e("Icon",{attrs:{slot:"extra",type:t.SettingsOutline},slot:"extra"}),e("div",[t._v(t._s(t.text))])],1),e("Panel",{key:"2",attrs:{title:"Panel title"}},[e("Icon",{attrs:{slot:"extra",type:t.SettingsOutline},slot:"extra"}),e("div",[t._v(t._s(t.text))])],1),e("Panel",{key:"3",attrs:{title:"Panel title"}},[e("Icon",{attrs:{slot:"extra",type:t.SettingsOutline},slot:"extra"}),e("div",[t._v(t._s(t.text))])],1)],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"额外节点",tabindex:"-1"}},[t._v("额外节点 "),e("a",{staticClass:"anchor",attrs:{href:"#额外节点"}},[t._v("#")])]),e("p",[t._v("可以同时展开多个面板。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-collapse">\n    <Collapse :value="[\'1\',\'2\']">\n      <Panel title="Panel title" key="1">\n        <Icon slot="extra" :type="SettingsOutline" />\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="2">\n        <Icon slot="extra" :type="SettingsOutline" />\n        <div>{{text}}</div>\n      </Panel>\n      <Panel title="Panel title" key="3">\n        <Icon slot="extra" :type="SettingsOutline" />\n        <div>{{text}}</div>\n      </Panel>\n    </Collapse>\n  </div>\n</template>\n<script>\nimport { SettingsOutline } from \'kui-icons\'\nexport default {\n  data() {\n    return {\n      SettingsOutline,\n      text : `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},z=[],D=n(5118),E={data(){return{SettingsOutline:D.SettingsOutline,text:"A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; "}}},G=E,H=(0,o.Z)(G,j,z,!1,null,null,null),J=H.exports,K=function(){var t=this;t._self._c;return t._m(0)},L=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{attrs:{id:"api",tabindex:"-1"}},[t._v("API "),e("a",{staticClass:"anchor",attrs:{href:"#api"}},[t._v("#")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("当前激活的面板的 "),e("code",{pre:!0},[t._v("name")]),t._v("，可以使用 "),e("code",{pre:!0},[t._v("v-model")]),t._v(" 双向绑定")]),e("td",[t._v("Array , String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("accordion")]),e("td",[t._v("是否开启手风琴模式，开启后每次至多展开一个面板")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("sample")]),e("td",[t._v("是否开启简洁模式")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("change")]),e("td",[t._v("切换面板时触发回调，返回当前选项卡的 "),e("code",{pre:!0},[t._v("name")])]),e("td",[t._v("Function")]),e("td",[t._v("-")])])])]),e("h3",{attrs:{id:"panel",tabindex:"-1"}},[t._v("Panel "),e("a",{staticClass:"anchor",attrs:{href:"#panel"}},[t._v("#")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("当前激活的面板的标题")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("key")]),e("td",[t._v("Vue 所需要的key")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("extra")]),e("td",[t._v("卡片标题扩展")]),e("td",[t._v("slot")]),e("td",[t._v("-")])])])])])}],M={},N=(0,o.Z)(M,K,L,!1,null,null,null),Q=N.exports,R={render(){const t=arguments[0];return t("div",[t(r),t(h),t(f),t(q),t(J),t(V),t(Q)])}},T=R,U=(0,o.Z)(T,l,a,!1,null,null,null),W=U.exports}}]);