/*!
 * kui-vue v3.3.4
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[1841],{8010:function(t,e,n){n.r(e),n.d(e,{default:function(){return Ct}});var a,r,o=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Button 按钮")]),e("p",[t._v("按钮用于开始一个即时操作。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t._v("何时使用 "),e("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[t._v("#")])]),e("p",[t._v("标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。")]),e("h2",{attrs:{id:"组件注册",tabindex:"-1"}},[t._v("组件注册 "),e("a",{staticClass:"anchor",attrs:{href:"#组件注册"}},[t._v("#")])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("import { Button } from 'kui-vue';\nVue.use(Button);\n")])]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t._v("代码演示 "),e("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[t._v("#")])])])}],l=n(1001),s={},u=(0,l.Z)(s,o,i,!1,null,null,null),p=u.exports,d=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Button",{attrs:{type:"primary"}},[t._v("Primary")]),e("Button",{attrs:{type:"danger"}},[t._v("Danger")]),e("Button",{attrs:{type:"warning"}},[t._v("Warning")]),e("Button",[t._v("Default")]),e("Button",{attrs:{type:"dashed"}},[t._v("Dashed")]),e("Button",{attrs:{type:"link"}},[t._v("Link")])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[t._v("基本用法 "),e("a",{staticClass:"anchor",attrs:{href:"#基本用法"}},[t._v("#")])]),e("p",[t._v("使用 "),e("code",{pre:!0},[t._v("type")]),t._v("、"),e("code",{pre:!0},[t._v("theme")]),t._v("、"),e("code",{pre:!0},[t._v("shape")]),t._v(" 属性来定义 "),e("code",{pre:!0},[t._v("Button")]),t._v(" 的样式。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button type="primary">Primary</Button>\n    <Button type="danger">Danger</Button>\n    <Button type="warning">Warning</Button>\n    <Button>Default</Button>\n    <Button type="dashed">Dashed</Button>\n    <Button type="link">Link</Button>\n  </div>\n</template>\n')])])])],2)]],2)},c=[],h={},m=(0,l.Z)(h,d,c,!1,null,null,null),v=m.exports,B=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("Button",{attrs:{type:"primary"}},[t._v("Primary")]),e("Button",{attrs:{disabled:"",type:"primary"}},[t._v("disabled")]),e("br"),e("Button",{attrs:{type:"danger"}},[t._v("Danger")]),e("Button",{attrs:{type:"danger",disabled:""}},[t._v("Danger")]),e("br"),e("Button",[t._v("Default")]),e("Button",{attrs:{disabled:""}},[t._v("Default")]),e("br"),e("Button",{attrs:{type:"dashed"}},[t._v("Dashed")]),e("Button",{attrs:{disabled:"",type:"dashed"}},[t._v("Dashed")]),e("br"),e("Button",{attrs:{type:"link"}},[t._v("Link")]),e("Button",{attrs:{disabled:"",type:"link"}},[t._v("Link")])],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"禁用",tabindex:"-1"}},[t._v("禁用 "),e("a",{staticClass:"anchor",attrs:{href:"#禁用"}},[t._v("#")])]),e("p",[t._v("通过添加 "),e("code",{pre:!0},[t._v("disabled")]),t._v(" 属性可将按钮设置为不可用状态。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Button type="primary">Primary</Button>\n  <Button disabled type="primary">disabled</Button>\n  <br/>\n  <Button type="danger">Danger</Button>\n  <Button type="danger" disabled>Danger</Button>\n  <br/>\n  <Button>Default</Button>\n  <Button disabled>Default</Button>\n  <br/>\n  <Button type="dashed">Dashed</Button>\n  <Button disabled type="dashed">Dashed</Button>\n  <br/>\n  <Button type="link">Link</Button>\n  <Button disabled type="link">Link</Button>\n</template>\n')])])])],2)]],2)},_=[],y={},g=(0,l.Z)(y,B,_,!1,null,null,null),f=g.exports,b=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("RadioGroup",{model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},[e("RadioButton",{attrs:{value:"large",label:"Large"}}),e("RadioButton",{attrs:{value:"default",label:"Default"}}),e("RadioButton",{attrs:{value:"small",label:"Small"}})],1),e("br"),e("br"),e("Button",{attrs:{type:"primary",size:t.size}},[t._v("Primary")]),e("Button",{attrs:{size:t.size}},[t._v("Default")]),e("Button",{attrs:{type:"dashed",size:t.size}},[t._v("Dashed")]),e("Button",{attrs:{type:"link",size:t.size}},[t._v("Link")]),e("br"),e("Button",{attrs:{type:"primary",size:t.size,icon:t.CloudDownload}}),e("Button",{attrs:{type:"primary",shape:"circle",size:t.size,icon:t.CloudDownload}}),e("Button",{attrs:{type:"primary",shape:"circle",size:t.size,icon:t.CloudDownload}},[t._v("Download")]),e("Button",{attrs:{type:"primary",size:t.size,icon:t.CloudDownload}},[t._v("Download")])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"尺寸",tabindex:"-1"}},[t._v("尺寸 "),e("a",{staticClass:"anchor",attrs:{href:"#尺寸"}},[t._v("#")])]),e("p",[e("code",{pre:!0},[t._v("small")]),t._v(" 为小尺寸， "),e("code",{pre:!0},[t._v("large")]),t._v(" 为大尺寸")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <RadioGroup v-model="size">\n      <RadioButton value="large" label="Large"/>\n      <RadioButton value="default" label="Default"/>\n      <RadioButton value="small" label="Small"/>\n    </RadioGroup>\n    <br/>\n    <br/>\n    <Button type="primary" :size="size">Primary</Button>\n    <Button :size="size">Default</Button>\n    <Button type="dashed" :size="size">Dashed</Button>\n    <Button type="link" :size="size">Link</Button>\n    <br/>\n    <Button type="primary" :size="size" :icon="CloudDownload"></Button>\n    <Button type="primary" shape="circle" :size="size" :icon="CloudDownload"></Button>\n    <Button type="primary" shape="circle" :size="size" :icon="CloudDownload">Download</Button>\n    <Button type="primary" :size="size" :icon="CloudDownload">Download</Button>\n\n  </div>\n</template>\n<script>\nimport { CloudDownload } from "kui-icons";\nexport default{\n  data() {\n    return {\n      CloudDownload,\n      size:"default"\n    }\n  },\n  methods:{\n    change(value){\n      this.size = value\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},C=[],D=n(5118),k={data(){return{CloudDownload:D.CloudDownload,size:"default"}},methods:{change(t){this.size=t}}},w=k,z=(0,l.Z)(w,b,C,!1,null,null,null),x=z.exports,S=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-back",staticStyle:{padding:"10px"}},[e("Button",{attrs:{type:"primary",theme:"solid"}},[t._v("Primary")]),e("Button",{attrs:{type:"danger",theme:"solid"}},[t._v("Danger")]),e("Button",{attrs:{type:"warning",theme:"solid"}},[t._v("Warning")]),e("Button",{attrs:{theme:"solid"}},[t._v("Default")]),e("Button",{attrs:{type:"dashed",theme:"solid"}},[t._v("Dashed")])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"边框主题",tabindex:"-1"}},[t._v("边框主题 "),e("a",{staticClass:"anchor",attrs:{href:"#边框主题"}},[t._v("#")])]),e("p",[t._v("只呈现边框")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div style="padding:10px;" class="demo-back">\n    <Button type="primary" theme="solid">Primary</Button>\n    <Button type="danger" theme="solid">Danger</Button>\n    <Button type="warning" theme="solid">Warning</Button>\n    <Button theme="solid">Default</Button>\n    <Button type="dashed" theme="solid">Dashed</Button>\n  </div>\n</template>\n')])])])],2)]],2)},L=[],N={},G=(0,l.Z)(N,S,L,!1,null,null,null),P=G.exports,Z=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("Button",{attrs:{type:"primary",theme:"normal"}},[t._v("主要")]),e("Button",{attrs:{type:"danger",theme:"normal"}},[t._v("危险")]),e("Button",{attrs:{type:"warning",theme:"normal"}},[t._v("警告")]),e("Button",{attrs:{theme:"normal"}},[t._v("默认")]),e("br"),e("br"),e("Button",{attrs:{type:"primary",theme:"normal",icon:t.Notifications}}),e("Button",{attrs:{type:"danger",theme:"normal",icon:t.Mail}}),e("Button",{attrs:{type:"warning",theme:"normal",icon:t.Notifications}}),e("Button",{attrs:{theme:"normal",icon:t.Notifications}}),e("br"),e("br"),e("Button",{attrs:{type:"primary",theme:"normal",icon:t.Notifications,shape:"circle"}}),e("Button",{attrs:{type:"danger",theme:"normal",icon:t.Mail,shape:"circle"}}),e("Button",{attrs:{type:"warning",theme:"normal",icon:t.Notifications,shape:"circle"}}),e("Button",{attrs:{theme:"normal",icon:t.Notifications,shape:"circle"}})],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"无边框无背景",tabindex:"-1"}},[t._v("无边框无背景 "),e("a",{staticClass:"anchor",attrs:{href:"#无边框无背景"}},[t._v("#")])]),e("p",[t._v("无边框无背景")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Button type="primary" theme="normal">主要</Button>\n  <Button type="danger" theme="normal">危险</Button>\n  <Button type="warning" theme="normal">警告</Button>\n  <Button theme="normal">默认</Button>\n  <br/>\n  <br/>\n  <Button type="primary" theme="normal":icon="Notifications" />\n  <Button type="danger" theme="normal":icon="Mail" />\n  <Button type="warning" theme="normal":icon="Notifications" />\n  <Button theme="normal":icon="Notifications" />\n  <br/>\n  <br/>\n  <Button type="primary" theme="normal":icon="Notifications" shape="circle" />\n  <Button type="danger" theme="normal":icon="Mail" shape="circle" />\n  <Button type="warning" theme="normal":icon="Notifications" shape="circle" />\n  <Button theme="normal":icon="Notifications" shape="circle" />\n</template>\n<script>\nimport { Notifications, Mail } from "kui-icons"\nexport default{\n  data() {\n    return {\n      Notifications, Mail\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},R=[],F={data(){return{Notifications:D.Notifications,Mail:D.Mail}}},M=F,I=(0,l.Z)(M,Z,R,!1,null,null,null),W=I.exports,T=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("Button",{attrs:{type:"primary",theme:"light"}},[t._v("Primary")]),e("Button",{attrs:{type:"danger",theme:"light"}},[t._v("Danger")]),e("Button",{attrs:{type:"warning",theme:"light"}},[t._v("Warning")]),e("Button",{attrs:{theme:"light"}},[t._v("Default")]),e("Button",{attrs:{theme:"light"}},[t._v("Default")]),e("br"),e("br"),e("Button",{attrs:{type:"primary",theme:"light",icon:t.Camera}}),e("Button",{attrs:{type:"danger",theme:"light",icon:t.Camera}}),e("Button",{attrs:{type:"warning",theme:"light",icon:t.Camera}}),e("Button",{attrs:{theme:"light",icon:t.Camera}}),e("br"),e("br"),e("Button",{attrs:{type:"primary",theme:"light",icon:t.Camera,shape:"circle"}}),e("Button",{attrs:{type:"danger",theme:"light",icon:t.Camera,shape:"circle"}}),e("Button",{attrs:{type:"warning",theme:"light",icon:t.Camera,shape:"circle"}}),e("Button",{attrs:{theme:"light",icon:t.Camera,shape:"circle"}})],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"浅色主题",tabindex:"-1"}},[t._v("浅色主题 "),e("a",{staticClass:"anchor",attrs:{href:"#浅色主题"}},[t._v("#")])]),e("p",[t._v("浅色主题")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Button type="primary" theme="light">Primary</Button>\n  <Button type="danger" theme="light">Danger</Button>\n  <Button type="warning" theme="light">Warning</Button>\n  <Button theme="light">Default</Button>\n  <Button theme="light">Default</Button>\n  <br/>\n  <br/>\n  <Button type="primary" theme="light" :icon="Camera" />\n  <Button type="danger" theme="light" :icon="Camera" />\n  <Button type="warning" theme="light" :icon="Camera" />\n  <Button theme="light" :icon="Camera" />\n  <br/>\n  <br/>\n  <Button type="primary" theme="light" :icon="Camera" shape="circle" />\n  <Button type="danger" theme="light" :icon="Camera" shape="circle" />\n  <Button type="warning" theme="light" :icon="Camera" shape="circle" />\n  <Button theme="light" :icon="Camera" shape="circle" />\n</template>\n<script>\nimport { Camera } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Camera\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},j=[],A={data(){return{Camera:D.Camera}}},V=A,q=(0,l.Z)(V,T,j,!1,null,null,null),E=q.exports,H=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Button",{attrs:{type:"primary",icon:t.Search,shape:"circle"}}),e("Button",{attrs:{type:"primary",icon:t.Search}},[t._v("搜索")]),e("Button",{attrs:{icon:t.Search,shape:"circle"}}),e("Button",{attrs:{icon:t.Search}},[t._v("搜索")]),e("Button",{attrs:{type:"dashed",icon:t.Search,shape:"circle"}}),e("Button",{attrs:{type:"dashed",icon:t.Search}},[t._v("搜索")]),e("Button",{attrs:{type:"primary"}},[t._v("展开选项"),e("Icon",{attrs:{type:t.ChevronDown}})],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"带图标",tabindex:"-1"}},[t._v("带图标 "),e("a",{staticClass:"anchor",attrs:{href:"#带图标"}},[t._v("#")])]),e("p",[t._v("通过添加 "),e("code",{pre:!0},[t._v("icon")]),t._v(" 属性 设置按钮按钮图标。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button type="primary" :icon="Search" shape="circle"></Button>\n    <Button type="primary" :icon="Search">搜索</Button>\n    <Button :icon="Search" shape="circle"></Button>\n    <Button :icon="Search">搜索</Button>\n    <Button type="dashed" :icon="Search" shape="circle"></Button>\n    <Button type="dashed" :icon="Search">搜索</Button>\n    <Button type="primary">展开选项<Icon :type="ChevronDown" /></Button>\n  </div>\n</template>\n<script>\nimport { ChevronDown, Search } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      ChevronDown ,Search\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},J=[],K={data(){return{ChevronDown:D.ChevronDown,Search:D.Search}}},O=K,Q=(0,l.Z)(O,H,J,!1,null,null,null),U=Q.exports,X=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Button",{attrs:{type:"primary",icon:t.Search,loading:""}},[t._v("Loading")]),e("Button",{attrs:{type:"primary",icon:t.Search,loading:"",size:"small"}},[t._v("Loading")]),e("Button",{attrs:{icon:t.Search,loading:"",shape:"circle"}}),e("Button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.loading=!0}}},[t._v("Clike me")]),e("br"),e("Button",{attrs:{type:"primary",icon:t.Search,loading:t.delayLoading},on:{click:t.handleDelay}},[t._v("延迟1s加载")])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"加载中状态",tabindex:"-1"}},[t._v("加载中状态 "),e("a",{staticClass:"anchor",attrs:{href:"#加载中状态"}},[t._v("#")])]),e("p",[t._v("添加 "),e("code",{pre:!0},[t._v("loading")]),t._v(" 属性即可让按钮处于加载状态")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button type="primary" :icon="Search" loading>Loading</Button>\n    <Button type="primary" :icon="Search" loading size="small">Loading</Button>\n    <Button :icon="Search" loading shape="circle"/>\n    <Button type="primary" :loading="loading" @click="loading=true">Clike me</Button>\n    <br/>\n    <Button type="primary" :icon="Search" :loading="delayLoading" @click="handleDelay">延迟1s加载</Button>\n  </div>\n</template>\n<script>\nimport { Search } from "kui-icons";\nexport default{\n  data() {\n    return {\n      Search,\n      loading:false,\n      delayLoading:false\n    }\n  },\n  methods:{\n    handleDelay(){\n      setTimeout(e=>this.delayLoading=true,1000)\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},Y=[],$={data(){return{Search:D.Search,loading:!1,delayLoading:!1}},methods:{handleDelay(){setTimeout((t=>this.delayLoading=!0),1e3)}}},tt=$,et=(0,l.Z)(tt,X,Y,!1,null,null,null),nt=et.exports,at=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Button",{attrs:{type:"primary",block:""}},[t._v("Primary")]),e("Button",{attrs:{type:"danger",block:""}},[t._v("Danger")]),e("Button",{attrs:{block:""}},[t._v("Default")]),e("Button",{attrs:{type:"dashed",block:""}},[t._v("Dashed")]),e("Button",{attrs:{type:"link",block:""}},[t._v("Link")])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"block-按钮",tabindex:"-1"}},[t._v("Block 按钮 "),e("a",{staticClass:"anchor",attrs:{href:"#block-按钮"}},[t._v("#")])]),e("p",[t._v("block 属性将使按钮适合其父宽度。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Button type="primary" block>Primary</Button>\n    <Button type="danger" block>Danger</Button>\n    <Button block>Default</Button>\n    <Button type="dashed" block>Dashed</Button>\n    <Button type="link" block>Link</Button>\n  </div>\n</template>\n')])])])],2)]],2)},rt=[],ot={},it=(0,l.Z)(ot,at,rt,!1,null,null,null),lt=it.exports,st=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("ButtonGroup",{attrs:{size:"large"}},[e("Button",[t._v("待发货")]),e("Button",[t._v("已发货")]),e("Button",[t._v("已签收")])],1),e("ButtonGroup",{attrs:{shape:"circle"}},[e("Button",[t._v("待发货")]),e("Button",[t._v("已发货")]),e("Button",[t._v("已签收")])],1),e("br"),e("br"),e("ButtonGroup",{attrs:{size:"small",shape:"circle"}},[e("Button",[e("Icon",{attrs:{type:t.ChevronBack}}),t._v(" Backward")],1),e("Button",[t._v("Forward "),e("Icon",{attrs:{type:t.ChevronForward}})],1)],1)],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"按钮组合",tabindex:"-1"}},[t._v("按钮组合 "),e("a",{staticClass:"anchor",attrs:{href:"#按钮组合"}},[t._v("#")])]),e("p",[t._v("将多个 "),e("code",{pre:!0},[t._v("Button")]),t._v(" 放入 "),e("code",{pre:!0},[t._v("ButtonGroup")]),t._v(" 内，可实现按钮组合的效果。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <ButtonGroup size="large">\n      <Button>待发货</Button>\n      <Button>已发货</Button>\n      <Button>已签收</Button>\n    </ButtonGroup>\n    <ButtonGroup shape="circle">\n      <Button>待发货</Button>\n      <Button>已发货</Button>\n      <Button>已签收</Button>\n    </ButtonGroup>\n    <br />\n    <br />\n    <ButtonGroup size="small" shape="circle">\n      <Button ><Icon :type="ChevronBack"/> Backward</Button>\n      <Button>Forward <Icon :type="ChevronForward"/></Button>\n    </ButtonGroup>\n  </div>\n</template>\n<script>\nimport { ChevronBack,ChevronForward } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      ChevronBack, ChevronForward\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},ut=[],pt={data(){return{ChevronBack:D.ChevronBack,ChevronForward:D.ChevronForward}}},dt=pt,ct=(0,l.Z)(dt,st,ut,!1,null,null,null),ht=ct.exports,mt=function(){var t=this;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t._self._c;return e("div",[e("h2",{attrs:{id:"api",tabindex:"-1"}},[t._v("API "),e("a",{staticClass:"anchor",attrs:{href:"#api"}},[t._v("#")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("type")]),e("td",[t._v("按钮类型，可选值为 "),e("code",{pre:!0},[t._v("primary")]),t._v("、"),e("code",{pre:!0},[t._v("link")]),t._v("、"),e("code",{pre:!0},[t._v("dashed")]),t._v("、"),e("code",{pre:!0},[t._v("danger")]),t._v("或者不设置")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("htmlType")]),e("td",[t._v("设置 button 原生的 type 值")]),e("td",[t._v("String")]),e("td",[t._v("button")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("按钮尺寸,可选值 "),e("code",{pre:!0},[t._v("small")]),t._v("、"),e("code",{pre:!0},[t._v("large")]),t._v("，默认不选")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("shape")]),e("td",[t._v("shape=circle 呈现圆型按钮")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("theme")]),e("td",[t._v("按钮主题, 可选值为 "),e("code",{pre:!0},[t._v("solid")]),t._v(" , "),e("code",{pre:!0},[t._v("light")]),t._v(" , "),e("code",{pre:!0},[t._v("normal")])]),e("td",[t._v("Boolean")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("按钮的图标")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("loading")]),e("td",[t._v("按钮是否进入加载模式")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])])])])])}],Bt={},_t=(0,l.Z)(Bt,mt,vt,!1,null,null,null),yt=_t.exports,gt={render(){const t=arguments[0];return t("div",{class:"demo-button"},[t(p),t(v),t(P),t(E),t(W),t(U),t(x),t(f),t(nt),t(lt),t(ht),t(yt)])}},ft=gt,bt=(0,l.Z)(ft,a,r,!1,null,null,null),Ct=bt.exports}}]);