/*!
 * kui-vue v3.3.5-c
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[5816],{2558:function(t,e,o){o.r(e),o.d(e,{default:function(){return q}});var l,n,i=function(){var t=this;t._self._c;return t._m(0)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Tooltip 文字提示")]),e("p",[t._v("简单的文字提示气泡框。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),e("p",[t._v("鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。")]),e("p",[t._v("可用来代替系统默认的 "),e("code",{pre:!0},[t._v("title")]),t._v(" 提示，提供一个"),e("code",{pre:!0},[t._v("按钮/文字/操作")]),t._v("的文案解释。")]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],a=o(1001),p={},c=(0,a.Z)(p,i,r,!1,null,null,null),s=c.exports,v=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Tooltip",{attrs:{title:"明月几时有,把酒问青天!"}},[e("a",[t._v("月几时有,把酒问青天")])]),e("br"),e("br"),e("br"),e("Tooltip",{attrs:{title:t.change?"窗前明月光":"凝视地上霜,好冷！"}},[e("a",{on:{click:t.clickHandle}},[t._v("Click me!")])])],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("基础用法")])]),e("p",[t._v("最简单的用法，浮层的大小由内容区域决定。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Tooltip title="明月几时有,把酒问青天!">\n    <a>月几时有,把酒问青天</a>\n  </Tooltip>\n  <br/>\n  <br/>\n  <br/>\n  <Tooltip :title="change?\'窗前明月光\':\'凝视地上霜,好冷！\'">\n    <a @click="clickHandle">Click me!</a>\n  </Tooltip>\n\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      change:false\n    }\n  },\n  methods:{\n    clickHandle(){\n      this.change = !this.change\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},d=[],u={data(){return{change:!1}},methods:{clickHandle(){this.change=!this.change}}},_=u,m=(0,a.Z)(_,v,d,!1,null,null,null),h=m.exports,f=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticStyle:{"margin-left":"70px","white-space":"nowrap"}},[e("Tooltip",{attrs:{placement:"top-left",title:t.title}},[e("Button",[t._v("TL")])],1),e("Tooltip",{attrs:{placement:"top",title:t.title}},[e("Button",[t._v("Top")])],1),e("Tooltip",{attrs:{placement:"top-right",title:t.title}},[e("Button",[t._v("TR")])],1)],1),e("div",{staticStyle:{float:"left",height:"125px",width:"70px"}},[e("Tooltip",{attrs:{placement:"left-top",title:t.title}},[e("Button",[t._v("LT")])],1),e("Tooltip",{attrs:{placement:"left",title:t.title}},[e("Button",[t._v("Left")])],1),e("Tooltip",{attrs:{placement:"left-bottom",title:t.title}},[e("Button",[t._v("LB")])],1)],1),e("div",{staticStyle:{"margin-left":"310px",height:"125px",width:"70px"}},[e("Tooltip",{attrs:{placement:"right-top",title:t.title}},[e("Button",[t._v("RT")])],1),e("Tooltip",{attrs:{placement:"right",title:t.title}},[e("Button",[t._v("Right")])],1),e("Tooltip",{attrs:{placement:"right-bottom",title:t.title}},[e("Button",[t._v("RB")])],1)],1),e("div",{staticStyle:{"margin-left":"70px","white-space":"nowrap"}},[e("Tooltip",{attrs:{placement:"bottom-left",title:t.title}},[e("Button",[t._v("BL")])],1),e("Tooltip",{attrs:{placement:"bottom",title:t.title}},[e("Button",[t._v("Bottom")])],1),e("Tooltip",{attrs:{placement:"bottom-right",title:t.title}},[e("Button",[t._v("BR")])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"位置",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#位置"}},[t._v("位置")])]),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("placement")]),t._v("控制方向, 位置有十二个方向。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div style="margin-left:70px;white-space: nowrap;">\n    <Tooltip placement="top-left" :title="title">\n      <Button>TL</Button>\n    </Tooltip>\n    <Tooltip placement="top" :title="title">\n      <Button>Top</Button>\n    </Tooltip>\n    <Tooltip placement="top-right" :title="title">\n      <Button>TR</Button>\n    </Tooltip>\n  </div>\n  <div style="float:left;height:125px;width:70px;">\n    <Tooltip placement="left-top" :title="title">\n      <Button>LT</Button>\n    </Tooltip>\n    <Tooltip placement="left" :title="title">\n      <Button>Left</Button>\n    </Tooltip>\n    <Tooltip placement="left-bottom" :title="title">\n      <Button>LB</Button>\n    </Tooltip>\n  </div>\n  <div style="margin-left:310px;height:125px;width:70px;">\n    <Tooltip placement="right-top" :title="title">\n      <Button>RT</Button>\n    </Tooltip>\n    <Tooltip placement="right" :title="title">\n      <Button>Right</Button>\n    </Tooltip>\n    <Tooltip placement="right-bottom" :title="title">\n      <Button>RB</Button>\n    </Tooltip>\n  </div>\n  <div style="margin-left:70px;white-space: nowrap;">\n    <Tooltip placement="bottom-left" :title="title">\n      <Button>BL</Button>\n    </Tooltip>\n    <Tooltip placement="bottom" :title="title">\n      <Button>Bottom</Button>\n    </Tooltip>\n    <Tooltip placement="bottom-right" :title="title">\n      <Button>BR</Button>\n    </Tooltip>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      title:\'明月几时有?\',\n    }\n  },\n}\n<\/script>\n\n')])])])],2)},T=[],g={data(){return{title:"明月几时有?"}}},B=g,b=(0,a.Z)(B,f,T,!1,null,null,null),x=b.exports,k=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-tooltip-color"},[e("Divider",{attrs:{orientation:"left"}},[t._v("Presets:")]),e("div",t._l(t.colors,(function(o){return e("Tooltip",{key:o,attrs:{color:o,title:o}},[e("Tag",{attrs:{color:o}},[t._v(t._s(o))])],1)})),1),e("Divider",{attrs:{orientation:"left"}},[t._v("Custom:")]),e("div",t._l(t.custom,(function(o){return e("Tooltip",{key:o,attrs:{color:o,title:o}},[e("Tag",{attrs:{color:o}},[t._v(t._s(o))])],1)})),1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"多彩文字提示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多彩文字提示"}},[t._v("多彩文字提示")])]),e("p",[t._v("多种预设色彩的文字提示样式，用作不同场景使用。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <div class=\"demo-tooltip-color\">\n    <Divider orientation=\"left\">Presets:</Divider>\n    <div>\n      <Tooltip :color=\"color\" :title=\"color\" v-for=\"color in colors\" :key=\"color\">\n        <Tag :color=\"color\">{{color}}</Tag>\n      </Tooltip>\n    </div>\n    <Divider orientation=\"left\">Custom:</Divider>\n    <div>\n      <Tooltip :color=\"color\" :title=\"color\" v-for=\"color in custom\" :key=\"color\">\n        <Tag :color=\"color\">{{color}}</Tag>\n      </Tooltip>\n    </div>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      custom:['#c20','#39f','#e3f','#6c0'],\n      colors:[\n      'pink',\n      'red',\n      'yellow',\n      'orange',\n      'cyan',\n      'green',\n      'blue',\n      'purple',\n      'geekblue',\n      'magenta',\n      'volcano',\n      'gold',\n      'lime',\n      ]\n    }\n  }\n} \n<\/script>\n\n")])])])],2)},y=[],w={data(){return{custom:["#c20","#39f","#e3f","#6c0"],colors:["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"]}}},C=w,L=(0,a.Z)(C,k,y,!1,null,null,null),R=L.exports,D=function(){var t=this;t._self._c;return t._m(0)},S=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("显示的标题")]),e("td",[t._v("String,Slots")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("color")]),e("td",[t._v("背景颜色")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("placement")]),e("td",[t._v("提示框出现的位置，可选值为"),e("code",{pre:!0},[t._v("top")]),t._v("，"),e("code",{pre:!0},[t._v("top-left")]),t._v("，"),e("code",{pre:!0},[t._v("top-right")]),t._v("，"),e("code",{pre:!0},[t._v("bottom")]),t._v("，"),e("code",{pre:!0},[t._v("bottom-left")]),t._v("，"),e("code",{pre:!0},[t._v("bottom-right")]),t._v("，"),e("code",{pre:!0},[t._v("left")]),t._v("，"),e("code",{pre:!0},[t._v("left-top")]),t._v("，"),e("code",{pre:!0},[t._v("left-bottom")]),t._v("，"),e("code",{pre:!0},[t._v("right")]),t._v("，"),e("code",{pre:!0},[t._v("right-top")]),t._v("，"),e("code",{pre:!0},[t._v("right-bottom")])]),e("td",[t._v("String")]),e("td",[t._v("top")])]),e("tr",[e("td",[t._v("width")]),e("td",[t._v("展示的宽度,默认为内容区域的大小")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("transfer")]),e("td",[t._v("默认渲染到body 上，如定位有问题，请尝试修改为 false")]),e("td",[t._v("Boolean")]),e("td",[t._v("true")])])])])])}],Z={},H=(0,a.Z)(Z,D,S,!1,null,null,null),P=H.exports,A={render(){const t=arguments[0];return t("div",{class:"demo-tooltip"},[t(s),t(h),t(x),t(R),t(P)])}},I=A,j=(0,a.Z)(I,l,n,!1,null,null,null),q=j.exports}}]);