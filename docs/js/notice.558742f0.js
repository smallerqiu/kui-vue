/*!
 * kui-vue v3.3.4
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[9664],{573:function(t,n,e){e.r(n),e.d(n,{default:function(){return J}});var o,i,c=function(){var t=this;t._self._c;return t._m(0)},r=[function(){var t=this,n=t._self._c;return n("div",[n("h1",[t._v("Notice 通知提醒框")]),n("p",[t._v("全局展示通知提醒信息。")]),n("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t._v("何时使用 "),n("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[t._v("#")])]),n("p",[t._v("在系统四个角显示通知提醒信息。经常用于以下情况：")]),n("ul",[n("li",[t._v("较为复杂的通知内容。")]),n("li",[t._v("带有交互的通知，给出用户下一步的行动点。")]),n("li",[t._v("系统主动推送。")])]),n("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t._v("代码演示 "),n("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[t._v("#")])])])}],a=e(1001),l={},s=(0,a.Z)(l,c,r,!1,null,null,null),p=s.exports,u=function(){var t=this,n=t._self._c;return n("div",[[n("demo",[n("template",{slot:"component"},[n("div",[n("Button",{attrs:{type:"primary"},on:{click:t.info}},[t._v("普通提示")])],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[t._v("基础用法 "),n("a",{staticClass:"anchor",attrs:{href:"#基础用法"}},[t._v("#")])]),n("p",[n("code",{pre:!0},[t._v("Notice")]),t._v(" 的基本用法")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button @click="info" type="primary">普通提示</Button>\n  </div>\n</template>\n<script>\nexport default{  \n  methods:{\n    info() {\n      this.$Notice.open({\n        title: "通知的标题",\n        content: "通知的描述",\n        duration: 5\n      });\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},d=[],v={methods:{info(){this.$Notice.open({title:"通知的标题",content:"通知的描述",duration:5})}}},_=v,h=(0,a.Z)(_,u,d,!1,null,null,null),f=h.exports,m=function(){var t=this,n=t._self._c;return n("div",[[n("demo",[n("template",{slot:"component"},[n("div",[n("Button",{attrs:{type:"primary"},on:{click:function(n){return t.notice("info")}}},[t._v("消息提示 ")]),n("Button",{on:{click:function(n){return t.notice("warning")}}},[t._v("警告提示 ")]),n("Button",{on:{click:function(n){return t.notice("success")}}},[t._v("成功提示 ")]),n("Button",{attrs:{type:"danger"},on:{click:function(n){return t.notice("error")}}},[t._v("错误提示 ")])],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"带图标的提醒",tabindex:"-1"}},[t._v("带图标的提醒 "),n("a",{staticClass:"anchor",attrs:{href:"#带图标的提醒"}},[t._v("#")])]),n("p",[t._v("通过调用不同的方法，可展示不同的类型")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button @click="notice(\'info\')" type="primary">消息提示 </Button>\n    <Button @click="notice(\'warning\')">警告提示 </Button>\n    <Button @click="notice(\'success\')">成功提示 </Button>\n    <Button @click="notice(\'error\')" type="danger">错误提示 </Button>\n  </div>\n</template>\n<script>\nexport default{  \n  methods:{\n    notice(type) {\n      this.$Notice[type]({\n        title: "通知的标题",\n        content: "通知的描述",\n        duration: 5\n      });\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},g=[],y={methods:{notice(t){this.$Notice[t]({title:"通知的标题",content:"通知的描述",duration:5})}}},B=y,k=(0,a.Z)(B,m,g,!1,null,null,null),$=k.exports,N=function(){var t=this,n=t._self._c;return n("div",[[n("demo",[n("template",{slot:"component"},[n("div",[n("Button",{attrs:{icon:t.LogoAlipay},on:{click:t.alipay}}),n("Button",{attrs:{icon:t.LogoWechat},on:{click:t.wechat}})],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"自定义图标",tabindex:"-1"}},[t._v("自定义图标 "),n("a",{staticClass:"anchor",attrs:{href:"#自定义图标"}},[t._v("#")])]),n("p",[t._v("自定义图标")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <div>\n    <Button @click=\"alipay\" :icon=\"LogoAlipay\"></Button>\n    <Button @click=\"wechat\" :icon=\"LogoWechat\"></Button>\n  </div>\n</template>\n<script>\nimport { LogoAlipay, LogoWechat } from \"kui-icons\";\nexport default{  \n  data() {\n    return {\n       LogoAlipay, LogoWechat\n    }\n  },\n  methods:{\n    alipay() {\n      this.$Notice.open({\n        icon:LogoAlipay,\n        color:'#0082ff',\n        title: \"尊敬的用户你好\",\n        content: \"我们很高兴通知您，您下个月花呗12900元，不用还了！\",\n        duration: 10\n      });\n    },\n    wechat() {\n      let h = this.$createElement\n\n      let content = h('div',{},[\n        h('p',{ attrs : {style:'margin:10px 0'} },'微信新增了一些新功能，我们邀请您体验！'),\n        h('Button',{ props:{ type:'primary' } },'去看看')\n      ])\n\n      this.$Notice.open({\n        icon:LogoWechat,\n        color:'#00ff9e',\n        title: \"尊敬的用户你好\",\n        content,//: \"微信新增了一些新功能，我们邀请您体验！\",\n        duration: 10\n      });\n    }\n  }\n}\n<\/script>\n")])])])],2)]],2)},x=[],L=e(5118),b={data(){return{LogoAlipay:L.LogoAlipay,LogoWechat:L.LogoWechat}},methods:{alipay(){this.$Notice.open({icon:L.LogoAlipay,color:"#0082ff",title:"尊敬的用户你好",content:"我们很高兴通知您，您下个月花呗12900元，不用还了！",duration:10})},wechat(){let t=this.$createElement,n=t("div",{},[t("p",{attrs:{style:"margin:10px 0"}},"微信新增了一些新功能，我们邀请您体验！"),t("Button",{props:{type:"primary"}},"去看看")]);this.$Notice.open({icon:L.LogoWechat,color:"#00ff9e",title:"尊敬的用户你好",content:n,duration:10})}}},w=b,A=(0,a.Z)(w,N,x,!1,null,null,null),C=A.exports,W=function(){var t=this,n=t._self._c;return n("div",[[n("demo",[n("template",{slot:"component"},[n("div",[n("Button",{on:{click:t.config}},[t._v("10秒后关闭")]),n("Button",{attrs:{type:"primary"},on:{click:t.config2}},[t._v("5秒后关闭")]),n("Button",{attrs:{type:"primary"},on:{click:t.config3}},[t._v("手动关闭")])],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"自定义时长",tabindex:"-1"}},[t._v("自定义时长 "),n("a",{staticClass:"anchor",attrs:{href:"#自定义时长"}},[t._v("#")])]),n("p",[t._v("可以自定义配置，其中 "),n("code",{pre:!0},[t._v("duration")]),t._v(" 来控制自动关闭时长,默认 "),n("code",{pre:!0},[t._v("3s")])])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button @click="config">10秒后关闭</Button>\n    <Button @click="config2" type="primary">5秒后关闭</Button>\n    <Button @click="config3" type="primary">手动关闭</Button>\n  </div>\n</template>\n<script>\nexport default{\n  methods:{\n    config() {\n      this.$Notice.open({\n        type: "success",\n        duration: 10,\n        title:\'温馨提示\',\n        content: "10秒后关闭"\n      });\n    },\n    config2() {\n      this.$Notice.open({\n        type: "info",\n        duration: 5,\n        title:\'温馨提示\',\n        content: "5秒后关闭"\n      });\n    },\n    config3() {\n      this.$Notice.open({\n        type: "info",\n        duration: 0,\n        title:\'温馨提示\',\n        content: "手动关闭",\n        close: () => { this.$Message.success("我是回调"); }\n      });\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},Z=[],S={methods:{config(){this.$Notice.open({type:"success",duration:10,title:"温馨提示",content:"10秒后关闭"})},config2(){this.$Notice.open({type:"info",duration:5,title:"温馨提示",content:"5秒后关闭"})},config3(){this.$Notice.open({type:"info",duration:0,title:"温馨提示",content:"手动关闭",close:()=>{this.$Message.success("我是回调")}})}}},E=S,M=(0,a.Z)(E,W,Z,!1,null,null,null),F=M.exports,I=function(){var t=this;t._self._c;return t._m(0)},P=[function(){var t=this,n=t._self._c;return n("div",[n("h3",{attrs:{id:"api",tabindex:"-1"}},[t._v("API "),n("a",{staticClass:"anchor",attrs:{href:"#api"}},[t._v("#")])]),n("p",[t._v("组件提供了一些静态方法，使用方式如下")]),n("ul",[n("li",[n("code",{pre:!0},[t._v("this.$Notice.info(options)")])]),n("li",[n("code",{pre:!0},[t._v("this.$Notice.success(options)")])]),n("li",[n("code",{pre:!0},[t._v("this.$Notice.warning(options)")])]),n("li",[n("code",{pre:!0},[t._v("this.$Notice.error(options)")])])]),n("p",[t._v("另外提供了全局配置和全局销毁的方法：")]),n("ul",[n("li",[n("code",{pre:!0},[t._v("this.$Notice.open(options)")])]),n("li",[n("code",{pre:!0},[t._v("this.$Notice.destroy()")])])]),n("p",[t._v("参数 "),n("code",{pre:!0},[t._v("options")]),t._v(" 为对象，具体说明如下：")]),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("title")]),n("td",[t._v("通知提醒的标题")]),n("td",[t._v("String")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("content")]),n("td",[t._v("提示内容")]),n("td",[t._v("String ,vndoe")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("duration")]),n("td",[t._v("自动关闭的延时，单位秒，不关闭可以写 0")]),n("td",[t._v("Number")]),n("td",[t._v("3")])]),n("tr",[n("td",[t._v("close")]),n("td",[t._v("关闭时的回调")]),n("td",[t._v("Function")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("icon")]),n("td",[t._v("自定义图标")]),n("td",[t._v("String")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("color")]),n("td",[t._v("自定义图标颜色")]),n("td",[t._v("String")]),n("td",[t._v("-")])])])])])}],j={},q=(0,a.Z)(j,I,P,!1,null,null,null),z=q.exports,D={render(){const t=arguments[0];return t("div",{class:"demo-notice"},[t(p),t(f),t($),t(C),t(F),t(z)])}},G=D,H=(0,a.Z)(G,o,i,!1,null,null,null),J=H.exports}}]);