/*!
 * kui-vue v3.3.4
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[1716],{1940:function(t,e,n){n.r(e),n.d(e,{default:function(){return P}});var r,i,a=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Divider 分割线")]),e("p",[t._v("区隔内容的分割线。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t._v("何时使用 "),e("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[t._v("#")])]),e("ul",[e("li",[t._v("对不同章节的文本段落进行分割。")]),e("li",[t._v("对行内文字/链接进行分割，例如表格的操作列。")])]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t._v("代码演示 "),e("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[t._v("#")])])])}],l=n(1001),s={},d=(0,l.Z)(s,a,v,!1,null,null,null),p=d.exports,_=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[t._v(" Text "),e("Divider",{attrs:{type:"vertical"}}),e("a",{attrs:{href:"#"}},[t._v("Link")]),e("Divider",{attrs:{type:"vertical"}}),e("a",{attrs:{href:"#"}},[t._v("Link")])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"垂直分割线",tabindex:"-1"}},[t._v("垂直分割线 "),e("a",{staticClass:"anchor",attrs:{href:"#垂直分割线"}},[t._v("#")])]),e("p",[t._v('使用 type="vertical" 设置为行内的垂直分割线。')])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    Text\n    <Divider type="vertical" />\n    <a href="#">Link</a>\n    <Divider type="vertical" />\n    <a href="#">Link</a>\n  </div>\n</template>\n\n')])])])],2)]],2)},o=[],c={},u=(0,l.Z)(c,_,o,!1,null,null,null),h=u.exports,f=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("p",[t._v(" 床前明月光，疑是地上霜，举头望明月，低头思故乡！ ")]),e("Divider"),e("p",[t._v(" 床前明月光，疑是地上霜，举头望明月，低头思故乡！ ")]),e("Divider",[t._v("李白")]),e("p",[t._v(" 床前明月光，疑是地上霜，举头望明月，低头思故乡！ ")]),e("Divider",{attrs:{dashed:""}}),e("p",[t._v(" 床前明月光，疑是地上霜，举头望明月，低头思故乡！ ")])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"水平分割线",tabindex:"-1"}},[t._v("水平分割线 "),e("a",{staticClass:"anchor",attrs:{href:"#水平分割线"}},[t._v("#")])]),e("p",[t._v("默认为水平分割线，可在中间加入文字。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <div>\n    <p>\n      床前明月光，疑是地上霜，举头望明月，低头思故乡！\n    </p>\n    <Divider />\n    <p>\n     床前明月光，疑是地上霜，举头望明月，低头思故乡！\n    </p>\n    <Divider>李白</Divider>\n    <p>\n      床前明月光，疑是地上霜，举头望明月，低头思故乡！\n    </p>\n    <Divider dashed />\n    <p>\n      床前明月光，疑是地上霜，举头望明月，低头思故乡！\n    </p>\n  </div>\n</template>\n")])])])],2)]],2)},m=[],x={},D=(0,l.Z)(x,f,m,!1,null,null,null),g=D.exports,b=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("p",[t._v(" 床前明月光，疑是地上霜，举头望明月，低头思故乡！ ")]),e("Divider",{attrs:{orientation:"left",text:"李白"}}),e("p",[t._v(" 床前明月光，疑是地上霜，举头望明月，低头思故乡！ ")]),e("Divider",[t._v("李白")]),e("p",[t._v(" 床前明月光，疑是地上霜，举头望明月，低头思故乡！ ")]),e("Divider",{attrs:{orientation:"right",text:"李白"}}),e("p",[t._v(" 床前明月光，疑是地上霜，举头望明月，低头思故乡！ ")])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"带文字的分割线",tabindex:"-1"}},[t._v("带文字的分割线 "),e("a",{staticClass:"anchor",attrs:{href:"#带文字的分割线"}},[t._v("#")])]),e("p",[t._v("分割线中带有文字，可以用 orientation 指定文字位置。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <p>\n      床前明月光，疑是地上霜，举头望明月，低头思故乡！\n    </p>\n    <Divider orientation="left" text="李白"/>\n    <p>\n     床前明月光，疑是地上霜，举头望明月，低头思故乡！\n    </p>\n    <Divider>李白</Divider>\n    <p>\n      床前明月光，疑是地上霜，举头望明月，低头思故乡！\n    </p>\n    <Divider orientation="right"  text="李白"/>\n    <p>\n      床前明月光，疑是地上霜，举头望明月，低头思故乡！\n    </p>\n  </div>\n</template>\n')])])])],2)]],2)},k=[],C={},y=(0,l.Z)(C,b,k,!1,null,null,null),Z=y.exports,L=function(){var t=this;t._self._c;return t._m(0)},w=[function(){var t=this,e=t._self._c;return e("div",[e("h4",{attrs:{id:"api",tabindex:"-1"}},[t._v("API "),e("a",{staticClass:"anchor",attrs:{href:"#api"}},[t._v("#")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("text")]),e("td",[t._v("分割线文字")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("dashed")]),e("td",[t._v("是否虚线")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("orientation")]),e("td",[t._v("分割线标题的位置 enum：left right")]),e("td",[t._v("String")]),e("td",[t._v("center")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("水平还是垂直类型")]),e("td",[t._v("enum: horizontal vertical")]),e("td",[t._v("horizontal")])])])])])}],z={},S=(0,l.Z)(z,L,w,!1,null,null,null),T=S.exports,A={render(){const t=arguments[0];return t("div",[t(p),t(h),t(g),t(Z),t(T)])}},B=A,I=(0,l.Z)(B,r,i,!1,null,null,null),P=I.exports}}]);