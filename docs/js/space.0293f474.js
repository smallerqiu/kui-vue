/*!
 * kui-vue v3.3.5-a
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[7111],{1214:function(t,e,n){n.r(e),n.d(e,{default:function(){return tt}});var a,r,l=function(){var t=this;t._self._c;return t._m(0)},s=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Space 间距")]),e("p",[t._v("设置组件之间的间距。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t._v("何时使用 "),e("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[t._v("#")])]),e("p",[t._v("避免组件紧贴在一起，拉开统一的空间。")]),e("ul",[e("li",[t._v("适合行内元素的水平间距。")]),e("li",[t._v("可以设置各种水平对齐方式。")])]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t._v("代码演示 "),e("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[t._v("#")])])])}],i=n(1001),o={},c=(0,i.Z)(o,l,s,!1,null,null,null),p=c.exports,d=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("Space",[e("Button",[t._v("Button")]),e("Button",{attrs:{icon:t.Search}},[t._v("Button")]),e("Tooltip",{attrs:{placement:"top"}},[e("Button",[t._v("Space")]),e("template",{slot:"title"},[e("p",[t._v("I am space")])])],2)],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[t._v("基本用法 "),e("a",{staticClass:"anchor",attrs:{href:"#基本用法"}},[t._v("#")])]),e("p",[t._v("相邻组件水平间距。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space>\n    <Button>Button</Button>\n    <Button :icon="Search">Button</Button>\n    <Tooltip placement="top">\n      <Button>Space</Button>\n      <template slot="title">\n        <p>I am space</p>\n      </template>\n    </Tooltip>\n  </Space>\n</template>\n<script>\nimport { Search } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Search\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},u=[],v=n(5118),_={data(){return{Search:v.Search}}},m=_,h=(0,i.Z)(m,d,u,!1,null,null,null),b=h.exports,g=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("Space",{attrs:{vertical:""}},[e("Card",{staticStyle:{width:"256px"},attrs:{title:"Card",icon:t.Heart}},[e("p",[t._v("card content")]),e("p",[t._v("card content")])]),e("Card",{staticStyle:{width:"256px"},attrs:{title:"Card",icon:t.Heart}},[e("p",[t._v("card content")]),e("p",[t._v("card content")])])],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"垂直间距",tabindex:"-1"}},[t._v("垂直间距 "),e("a",{staticClass:"anchor",attrs:{href:"#垂直间距"}},[t._v("#")])]),e("p",[t._v("相邻组件垂直间距。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space vertical>\n    <Card title="Card" :icon="Heart" style="width:256px">\n      <p>card content</p>\n      <p>card content</p>\n    </Card>\n    <Card title="Card" :icon="Heart" style="width:256px">\n      <p>card content</p>\n      <p>card content</p>\n    </Card>\n  </Space>\n</template>\n<script>\nimport { Heart } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Heart\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},S=[],f={data(){return{Heart:v.Heart}}},B=f,y=(0,i.Z)(B,g,S,!1,null,null,null),x=y.exports,k=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-space"},[e("Space",{attrs:{align:"start"}},[e("div",{staticClass:"demo-space-align"},[t._v("Start")]),e("Button",[t._v("Start")]),e("Tag",{attrs:{color:"blue"}},[t._v("Start")])],1),e("br"),e("br"),e("Space",{attrs:{align:"end"}},[e("div",{staticClass:"demo-space-align"},[t._v("end")]),e("Button",[t._v("end")]),e("Tag",{attrs:{color:"blue"}},[t._v("end")])],1),e("br"),e("br"),e("Space",{attrs:{align:"center"}},[e("div",{staticClass:"demo-space-align"},[t._v("center")]),e("Button",[t._v("center")]),e("Tag",{attrs:{color:"blue"}},[t._v("center")])],1),e("br"),e("br"),e("Space",{attrs:{align:"baseline"}},[e("div",{staticClass:"demo-space-align"},[t._v("baseline")]),e("Button",[t._v("baseline")]),e("Tag",{attrs:{color:"blue"}},[t._v("baseline")])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"对齐",tabindex:"-1"}},[t._v("对齐 "),e("a",{staticClass:"anchor",attrs:{href:"#对齐"}},[t._v("#")])]),e("p",[t._v("设置对齐模式。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-space">\n    <Space align="start">\n      <div class="demo-space-align">Start</div>\n      <Button>Start</Button>\n      <Tag color="blue">Start</Tag>\n    </Space>\n    <br/>\n    <br/>\n    <Space align="end">\n      <div class="demo-space-align" >end</div>\n      <Button>end</Button>\n      <Tag color="blue">end</Tag>\n    </Space>\n    <br/>\n    <br/>\n    <Space align="center">\n      <div class="demo-space-align" >center</div>\n      <Button>center</Button>\n      <Tag color="blue">center</Tag>\n    </Space>\n    <br/>\n    <br/>\n    <Space align="baseline">\n      <div  class="demo-space-align">baseline</div>\n      <Button>baseline</Button>\n      <Tag color="blue">baseline</Tag>\n    </Space>\n  </div>\n</template>\n<style lang=less>\n.demo-space-align{\n  border:1px solid var(--kui-color-border);\n  height:120px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  width:100px;\n}\n</style>\n')])])])],2)]],2)},z=[],T={},C=(0,i.Z)(T,k,z,!1,null,null,null),w=C.exports,P=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("Tabs",{staticStyle:{width:"350px"},on:{change:t.change},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[e("TabPane",{key:"1",attrs:{title:"Small"}},[e("Space",{attrs:{size:"small"}},t._l(5,(function(n){return e("Button",{key:n,attrs:{size:"small"}},[t._v("Small")])})),1)],1),e("TabPane",{key:"2",attrs:{title:"Middle "}},[e("Space",{attrs:{size:"middle"}},t._l(5,(function(n){return e("Button",{key:n,attrs:{size:"small"}},[t._v("Middle")])})),1)],1),e("TabPane",{key:"3",attrs:{title:"Large"}},[e("Space",{attrs:{size:"large"}},t._l(5,(function(n){return e("Button",{key:n,attrs:{size:"small"}},[t._v("Large")])})),1)],1),e("TabPane",{key:"4",attrs:{title:"Array"}},[e("Space",{attrs:{size:[8,20],wrap:""}},t._l(10,(function(n){return e("Button",{key:n,attrs:{size:"small"}},[t._v("Array")])})),1)],1)],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"间距大小",tabindex:"-1"}},[t._v("间距大小 "),e("a",{staticClass:"anchor",attrs:{href:"#间距大小"}},[t._v("#")])]),e("p",[t._v("间距预设大、中、小三种大小。"),e("br"),t._v(" 通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。"),e("br")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Tabs v-model="current" @change="change" style="width:350px;">\n    <TabPane key="1" title="Small">\n      <Space size="small" >\n        <Button size="small" v-for="x in 5" :key="x">Small</Button>\n      </Space>\n    </TabPane>\n    <TabPane key="2" title="Middle ">\n      <Space size="middle">\n        <Button size="small" v-for="x in 5" :key="x">Middle</Button>\n      </Space>\n    </TabPane>\n    <TabPane key="3" title="Large">\n      <Space size="large" >\n        <Button size="small" v-for="x in 5" :key="x">Large</Button>\n      </Space>\n    </TabPane>\n    <TabPane key="4" title="Array">\n      <Space :size="[8,20]" wrap>\n        <Button size="small" v-for="x in 10" :key="x">Array</Button>\n      </Space>\n    </TabPane>\n  </Tabs>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      current:\'1\'\n    }\n  },\n  methods:{\n    change(key){\n      console.log(key)\n    }\n  }\n}\n<\/script>\n\n')])])])],2)]],2)},Z=[],H={data(){return{current:"1"}},methods:{change(t){console.log(t)}}},D=H,L=(0,i.Z)(D,P,Z,!1,null,null,null),A=L.exports,M=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("Space",{staticStyle:{width:"200px"},attrs:{size:[8,20],wrap:""}},t._l(10,(function(n){return e("Button",{key:n,attrs:{size:"small"}},[t._v("Wrap")])})),1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"设置换行",tabindex:"-1"}},[t._v("设置换行 "),e("a",{staticClass:"anchor",attrs:{href:"#设置换行"}},[t._v("#")])]),e("p",[t._v("当间距为水平方向时，可使用 wrap 设置是否自动换行，默认情况下为 false。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space :size="[8,20]" wrap style="width:200px;">\n    <Button size="small" v-for="x in 10" :key="x">Wrap</Button>\n  </Space>\n</template>\n')])])])],2)]],2)},I=[],W={},j=(0,i.Z)(W,M,I,!1,null,null,null),q=j.exports,E=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Slider",{attrs:{max:50},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),e("br"),e("br"),e("Space",{attrs:{size:t.size}},[e("Button",{attrs:{type:"primary"}},[t._v("Primary")]),e("Button",{attrs:{type:"danger"}},[t._v("Danger")]),e("Button",[t._v("Default")]),e("Button",{attrs:{type:"dashed"}},[t._v("Dashed")]),e("Button",{attrs:{type:"link"}},[t._v("Link")])],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"自定义尺寸",tabindex:"-1"}},[t._v("自定义尺寸 "),e("a",{staticClass:"anchor",attrs:{href:"#自定义尺寸"}},[t._v("#")])]),e("p",[t._v("自定义间距大小。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Slider v-model="size" :max="50"/>\n    <br/>\n    <br/>\n    <Space :size="size">\n      <Button type="primary">Primary</Button>\n      <Button type="danger">Danger</Button>\n      <Button>Default</Button>\n      <Button type="dashed">Dashed</Button>\n      <Button type="link">Link</Button>\n    </Space>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      size: 12,\n    };\n  },\n};\n<\/script>\n')])])])],2)]],2)},F=[],G={data(){return{size:12}}},J=G,K=(0,i.Z)(J,E,F,!1,null,null,null),N=K.exports,O=function(){var t=this;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{attrs:{id:"space-api",tabindex:"-1"}},[t._v("Space API "),e("a",{staticClass:"anchor",attrs:{href:"#space-api"}},[t._v("#")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("align")]),e("td",[t._v("对齐方式")]),e("td",[t._v("start , end ,center ,baseline")]),e("td",[t._v("center")])]),e("tr",[e("td",[t._v("vertical")]),e("td",[t._v("是否垂直显示")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("间距大小")]),e("td",[t._v("small,middle,large,number")]),e("td",[t._v("small")])]),e("tr",[e("td",[t._v("wrap")]),e("td",[t._v("是否换行")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])])])])])}],R={},U=(0,i.Z)(R,O,Q,!1,null,null,null),V=U.exports,X={render(){const t=arguments[0];return t("div",{class:"demo-space"},[t(p),t(b),t(x),t(A),t(w),t(N),t(q),t(V)])}},Y=X,$=(0,i.Z)(Y,a,r,!1,null,null,null),tt=$.exports}}]);