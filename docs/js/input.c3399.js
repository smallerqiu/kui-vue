/*!
 * kui-vue v3.3.6-b
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[5814],{3522:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var l=function(){this._self._c;return this._m(0)};l._withStripped=!0;var r=n(1900),a=(0,r.Z)({},l,[function(){var e=this,t=e._self._c;return t("div",{staticClass:"markdown-body"},[t("h1",[e._v("Input 输入框")]),e._v(" "),t("p",[e._v("通过鼠标或键盘输入内容，是最基础的表单域的包装。")]),e._v(" "),t("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[e._v("何时使用")])]),e._v(" "),t("ul",[t("li",[e._v("需要用户输入表单域内容时。")]),e._v(" "),t("li",[e._v("提供组合型输入框，带搜索的输入框，还可以进行大小选择。")])]),e._v(" "),t("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[e._v("代码演示")])])])}],!1,null,null,null).exports,s=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",{staticStyle:{width:"512px"}},[t("Input",{attrs:{placeholder:"请输入内容..."},on:{blur:e.blur,focus:e.focus,change:e.change}}),e._v(" "),t("Input",{attrs:{placeholder:"disabled...",disabled:""}})],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[e._v("基础用法")])]),e._v(" "),t("p",[e._v("使用 "),t("code",{pre:!0},[e._v("v-model")]),e._v(" 进行数据双向绑定")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div style="width:512px;">\n    <Input placeholder="请输入内容..." @blur="blur" @focus="focus" @change="change" />\n    <Input placeholder="disabled..." disabled />\n  </div>\n</template>\n<script>\nexport default{\n  methods:{\n    blur(){\n      console.log(\'blur\')\n    },\n    focus(){\n      console.log(\'focus\')\n    },\n    change(e){\n      console.log(\'change\')\n    },\n  }\n}\n<\/script>\n\n')])])])],2)};s._withStripped=!0;var o={methods:{blur(){console.log("blur")},focus(){console.log("focus")},change(e){console.log("change")}}},i=(0,r.Z)(o,s,[],!1,null,null,null).exports,p=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",{staticStyle:{width:"512px"}},[t("Checkbox",{attrs:{label:"Shape"},model:{value:e.isShape,callback:function(t){e.isShape=t},expression:"isShape"}}),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("Input",{attrs:{placeholder:"请输入内容...",theme:"light",shape:e.shape},on:{blur:e.blur,focus:e.focus,change:e.change}}),e._v(" "),t("Input",{attrs:{placeholder:"disabled...",disabled:"",theme:"light",shape:e.shape}}),e._v(" "),t("Input",{attrs:{placeholder:"请输入内容...",theme:"light",icon:e.Search,shape:e.shape}}),e._v(" "),t("Input",{attrs:{placeholder:"请输入内容...",theme:"light",clearable:"",shape:e.shape},on:{search:e.focus}}),e._v(" "),t("TextArea",{attrs:{placeholder:"请输入内容...",theme:"light",rows:3}})],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"主题",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主题"}},[e._v("主题")])]),e._v(" "),t("p",[e._v("使用 "),t("code",{pre:!0},[e._v("theme")]),e._v(" 设定主题 ,"),t("code",{pre:!0},[e._v("shape")]),e._v(" 呈现圆角")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div style="width:512px;">\n    <Checkbox label="Shape" v-model="isShape"/>\n    <br/>\n    <br/>\n    <Input placeholder="请输入内容..." @blur="blur" @focus="focus" @change="change" theme="light" :shape="shape"/>\n    <Input placeholder="disabled..." disabled theme="light" :shape="shape"/>\n    <Input placeholder="请输入内容..." theme="light" :icon="Search" :shape="shape"/>\n    <Input placeholder="请输入内容..." theme="light" @search="focus" clearable :shape="shape"/>\n    <TextArea placeholder="请输入内容..." theme="light" :rows="3"/>\n  </div>\n</template>\n<script>\nimport { Search } from "kui-icons";\nexport default{\n  data() {\n    return {\n      Search,\n      isShape :false\n    }\n  },\n  computed:{\n    shape() { \n      return this.isShape ? \'circle\' : null\n    }\n  },\n  methods:{\n    blur(){\n      console.log(\'blur\')\n    },\n    focus(){\n      console.log(\'focus\')\n    },\n    change(e){\n      console.log(\'change\')\n    },\n  }\n}\n<\/script>\n\n')])])])],2)};p._withStripped=!0;var c=n(2324),d={data(){return{Search:c.Search,isShape:!1}},computed:{shape(){return this.isShape?"circle":null}},methods:{blur(){console.log("blur")},focus(){console.log("focus")},change(e){console.log("change")}}},h=(0,r.Z)(d,p,[],!1,null,null,null).exports,u=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",{staticStyle:{width:"512px"}},[t("Input",{attrs:{placeholder:"User Name...",icon:e.Person}}),e._v(" "),t("Input",{attrs:{type:"password",placeholder:"Password...",icon:e.LockClosed}}),e._v(" "),t("Input",{attrs:{placeholder:"请输入关进行搜索键字..."},on:{search:e.search}})],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"带图标",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#带图标"}},[e._v("带图标")])]),e._v(" "),t("p",[e._v("通过设置 "),t("code",{pre:!0},[e._v("icon")]),e._v(" 属性，可设置输入框图标，只对 "),t("code",{pre:!0},[e._v("input")]),e._v(" 有效。可以快速的实现 ，密码显示隐藏，搜索")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div style="width:512px;">\n    <Input placeholder="User Name..." :icon="Person" />\n    <Input type="password" placeholder="Password..." :icon="LockClosed" />\n    <Input placeholder="请输入关进行搜索键字..." @search="search"/>\n  </div>\n</template>\n<script>\nimport { Person, LockClosed } from "kui-icons";\nexport default {\n  data() {\n    return {\n       Person, LockClosed\n    }\n  },\n  methods: {\n    search() {\n      this.$Message.info("This is search event");\n    },\n  }\n};\n<\/script>\n\n')])])])],2)};u._withStripped=!0;var v={data(){return{Person:c.Person,LockClosed:c.LockClosed}},methods:{search(){this.$Message.info("This is search event")}}},_=(0,r.Z)(v,u,[],!1,null,null,null).exports,m=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",{staticStyle:{width:"256px"}},[t("Input",{attrs:{placeholder:"请输入验证码",icon:e.ShieldCheckmark,maxlength:8}},[t("template",{slot:"suffix"},[60==e.time?t("Button",{attrs:{size:"small",type:"primary"},on:{click:e.sendCode}},[e._v("获取验证码")]):t("span",[e._v(e._s(e.time)+"(s)")])],1)],2),e._v(" "),t("Input",{attrs:{placeholder:"请填写你要喝的Coffee",icon:e.Gift}},[t("template",{slot:"suffix"},[t("Tooltip",{attrs:{title:"此处如果不知道怎么填，请咨询管理员"}},[t("Icon",{attrs:{type:e.InformationCircleOutline,color:"orange"}})],1)],1)],2),e._v(" "),t("Input",{attrs:{placeholder:"请输入手机号码"}},[t("Select",{staticStyle:{width:"80px"},attrs:{slot:"prefix",bordered:!1,value:"0"},slot:"prefix"},[t("Option",{attrs:{value:"0",label:"+86"}}),e._v(" "),t("Option",{attrs:{value:"1",label:"+52"}})],1)],1),e._v(" "),t("Input",{attrs:{placeholder:"请输入金额",suffix:"元",prefix:"$"}}),e._v(" "),t("Input",{attrs:{placeholder:"请输入域名",suffix:".com",prefix:"https://"}}),e._v(" "),t("Input",{attrs:{placeholder:"请输入金额",suffix:".00"}})],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"扩展,-前缀和后缀",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展,-前缀和后缀"}},[e._v("扩展, 前缀和后缀")])]),e._v(" "),t("p",[e._v("suffix，prefix 扩展")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div style="width:256px;">\n    <Input placeholder="请输入验证码" :icon="ShieldCheckmark" :maxlength="8">\n      <template slot="suffix">\n        <Button size="small" type="primary" v-if="time==60" @click="sendCode">获取验证码</Button>\n        <span v-else>{{time}}(s)</span>\n      </template>\n    </Input>\n    <Input placeholder="请填写你要喝的Coffee" :icon="Gift">\n      <template slot="suffix">\n          <Tooltip title="此处如果不知道怎么填，请咨询管理员">\n            <Icon :type="InformationCircleOutline" color="orange"/>\n          </Tooltip>  \n      </template>\n    </Input>\n    <Input placeholder="请输入手机号码">\n      <Select :bordered="false"style="width:80px;" slot="prefix" value="0">\n        <Option value="0" label="+86"/>\n        <Option value="1" label="+52"/>\n      </Select>  \n    </Input>\n    <Input placeholder="请输入金额" suffix="元" prefix="$"/>\n    <Input placeholder="请输入域名" suffix=".com" prefix="https://"/>\n    <Input placeholder="请输入金额" suffix=".00"/>\n  </div>\n</template>\n<script>  \nimport { InformationCircleOutline, Gift, ShieldCheckmark } from \'kui-icons\'\nexport default {  \n  data() {\n    return {\n      InformationCircleOutline, Gift, ShieldCheckmark ,\n      time:60,\n      timer:null\n    }\n  },\n  beforDestroy(){\n    clearInterval(this.timer)\n  },\n  methods: {\n    sendCode(){\n      this.time = 59\n      this.$Message.success("验证码发送成功，请注意查收");\n      this.timer = setInterval(e=>{\n          if(this.time < 0){\n            clearInterval(this.timer)\n            this.time = 60\n          }else{\n            this.time--\n          }\n      },1000)\n    }\n  }\n};\n<\/script>\n\n')])])])],2)};m._withStripped=!0;var f={data(){return{InformationCircleOutline:c.InformationCircleOutline,Gift:c.Gift,ShieldCheckmark:c.ShieldCheckmark,time:60,timer:null}},beforDestroy(){clearInterval(this.timer)},methods:{sendCode(){this.time=59,this.$Message.success("验证码发送成功，请注意查收"),this.timer=setInterval((e=>{this.time<0?(clearInterval(this.timer),this.time=60):this.time--}),1e3)}}},g=(0,r.Z)(f,m,[],!1,null,null,null).exports,b=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",{staticStyle:{width:"512px"}},[t("Input",{attrs:{type:"text",placeholder:"请输入内容...",clearable:""}})],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"可清除",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可清除"}},[e._v("可清除")])]),e._v(" "),t("p",[e._v("通过设置 "),t("code",{pre:!0},[e._v("clearable")]),e._v(" 属性可控制是否显示清空按钮")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div style="width:512px;">\n    <Input type="text" placeholder="请输入内容..." clearable />\n  </div>\n</template>\n\n')])])])],2)};b._withStripped=!0;var x=(0,r.Z)({},b,[],!1,null,null,null).exports,y=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",{staticStyle:{width:"512px"}},[t("Input",{attrs:{placeholder:"Large Input",size:"large",icon:e.LogoKui,clearable:""}}),e._v(" "),t("Input",{attrs:{placeholder:"Base Input",icon:e.LogoKui,clearable:""}}),e._v(" "),t("Input",{attrs:{size:"small",placeholder:"Small Input",icon:e.LogoKui,clearable:""},on:{"icon-click":function(t){return e.$Message.info("点击图标事件")}}})],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"尺寸",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#尺寸"}},[e._v("尺寸")])]),e._v(" "),t("p",[t("code",{pre:!0},[e._v("large")]),e._v(" 为大尺寸， "),t("code",{pre:!0},[e._v("small")]),e._v(" 为小尺寸")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div style="width:512px;">\n    <Input placeholder="Large Input" size="large" :icon="LogoKui" clearable/>\n    <Input placeholder="Base Input" :icon="LogoKui" clearable />\n    <Input size="small" placeholder="Small Input" :icon="LogoKui" @icon-click="$Message.info(\'点击图标事件\')" clearable />\n  </div>\n</template>\n<script>\nimport { LogoKui } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      LogoKui\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};y._withStripped=!0;var k={data(){return{LogoKui:c.LogoKui}}},I=(0,r.Z)(k,y,[],!1,null,null,null).exports,w=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",{staticStyle:{width:"512px"}},[t("Input",{attrs:{placeholder:"请输入内容...",clearable:""},on:{change:e.change,keypress:e.keypress,keyup:e.keyup,keydown:[e.keydown,function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.keydownEnter.apply(null,arguments)}],blur:e.blur,focus:e.focus}}),e._v(" "),t("TextArea",{attrs:{placeholder:"请输入内容..."},on:{change:e.change,keypress:e.keypress,keyup:e.keyup,keydown:[e.keydown,function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.keydownEnter.apply(null,arguments)}],blur:e.blur,focus:e.focus}})],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"事件",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[e._v("事件")])]),e._v(" "),t("p",[e._v("本示例测试组件事件是否正常触发")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div style="width:512px;">\n    <Input placeholder="请输入内容..." \n    clearable\n    @change="change" \n    @keypress="keypress" \n    @keyup="keyup" \n    @keydown="keydown" \n    @keydown.enter="keydownEnter" \n    @blur="blur" \n    @focus="focus" >\n    </Input>\n    <TextArea placeholder="请输入内容..."\n      @change="change" \n      @keypress="keypress" \n      @keyup="keyup" \n      @keydown="keydown" \n      @keydown.enter="keydownEnter" \n      @blur="blur" \n      @focus="focus" \n     />\n  </div>\n</template>\n<script>\nlet events = {};\n[\'focus\',\'blur\',\'change\',\'keypress\',\'keyup\',\'keydown\',,\'keydownEnter\'].map(type=>{\n  events[type] = function(e){\n    this.$Message.info(type)\n  }\n})\nexport default{\n  methods:{\n    ...events\n  }\n}\n<\/script>\n\n')])])])],2)};w._withStripped=!0;let S={};["focus","blur","change","keypress","keyup","keydown",,"keydownEnter"].map((e=>{S[e]=function(t){this.$Message.info(e)}}));var C={methods:{...S}},L=(0,r.Z)(C,w,[],!1,null,null,null).exports,T=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",{staticStyle:{width:"512px"}},[t("TextArea",{attrs:{rows:4,placeholder:"请输入内容..."}}),e._v(" "),t("TextArea",{attrs:{rows:2,placeholder:"请输入内容..."}}),e._v(" "),t("TextArea",{attrs:{rows:2,placeholder:"disabled...",disabled:""}})],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"文本域",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文本域"}},[e._v("文本域")])]),e._v(" "),t("p",[e._v("通过设置 "),t("code",{pre:!0},[e._v("rows")]),e._v(" 来控制行数")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div style="width:512px;">\n    <TextArea :rows="4" placeholder="请输入内容..." />\n    <TextArea :rows="2" placeholder="请输入内容..." />\n    <TextArea :rows="2" placeholder="disabled..." disabled />\n  </div>\n</template>\n\n')])])])],2)};T._withStripped=!0;var O=(0,r.Z)({},T,[],!1,null,null,null).exports,A=function(){this._self._c;return this._m(0)};A._withStripped=!0;var Z=(0,r.Z)({},A,[function(){var e=this,t=e._self._c;return t("div",{staticClass:"markdown-body"},[t("h2",{attrs:{id:"input-api",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-api"}},[e._v("Input API")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("默认值")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("value")]),e._v(" "),t("td",[e._v("绑定的值，可使用 "),t("code",{pre:!0},[e._v("v-model")]),e._v(" 双向绑定")]),e._v(" "),t("td",[e._v("String 、 Number")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("size")]),e._v(" "),t("td",[e._v("按钮尺寸,可选值 "),t("code",{pre:!0},[e._v("small")]),e._v("、"),t("code",{pre:!0},[e._v("large")]),e._v("，默认不选")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("icon")]),e._v(" "),t("td",[e._v("输入框图标")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("suffix")]),e._v(" "),t("td",[e._v("扩展后缀")]),e._v(" "),t("td",[e._v("String,Slot")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("prefix")]),e._v(" "),t("td",[e._v("扩展前缀")]),e._v(" "),t("td",[e._v("String,Slot")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("search")]),e._v(" "),t("td",[e._v("搜索事件的回调")]),e._v(" "),t("td",[e._v("Function")]),e._v(" "),t("td",[e._v("right")])]),e._v(" "),t("tr",[t("td",[e._v("theme")]),e._v(" "),t("td",[e._v("theme='light' 时呈现浅色主题")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("right")])]),e._v(" "),t("tr",[t("td",[e._v("clearable")]),e._v(" "),t("td",[e._v("是否现示清除按钮")]),e._v(" "),t("td",[e._v("Boolen")]),e._v(" "),t("td",[e._v("false")])])])])])}],!1,null,null,null).exports,D={render(){const e=arguments[0];return e("div",{class:"demo-input"},[e(a),e(i),e(h),e(_),e(g),e(x),e(I),e(L),e(O),e(Z)])}},K=D,$=(0,r.Z)(K,undefined,undefined,!1,null,null,null).exports}}]);