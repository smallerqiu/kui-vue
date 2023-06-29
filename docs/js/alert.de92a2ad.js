/*!
 * kui-vue v3.3.5-b
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[7745],{2344:function(t,e,r){r.r(e),r.d(e,{default:function(){return F}});var s,n,o=function(){var t=this;t._self._c;return t._m(0)},l=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Alert 警告提示")]),e("p",[t._v("警告提示，展现需要关注的信息。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t._v("何时使用 "),e("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[t._v("#")])]),e("ul",[e("li",[t._v("当某个页面需要向用户显示警告的信息时。")]),e("li",[t._v("非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。")])]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t._v("代码演示 "),e("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[t._v("#")])])])}],a=r(1001),c={},i=(0,a.Z)(c,o,l,!1,null,null,null),p=i.exports,v=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Alert",{attrs:{type:"success"}},[t._v("Success Text")]),e("Alert",{attrs:{type:"info"}},[t._v("Info Text")]),e("Alert",{attrs:{type:"warning"}},[t._v("Warning Text")]),e("Alert",{attrs:{type:"error"}},[t._v("Error Text")])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[t._v("基本用法 "),e("a",{staticClass:"anchor",attrs:{href:"#基本用法"}},[t._v("#")])]),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("type")]),t._v(" 来控制展示类型")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Alert type="success">Success Text</Alert>\n    <Alert type="info">Info Text</Alert>\n    <Alert type="warning">Warning Text</Alert>\n    <Alert type="error">Error Text</Alert>\n  </div>\n</template>\n')])])])],2)]],2)},u=[],_={},d=(0,a.Z)(_,v,u,!1,null,null,null),h=d.exports,f=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Alert",{attrs:{type:"success",showIcon:""}},[t._v("Success Text")]),e("Alert",{attrs:{type:"info",showIcon:""}},[t._v("Info Text")]),e("Alert",{attrs:{type:"warning",showIcon:""}},[t._v("Warning Text")]),e("Alert",{attrs:{type:"error",showIcon:""}},[t._v("Error Text")]),e("Alert",{attrs:{type:"success",showIcon:"",message:"Success Tip",description:"Congratulations, the operation is successful."}}),e("Alert",{attrs:{type:"info",showIcon:"",message:"Informational Notes",description:"Congratulations, the operation is successful."}}),e("Alert",{attrs:{type:"warning",showIcon:"",message:"Warning",description:"Nuclear bomb launching base, please do not approach!"}}),e("Alert",{attrs:{type:"error",showIcon:"",message:"Error",description:"Encountered an error, please press any key to continue."}})],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"图标",tabindex:"-1"}},[t._v("图标 "),e("a",{staticClass:"anchor",attrs:{href:"#图标"}},[t._v("#")])]),e("p",[e("code",{pre:!0},[t._v("showIcon")]),t._v(" 来设置是否显示图标")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Alert type="success" showIcon>Success Text</Alert> \n    <Alert type="info" showIcon>Info Text</Alert>\n    <Alert type="warning" showIcon>Warning Text</Alert>\n    <Alert type="error" showIcon>Error Text</Alert>\n\n    <Alert type="success" \n        showIcon\n        message="Success Tip" \n        description="Congratulations, the operation is successful." \n      />\n    <Alert type="info" \n        showIcon \n        message="Informational Notes" \n        description="Congratulations, the operation is successful." \n    />\n    <Alert type="warning"\n        showIcon \n        message="Warning" \n        description="Nuclear bomb launching base, please do not approach!" \n     />\n    <Alert type="error" \n      showIcon \n      message="Error" \n      description="Encountered an error, please press any key to continue." \n    />\n  </div>\n</template>\n')])])])],2)]],2)},A=[],g={},m=(0,a.Z)(g,f,A,!1,null,null,null),y=m.exports,w=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Alert",{attrs:{type:"success",showIcon:"",closable:""}},[t._v("Success Text")]),e("Alert",{attrs:{type:"info",showIcon:"",closable:""}},[t._v("Info Text")]),e("Alert",{attrs:{type:"warning",showIcon:"",closable:""}},[t._v("Warning Text")]),e("Alert",{attrs:{type:"error",showIcon:"",closable:""}},[t._v("Error Text")]),e("Alert",{attrs:{type:"success",showIcon:"",closable:"",message:"Success Tip",description:"Congratulations, the operation is successful."}})],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"可关闭",tabindex:"-1"}},[t._v("可关闭 "),e("a",{staticClass:"anchor",attrs:{href:"#可关闭"}},[t._v("#")])]),e("p",[e("code",{pre:!0},[t._v("closable")]),t._v(" 来控制是否显示可关闭按钮,平滑、自然隐藏关闭")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Alert type="success" showIcon closable>Success Text</Alert>\n    <Alert type="info" showIcon closable>Info Text</Alert>\n    <Alert type="warning" showIcon closable>Warning Text</Alert>\n    <Alert type="error" showIcon closable>Error Text</Alert>\n    <Alert type="success" \n        showIcon\n        closable\n        message="Success Tip" \n        description="Congratulations, the operation is successful." \n      />\n  </div>\n</template>\n')])])])],2)]],2)},x=[],I={},b=(0,a.Z)(I,w,x,!1,null,null,null),T=b.exports,C=function(){var t=this;t._self._c;return t._m(0)},S=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{attrs:{id:"api",tabindex:"-1"}},[t._v("API "),e("a",{staticClass:"anchor",attrs:{href:"#api"}},[t._v("#")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("type")]),e("td",[t._v("按钮类型，可选值为 "),e("code",{pre:!0},[t._v("success")]),t._v("、"),e("code",{pre:!0},[t._v("info")]),t._v("、"),e("code",{pre:!0},[t._v("warning")]),t._v("、"),e("code",{pre:!0},[t._v("error")]),t._v(" 或者不设置")]),e("td",[t._v("String")]),e("td",[t._v("warning")])]),e("tr",[e("td",[t._v("message")]),e("td",[t._v("警告提示内容")]),e("td",[t._v("String，Slot")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("description")]),e("td",[t._v("警告提示的辅助性文字介绍")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("show-icon")]),e("td",[t._v("是否显示图标")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("closable")]),e("td",[t._v("是否显示关闭按钮")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("close")]),e("td",[t._v("关闭时触发的回调函数")]),e("td",[t._v("Function")]),e("td",[t._v("-")])])])])])}],E={},k=(0,a.Z)(E,C,S,!1,null,null,null),W=k.exports,Z={render(){const t=arguments[0];return t("div",[t(p),t(h),t(y),t(T),t(W)])}},N=Z,B=(0,a.Z)(N,s,n,!1,null,null,null),F=B.exports}}]);