/*!
 * kui-vue v3.3.5-c
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[8122],{177:function(t,e,n){n.r(e),n.d(e,{default:function(){return Y}});var o,i,l=function(){var t=this;t._self._c;return t._m(0)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Popconfirm 气泡确认框")]),e("p",[t._v("点击元素，弹出气泡式的确认框。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),e("p",[t._v("目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。")]),e("p",[t._v("和 ‘confirm’ 弹出的全屏居中模态对话框相比，交互形式更轻量。")]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],a=n(1001),c={},p=(0,a.Z)(c,l,r,!1,null,null,null),s=p.exports,m=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Popconfirm",{attrs:{title:"Are you sure delete this task?"},on:{ok:t.ok,cancel:t.cancel}},[e("a",{attrs:{type:"primary"}},[t._v("Delete")])])],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("基础用法")])]),e("p",[t._v("最简单的用法。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Popconfirm \n    title="Are you sure delete this task?"\n    @ok="ok"\n    @cancel="cancel"\n   >\n    <a type="primary">Delete</a>\n  </Popconfirm>\n</template>\n<script>\nexport default{\n  methods:{\n    ok(){\n      this.$Message.success(\'Clicked on ok\')\n    },\n    cancel(){\n      this.$Message.info(\'Clicked on cancel\')\n    }\n  }\n}\n<\/script>h\n\n')])])])],2)},d=[],v={methods:{ok(){this.$Message.success("Clicked on ok")},cancel(){this.$Message.info("Clicked on cancel")}}},u=v,_=(0,a.Z)(u,m,d,!1,null,null,null),f=_.exports,h=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Popconfirm",{attrs:{title:"您确认删除这条内容吗?"},on:{ok:t.ok,cancel:t.cancel}},[e("Button",{attrs:{type:"primary"}},[t._v("确认")])],1),e("Popconfirm",{attrs:{title:"Are you sure delete this task?","ok-text":"Yes","cancel-text":"No"},on:{ok:t.ok,cancel:t.cancel}},[e("Button",{attrs:{type:"primary"}},[t._v("Confirm")])],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"国际化",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#国际化"}},[t._v("国际化")])]),e("p",[t._v("使用 "),e("code",{pre:!0},[t._v("okText")]),t._v(" 和 "),e("code",{pre:!0},[t._v("cancelText")]),t._v(" 自定义按钮文字。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Popconfirm \n    title="您确认删除这条内容吗?"\n    @ok="ok"\n    @cancel="cancel"\n    >\n    <Button type="primary">确认</Button>\n  </Popconfirm>\n  <Popconfirm title="Are you sure delete this task?"\n    ok-text="Yes"\n    cancel-text="No"\n    @ok="ok"\n    @cancel="cancel"\n    >\n    <Button type="primary">Confirm</Button>\n  </Popconfirm>\n</template>\n<script>\nexport default{\n  methods:{\n    ok(){\n      this.$Message.success(\'Clicked on Yes\')\n    },\n    cancel(){\n      this.$Message.info(\'Clicked on No\')\n    }\n  }\n}\n<\/script>  \n\n')])])])],2)},B=[],P={methods:{ok(){this.$Message.success("Clicked on Yes")},cancel(){this.$Message.info("Clicked on No")}}},g=P,k=(0,a.Z)(g,h,B,!1,null,null,null),x=k.exports,y=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticStyle:{"margin-left":"70px","white-space":"nowrap"}},[e("Popconfirm",{attrs:{title:t.title,placement:"top-left"}},[e("Button",[t._v("TL")])],1),e("Popconfirm",{attrs:{title:t.title,placement:"top"}},[e("Button",[t._v("Top")])],1),e("Popconfirm",{attrs:{title:t.title,placement:"top-right"}},[e("Button",[t._v("TR")])],1)],1),e("div",{staticStyle:{float:"left",height:"125px",width:"70px"}},[e("Popconfirm",{attrs:{title:t.title,placement:"left-top"}},[e("Button",[t._v("LT")])],1),e("Popconfirm",{attrs:{title:t.title,placement:"left"}},[e("Button",[t._v("Left")])],1),e("Popconfirm",{attrs:{title:t.title,placement:"left-bottom"}},[e("Button",[t._v("LB")])],1)],1),e("div",{staticStyle:{"margin-left":"310px",height:"125px",width:"70px"}},[e("Popconfirm",{attrs:{title:t.title,placement:"right-top"}},[e("Button",[t._v("RT")])],1),e("Popconfirm",{attrs:{title:t.title,placement:"right"}},[e("Button",[t._v("Right")])],1),e("Popconfirm",{attrs:{title:t.title,placement:"right-bottom"}},[e("Button",[t._v("RB")])],1)],1),e("div",{staticStyle:{"margin-left":"70px","white-space":"nowrap"}},[e("Popconfirm",{attrs:{title:t.title,placement:"bottom-left"}},[e("Button",[t._v("BL")])],1),e("Popconfirm",{attrs:{title:t.title,placement:"bottom"}},[e("Button",[t._v("Bottom")])],1),e("Popconfirm",{attrs:{title:t.title,placement:"bottom-right"}},[e("Button",[t._v("BR")])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"位置",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#位置"}},[t._v("位置")])]),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("placement")]),t._v("控制方向, 位置有十二个方向。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div style="margin-left:70px;white-space: nowrap;">\n    <Popconfirm :title="title" placement="top-left">\n      <Button>TL</Button>\n    </Popconfirm>\n    <Popconfirm :title="title" placement="top">\n      <Button>Top</Button>\n    </Popconfirm>\n    <Popconfirm :title="title" placement="top-right">\n      <Button>TR</Button>\n    </Popconfirm>\n  </div>\n  <div style="float:left;height:125px;width:70px;">\n    <Popconfirm :title="title" placement="left-top">\n      <Button>LT</Button>\n    </Popconfirm>\n    <Popconfirm :title="title" placement="left">\n      <Button>Left</Button>\n    </Popconfirm>\n    <Popconfirm :title="title" placement="left-bottom">\n      <Button>LB</Button>\n    </Popconfirm>\n  </div>\n  <div style="margin-left:310px;height:125px;width:70px;">\n    <Popconfirm :title="title" placement="right-top">\n      <Button>RT</Button>\n    </Popconfirm>\n    <Popconfirm :title="title" placement="right">\n      <Button>Right</Button>\n    </Popconfirm>\n    <Popconfirm :title="title" placement="right-bottom">\n      <Button>RB</Button>\n    </Popconfirm>\n  </div>\n  <div style="margin-left:70px;white-space: nowrap;">\n    <Popconfirm :title="title" placement="bottom-left">\n      <Button>BL</Button>\n    </Popconfirm>\n    <Popconfirm :title="title" placement="bottom" >\n      <Button>Bottom</Button>\n    </Popconfirm>\n    <Popconfirm :title="title" placement="bottom-right" >\n      <Button>BR</Button>\n    </Popconfirm>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      title:\'Are you sure to delete this task?\',\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},b=[],C={data(){return{title:"Are you sure to delete this task?"}}},w=C,T=(0,a.Z)(w,y,b,!1,null,null,null),L=T.exports,R=function(){var t=this;t._self._c;return t._m(0)},S=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("显示的标题")]),e("td",[t._v("String,Slots")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("placement")]),e("td",[t._v("提示框出现的位置，可选值为"),e("code",{pre:!0},[t._v("top")]),t._v("，"),e("code",{pre:!0},[t._v("top-left")]),t._v("，"),e("code",{pre:!0},[t._v("top-right")]),t._v("，"),e("code",{pre:!0},[t._v("bottom")]),t._v("，"),e("code",{pre:!0},[t._v("bottom-left")]),t._v("，"),e("code",{pre:!0},[t._v("bottom-right")]),t._v("，"),e("code",{pre:!0},[t._v("left")]),t._v("，"),e("code",{pre:!0},[t._v("left-top")]),t._v("，"),e("code",{pre:!0},[t._v("left-bottom")]),t._v("，"),e("code",{pre:!0},[t._v("right")]),t._v("，"),e("code",{pre:!0},[t._v("right-top")]),t._v("，"),e("code",{pre:!0},[t._v("right-bottom")])]),e("td",[t._v("String")]),e("td",[t._v("top")])]),e("tr",[e("td",[t._v("width")]),e("td",[t._v("展示的宽度,默认为内容区域的大小")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("transfer")]),e("td",[t._v("默认渲染到body 上，如定位有问题，请尝试修改为 false")]),e("td",[t._v("Boolean")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("ok-text")]),e("td",[t._v("确定按钮的文字，")]),e("td",[t._v("String")]),e("td",[t._v("确定")])]),e("tr",[e("td",[t._v("cancel-text")]),e("td",[t._v("取消按钮的文字，")]),e("td",[t._v("String")]),e("td",[t._v("取消")])]),e("tr",[e("td",[t._v("cancel")]),e("td",[t._v("点击取消的回调，")]),e("td",[t._v("Function")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("ok")]),e("td",[t._v("点击确定的回调，")]),e("td",[t._v("Function")]),e("td",[t._v("-")])])])])])}],M={},$=(0,a.Z)(M,R,S,!1,null,null,null),A=$.exports,Z={render(){const t=arguments[0];return t("div",{class:"demo-popconfirm"},[t(s),t(f),t(x),t(L),t(A)])}},D=Z,N=(0,a.Z)(D,o,i,!1,null,null,null),Y=N.exports}}]);