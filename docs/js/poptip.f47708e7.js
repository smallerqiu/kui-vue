/*!
 * kui-vue v3.3.3
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[5720],{6153:function(t,p,e){e.r(p),e.d(p,{default:function(){return F}});var n,o,l=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,p=t._self._c;return p("div",[p("h1",[t._v("Poptip 气泡卡片")]),p("p",[t._v("点击/鼠标移入元素，弹出气泡式的卡片浮层。")]),p("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t._v("何时使用 "),p("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[t._v("#")])]),p("p",[t._v("当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。")]),p("p",[t._v("和 "),p("code",{pre:!0},[t._v("Tooltip")]),t._v(" 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。")]),p("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t._v("代码演示 "),p("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[t._v("#")])])])}],a=e(1001),r={},s=(0,a.Z)(r,l,i,!1,null,null,null),_=s.exports,v=function(){var t=this,p=t._self._c;return p("div",[[p("demo",[p("template",{slot:"component"},[p("Poptip",{attrs:{title:"标题"}},[p("template",{slot:"content"},[p("p",[t._v("明月几时有,把酒问青天!")]),p("p",[t._v("明月几时有,把酒问青天!")])]),p("Button",{attrs:{type:"primary"}},[t._v("Hover me")])],2),p("Poptip",[p("template",{slot:"content"},[p("p",[t._v("明月几时有,把酒问青天!")]),p("p",[t._v("明月几时有,把酒问青天!")])]),p("Button",{attrs:{type:"primary"}},[t._v("No title")])],2)],1),p("template",{slot:"description"},[p("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[t._v("基础用法 "),p("a",{staticClass:"anchor",attrs:{href:"#基础用法"}},[t._v("#")])]),p("p",[t._v("最简单的用法，浮层的大小由内容区域决定。")])]),p("template",{slot:"code"},[p("pre",{pre:!0},[p("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Poptip title="标题">\n    <template slot="content">\n      <p>明月几时有,把酒问青天!</p>\n      <p>明月几时有,把酒问青天!</p>\n    </template>\n    <Button type="primary">Hover me</Button>\n  </Poptip>\n  <Poptip>\n    <template slot="content">\n      <p>明月几时有,把酒问青天!</p>\n      <p>明月几时有,把酒问青天!</p>\n    </template>\n    <Button type="primary">No title</Button>\n  </Poptip>\n</template>\n')])])])],2)]],2)},c=[],m={},u=(0,a.Z)(m,v,c,!1,null,null,null),d=u.exports,h=function(){var t=this,p=t._self._c;return p("div",[[p("demo",[p("template",{slot:"component"},[p("Poptip",{attrs:{title:"标题"}},[p("template",{slot:"content"},[p("p",[t._v("明月几时有,把酒问青天!")]),p("p",[t._v("明月几时有,把酒问青天!")])]),p("Button",{attrs:{type:"primary"}},[t._v("Hover me")])],2),p("Poptip",{attrs:{title:"标题",trigger:"click"}},[p("template",{slot:"content"},[p("p",[t._v("明月几时有,把酒问青天!")]),p("p",[t._v("明月几时有,把酒问青天!")])]),p("Button",{attrs:{type:"primary"}},[t._v("Click me")])],2)],1),p("template",{slot:"description"},[p("h4",{attrs:{id:"触发模式",tabindex:"-1"}},[t._v("触发模式 "),p("a",{staticClass:"anchor",attrs:{href:"#触发模式"}},[t._v("#")])]),p("p",[t._v("通过 "),p("code",{pre:!0},[t._v("trigger")]),t._v("来控制触发模式, 鼠标移入 "),p("code",{pre:!0},[t._v("hover")]),t._v("、点击 "),p("code",{pre:!0},[t._v("click")]),t._v("。")])]),p("template",{slot:"code"},[p("pre",{pre:!0},[p("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Poptip title="标题">\n    <template slot="content">\n      <p>明月几时有,把酒问青天!</p>\n      <p>明月几时有,把酒问青天!</p>\n    </template>\n    <Button type="primary">Hover me</Button>\n  </Poptip>\n  <Poptip title="标题" trigger="click">\n    <template slot="content">\n      <p>明月几时有,把酒问青天!</p>\n      <p>明月几时有,把酒问青天!</p>\n    </template>\n    <Button type="primary">Click me</Button>\n  </Poptip>\n</template>\n')])])])],2)]],2)},f=[],B={},P=(0,a.Z)(B,h,f,!1,null,null,null),g=P.exports,x=function(){var t=this,p=t._self._c;return p("div",[[p("demo",[p("template",{slot:"component"},[p("Poptip",{attrs:{title:"标题",trigger:"click"},model:{value:t.show,callback:function(p){t.show=p},expression:"show"}},[p("template",{slot:"content"},[p("a",{on:{click:function(p){t.show=!1}}},[t._v("Close")])]),p("Button",{attrs:{type:"primary"}},[t._v("Click me")])],2)],1),p("template",{slot:"description"},[p("h4",{attrs:{id:"从浮层内关闭",tabindex:"-1"}},[t._v("从浮层内关闭 "),p("a",{staticClass:"anchor",attrs:{href:"#从浮层内关闭"}},[t._v("#")])]),p("p",[t._v("使用 "),p("code",{pre:!0},[t._v("v-model")]),t._v(" 属性控制浮层显示。")])]),p("template",{slot:"code"},[p("pre",{pre:!0},[p("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Poptip title="标题" trigger="click" v-model="show">\n    <template slot="content">\n      <a @click="show=false">Close</a>\n    </template>\n    <Button type="primary">Click me</Button>\n  </Poptip>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      show:false,\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},y=[],b={data(){return{show:!1}}},w=b,k=(0,a.Z)(w,x,y,!1,null,null,null),C=k.exports,T=function(){var t=this,p=t._self._c;return p("div",[[p("demo",[p("template",{slot:"component"},[p("div",{staticStyle:{"margin-left":"70px","white-space":"nowrap"}},[p("Poptip",{attrs:{placement:"top-left"}},[p("Button",[t._v("TL")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2),p("Poptip",{attrs:{placement:"top"}},[p("Button",[t._v("Top")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2),p("Poptip",{attrs:{placement:"top-right"}},[p("Button",[t._v("TR")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2)],1),p("div",{staticStyle:{float:"left",height:"125px",width:"70px"}},[p("Poptip",{attrs:{placement:"left-top"}},[p("Button",[t._v("LT")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2),p("Poptip",{attrs:{placement:"left"}},[p("Button",[t._v("Left")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2),p("Poptip",{attrs:{placement:"left-bottom"}},[p("Button",[t._v("LB")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2)],1),p("div",{staticStyle:{"margin-left":"310px",height:"125px",width:"70px"}},[p("Poptip",{attrs:{placement:"right-top"}},[p("Button",[t._v("RT")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2),p("Poptip",{attrs:{placement:"right"}},[p("Button",[t._v("Right")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2),p("Poptip",{attrs:{placement:"right-bottom"}},[p("Button",[t._v("RB")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2)],1),p("div",{staticStyle:{"margin-left":"70px","white-space":"nowrap"}},[p("Poptip",{attrs:{placement:"bottom-left"}},[p("Button",[t._v("BL")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2),p("Poptip",{attrs:{placement:"bottom"}},[p("Button",[t._v("Bottom")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2),p("Poptip",{attrs:{placement:"bottom-right"}},[p("Button",[t._v("BR")]),p("template",{slot:"content"},[p("p",[t._v(t._s(t.tip))]),p("p",[t._v(t._s(t.tip))])])],2)],1)]),p("template",{slot:"description"},[p("h4",{attrs:{id:"位置",tabindex:"-1"}},[t._v("位置 "),p("a",{staticClass:"anchor",attrs:{href:"#位置"}},[t._v("#")])]),p("p",[t._v("通过 "),p("code",{pre:!0},[t._v("placement")]),t._v("控制方向, 位置有十二个方向。")])]),p("template",{slot:"code"},[p("pre",{pre:!0},[p("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div style="margin-left:70px;white-space: nowrap;">\n    <Poptip placement="top-left">\n      <Button>TL</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n    <Poptip placement="top">\n      <Button>Top</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n    <Poptip placement="top-right">\n      <Button>TR</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n  </div>\n  <div style="float:left;height:125px;width:70px;">\n    <Poptip placement="left-top">\n      <Button>LT</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n    <Poptip placement="left">\n      <Button>Left</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n    <Poptip placement="left-bottom">\n      <Button>LB</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n  </div>\n  <div style="margin-left:310px;height:125px;width:70px;">\n    <Poptip placement="right-top">\n      <Button>RT</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n    <Poptip placement="right">\n      <Button>Right</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n    <Poptip placement="right-bottom">\n      <Button>RB</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n  </div>\n  <div style="margin-left:70px;white-space: nowrap;">\n    <Poptip placement="bottom-left">\n      <Button>BL</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n    <Poptip placement="bottom" >\n      <Button>Bottom</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n    <Poptip placement="bottom-right" >\n      <Button>BR</Button>\n      <template slot="content">\n        <p>{{tip}}</p>\n        <p>{{tip}}</p>\n      </template>\n    </Poptip>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      tip:\'明月几时有,把酒问青天!\',\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},L=[],R={data(){return{tip:"明月几时有,把酒问青天!"}}},S=R,Z=(0,a.Z)(S,T,L,!1,null,null,null),H=Z.exports,N=function(){var t=this;t._self._c;return t._m(0)},A=[function(){var t=this,p=t._self._c;return p("div",[p("h2",{attrs:{id:"api",tabindex:"-1"}},[t._v("API "),p("a",{staticClass:"anchor",attrs:{href:"#api"}},[t._v("#")])]),p("table",[p("thead",[p("tr",[p("th",[t._v("属性")]),p("th",[t._v("说明")]),p("th",[t._v("类型")]),p("th",[t._v("默认值")])])]),p("tbody",[p("tr",[p("td",[t._v("trigger")]),p("td",[t._v("触发方式，可选值为 "),p("code",{pre:!0},[t._v("hover")]),t._v("（悬停）"),p("code",{pre:!0},[t._v("click")]),t._v("（点击）")]),p("td",[t._v("String")]),p("td",[t._v("click")])]),p("tr",[p("td",[t._v("title")]),p("td",[t._v("显示的标题")]),p("td",[t._v("String")]),p("td",[t._v("-")])]),p("tr",[p("td",[t._v("content")]),p("td",[t._v("显示的正文内容")]),p("td",[t._v("slots")]),p("td",[t._v("-")])]),p("tr",[p("td",[t._v("placement")]),p("td",[t._v("提示框出现的位置，可选值为"),p("code",{pre:!0},[t._v("top")]),t._v("，"),p("code",{pre:!0},[t._v("top-left")]),t._v("，"),p("code",{pre:!0},[t._v("top-right")]),t._v("，"),p("code",{pre:!0},[t._v("bottom")]),t._v("，"),p("code",{pre:!0},[t._v("bottom-left")]),t._v("，"),p("code",{pre:!0},[t._v("bottom-right")]),t._v("，"),p("code",{pre:!0},[t._v("left")]),t._v("，"),p("code",{pre:!0},[t._v("left-top")]),t._v("，"),p("code",{pre:!0},[t._v("left-bottom")]),t._v("，"),p("code",{pre:!0},[t._v("right")]),t._v("，"),p("code",{pre:!0},[t._v("right-top")]),t._v("，"),p("code",{pre:!0},[t._v("right-bottom")])]),p("td",[t._v("String")]),p("td",[t._v("top")])]),p("tr",[p("td",[t._v("width")]),p("td",[t._v("展示的宽度,默认为内容区域的大小")]),p("td",[t._v("String,Number")]),p("td",[t._v("-")])]),p("tr",[p("td",[t._v("transfer")]),p("td",[t._v("默认渲染到body 上，如定位有问题，请尝试修改为 false")]),p("td",[t._v("Boolean")]),p("td",[t._v("true")])])])])])}],I={},j=(0,a.Z)(I,N,A,!1,null,null,null),q=j.exports,z={render(){const t=arguments[0];return t("div",{class:"demo-poptip"},[t(_),t(d),t(g),t(C),t(H),t(q)])}},D=z,E=(0,a.Z)(D,n,o,!1,null,null,null),F=E.exports}}]);