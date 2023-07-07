/*!
 * kui-vue v3.3.5-c
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[7071],{9625:function(t,e,n){n.r(e),n.d(e,{default:function(){return O}});var a,r,o=function(){var t=this;t._self._c;return t._m(0)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Affix 固钉")]),e("p",[t._v("将页面元素钉在可视范围。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),e("p",[t._v("当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。"),e("br"),t._v(" 页面可视范围过小时，慎用此功能以免遮挡页面内容。")]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],i=n(1001),f={},p=(0,i.Z)(f,o,s,!1,null,null,null),l=p.exports,d=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Affix",{attrs:{offsetTop:100}},[e("Button",{attrs:{type:"primary"}},[t._v("Affix top")])],1),e("br")],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本"}},[t._v("基本")])]),e("p",[t._v("最简单的用法。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Affix :offsetTop="100">\n    <Button type="primary">Affix top</Button>\n  </Affix>\n  <br/>\n</template>\n\n')])])])],2)},c=[],v={},u=(0,i.Z)(v,d,c,!1,null,null,null),x=u.exports,h=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Affix",{attrs:{offsetTop:200},on:{change:t.change}},[e("Button",{attrs:{type:"primary"}},[t._v("200px to affix top")])],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"固定状态改变的回调",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#固定状态改变的回调"}},[t._v("固定状态改变的回调")])]),e("p",[t._v("可以获得是否固定的状态。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Affix @change="change"\n    :offsetTop="200">\n    <Button type="primary">200px to affix top</Button>\n  </Affix>\n</template>\n<script>\nexport default{\n  data(){\n    return{}\n  },\n  methods:{\n    change(value) {\n      this.$Message.info(value ? "fixed" : "reset")\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},_=[],m={data(){return{}},methods:{change(t){this.$Message.info(t?"fixed":"reset")}}},g=m,y=(0,i.Z)(g,h,_,!1,null,null,null),b=y.exports,A=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{ref:"container",staticClass:"demo-affix-scroll"},[e("div",{staticClass:"demo-affix-inner"},[e("div",{staticStyle:{padding:"50px 0"}}),e("Affix",{attrs:{target:()=>this.$refs.container,offsetTop:50}},[e("Button",{attrs:{type:"primary",id:"tesss"}},[t._v("Affix at the top of container")])],1),e("div",{staticStyle:{padding:"200px 0"}}),e("Affix",{attrs:{target:()=>this.$refs.container,offsetBottom:50}},[e("Button",{attrs:{type:"primary",id:"tesss"}},[t._v("Affix at the bottom of container")])],1)],1)])]),e("template",{slot:"description"},[e("h4",{attrs:{id:"滚动容器",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#滚动容器"}},[t._v("滚动容器")])]),e("p",[t._v("用 "),e("code",{pre:!0},[t._v("target")]),t._v(" 设置 "),e("code",{pre:!0},[t._v("Affix")]),t._v(" 需要监听其滚动事件的元素，默认为 "),e("code",{pre:!0},[t._v("window")]),t._v("。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-affix-scroll" ref="container">\n     <div class="demo-affix-inner" >\n        <div style="padding:50px 0;" />\n        <Affix :target="() => this.$refs.container" :offsetTop="50">\n          <Button type="primary" id="tesss">Affix at the top of container</Button>\n        </Affix>\n        <div style="padding:200px 0;" />\n        <Affix :target="() => this.$refs.container" :offsetBottom="50">\n          <Button type="primary" id="tesss">Affix at the bottom of container</Button>\n        </Affix>\n     </div>\n  </div>\n</template>\n\n<style scoped>\n.demo-affix-scroll{\n  height:400px;\n  overflow-y:scroll;\n  background-image: linear-gradient(-45deg, #cdcdcd 25%, transparent 0), linear-gradient(45deg, #cdcdcd 25%, transparent 0), linear-gradient(-45deg, transparent 75%, #cdcdcd 0), linear-gradient(45deg, transparent 75%, #cdcdcd 0);\n  background-size: 20px 20px;\n  background-position: 0 0, 0 -10px, -10px 10px, 10px 0;\n}\n.demo-affix-inner{\n  height:800px;\n  /* background:#efefef; */\n  /* padding-top:30px; */\n\n  \n}\n</style>\n\n')])])])],2)},B=[],C={},k=(0,i.Z)(C,A,B,!1,null,"ed398fb6",null),w=k.exports,T=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Affix",{attrs:{offsetBottom:10}},[e("Button",{attrs:{type:"primary"}},[t._v("10px to affix bottom")])],1),e("br"),e("Affix",{attrs:{offsetBottom:90}},[e("Button",{attrs:{type:"primary"}},[t._v("90px to affix bottom")])],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本"}},[t._v("基本")])]),e("p",[t._v("最简单的用法。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Affix :offsetBottom="10">\n    <Button type="primary">10px to affix bottom</Button>\n  </Affix>\n  <br/>\n  <Affix :offsetBottom="90">\n    <Button type="primary">90px to affix bottom</Button>\n  </Affix>\n</template>\n\n')])])])],2)},Z=[],$={},D=(0,i.Z)($,T,Z,!1,null,null,null),M=D.exports,S=function(){var t=this;t._self._c;return t._m(0)},N=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("offsetTop")]),e("td",[t._v("距离窗口顶部达到指定偏移量后触发")]),e("td",[t._v("String, Number")]),e("td",[t._v("0")])]),e("tr",[e("td",[t._v("offsetBottom")]),e("td",[t._v("距离窗口底部达到指定偏移量后触发")]),e("td",[t._v("String, Number")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("change")]),e("td",[t._v("在固定状态发生改变时触发, 返回当前固定状态 "),e("code",{pre:!0},[t._v("false")]),t._v(" , "),e("code",{pre:!0},[t._v("true")])]),e("td",[t._v("Function")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("target")]),e("td",[t._v("设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数")]),e("td",[t._v("HTMLElement")]),e("td",[t._v("window")])])])])])}],z={},E=(0,i.Z)(z,S,N,!1,null,null,null),F=E.exports,H={render(){const t=arguments[0];return t("div",[t(l),t(x),t(b),t(w),t(F),t("div",{style:"height:500px;text-align:center;color:#ddd;line-height:500px;"},["我是打酱油的,请忽略我..."]),t(M)])}},I=H,L=(0,i.Z)(I,a,r,!1,null,null,null),O=L.exports}}]);