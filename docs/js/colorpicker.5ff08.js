/*!
 * kui-vue v3.3.12
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[8680],{4524:function(o,e,r){r.r(e),r.d(e,{default:function(){return P}});var t=function(){this._self._c;return this._m(0)};t._withStripped=!0;var l=r(1900),a=(0,l.Z)({},t,[function(){var o=this,e=o._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[o._v("ColorPicker 颜色选择器")]),o._v(" "),e("p",[o._v("可以自由的输出颜色。")]),o._v(" "),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[o._v("何时使用")])]),o._v(" "),e("ul",[e("li",[o._v("需要自定义颜色时")])]),o._v(" "),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[o._v("代码演示")])])])}],!1,null,null,null).exports,n=function(){var o=this,e=o._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-color-picker"},[e("ColorPicker",{model:{value:o.color,callback:function(e){o.color=e},expression:"color"}}),o._v(" "),e("br"),o._v(" "),e("ColorPicker",{attrs:{disabled:""},model:{value:o.color,callback:function(e){o.color=e},expression:"color"}})],1)]),o._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[o._v("基本用法")])]),o._v(" "),e("p",[o._v("默认可以同时展开一个或者多个面板")])]),o._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[o._v('<template>\n  <div class="demo-color-picker">\n    <ColorPicker v-model="color"/>\n    <br/>\n    <ColorPicker v-model="color" disabled/>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      color: \'rgba(182,2,247,1)\',\n    };\n  }\n}\n<\/script> \n\n')])])])],2)};n._withStripped=!0;var c={data(){return{color:"rgba(182,2,247,1)"}}},s=(0,l.Z)(c,n,[],!1,null,null,null).exports,d=function(){var o=this,e=o._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-color-picker"},[e("Form",[e("FormItem",{attrs:{label:"没有下拉箭头"}},[e("ColorPicker",{attrs:{showMode:"",showArrow:!1},model:{value:o.color1,callback:function(e){o.color1=e},expression:"color1"}})],1),o._v(" "),e("FormItem",{attrs:{label:"自定义下拉箭头"}},[e("ColorPicker",{attrs:{showMode:"",mode:"rgba",icon:o.CaretDown},model:{value:o.color2,callback:function(e){o.color2=e},expression:"color2"}})],1),o._v(" "),e("FormItem",{attrs:{label:"圆形"}},[e("ColorPicker",{attrs:{showMode:"",mode:"hsla",shape:"circle",showArrow:!1},model:{value:o.color3,callback:function(e){o.color3=e},expression:"color3"}})],1)],1)],1)]),o._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"自定义",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义"}},[o._v("自定义")])]),o._v(" "),e("p",[o._v("可通过 icon 定义图标和 shape='circle' 呈现外型")])]),o._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[o._v('<template>\n  <div class="demo-color-picker">\n   <Form>\n    <FormItem label="没有下拉箭头">\n      <ColorPicker showMode v-model="color1" :showArrow="false"/>\n    </FormItem>\n    <FormItem label="自定义下拉箭头">\n      <ColorPicker showMode v-model="color2" mode="rgba" :icon="CaretDown"/>\n    </FormItem>\n    <FormItem label="圆形">\n      <ColorPicker showMode v-model="color3"  mode="hsla" shape="circle" :showArrow="false"/>\n    </FormItem>\n   </Form>\n  </div>\n</template>\n<script>\nimport { CaretDown } from "kui-icons";\nexport default {\n  data() {\n    return {\n      CaretDown,\n      color1: \'#f44336\',\n      color2: \'#9c27b0\',\n      color3: \'#03a9f4\',\n    };\n  }\n}\n<\/script> \n\n')])])])],2)};d._withStripped=!0;var v=r(2324),i={data(){return{CaretDown:v.CaretDown,color1:"#f44336",color2:"#9c27b0",color3:"#03a9f4"}}},m=(0,l.Z)(i,d,[],!1,null,null,null).exports,_=function(){var o=this,e=o._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-color-picker"},[e("Form",[e("FormItem",{attrs:{label:"Default"}},[e("ColorPicker",{attrs:{showMode:""},model:{value:o.color1,callback:function(e){o.color1=e},expression:"color1"}})],1),o._v(" "),e("FormItem",{attrs:{label:"Rgba"}},[e("ColorPicker",{attrs:{showMode:"",mode:"rgba"},model:{value:o.color2,callback:function(e){o.color2=e},expression:"color2"}})],1),o._v(" "),e("FormItem",{attrs:{label:"Hsla"}},[e("ColorPicker",{attrs:{showMode:"",mode:"hsla"},model:{value:o.color3,callback:function(e){o.color3=e},expression:"color3"}})],1)],1)],1)]),o._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"颜色模式",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#颜色模式"}},[o._v("颜色模式")])]),o._v(" "),e("p",[o._v("可以切换颜色模式,使用 "),e("code",{pre:!0},[o._v("show-mode")]),o._v(" 来展示 颜色模式")])]),o._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[o._v('<template>\n  <div class="demo-color-picker">\n   <Form>\n    <FormItem label="Default">\n      <ColorPicker showMode v-model="color1"/>\n    </FormItem>\n    <FormItem label="Rgba">\n      <ColorPicker showMode v-model="color2" mode="rgba"/>\n    </FormItem>\n    <FormItem label="Hsla">\n      <ColorPicker showMode v-model="color3"  mode="hsla"/>\n    </FormItem>\n   </Form>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      color1: \'#f44336\',\n      color2: \'#9c27b0\',\n      color3: \'#03a9f4\',\n    };\n  }\n}\n<\/script> \n\n')])])])],2)};_._withStripped=!0;var p={data(){return{color1:"#f44336",color2:"#9c27b0",color3:"#03a9f4"}}},u=(0,l.Z)(p,_,[],!1,null,null,null).exports,h=function(){var o=this,e=o._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-color-picker"},[e("Form",[e("FormItem",{attrs:{label:"large"}},[e("ColorPicker",{attrs:{showMode:"",size:"large"},model:{value:o.color1,callback:function(e){o.color1=e},expression:"color1"}})],1),o._v(" "),e("FormItem",{attrs:{label:"Default"}},[e("ColorPicker",{attrs:{showMode:"",mode:"rgba"},model:{value:o.color2,callback:function(e){o.color2=e},expression:"color2"}})],1),o._v(" "),e("FormItem",{attrs:{label:"small"}},[e("ColorPicker",{attrs:{showMode:"",mode:"hsla",size:"small"},model:{value:o.color3,callback:function(e){o.color3=e},expression:"color3"}})],1)],1)],1)]),o._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"尺寸大小",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#尺寸大小"}},[o._v("尺寸大小")])]),o._v(" "),e("p",[e("code",{pre:!0},[o._v("small")]),o._v(" 为小尺寸， "),e("code",{pre:!0},[o._v("large")]),o._v(" 为大尺寸")])]),o._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[o._v('<template>\n  <div class="demo-color-picker">\n     <Form>\n      <FormItem label="large">\n        <ColorPicker showMode v-model="color1" size="large"/>\n      </FormItem>\n      <FormItem label="Default">\n        <ColorPicker showMode v-model="color2" mode="rgba"/>\n      </FormItem>\n      <FormItem label="small">\n        <ColorPicker showMode v-model="color3"  mode="hsla" size="small" />\n      </FormItem>\n    </Form>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      color1: \'#f44336\',\n      color2: \'#9c27b0\',\n      color3: \'#03a9f4\',\n    };\n  }\n}\n<\/script> \n\n')])])])],2)};h._withStripped=!0;var f={data(){return{color1:"#f44336",color2:"#9c27b0",color3:"#03a9f4"}}},b=(0,l.Z)(f,h,[],!1,null,null,null).exports,k=function(){var o=this,e=o._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-color-picker"},[e("ColorPicker",{attrs:{showMode:"","defalut-colors":o.colors},model:{value:o.color,callback:function(e){o.color=e},expression:"color"}})],1)]),o._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"自定义颜色盘",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义颜色盘"}},[o._v("自定义颜色盘")])]),o._v(" "),e("p",[o._v("可以定义默认的颜色盘")])]),o._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[o._v("<template>\n  <div class=\"demo-color-picker\">\n    <ColorPicker showMode v-model=\"color\" :defalut-colors=\"colors\" />\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      color: '#f44336',\n      colors: ['#9c27b0','red','blue'],\n    };\n  }\n}\n<\/script> \n\n")])])])],2)};k._withStripped=!0;var w={data(){return{color:"#f44336",colors:["#9c27b0","red","blue"]}}},C=(0,l.Z)(w,k,[],!1,null,null,null).exports,F=function(){this._self._c;return this._m(0)};F._withStripped=!0;var x=(0,l.Z)({},F,[function(){var o=this,e=o._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[o._v("API")])]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("属性")]),o._v(" "),e("th",[o._v("说明")]),o._v(" "),e("th",[o._v("类型")]),o._v(" "),e("th",[o._v("默认值")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[o._v("value")]),o._v(" "),e("td",[o._v("当前激活的面板的 "),e("code",{pre:!0},[o._v("name")]),o._v("，可以使用 "),e("code",{pre:!0},[o._v("v-model")]),o._v(" 双向绑定")]),o._v(" "),e("td",[o._v("String")]),o._v(" "),e("td",[o._v("-")])]),o._v(" "),e("tr",[e("td",[o._v("mode")]),o._v(" "),e("td",[o._v("颜色展示类型,提供3种模式("),e("code",{pre:!0},[o._v("hex")]),o._v(" 、 "),e("code",{pre:!0},[o._v("rgba")]),o._v(" 、"),e("code",{pre:!0},[o._v("hsla")]),o._v(")")]),o._v(" "),e("td",[o._v("String")]),o._v(" "),e("td",[o._v("'hex'")])]),o._v(" "),e("tr",[e("td",[o._v("default-colors")]),o._v(" "),e("td",[o._v("自定义颜色盘,最多20种")]),o._v(" "),e("td",[o._v("Array")]),o._v(" "),e("td",[o._v("[...]")])]),o._v(" "),e("tr",[e("td",[o._v("show-mode")]),o._v(" "),e("td",[o._v("是否展示颜色模式")]),o._v(" "),e("td",[o._v("Boolean")]),o._v(" "),e("td",[o._v("false")])]),o._v(" "),e("tr",[e("td",[o._v("show-arrow")]),o._v(" "),e("td",[o._v("是否展示下拉箭头")]),o._v(" "),e("td",[o._v("Boolean")]),o._v(" "),e("td",[o._v("true")])]),o._v(" "),e("tr",[e("td",[o._v("icon")]),o._v(" "),e("td",[o._v("自定义下拉箭头")]),o._v(" "),e("td",[o._v("Boolean")]),o._v(" "),e("td",[o._v("true")])]),o._v(" "),e("tr",[e("td",[o._v("shape")]),o._v(" "),e("td",[o._v("shape='circle' 呈现圆形")]),o._v(" "),e("td",[o._v("String")]),o._v(" "),e("td",[o._v("-")])]),o._v(" "),e("tr",[e("td",[o._v("change")]),o._v(" "),e("td",[o._v("颜色值改变的时候触发,返回颜色的值")]),o._v(" "),e("td",[o._v("Function")]),o._v(" "),e("td",[o._v("-")])])])])])}],!1,null,null,null).exports,g={render(){const o=arguments[0];return o("div",[o(a),o(s),o(m),o(u),o(b),o(C),o(x)])}},I=g,P=(0,l.Z)(I,undefined,undefined,!1,null,null,null).exports}}]);