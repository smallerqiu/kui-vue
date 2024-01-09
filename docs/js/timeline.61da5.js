/*!
 * kui-vue v3.3.6
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[3831],{6963:function(e,t,i){i.r(t),i.d(t,{default:function(){return T}});var n=function(){this._self._c;return this._m(0)};n._withStripped=!0;var r=i(1900),a=(0,r.Z)({},n,[function(){var e=this,t=e._self._c;return t("div",{staticClass:"markdown-body"},[t("h1",[e._v("TimeLine 时间轴")]),e._v(" "),t("p",[e._v("垂直展示的时间流信息。")]),e._v(" "),t("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[e._v("何时使用")])]),e._v(" "),t("p",[e._v("在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。")]),e._v(" "),t("ul",[t("li",[e._v("当有一系列信息需按时间排列时，可正序和倒序。")]),e._v(" "),t("li",[e._v("需要有一条时间轴进行视觉上的串联时。。")])]),e._v(" "),t("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[e._v("代码演示")])])])}],!1,null,null,null).exports,v=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",[t("TimeLine",[t("TimeLineItem",{attrs:{time:"2020-11-03"}},[e._v("发布3.0版本")]),e._v(" "),t("TimeLineItem",{attrs:{time:"2019-10-25"}},[e._v("发布2.0版本")]),e._v(" "),t("TimeLineItem",{attrs:{time:"2018-10-08"}},[e._v("发布1.0版本")])],1)],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[e._v("基本用法")])]),e._v(" "),t("p",[t("code",{pre:!0},[e._v("TimeLine")]),e._v(" 内部必须包含 "),t("code",{pre:!0},[e._v("TimeLineItem")])])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <TimeLine>\n      <TimeLineItem time="2020-11-03">发布3.0版本</TimeLineItem>\n      <TimeLineItem time="2019-10-25">发布2.0版本</TimeLineItem>\n      <TimeLineItem time="2018-10-08">发布1.0版本</TimeLineItem>\n    </TimeLine>\n  </div>\n</template>\n\n')])])])],2)};v._withStripped=!0;var m=(0,r.Z)({},v,[],!1,null,null,null).exports,l=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",[t("TimeLine",[t("TimeLineItem",{attrs:{color:"green",time:"2020-11-03"}},[e._v("优化成吨的改善和体验")]),e._v(" "),t("TimeLineItem",{attrs:{color:"orange",time:"2020-11-02"}},[t("p",[e._v("新增一些很友好的功能")]),e._v(" "),t("p",[e._v("新增一些很友好的功能")]),e._v(" "),t("p",[e._v("新增一些很友好的功能")])]),e._v(" "),t("TimeLineItem",{attrs:{icon:e.Ribbon,color:"#3593ff",time:"2020-11-01"}},[e._v("发布2.0版本")]),e._v(" "),t("TimeLineItem",{attrs:{icon:e.Build,color:"red",time:"2020-10-03"}},[e._v("修复bug")]),e._v(" "),t("TimeLineItem",{attrs:{time:"2020-10-01"}},[e._v("发布1.0版本")])],1)],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"图标",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图标"}},[e._v("图标")])]),e._v(" "),t("p",[e._v("给 "),t("code",{pre:!0},[e._v("TimeLineItem")]),e._v(" 设置 "),t("code",{pre:!0},[e._v("icon")]),e._v(" 和 "),t("code",{pre:!0},[e._v("color")]),e._v(" 可以改变图标展示")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <TimeLine>\n      <TimeLineItem color="green" time="2020-11-03">优化成吨的改善和体验</TimeLineItem>\n      <TimeLineItem color="orange" time="2020-11-02">\n        <p>新增一些很友好的功能</p>\n        <p>新增一些很友好的功能</p>\n        <p>新增一些很友好的功能</p>\n      </TimeLineItem>\n      <TimeLineItem :icon="Ribbon" color="#3593ff" time="2020-11-01">发布2.0版本</TimeLineItem>\n      <TimeLineItem :icon="Build" color="red" time="2020-10-03">修复bug</TimeLineItem>\n      <TimeLineItem time="2020-10-01">发布1.0版本</TimeLineItem>\n    </TimeLine>\n  </div>\n</template>\n<script>\nimport { Ribbon, Build } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Ribbon, Build\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};l._withStripped=!0;var o=i(2324),_={data(){return{Ribbon:o.Ribbon,Build:o.Build}}},d=(0,r.Z)(_,l,[],!1,null,null,null).exports,s=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",[t("RadioGroup",{model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}},[t("Radio",{attrs:{label:"left",value:"left"}}),e._v(" "),t("Radio",{attrs:{label:"center",value:"center"}}),e._v(" "),t("Radio",{attrs:{label:"alternate",value:"alternate"}}),e._v(" "),t("Radio",{attrs:{label:"right",value:"right"}})],1),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("TimeLine",{attrs:{mode:e.mode}},[t("TimeLineItem",{attrs:{color:"green",time:"2020-11-03",extra:"更多的辅助细节"}},[e._v("优化成吨的改善和体验")]),e._v(" "),t("TimeLineItem",{attrs:{color:"orange",time:"2020-11-02"}},[t("p",[e._v("新增一些很友好的功能")]),e._v(" "),t("p",[e._v("新增一些很友好的功能")]),e._v(" "),t("p",[e._v("新增一些很友好的功能")]),e._v(" "),t("template",{slot:"extra"},[e._v("更多的辅助细节")])],2),e._v(" "),t("TimeLineItem",{attrs:{icon:e.Ribbon,color:"#3593ff",time:"2020-11-01",extra:"更多的辅助细节"}},[e._v("发布2.0版本")]),e._v(" "),t("TimeLineItem",{attrs:{icon:e.Build,color:"red",time:"2020-10-03",extra:"更多的辅助细节"}},[e._v("修复bug")]),e._v(" "),t("TimeLineItem",{attrs:{time:"2020-10-01",extra:"更多的辅助细节"}},[e._v("发布1.0版本")])],1)],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"呈现方向",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#呈现方向"}},[e._v("呈现方向")])]),e._v(" "),t("p",[e._v("指定 "),t("code",{pre:!0},[e._v("mode")]),e._v(" 可以改变呈现方向")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <RadioGroup v-model="mode">\n      <Radio label="left" value="left" />\n      <Radio label="center" value="center" />\n      <Radio label="alternate" value="alternate" />\n      <Radio label="right" value="right" />\n    </RadioGroup>\n    <br />\n    <br />\n    <TimeLine :mode="mode">\n      <TimeLineItem color="green" time="2020-11-03" extra="更多的辅助细节">优化成吨的改善和体验</TimeLineItem>\n      <TimeLineItem color="orange" time="2020-11-02">\n        <p>新增一些很友好的功能</p>\n        <p>新增一些很友好的功能</p>\n        <p>新增一些很友好的功能</p>\n        <template slot="extra">更多的辅助细节</template>\n      </TimeLineItem>\n      <TimeLineItem :icon="Ribbon" color="#3593ff" time="2020-11-01" extra="更多的辅助细节">发布2.0版本</TimeLineItem>\n      <TimeLineItem :icon="Build" color="red" time="2020-10-03" extra="更多的辅助细节">修复bug</TimeLineItem>\n      <TimeLineItem time="2020-10-01" extra="更多的辅助细节">发布1.0版本</TimeLineItem>\n    </TimeLine>\n  </div>\n</template>\n<script>\nimport { Ribbon, Build } from "kui-icons";\nexport default{\n  data() {\n    return {\n      Ribbon, Build,\n      mode:\'left\'\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};s._withStripped=!0;var p={data(){return{Ribbon:o.Ribbon,Build:o.Build,mode:"left"}}},c=(0,r.Z)(p,s,[],!1,null,null,null).exports,u=function(){this._self._c;return this._m(0)};u._withStripped=!0;var h=(0,r.Z)({},u,[function(){var e=this,t=e._self._c;return t("div",{staticClass:"markdown-body"},[t("h2",{attrs:{id:"api",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("API")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("默认值")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("icon")]),e._v(" "),t("td",[e._v("时间轴 "),t("code",{pre:!0},[e._v("item")]),e._v(" 图标")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("color")]),e._v(" "),t("td",[e._v("时间轴 "),t("code",{pre:!0},[e._v("item")]),e._v(" 图标颜色")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("time")]),e._v(" "),t("td",[e._v("时间文本")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("extra")]),e._v(" "),t("td",[e._v("自定义辅助内容")]),e._v(" "),t("td",[e._v("String,slot")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("mode")]),e._v(" "),t("td",[e._v("通过设置 "),t("code",{pre:!0},[e._v("mode")]),e._v(" 可以改变时间轴和内容的相对位置\t"),t("code",{pre:!0},[e._v("left")]),e._v(" ,"),t("code",{pre:!0},[e._v("center")]),e._v(", "),t("code",{pre:!0},[e._v("alternate")]),e._v(" , "),t("code",{pre:!0},[e._v("right")])]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("left")])])])])])}],!1,null,null,null).exports,b={render(){const e=arguments[0];return e("div",[e(a),e(m),e(d),e(c),e(h)])}},L=b,T=(0,r.Z)(L,undefined,undefined,!1,null,null,null).exports}}]);