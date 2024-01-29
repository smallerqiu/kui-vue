/*!
 * kui-vue v3.3.7
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[7111],{1880:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var n=function(){this._self._c;return this._m(0)};n._withStripped=!0;var r=a(1900),l=(0,r.Z)({},n,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Space 间距")]),t._v(" "),e("p",[t._v("设置组件之间的间距。")]),t._v(" "),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),t._v(" "),e("p",[t._v("避免组件紧贴在一起，拉开统一的空间。")]),t._v(" "),e("ul",[e("li",[t._v("适合行内元素的水平间距。")]),t._v(" "),e("li",[t._v("可以设置各种水平对齐方式。")])]),t._v(" "),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],!1,null,null,null).exports,s=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Space",[e("Button",[t._v("Button")]),t._v(" "),e("Button",{attrs:{icon:t.Search}},[t._v("Button")]),t._v(" "),e("Tooltip",{attrs:{placement:"top"}},[e("Button",[t._v("Space")]),t._v(" "),e("template",{slot:"title"},[e("p",{staticStyle:{margin:"0"}},[t._v("I am space")])])],2)],1)],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),t._v(" "),e("p",[t._v("相邻组件水平间距。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space>\n    <Button>Button</Button>\n    <Button :icon="Search">Button</Button>\n    <Tooltip placement="top">\n      <Button>Space</Button>\n      <template slot="title">\n        <p style="margin:0">I am space</p>\n      </template>\n    </Tooltip>\n  </Space>\n</template>\n<script>\nimport { Search } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Search\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};s._withStripped=!0;var i=a(2324),o={data(){return{Search:i.Search}}},c=(0,r.Z)(o,s,[],!1,null,null,null).exports,p=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Space",{attrs:{vertical:""}},[e("Card",{staticStyle:{width:"256px"},attrs:{title:"Card",icon:t.Heart}},[e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")])]),t._v(" "),e("Card",{staticStyle:{width:"256px"},attrs:{title:"Card",icon:t.Heart}},[e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")])])],1)],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"垂直间距",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垂直间距"}},[t._v("垂直间距")])]),t._v(" "),e("p",[t._v("相邻组件垂直间距。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space vertical>\n    <Card title="Card" :icon="Heart" style="width:256px">\n      <p>card content</p>\n      <p>card content</p>\n    </Card>\n    <Card title="Card" :icon="Heart" style="width:256px">\n      <p>card content</p>\n      <p>card content</p>\n    </Card>\n  </Space>\n</template>\n<script>\nimport { Heart } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Heart\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};p._withStripped=!0;var v={data(){return{Heart:i.Heart}}},d=(0,r.Z)(v,p,[],!1,null,null,null).exports,_=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-space"},[e("Space",{attrs:{align:"start"}},[e("div",{staticClass:"demo-space-align"},[t._v("Start")]),t._v(" "),e("Button",[t._v("Start")]),t._v(" "),e("Tag",{attrs:{color:"blue"}},[t._v("Start")])],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("Space",{attrs:{align:"end"}},[e("div",{staticClass:"demo-space-align"},[t._v("end")]),t._v(" "),e("Button",[t._v("end")]),t._v(" "),e("Tag",{attrs:{color:"blue"}},[t._v("end")])],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("Space",{attrs:{align:"center"}},[e("div",{staticClass:"demo-space-align"},[t._v("center")]),t._v(" "),e("Button",[t._v("center")]),t._v(" "),e("Tag",{attrs:{color:"blue"}},[t._v("center")])],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("Space",{attrs:{align:"baseline"}},[e("div",{staticClass:"demo-space-align"},[t._v("baseline")]),t._v(" "),e("Button",[t._v("baseline")]),t._v(" "),e("Tag",{attrs:{color:"blue"}},[t._v("baseline")])],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"对齐",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对齐"}},[t._v("对齐")])]),t._v(" "),e("p",[t._v("设置对齐模式。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-space">\n    <Space align="start">\n      <div class="demo-space-align">Start</div>\n      <Button>Start</Button>\n      <Tag color="blue">Start</Tag>\n    </Space>\n    <br/>\n    <br/>\n    <Space align="end">\n      <div class="demo-space-align" >end</div>\n      <Button>end</Button>\n      <Tag color="blue">end</Tag>\n    </Space>\n    <br/>\n    <br/>\n    <Space align="center">\n      <div class="demo-space-align" >center</div>\n      <Button>center</Button>\n      <Tag color="blue">center</Tag>\n    </Space>\n    <br/>\n    <br/>\n    <Space align="baseline">\n      <div  class="demo-space-align">baseline</div>\n      <Button>baseline</Button>\n      <Tag color="blue">baseline</Tag>\n    </Space>\n  </div>\n</template>\n<style lang=less>\n.demo-space-align{\n  border:1px solid var(--kui-color-border);\n  height:120px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  width:100px;\n}\n</style>\n\n')])])])],2)};_._withStripped=!0;var u=(0,r.Z)({},_,[],!1,null,null,null).exports,m=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Tabs",{staticStyle:{width:"350px"},on:{change:t.change},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[e("TabPane",{key:"1",attrs:{title:"Small"}},[e("Space",{attrs:{size:"small"}},t._l(5,(function(a){return e("Button",{key:a,attrs:{size:"small"}},[t._v("Small")])})),1)],1),t._v(" "),e("TabPane",{key:"2",attrs:{title:"Middle "}},[e("Space",{attrs:{size:"middle"}},t._l(5,(function(a){return e("Button",{key:a,attrs:{size:"small"}},[t._v("Middle")])})),1)],1),t._v(" "),e("TabPane",{key:"3",attrs:{title:"Large"}},[e("Space",{attrs:{size:"large"}},t._l(5,(function(a){return e("Button",{key:a,attrs:{size:"small"}},[t._v("Large")])})),1)],1),t._v(" "),e("TabPane",{key:"4",attrs:{title:"Array"}},[e("Space",{attrs:{size:[8,20],wrap:""}},t._l(10,(function(a){return e("Button",{key:a,attrs:{size:"small"}},[t._v("Array")])})),1)],1)],1)],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"间距大小",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#间距大小"}},[t._v("间距大小")])]),t._v(" "),e("p",[t._v("间距预设大、中、小三种大小。"),e("br"),t._v("\n通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Tabs v-model="current" @change="change" style="width:350px;">\n    <TabPane key="1" title="Small">\n      <Space size="small" >\n        <Button size="small" v-for="x in 5" :key="x">Small</Button>\n      </Space>\n    </TabPane>\n    <TabPane key="2" title="Middle ">\n      <Space size="middle">\n        <Button size="small" v-for="x in 5" :key="x">Middle</Button>\n      </Space>\n    </TabPane>\n    <TabPane key="3" title="Large">\n      <Space size="large" >\n        <Button size="small" v-for="x in 5" :key="x">Large</Button>\n      </Space>\n    </TabPane>\n    <TabPane key="4" title="Array">\n      <Space :size="[8,20]" wrap>\n        <Button size="small" v-for="x in 10" :key="x">Array</Button>\n      </Space>\n    </TabPane>\n  </Tabs>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      current:\'1\'\n    }\n  },\n  methods:{\n    change(key){\n      console.log(key)\n    }\n  }\n}\n<\/script>\n\n\n')])])])],2)};m._withStripped=!0;var h={data(){return{current:"1"}},methods:{change(t){console.log(t)}}},S=(0,r.Z)(h,m,[],!1,null,null,null).exports,b=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Space",{staticStyle:{width:"200px"},attrs:{size:[8,20],wrap:""}},t._l(10,(function(a){return e("Button",{key:a,attrs:{size:"small"}},[t._v("Wrap")])})),1)],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"设置换行",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置换行"}},[t._v("设置换行")])]),t._v(" "),e("p",[t._v("当间距为水平方向时，可使用 wrap 设置是否自动换行，默认情况下为 false。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space :size="[8,20]" wrap style="width:200px;">\n    <Button size="small" v-for="x in 10" :key="x">Wrap</Button>\n  </Space>\n</template>\n\n')])])])],2)};b._withStripped=!0;var g=(0,r.Z)({},b,[],!1,null,null,null).exports,f=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Slider",{attrs:{max:50},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("Space",{attrs:{size:t.size}},[e("Button",{attrs:{type:"primary"}},[t._v("Primary")]),t._v(" "),e("Button",{attrs:{type:"danger"}},[t._v("Danger")]),t._v(" "),e("Button",[t._v("Default")]),t._v(" "),e("Button",{attrs:{type:"dashed"}},[t._v("Dashed")]),t._v(" "),e("Button",{attrs:{type:"link"}},[t._v("Link")])],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"自定义尺寸",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义尺寸"}},[t._v("自定义尺寸")])]),t._v(" "),e("p",[t._v("自定义间距大小。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Slider v-model="size" :max="50"/>\n    <br/>\n    <br/>\n    <Space :size="size">\n      <Button type="primary">Primary</Button>\n      <Button type="danger">Danger</Button>\n      <Button>Default</Button>\n      <Button type="dashed">Dashed</Button>\n      <Button type="link">Link</Button>\n    </Space>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      size: 12,\n    };\n  },\n};\n<\/script>\n\n')])])])],2)};f._withStripped=!0;var B={data(){return{size:12}}},y=(0,r.Z)(B,f,[],!1,null,null,null).exports,x=function(){this._self._c;return this._m(0)};x._withStripped=!0;var k=(0,r.Z)({},x,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"space-api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#space-api"}},[t._v("Space API")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("align")]),t._v(" "),e("td",[t._v("对齐方式")]),t._v(" "),e("td",[t._v("start , end ,center ,baseline")]),t._v(" "),e("td",[t._v("center")])]),t._v(" "),e("tr",[e("td",[t._v("vertical")]),t._v(" "),e("td",[t._v("是否垂直显示")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("间距大小")]),t._v(" "),e("td",[t._v("small,middle,large,number")]),t._v(" "),e("td",[t._v("small")])]),t._v(" "),e("tr",[e("td",[t._v("wrap")]),t._v(" "),e("td",[t._v("是否换行")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])])])])])}],!1,null,null,null).exports,z={render(){const t=arguments[0];return t("div",{class:"demo-space"},[t(l),t(c),t(d),t(S),t(u),t(y),t(g),t(k)])}},T=z,C=(0,r.Z)(T,undefined,undefined,!1,null,null,null).exports}}]);