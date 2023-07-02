/*!
 * kui-vue v3.3.5-c
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[7059],{2643:function(t,e,n){n.r(e),n.d(e,{default:function(){return ot}});var a,o,s=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Badge",{attrs:{count:3}},[e("Button",[t._v("最新消息")])],1),e("Badge",{staticStyle:{margin:"0 30px"},attrs:{count:15,color:"orange"}},[e("Button",[t._v("最新评论")])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),e("p",[e("code",{pre:!0},[t._v("Badge")]),t._v(" 基础使用")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Badge :count="3">\n      <Button>最新消息</Button>\n    </Badge>\n    <Badge :count="15" color="orange" style="margin:0 30px;">\n      <Button>最新评论</Button>\n    </Badge>\n  </div>\n</template>\n\n')])])])],2)},r=[],d=n(1001),i={},l=(0,d.Z)(i,s,r,!1,null,null,null),c=l.exports,u=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Badge 徽标数")]),e("p",[t._v("图标右上角的圆形徽标数字。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),e("p",[t._v("一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。")]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],p={},g=(0,d.Z)(p,u,v,!1,null,null,null),m=g.exports,h=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-dot"},[e("Badge",{attrs:{dot:""}},[e("div",{staticClass:"box"})]),e("Badge",{attrs:{dot:""}},[e("Icon",{attrs:{type:t.NotificationsOutline}})],1),e("Badge",{attrs:{dot:""}},[e("a",{attrs:{href:"#"}},[t._v("我是一个连接")])])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"点",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#点"}},[t._v("点")])]),e("p",[t._v("设置 "),e("code",{pre:!0},[t._v("dot")]),t._v(" 来展示一个点")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-dot">\n   <Badge dot>\n      <div class="box"></div>\n    </Badge>\n    <Badge dot>\n      <Icon :type="NotificationsOutline" />\n    </Badge>\n    <Badge dot>\n      <a href="#">我是一个连接</a>\n    </Badge>\n  </div>\n</template>\n<script>\nimport { NotificationsOutline } from "kui-icons"\nexport default{\n  data() {\n    return {\n      NotificationsOutline\n    }\n  }\n}\n<\/script>\n<style scoped>\n.demo-dot .box{\n  width:50px;\n  height:50px;\n  background:#7f7f7f55;\n  border-radius:5px;\n}\n.demo-dot .k-badge{\n  margin-right:20px;\n}\n</style>\n\n')])])])],2)},_=[],f=n(4560),B={data(){return{NotificationsOutline:f.NotificationsOutline}}},x=B,b=(0,d.Z)(x,h,_,!1,null,"82f4ac20",null),k=b.exports,w=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-dot"},[e("Badge",{attrs:{count:99}},[e("div",{staticClass:"box"})]),e("Badge",{attrs:{count:100}},[e("div",{staticClass:"box"})]),e("Badge",{attrs:{count:20,"max-count":10}},[e("div",{staticClass:"box"})]),e("Badge",{attrs:{count:1e3,"max-count":999}},[e("div",{staticClass:"box"})]),e("Badge",{attrs:{count:"hot"}},[e("div",{staticClass:"box"})]),e("Badge",{attrs:{count:"new"}},[e("div",{staticClass:"box"})])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"最大值-/-自定义",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最大值-/-自定义"}},[t._v("最大值 / 自定义")])]),e("p",[t._v("设置 "),e("code",{pre:!0},[t._v("max-count")]),t._v(" 配合 "),e("code",{pre:!0},[t._v("count")]),t._v(" ，数字模式超出隐藏，"),e("code",{pre:!0},[t._v("count")]),t._v(" 不为数字时将不进行计算")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-dot">\n   <Badge :count="99">\n      <div class="box"></div>\n    </Badge>\n    <Badge :count="100">\n      <div class="box"></div>\n    </Badge>\n    <Badge :count="20" :max-count="10">\n      <div class="box"></div>\n    </Badge>\n    <Badge :count="1000" :max-count="999">\n      <div class="box"></div>\n    </Badge>\n    <Badge count="hot">\n      <div class="box"></div>\n    </Badge>\n    <Badge count="new">\n      <div class="box"></div>\n    </Badge>\n  </div>\n</template>\n<style scoped>\n.demo-dot .box{\n  width:50px;\n  height:50px;\n  background:#7f7f7f55;\n  border-radius:5px;\n}\n.demo-dot .k-badge{\n  margin-right:30px;\n  margin-bottom:30px;\n}\n</style>\n\n')])])])],2)},C=[],y={},D=(0,d.Z)(y,w,C,!1,null,"2353fc86",null),N=D.exports,O=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-dot"},[e("Badge",{attrs:{dot:t.show}},[e("div",{staticClass:"box"})]),e("Badge",{attrs:{dot:t.show}},[e("Icon",{attrs:{type:t.NotificationsOutline}})],1),e("Badge",{attrs:{dot:t.show}},[e("a",{attrs:{href:"#"}},[t._v("我是一个连接")])]),e("k-switch",{on:{change:function(e){t.show=!t.show}}}),e("br"),e("br"),e("Badge",{attrs:{count:t.count,"max-count":20}},[e("div",{staticClass:"box"})]),e("ButtonGroup",{attrs:{circle:""}},[e("Button",{on:{click:function(e){t.count--}}},[t._v("-")]),e("Button",{on:{click:function(e){t.count++}}},[t._v("+")])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"可控",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可控"}},[t._v("可控")])]),e("p",[t._v("动态控制")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-dot">\n    <Badge :dot="show">\n      <div class="box"></div>\n    </Badge>\n    <Badge :dot="show">\n      <Icon :type="NotificationsOutline" />\n    </Badge>\n    <Badge :dot="show">\n      <a href="#">我是一个连接</a>\n    </Badge>\n    <k-switch @change="show=!show" />\n    <br/>\n    <br/>\n    <Badge :count="count" :max-count="20">\n      <div class="box"></div>\n    </Badge>\n    <ButtonGroup circle>\n      <Button @click="count--">-</Button>\n      <Button @click="count++">+</Button>\n    </ButtonGroup>\n  </div>\n</template>\n<script>\nimport { NotificationsOutline } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      NotificationsOutline,\n      show:true,\n      count:15\n    }\n  }\n} \n<\/script>\n<style scoped>\n.demo-dot .box{\n  width:50px;\n  height:50px;\n  background:#7f7f7f55;\n  border-radius:5px;\n}\n.demo-dot .k-badge{\n  margin-right:20px;\n}\n</style>\n\n')])])])],2)},Z=[],S={data(){return{NotificationsOutline:f.NotificationsOutline,show:!0,count:15}}},I=S,G=(0,d.Z)(I,O,Z,!1,null,"e9296b2a",null),P=G.exports,E=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Badge",{attrs:{count:3}}),e("Badge",{staticStyle:{margin:"0 30px"},attrs:{count:15,color:"orange"}}),e("Badge",{attrs:{count:25,color:"green"}})],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"独立使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#独立使用"}},[t._v("独立使用")])]),e("p",[t._v("不包裹任何元素即是独立使用，可自定样式展现。"),e("br"),t._v(" 在右上角的 badge 则限定为红色。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Badge :count="3" />\n    <Badge :count="15" color="orange" style="margin:0 30px;" />\n    <Badge :count="25" color="green"/>\n  </div>\n</template>\n\n')])])])],2)},A=[],j={},q=(0,d.Z)(j,E,A,!1,null,null,null),z=q.exports,F=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-dot"},[e("Badge",{attrs:{status:"success"}}),e("Badge",{attrs:{status:"error"}}),e("Badge",{attrs:{status:"default"}}),e("Badge",{attrs:{status:"warning"}}),e("br"),e("Badge",{attrs:{status:"success",text:"Success"}}),e("br"),e("Badge",{attrs:{status:"error",text:"Error"}}),e("br"),e("Badge",{attrs:{status:"default",text:"Default"}}),e("br"),e("Badge",{attrs:{status:"warning",text:"warning"}})],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"状态点",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态点"}},[t._v("状态点")])]),e("p",[t._v("用于表示状态的小圆点。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-dot">\n    <Badge status="success" />\n    <Badge status="error" />\n    <Badge status="default" />\n    <Badge status="warning" />\n    <br />\n    <Badge status="success" text="Success" />\n    <br />\n    <Badge status="error" text="Error" />\n    <br />\n    <Badge status="default" text="Default" />\n    <br />\n    <Badge status="warning" text="warning" />\n  </div>\n</template>\n<style scoped>\n.demo-dot .k-badge{\n  margin-right:20px;\n}\n</style>\n\n')])])])],2)},H=[],J={},K=(0,d.Z)(J,F,H,!1,null,"6ed6692e",null),L=K.exports,M=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-dot"},[e("Divider",{attrs:{orientation:"left"}},[t._v("Presets:")]),e("div",t._l(t.colors,(function(t){return e("div",{key:t},[e("Badge",{attrs:{color:t,text:t}})],1)})),0),e("Divider",{attrs:{orientation:"left"}},[t._v("Custom:")]),e("div",t._l(t.custom,(function(t){return e("div",{key:t},[e("Badge",{attrs:{color:t,text:t}})],1)})),0)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"多彩徽标",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多彩徽标"}},[t._v("多彩徽标")])]),e("p",[t._v("多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <div class=\"demo-dot\">\n    <Divider orientation=\"left\">Presets:</Divider>\n    <div>\n      <div v-for=\"color in colors\" :key=\"color\">\n        <Badge :color=\"color\" :text=\"color\" />\n      </div>\n    </div>\n    <Divider orientation=\"left\">Custom:</Divider>\n    <div>\n      <div v-for=\"color in custom\" :key=\"color\">\n        <Badge :color=\"color\" :text=\"color\" />\n      </div>\n    </div>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      custom:['#c20','#39f','#e3f','#6c0'],\n      colors:[\n      'pink',\n      'red',\n      'yellow',\n      'orange',\n      'cyan',\n      'green',\n      'blue',\n      'purple',\n      'geekblue',\n      'magenta',\n      'volcano',\n      'gold',\n      'lime',\n      ]\n    }\n  }\n}\n<\/script>\n\n")])])])],2)},Q=[],R={data(){return{custom:["#c20","#39f","#e3f","#6c0"],colors:["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"]}}},T=R,U=(0,d.Z)(T,M,Q,!1,null,null,null),V=U.exports,W=function(){var t=this;t._self._c;return t._m(0)},X=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("count")]),e("td",[t._v("显示的文字")]),e("td",[t._v("String，Number")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("color")]),e("td",[t._v("徽标颜色")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("max-count")]),e("td",[t._v("展示封顶的数字值，高于的部分会以+号显示")]),e("td",[t._v("Number")]),e("td",[t._v("99")])]),e("tr",[e("td",[t._v("dot")]),e("td",[t._v("不展示数字，只有一个小红点")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])])])])])}],Y={},$=(0,d.Z)(Y,W,X,!1,null,null,null),tt=$.exports,et={render(){const t=arguments[0];return t("div",[t(m),t(c),t(k),t(N),t(z),t(P),t(L),t(V),t(tt)])}},nt=et,at=(0,d.Z)(nt,a,o,!1,null,null,null),ot=at.exports}}]);