/*!
 * kui-vue v3.3.5-c
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[1676],{1895:function(t,n,e){e.r(n),e.d(n,{default:function(){return J}});var o=function(){var t=this;t._self._c;return t._m(0)},s=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"markdown-body"},[n("h1",[t._v("Message 全局提示")]),n("p",[t._v("全局展示操作反馈信息。")]),n("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),n("ul",[n("li",[t._v("可提供成功、警告和错误等反馈信息。")]),n("li",[t._v("顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。")])]),n("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],a=e(1001),r={},i=(0,a.Z)(r,o,s,!1,null,null,null),c=i.exports,l=function(){var t=this,n=t._self._c;return n("Demo",[n("template",{slot:"component"},[n("div",[n("Button",{attrs:{type:"primary"},on:{click:t.info}},[t._v("Show base info ")])],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"普通提示",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#普通提示"}},[t._v("普通提示")])]),n("p",[t._v("信息提醒反馈。")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button @click="info" type="primary">Show base info </Button>\n  </div>\n</template>\n<script>\nlet count = 0\nexport default{\n  methods:{\n    info() {\n      count++\n      this.$Message.info("this is a base message number : "+count);\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},d=[];let p=0;var u={methods:{info(){p++,this.$Message.info("this is a base message number : "+p)}}},v=u,_=(0,a.Z)(v,l,d,!1,null,null,null),h=_.exports,g=function(){var t=this,n=t._self._c;return n("Demo",[n("template",{slot:"component"},[n("div",[n("Button",{attrs:{icon:t.LogoAlipay},on:{click:t.alipay}}),n("Button",{attrs:{icon:t.LogoWechat},on:{click:t.wechat}})],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"自定图标",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定图标"}},[t._v("自定图标")])]),n("p",[t._v("自定图标。")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button @click="alipay" :icon="LogoAlipay"></Button>\n    <Button @click="wechat" :icon="LogoWechat"></Button>\n  </div>\n</template>\n<script>\nimport { LogoAlipay, LogoWechat } from "kui-icons";\nlet count = 0\nexport default{\n  data() {\n    return {\n      LogoAlipay, LogoWechat\n    }\n  },\n  methods:{\n    alipay() {\n      this.$Message.config({\n        icon:LogoAlipay,\n        content:"支付宝到账100万",\n      });\n    },\n    wechat() {\n      this.$Message.config({\n        color:\'green\',\n        icon:LogoWechat,\n        content:"微信收款100万"\n      });\n    },\n  }\n}\n<\/script>\n\n')])])])],2)},f=[],m=e(5118);var y,B,k={data(){return{LogoAlipay:m.LogoAlipay,LogoWechat:m.LogoWechat}},methods:{alipay(){this.$Message.config({icon:m.LogoAlipay,content:"支付宝到账100万"})},wechat(){this.$Message.config({color:"green",icon:m.LogoWechat,content:"微信收款100万"})}}},M=k,$=(0,a.Z)(M,g,f,!1,null,null,null),b=$.exports,w=function(){var t=this,n=t._self._c;return n("Demo",[n("template",{slot:"component"},[n("div",[n("Button",{on:{click:t.warning}},[t._v("Warning ")]),n("Button",{on:{click:t.success}},[t._v("Success ")]),n("Button",{attrs:{type:"danger"},on:{click:t.error}},[t._v("Error")])],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"提示类型",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提示类型"}},[t._v("提示类型")])]),n("p",[t._v("通过 "),n("code",{pre:!0},[t._v("type")]),t._v(" 来设置提示类型")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button @click="warning">Warning </Button>\n    <Button @click="success">Success </Button>\n    <Button @click="error" type="danger">Error</Button>\n  </div>\n</template>\n<script>\nexport default{\n  methods:{\n    warning() {\n      this.$Message.warning("警告提示");\n      },\n    success() {\n      this.$Message.success("成功提示");\n    },\n    error() {\n      this.$Message.error("错误提示");\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},x=[],L={methods:{warning(){this.$Message.warning("警告提示")},success(){this.$Message.success("成功提示")},error(){this.$Message.error("错误提示")}}},C=L,W=(0,a.Z)(C,w,x,!1,null,null,null),A=W.exports,S=function(){var t=this,n=t._self._c;return n("Demo",[n("template",{slot:"component"},[n("div",[n("Button",{on:{click:t.config}},[t._v("10秒后关闭")]),n("Button",{attrs:{type:"primary"},on:{click:t.config2}},[t._v("5秒后关闭")]),n("Button",{attrs:{type:"primary"},on:{click:t.config3}},[t._v("手动关闭")])],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"自定义时长",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义时长"}},[t._v("自定义时长")])]),n("p",[t._v("可以自定义配置，其中 "),n("code",{pre:!0},[t._v("duration")]),t._v(" 来控制自动关闭时长,默认 "),n("code",{pre:!0},[t._v("3s")]),t._v(" , "),n("code",{pre:!0},[t._v("closable")]),t._v(" 显示关闭按钮")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button @click="config">10秒后关闭</Button>\n    <Button @click="config2" type="primary">5秒后关闭</Button>\n    <Button @click="config3" type="primary">手动关闭</Button>\n  </div>\n</template>\n<script>\nexport default{\n  methods:{\n    config() {\n      this.$Message.success("10秒后关闭", 10);\n    },\n    config2() {\n      this.$Message.config({\n        type: "info",\n        duration: 5,\n        content: "5秒后关闭"\n      });\n    },\n    config3() {\n      this.$Message.config({\n        type: "info",\n        duration: 0,\n        closable: true,\n        content: "手动关闭",\n        close: () => { this.$Message.success("我是回调"); }\n      });\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},Z=[],D={methods:{config(){this.$Message.success("10秒后关闭",10)},config2(){this.$Message.config({type:"info",duration:5,content:"5秒后关闭"})},config3(){this.$Message.config({type:"info",duration:0,closable:!0,content:"手动关闭",close:()=>{this.$Message.success("我是回调")}})}}},E=D,F=(0,a.Z)(E,S,Z,!1,null,null,null),I=F.exports,N=function(){var t=this;t._self._c;return t._m(0)},P=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"markdown-body"},[n("h2",{attrs:{id:"api",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),n("p",[t._v("组件提供了一些静态方法，使用方式如下")]),n("ul",[n("li",[n("code",{pre:!0},[t._v("this.$Message.info(content, [duration], onClose)")])]),n("li",[n("code",{pre:!0},[t._v("this.$Message.success(content, [duration], onClose)")])]),n("li",[n("code",{pre:!0},[t._v("this.$Message.warning(content, [duration], onClose)")])]),n("li",[n("code",{pre:!0},[t._v("this.$Message.error(content, [duration], onClose)")])])]),n("p",[t._v("另外提供了全局配置和全局销毁的方法：")]),n("ul",[n("li",[n("code",{pre:!0},[t._v("this.$Message.config(options)")])]),n("li",[n("code",{pre:!0},[t._v("this.$Message.destroy()")])])]),n("p",[t._v("参数 "),n("code",{pre:!0},[t._v("options")]),t._v(" 为对象，具体说明如下：")]),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("type")]),n("td",[t._v("提示类型，提供 "),n("code",{pre:!0},[t._v("info")]),t._v("、"),n("code",{pre:!0},[t._v("success")]),t._v("、"),n("code",{pre:!0},[t._v("error")]),t._v("、"),n("code",{pre:!0},[t._v("warning")]),t._v(" 四种可选类型")]),n("td",[t._v("String")]),n("td",[t._v("info")])]),n("tr",[n("td",[t._v("content")]),n("td",[t._v("提示内容")]),n("td",[t._v("String,Vnode")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("duration")]),n("td",[t._v("自动关闭的延时，单位秒，0为 不自动关闭")]),n("td",[t._v("Number")]),n("td",[t._v("3")])]),n("tr",[n("td",[t._v("closable")]),n("td",[t._v("是否可手动关闭")]),n("td",[t._v("Boolean")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("close")]),n("td",[t._v("关闭时的回调")]),n("td",[t._v("Function")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("icon")]),n("td",[t._v("自定义图标")]),n("td",[t._v("String")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("color")]),n("td",[t._v("自定义图标颜色")]),n("td",[t._v("String")]),n("td",[t._v("-")])])])])])}],V={},j=(0,a.Z)(V,N,P,!1,null,null,null),q=j.exports,z={render(){const t=arguments[0];return t("div",{class:"demo-message"},[t(c),t(h),t(b),t(A),t(I),t(q)])}},G=z,H=(0,a.Z)(G,y,B,!1,null,null,null),J=H.exports}}]);