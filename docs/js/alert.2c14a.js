/*!
 * kui-vue v3.3.6-a
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[7745],{4857:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var s=function(){this._self._c;return this._m(0)};s._withStripped=!0;var n=r(1900),o=(0,n.Z)({},s,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Alert 警告提示")]),t._v(" "),e("p",[t._v("警告提示，展现需要关注的信息。")]),t._v(" "),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),t._v(" "),e("ul",[e("li",[t._v("当某个页面需要向用户显示警告的信息时。")]),t._v(" "),e("li",[t._v("非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。")])]),t._v(" "),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],!1,null,null,null).exports,a=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Alert",{attrs:{type:"success"}},[t._v("Success Text")]),t._v(" "),e("Alert",{attrs:{type:"info"}},[t._v("Info Text")]),t._v(" "),e("Alert",{attrs:{type:"warning"}},[t._v("Warning Text")]),t._v(" "),e("Alert",{attrs:{type:"error"}},[t._v("Error Text")])],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),t._v(" "),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("type")]),t._v(" 来控制展示类型")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Alert type="success">Success Text</Alert>\n    <Alert type="info">Info Text</Alert>\n    <Alert type="warning">Warning Text</Alert>\n    <Alert type="error">Error Text</Alert>\n  </div>\n</template>\n\n')])])])],2)};a._withStripped=!0;var l=(0,n.Z)({},a,[],!1,null,null,null).exports,c=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Alert",{attrs:{type:"success",showIcon:""}},[t._v("Success Text")]),t._v(" "),e("Alert",{attrs:{type:"info",showIcon:""}},[t._v("Info Text")]),t._v(" "),e("Alert",{attrs:{type:"warning",showIcon:""}},[t._v("Warning Text")]),t._v(" "),e("Alert",{attrs:{type:"error",showIcon:""}},[t._v("Error Text")]),t._v(" "),e("Alert",{attrs:{type:"success",showIcon:"",message:"Success Tip",description:"Congratulations, the operation is successful."}}),t._v(" "),e("Alert",{attrs:{type:"info",showIcon:"",message:"Informational Notes",description:"Congratulations, the operation is successful."}}),t._v(" "),e("Alert",{attrs:{type:"warning",showIcon:"",message:"Warning",description:"Nuclear bomb launching base, please do not approach!"}}),t._v(" "),e("Alert",{attrs:{type:"error",showIcon:"",message:"Error",description:"Encountered an error, please press any key to continue."}})],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"图标",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图标"}},[t._v("图标")])]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("showIcon")]),t._v(" 来设置是否显示图标")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Alert type="success" showIcon>Success Text</Alert> \n    <Alert type="info" showIcon>Info Text</Alert>\n    <Alert type="warning" showIcon>Warning Text</Alert>\n    <Alert type="error" showIcon>Error Text</Alert>\n\n    <Alert type="success" \n        showIcon\n        message="Success Tip" \n        description="Congratulations, the operation is successful." \n      />\n    <Alert type="info" \n        showIcon \n        message="Informational Notes" \n        description="Congratulations, the operation is successful." \n    />\n    <Alert type="warning"\n        showIcon \n        message="Warning" \n        description="Nuclear bomb launching base, please do not approach!" \n     />\n    <Alert type="error" \n      showIcon \n      message="Error" \n      description="Encountered an error, please press any key to continue." \n    />\n  </div>\n</template>\n\n')])])])],2)};c._withStripped=!0;var i=(0,n.Z)({},c,[],!1,null,null,null).exports,v=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Alert",{attrs:{type:"success",showIcon:"",closable:""}},[t._v("Success Text")]),t._v(" "),e("Alert",{attrs:{type:"info",showIcon:"",closable:""}},[t._v("Info Text")]),t._v(" "),e("Alert",{attrs:{type:"warning",showIcon:"",closable:""}},[t._v("Warning Text")]),t._v(" "),e("Alert",{attrs:{type:"error",showIcon:"",closable:""}},[t._v("Error Text")]),t._v(" "),e("Alert",{attrs:{type:"success",showIcon:"",closable:"",message:"Success Tip",description:"Congratulations, the operation is successful."}})],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"可关闭",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可关闭"}},[t._v("可关闭")])]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("closable")]),t._v(" 来控制是否显示可关闭按钮,平滑、自然隐藏关闭")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Alert type="success" showIcon closable>Success Text</Alert>\n    <Alert type="info" showIcon closable>Info Text</Alert>\n    <Alert type="warning" showIcon closable>Warning Text</Alert>\n    <Alert type="error" showIcon closable>Error Text</Alert>\n    <Alert type="success" \n        showIcon\n        closable\n        message="Success Tip" \n        description="Congratulations, the operation is successful." \n      />\n  </div>\n</template>\n\n')])])])],2)};v._withStripped=!0;var _=(0,n.Z)({},v,[],!1,null,null,null).exports,p=function(){this._self._c;return this._m(0)};p._withStripped=!0;var d=(0,n.Z)({},p,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("按钮类型，可选值为 "),e("code",{pre:!0},[t._v("success")]),t._v("、"),e("code",{pre:!0},[t._v("info")]),t._v("、"),e("code",{pre:!0},[t._v("warning")]),t._v("、"),e("code",{pre:!0},[t._v("error")]),t._v(" 或者不设置")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("warning")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("警告提示内容")]),t._v(" "),e("td",[t._v("String，Slot")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("description")]),t._v(" "),e("td",[t._v("警告提示的辅助性文字介绍")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("show-icon")]),t._v(" "),e("td",[t._v("是否显示图标")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("closable")]),t._v(" "),e("td",[t._v("是否显示关闭按钮")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("close")]),t._v(" "),e("td",[t._v("关闭时触发的回调函数")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])])])])])}],!1,null,null,null).exports,u={render(){const t=arguments[0];return t("div",[t(o),t(l),t(i),t(_),t(d)])}},h=u,f=(0,n.Z)(h,undefined,undefined,!1,null,null,null).exports}}]);