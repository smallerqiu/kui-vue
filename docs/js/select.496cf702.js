/*!
 * kui-vue v3.3.5-b
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[4286],{3666:function(e,a,t){t.r(a),t.d(a,{default:function(){return Oe}});var l=function(){var e=this;e._self._c;return e._m(0)},n=[function(){var e=this,a=e._self._c;return a("div",[a("h1",[e._v("Select 选择器")]),a("p",[e._v("下拉选择器。")]),a("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e._v("何时使用 "),a("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[e._v("#")])]),a("ul",[a("li",[e._v("弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。")]),a("li",[e._v("当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。")])]),a("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e._v("代码演示 "),a("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[e._v("#")])])])}],r=t(1001),i={},o=(0,r.Z)(i,l,n,!1,null,null,null),s=o.exports,p=function(){var e=this,a=e._self._c;return a("div",[[a("demo",[a("template",{slot:"component"},[a("div",[a("Select",{attrs:{width:200,options:e.data},model:{value:e.select,callback:function(a){e.select=a},expression:"select"}}),a("Button",{attrs:{size:"small"},on:{click:function(a){e.select=""}}},[e._v("Clear")]),a("Button",{attrs:{size:"small"},on:{click:function(a){e.select=1}}},[e._v("Choose orange")]),a("br"),a("Select",{attrs:{width:200,placeholder:"Please Choose"}},[a("Option",{attrs:{value:1,label:"Apple"}}),a("Option",{attrs:{value:2,label:"Orange"}}),a("Option",{attrs:{value:3,label:"Banana",disabled:""}}),a("Option",{attrs:{value:4,label:"Pear"}})],1),a("br"),a("Select",{attrs:{width:200,value:"1",disabled:""}},[a("Option",{attrs:{value:"1",label:"disabled"}})],1)],1)]),a("template",{slot:"description"},[a("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[e._v("基础用法 "),a("a",{staticClass:"anchor",attrs:{href:"#基础用法"}},[e._v("#")])]),a("p",[e._v("通过 "),a("code",{pre:!0},[e._v("v-model")]),e._v(" 进行数据双向绑定")])]),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <Select :width="200" v-model="select" :options="data">\n      \x3c!-- <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label" /> --\x3e\n    </Select>\n    <Button @click="select=\'\'" size="small">Clear</Button>\n    <Button @click="select=1" size="small">Choose orange</Button>\n    <br />\n    <Select :width="200" placeholder="Please Choose">\n      <Option :value="1" label="Apple" />\n      <Option :value="2" label="Orange" />\n      <Option :value="3" label="Banana" disabled/>\n      <Option :value="4" label="Pear" />\n    </Select>\n    <br />\n    <Select :width="200" value="1" disabled>\n      <Option value="1" label="disabled" />\n    </Select>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      select: 2,\n      data: [\n        { label: "Apple", value: 0 },\n        { label: "Orange", value: 1 },\n        { label: "Banana", value: 2 },\n        { label: "Pear", value: 3 },\n      ],\n    };\n  }\n}\n<\/script> \n')])])])],2)]],2)},u=[],c={data(){return{select:2,data:[{label:"Apple",value:0},{label:"Orange",value:1},{label:"Banana",value:2},{label:"Pear",value:3}]}}},d=c,v=(0,r.Z)(d,p,u,!1,null,null,null),h=v.exports,b=function(){var e=this,a=e._self._c;return a("div",[[a("demo",[a("template",{slot:"component"},[a("div",[a("Checkbox",{attrs:{label:"Shape"},model:{value:e.checked,callback:function(a){e.checked=a},expression:"checked"}}),a("br"),a("br"),a("Select",{attrs:{width:256,icon:e.Search,theme:"light",shape:e.checked?"circle":""}}),a("br"),a("Select",{attrs:{width:256,clearable:"",filterable:"",theme:"light",shape:e.checked?"circle":""}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}})],1),a("br"),a("Select",{attrs:{width:256,icon:e.Search,shape:e.checked?"circle":""}}),a("br"),a("Select",{attrs:{width:256,multiple:"",filterable:"",theme:"light"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}})],1)],1)]),a("template",{slot:"description"},[a("h4",{attrs:{id:"主题",tabindex:"-1"}},[e._v("主题 "),a("a",{staticClass:"anchor",attrs:{href:"#主题"}},[e._v("#")])]),a("p",[e._v("通过 "),a("code",{pre:!0},[e._v("theme")]),e._v(" 设置主题 , shape='circle' ,呈现圆角, multiple 多选模式下, shape 无效")])]),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <Checkbox v-model="checked" label="Shape" />\n    <br/>\n    <br/>\n    <Select :width="256" :icon="Search" theme="light" :shape="checked?\'circle\':\'\'"/>\n    <br/>\n    <Select :width="256" clearable filterable theme="light" :shape="checked?\'circle\':\'\'">\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana"/>\n      <Option value="4" label="Pear" />\n    </Select>\n    <br/>\n    <Select :width="256" :icon="Search" :shape="checked?\'circle\':\'\'"/>\n    <br />\n    <Select :width="256" multiple v-model="value" filterable theme="light">\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana" />\n      <Option value="4" label="Pear" />\n    </Select>\n  </div>\n</template>\n<script>\nimport { Search } from "kui-icons";\nexport default{\n  data() {\n    return {\n      Search,\n      checked:true,\n      value:[\'1\',\'3\']\n    }\n  },\n  methods:{\n    setSize({value}){\n      this.size = value\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},m=[],g=t(5118),f={data(){return{Search:g.Search,checked:!0,value:["1","3"]}},methods:{setSize({value:e}){this.size=e}}},_=f,O=(0,r.Z)(_,b,m,!1,null,null,null),w=O.exports,S=function(){var e=this,a=e._self._c;return a("div",[[a("demo",[a("template",{slot:"component"},[a("div",[a("Select",{attrs:{width:200,icon:e.Search,theme:"light","arrow-icon":e.CaretDown,options:e.data},model:{value:e.select,callback:function(a){e.select=a},expression:"select"}}),a("Button",{attrs:{size:"small"},on:{click:function(a){e.select=""}}},[e._v("Clear")]),a("Button",{attrs:{size:"small"},on:{click:function(a){e.select=1}}},[e._v("Choose orange")]),a("br"),a("Select",{attrs:{width:200,icon:e.Location,"arrow-icon":e.ChevronDownCircleOutline}},[a("Option",{attrs:{value:1,label:"Apple"}}),a("Option",{attrs:{value:2,label:"Orange"}}),a("Option",{attrs:{value:3,label:"Banana",disabled:""}}),a("Option",{attrs:{value:4,label:"Pear"}})],1),a("br"),a("Select",{attrs:{width:200,value:"1",disabled:"",icon:e.Search}},[a("Option",{attrs:{value:"1",label:"disabled"}})],1)],1)]),a("template",{slot:"description"},[a("h4",{attrs:{id:"带图标",tabindex:"-1"}},[e._v("带图标 "),a("a",{staticClass:"anchor",attrs:{href:"#带图标"}},[e._v("#")])]),a("p",[e._v("可以自定义图标")])]),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div> \n    <Select :width="200" :icon="Search" v-model="select"  theme="light" :arrow-icon="CaretDown" :options="data"/>\n    <Button @click="select=\'\'" size="small">Clear</Button>\n    <Button @click="select=1" size="small">Choose orange</Button>\n    <br />\n    <Select :width="200" :icon="Location" :arrow-icon="ChevronDownCircleOutline">\n      <Option :value="1" label="Apple" />\n      <Option :value="2" label="Orange" />\n      <Option :value="3" label="Banana" disabled/>\n      <Option :value="4" label="Pear" />\n    </Select>\n    <br />\n    <Select :width="200" value="1" disabled :icon="Search">\n      <Option value="1" label="disabled" />\n    </Select>\n  </div>\n</template>\n<script>\nimport { Search,Location, ChevronDownCircleOutline, CaretDown } from "kui-icons";\nexport default {\n  data() {\n    return {\n      Search,Location, ChevronDownCircleOutline, CaretDown,\n      select: 2,\n      data: [\n        { label: "Apple", value: 0 },\n        { label: "Orange", value: 1 },\n        { label: "Banana", value: 2 },\n        { label: "Pear", value: 3 },\n      ],\n    };\n  }\n}\n<\/script> \n')])])])],2)]],2)},k=[],y={data(){return{Search:g.Search,Location:g.Location,ChevronDownCircleOutline:g.ChevronDownCircleOutline,CaretDown:g.CaretDown,select:2,data:[{label:"Apple",value:0},{label:"Orange",value:1},{label:"Banana",value:2},{label:"Pear",value:3}]}}},B=y,x=(0,r.Z)(B,S,k,!1,null,null,null),C=x.exports,z=function(){var e=this,a=e._self._c;return a("div",[[a("demo",[a("template",{slot:"component"},[a("div",[a("RadioGroup",{attrs:{value:e.size,icon:e.Search},on:{change:e.setSize}},[a("RadioButton",{attrs:{value:"large",label:"large"}}),a("RadioButton",{attrs:{value:"default",label:"default"}}),a("RadioButton",{attrs:{value:"small",label:"small"}})],1),a("br"),a("br"),a("Select",{attrs:{width:256,size:e.size,clearable:"",filterable:"",icon:e.Search}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}})],1),a("br"),a("Select",{attrs:{width:256,size:e.size,multiple:"",filterable:"",icon:e.Search},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}})],1)],1)]),a("template",{slot:"description"},[a("h4",{attrs:{id:"尺寸",tabindex:"-1"}},[e._v("尺寸 "),a("a",{staticClass:"anchor",attrs:{href:"#尺寸"}},[e._v("#")])]),a("p",[e._v("通过 "),a("code",{pre:!0},[e._v("width")]),e._v(" 和 "),a("code",{pre:!0},[e._v("size")]),e._v(" 可控制组件尺寸大小")])]),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <RadioGroup :value="size" @change="setSize" :icon="Search">\n      <RadioButton value="large" label="large"/>\n      <RadioButton value="default" label="default"/>\n      <RadioButton value="small" label="small"/>\n    </RadioGroup>\n    <br />\n    <br />\n    <Select :width="256" :size="size" clearable filterable  :icon="Search">\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana"/>\n      <Option value="4" label="Pear" />\n    </Select>\n    <br />\n    <Select :width="256" :size="size" multiple v-model="value" filterable  :icon="Search">\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana" />\n      <Option value="4" label="Pear" />\n    </Select>\n  </div>\n</template>\n<script>\nimport { Search } from "kui-icons";\nexport default{\n  data() {\n    return {\n      Search,\n      size:\'default\',\n      value:[\'1\',\'3\']\n    }\n  },\n  methods:{\n    setSize({value}){\n      this.size = value\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},P=[],A={data(){return{Search:g.Search,size:"default",value:["1","3"]}},methods:{setSize({value:e}){this.size=e}}},j=A,D=(0,r.Z)(j,z,P,!1,null,null,null),q=D.exports,Z=function(){var e=this,a=e._self._c;return a("div",[[a("demo",[a("template",{slot:"component"},[a("div",[a("Select",{attrs:{width:200,clearable:""},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}})],1),e._v(" "+e._s(e.value1)+" "),a("br"),a("Select",{attrs:{width:200,size:"small",clearable:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}})],1),e._v(" "+e._s(e.value2)+" "),a("br"),a("Select",{attrs:{width:200,multiple:"",clearable:""},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}})],1),e._v(" "+e._s(e.value3)+" ")],1)]),a("template",{slot:"description"},[a("h4",{attrs:{id:"可清除",tabindex:"-1"}},[e._v("可清除 "),a("a",{staticClass:"anchor",attrs:{href:"#可清除"}},[e._v("#")])]),a("p",[e._v("通过 "),a("code",{pre:!0},[e._v("clearable")]),e._v(" 可控制组件是否显示清除按钮")])]),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <Select :width="200" clearable v-model="value1">\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana"/>\n      <Option value="4" label="Pear" />\n    </Select>\n    {{value1}}\n    <br />\n    <Select :width="200" size="small" clearable v-model="value2">\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana" />\n      <Option value="4" label="Pear" />\n    </Select>\n    {{value2}}\n    <br />\n    <Select :width="200" multiple clearable v-model="value3">\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana" />\n      <Option value="4" label="Pear" />\n    </Select>\n    {{value3}}\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      value1:\'\',\n      value2:\'\',\n      value3:[\'1\',\'2\']\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},R=[],G={data(){return{value1:"",value2:"",value3:["1","2"]}}},T=G,H=(0,r.Z)(T,Z,R,!1,null,null,null),L=H.exports,N=function(){var e=this,a=e._self._c;return a("div",[[a("demo",[a("template",{slot:"component"},[a("div",[a("Select",{attrs:{width:200,clearable:"",value:"2",bordered:!1}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}})],1),a("Select",{attrs:{width:200,size:"small",clearable:"",value:"2",disabled:"",bordered:!1}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}})],1),a("Select",{attrs:{width:200,showArrow:!1,placeholder:"隐藏下拉箭头"}})],1)]),a("template",{slot:"description"},[a("h4",{attrs:{id:"无边框",tabindex:"-1"}},[e._v("无边框 "),a("a",{staticClass:"anchor",attrs:{href:"#无边框"}},[e._v("#")])]),a("p",[e._v("无边框样式。")])]),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <Select :width="200" clearable value="2" :bordered="false">\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana"/>\n      <Option value="4" label="Pear" />\n    </Select>\n    <Select :width="200" size="small" clearable value="2" disabled :bordered="false">\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana" />\n      <Option value="4" label="Pear" />\n    </Select>\n    <Select :width="200" :showArrow="false" placeholder="隐藏下拉箭头" />\n  </div>\n</template>\n')])])])],2)]],2)},F=[],I={},V=(0,r.Z)(I,N,F,!1,null,null,null),E=V.exports,J=function(){var e=this,a=e._self._c;return a("div",[[a("demo",[a("template",{slot:"component"},[a("div",[a("p",[e._v("Select value:"+e._s(e.data))]),a("Select",{attrs:{width:300,multiple:"",size:"large"},model:{value:e.data,callback:function(a){e.data=a},expression:"data"}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}}),a("Option",{attrs:{value:"5",label:"Peach"}}),a("Option",{attrs:{value:"6",label:"Grape"}})],1),a("Button",{attrs:{size:"small"},on:{click:function(a){e.data=[]}}},[e._v("Clear")]),a("Button",{attrs:{size:"small"},on:{click:function(a){e.data=["3","1"]}}},[e._v("Select Banana & Apple")]),a("br"),a("Select",{attrs:{width:300,multiple:"",clearable:""},model:{value:e.data2,callback:function(a){e.data2=a},expression:"data2"}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}}),a("Option",{attrs:{value:"5",label:"Peach"}}),a("Option",{attrs:{value:"6",label:"Grape"}})],1),a("br"),a("Select",{attrs:{width:300,size:"small",multiple:""}},[a("Option",{attrs:{value:"1",label:"苹果"}}),a("Option",{attrs:{value:"2",label:"香蕉"}}),a("Option",{attrs:{value:"3",label:"梨子"}}),a("Option",{attrs:{value:"4",label:"火龙果"}}),a("Option",{attrs:{value:"5",label:"桃子"}}),a("Option",{attrs:{value:"6",label:"葡萄"}})],1),a("br"),a("Select",{attrs:{width:300,multiple:"",disabled:""},model:{value:e.data2,callback:function(a){e.data2=a},expression:"data2"}},[a("Option",{attrs:{value:"1",label:"Apple"}}),a("Option",{attrs:{value:"2",label:"Orange"}}),a("Option",{attrs:{value:"3",label:"Banana"}}),a("Option",{attrs:{value:"4",label:"Pear"}}),a("Option",{attrs:{value:"5",label:"Peach"}}),a("Option",{attrs:{value:"6",label:"Grape"}})],1)],1)]),a("template",{slot:"description"},[a("h4",{attrs:{id:"多选",tabindex:"-1"}},[e._v("多选 "),a("a",{staticClass:"anchor",attrs:{href:"#多选"}},[e._v("#")])]),a("p",[e._v("通过设置 "),a("code",{pre:!0},[e._v("multiple")]),e._v(" 值来呈现多选模式")])]),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <p>Select value:{{data}}</p>\n    <Select :width="300" multiple v-model="data" size="large" >\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana"/>\n      <Option value="4" label="Pear" />\n      <Option value="5" label="Peach" />\n      <Option value="6" label="Grape" />\n    </Select>\n    <Button size="small" @click="data=[]">Clear</Button>\n    <Button size="small" @click="data=[\'3\',\'1\']">Select Banana & Apple</Button>\n    <br/>\n    <Select :width="300" multiple v-model="data2" clearable>\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana"/>\n      <Option value="4" label="Pear" />\n      <Option value="5" label="Peach" />\n      <Option value="6" label="Grape" />\n    </Select>\n    <br/>\n    <Select :width="300" size="small" multiple >\n      <Option value="1" label="苹果" />\n      <Option value="2" label="香蕉" />\n      <Option value="3" label="梨子" />\n      <Option value="4" label="火龙果" />\n      <Option value="5" label="桃子" />\n      <Option value="6" label="葡萄" />\n    </Select>\n    <br/>\n    <Select :width="300" multiple v-model="data2" disabled>\n      <Option value="1" label="Apple" />\n      <Option value="2" label="Orange" />\n      <Option value="3" label="Banana"/>\n      <Option value="4" label="Pear" />\n      <Option value="5" label="Peach" />\n      <Option value="6" label="Grape" />\n    </Select>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n   return {\n     data:[],\n     data2:[\'2\',\'4\']\n   } \n  }\n}\n<\/script> \n')])])])],2)]],2)},K=[],M={data(){return{data:[],data2:["2","4"]}}},Q=M,U=(0,r.Z)(Q,J,K,!1,null,null,null),W=U.exports,X=function(){var e=this,a=e._self._c;return a("div",[[a("demo",[a("template",{slot:"component"},[a("div",{staticClass:"demo-select"},[a("span",[e._v("单选过滤 :")]),a("Select",{attrs:{size:"large",width:300,placeholder:"单选过滤",filterable:""},model:{value:e.data,callback:function(a){e.data=a},expression:"data"}},e._l(e.options,(function(e,t){return a("Option",{key:t,attrs:{value:e,label:e}})})),1),a("p"),a("br"),a("span",[e._v("多选过滤 :")]),a("Select",{staticClass:"demo-select",attrs:{multiple:"",width:300,placeholder:"多选过滤",filterable:""},model:{value:e.data2,callback:function(a){e.data2=a},expression:"data2"}},e._l(e.options,(function(e,t){return a("Option",{key:t,attrs:{value:e,label:e}})})),1)],1)]),a("template",{slot:"description"},[a("h4",{attrs:{id:"过滤",tabindex:"-1"}},[e._v("过滤 "),a("a",{staticClass:"anchor",attrs:{href:"#过滤"}},[e._v("#")])]),a("p",[e._v("通过设置 "),a("code",{pre:!0},[e._v("filterable")]),e._v(" 值来呈现过滤模式")])]),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <div class=\"demo-select\">\n    <span>单选过滤 :</span>\n    <Select \n      size=\"large\"\n      :width=\"300\"\n      v-model=\"data\" \n      placeholder=\"单选过滤\" filterable>\n      <Option :value=\"v\" :label=\"v\" v-for=\"(v,i) in options\" :key=\"i\"/>\n    </Select>\n    <p></p>\n    <br/>\n    <span>多选过滤 :</span>\n    <Select \n      class=\"demo-select\"\n      multiple \n      :width=\"300\"\n      v-model=\"data2\" \n      placeholder=\"多选过滤\" filterable >\n      <Option :value=\"v\" :label=\"v\" v-for=\"(v,i) in options\" :key=\"i\"/>\n    </Select>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n   return {\n     options:['almond','apple','apple core','apple juice','apple skin','apricot','apricot flesh','apricot pit','areca nut','banana','banana skin','bargain price','beechnut','Beijing flowering crab','bitter','bitterness','bitter orange','blackberry','canned fruit','carambola','cherry','cherry pit','cherry pulp','chestnut','Chinese chestnut','Chinese date','Chinese gooseberry','Chinese walnut','coconut','coconut milk','coconut water','cold storage','cold store','crisp','cumquat','damson plum','Dangshan pear','date','date pit','decayed fruit','downy pitch','dry fruit','duke','early-maturing','fig','filbert','first class','flat peach','flavour','flesh','flesh fruit','fresh','fresh litchi','fruiterer','fruit in bags','fruit knife','fruits of the season','gingko','give full weigh','give short weight','grape','grape juice','grape skin','grapestone','greengage','Hami melon','Hard','haw','hawthorn','hazel','honey peach','in season','juicy','juicy peach','jujube','kernel','kumquat','late-maturing','lemon','litchi','litchi rind','longan','longan pulp','loquat','mandarine','mango','mature','morello','muskmelon','navel orange','nut','nut meat','nut shell','oleaster','olive','orange','orange peel','papaya','peach','pear','perishable','pineapple','plum','plumcot','pomegranate','pomelo','red bayberry','reduced price','ripe','rotten fruit','seasonable','seedless orange','special-grade','strawberry','sultana','superfine','tangerine','tart','tender','tinned fruit','unripe','walnut','walnut kernel','water chestnut','watermelon'],\n     data:'',\n     data2:[],\n   } \n  }\n}\n<\/script> \n<style lang=\"less\">\n.demo-select {\n  .k-select-item,.k-select-tag{\n    text-transform: capitalize;\n  }\n}\n</style>\n")])])])],2)]],2)},Y=[],$={data(){return{options:["almond","apple","apple core","apple juice","apple skin","apricot","apricot flesh","apricot pit","areca nut","banana","banana skin","bargain price","beechnut","Beijing flowering crab","bitter","bitterness","bitter orange","blackberry","canned fruit","carambola","cherry","cherry pit","cherry pulp","chestnut","Chinese chestnut","Chinese date","Chinese gooseberry","Chinese walnut","coconut","coconut milk","coconut water","cold storage","cold store","crisp","cumquat","damson plum","Dangshan pear","date","date pit","decayed fruit","downy pitch","dry fruit","duke","early-maturing","fig","filbert","first class","flat peach","flavour","flesh","flesh fruit","fresh","fresh litchi","fruiterer","fruit in bags","fruit knife","fruits of the season","gingko","give full weigh","give short weight","grape","grape juice","grape skin","grapestone","greengage","Hami melon","Hard","haw","hawthorn","hazel","honey peach","in season","juicy","juicy peach","jujube","kernel","kumquat","late-maturing","lemon","litchi","litchi rind","longan","longan pulp","loquat","mandarine","mango","mature","morello","muskmelon","navel orange","nut","nut meat","nut shell","oleaster","olive","orange","orange peel","papaya","peach","pear","perishable","pineapple","plum","plumcot","pomegranate","pomelo","red bayberry","reduced price","ripe","rotten fruit","seasonable","seedless orange","special-grade","strawberry","sultana","superfine","tangerine","tart","tender","tinned fruit","unripe","walnut","walnut kernel","water chestnut","watermelon"],data:"",data2:[]}}},ee=$,ae=(0,r.Z)(ee,X,Y,!1,null,null,null),te=ae.exports,le=function(){var e=this,a=e._self._c;return a("div",[[a("demo",[a("template",{slot:"component"},[a("div",{staticClass:"demo-select"},[a("span",[e._v("单选搜索: ")]),a("Select",{attrs:{width:300,loading:e.loading1,placeholder:"单选搜索"},on:{search:e.search1},model:{value:e.s1,callback:function(a){e.s1=a},expression:"s1"}},e._l(e.options1,(function(e,t){return a("Option",{key:t,attrs:{value:e,label:e}})})),1),a("p"),a("br"),a("span",[e._v("多选搜索")]),a("Select",{staticClass:"demo-select",attrs:{multiple:"",width:300,loading:e.loading2,placeholder:"多选过滤"},on:{search:e.search2},model:{value:e.s2,callback:function(a){e.s2=a},expression:"s2"}},e._l(e.options2,(function(e,t){return a("Option",{key:t,attrs:{value:e,label:e}})})),1)],1)]),a("template",{slot:"description"},[a("h4",{attrs:{id:"远程搜索",tabindex:"-1"}},[e._v("远程搜索 "),a("a",{staticClass:"anchor",attrs:{href:"#远程搜索"}},[e._v("#")])]),a("p",[e._v("通过设置 "),a("code",{pre:!0},[e._v("search")]),e._v(" 值来呈现过滤模式,设置 "),a("code",{pre:!0},[e._v("loading")]),e._v(" 展示加载模式")])]),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <div class=\"demo-select\">\n    <span>单选搜索: </span>\n    <Select \n      v-model=\"s1\" \n      :width=\"300\"\n      @search=\"search1\"\n      :loading=\"loading1\"\n      placeholder=\"单选搜索\">\n      <Option :value=\"v\" :label=\"v\" v-for=\"(v,i) in options1\" :key=\"i\"/>\n    </Select>\n    <p></p>\n    <br/>\n    <span>多选搜索</span>\n    <Select \n      class=\"demo-select\"\n      multiple \n      :width=\"300\"\n      :loading=\"loading2\"\n      @search=\"search2\"\n      v-model=\"s2\" \n      placeholder=\"多选过滤\">\n      <Option :value=\"v\" :label=\"v\" v-for=\"(v,i) in options2\" :key=\"i\"/>\n    </Select>\n  </div>\n</template>\n<script>\nlet timeout;\nexport default{\n  data() {\n   return {\n     data:['almond','apple','apple core','apple juice','apple skin','apricot','apricot flesh','apricot pit','areca nut','banana','banana skin','bargain price','beechnut','Beijing flowering crab','bitter','bitterness','bitter orange','blackberry','canned fruit','carambola','cherry','cherry pit','cherry pulp','chestnut','Chinese chestnut','Chinese date','Chinese gooseberry','Chinese walnut','coconut','coconut milk','coconut water','cold storage','cold store','crisp','cumquat','damson plum','Dangshan pear','date','date pit','decayed fruit','downy pitch','dry fruit','duke','early-maturing','fig','filbert','first class','flat peach','flavour','flesh','flesh fruit','fresh','fresh litchi','fruiterer','fruit in bags','fruit knife','fruits of the season','gingko','give full weigh','give short weight','grape','grape juice','grape skin','grapestone','greengage','Hami melon','Hard','haw','hawthorn','hazel','honey peach','in season','juicy','juicy peach','jujube','kernel','kumquat','late-maturing','lemon','litchi','litchi rind','longan','longan pulp','loquat','mandarine','mango','mature','morello','muskmelon','navel orange','nut','nut meat','nut shell','oleaster','olive','orange','orange peel','papaya','peach','pear','perishable','pineapple','plum','plumcot','pomegranate','pomelo','red bayberry','reduced price','ripe','rotten fruit','seasonable','seedless orange','special-grade','strawberry','sultana','superfine','tangerine','tart','tender','tinned fruit','unripe','walnut','walnut kernel','water chestnut','watermelon'],\n     options1:[],options2:[],\n     s1:'',\n     loading1:false,\n     loading2:false,\n     s2:[],\n   } \n  },\n  methods:{\n    search1(e){\n      this.loading1 = true\n      //模拟异步请求\n      if(timeout){\n        clearTimeout(timeout)\n        timeout = null\n      }\n      timeout = setTimeout(t=>{\n       this.options1 =  this.data.filter(x=>x.indexOf(e.target.value)>=0)\n       this.loading1 = false\n      },1500)\n    },\n    search2(e){\n      this.loading2 = true\n      //模拟异步请求\n      if(timeout){\n        clearTimeout(timeout)\n        timeout = null\n      }\n      timeout = setTimeout(t=>{\n       this.options2 =  this.data.filter(x=>x.indexOf(e.target.value)>=0)\n       this.loading2 = false\n      },1500)\n    }\n  }\n}\n<\/script>\n")])])])],2)]],2)},ne=[];let re;var ie,oe,se={data(){return{data:["almond","apple","apple core","apple juice","apple skin","apricot","apricot flesh","apricot pit","areca nut","banana","banana skin","bargain price","beechnut","Beijing flowering crab","bitter","bitterness","bitter orange","blackberry","canned fruit","carambola","cherry","cherry pit","cherry pulp","chestnut","Chinese chestnut","Chinese date","Chinese gooseberry","Chinese walnut","coconut","coconut milk","coconut water","cold storage","cold store","crisp","cumquat","damson plum","Dangshan pear","date","date pit","decayed fruit","downy pitch","dry fruit","duke","early-maturing","fig","filbert","first class","flat peach","flavour","flesh","flesh fruit","fresh","fresh litchi","fruiterer","fruit in bags","fruit knife","fruits of the season","gingko","give full weigh","give short weight","grape","grape juice","grape skin","grapestone","greengage","Hami melon","Hard","haw","hawthorn","hazel","honey peach","in season","juicy","juicy peach","jujube","kernel","kumquat","late-maturing","lemon","litchi","litchi rind","longan","longan pulp","loquat","mandarine","mango","mature","morello","muskmelon","navel orange","nut","nut meat","nut shell","oleaster","olive","orange","orange peel","papaya","peach","pear","perishable","pineapple","plum","plumcot","pomegranate","pomelo","red bayberry","reduced price","ripe","rotten fruit","seasonable","seedless orange","special-grade","strawberry","sultana","superfine","tangerine","tart","tender","tinned fruit","unripe","walnut","walnut kernel","water chestnut","watermelon"],options1:[],options2:[],s1:"",loading1:!1,loading2:!1,s2:[]}},methods:{search1(e){this.loading1=!0,re&&(clearTimeout(re),re=null),re=setTimeout((a=>{this.options1=this.data.filter((a=>a.indexOf(e.target.value)>=0)),this.loading1=!1}),1500)},search2(e){this.loading2=!0,re&&(clearTimeout(re),re=null),re=setTimeout((a=>{this.options2=this.data.filter((a=>a.indexOf(e.target.value)>=0)),this.loading2=!1}),1500)}}},pe=se,ue=(0,r.Z)(pe,le,ne,!1,null,null,null),ce=ue.exports,de=function(){var e=this;e._self._c;return e._m(0)},ve=[function(){var e=this,a=e._self._c;return a("div",[a("h3",{attrs:{id:"select-api",tabindex:"-1"}},[e._v("Select API "),a("a",{staticClass:"anchor",attrs:{href:"#select-api"}},[e._v("#")])]),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("value")]),a("td",[e._v("指定选中项目的 "),a("code",{pre:!0},[e._v("value")]),e._v(" 值，可以使用 "),a("code",{pre:!0},[e._v("v-model")]),e._v(" 双向绑定数据")]),a("td",[e._v("String,Number")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("width")]),a("td",[e._v("组件宽度")]),a("td",[e._v("String,Number")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("placeholder")]),a("td",[e._v("选择框默认文字")]),a("td",[e._v("String")]),a("td",[e._v("请选择")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("是否禁用当前项")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("size")]),a("td",[e._v("组件尺寸大小,提供"),a("code",{pre:!0},[e._v("small")]),e._v(","),a("code",{pre:!0},[e._v("large")]),e._v("两种尺寸，默认为正常")]),a("td",[e._v("String")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("emptyText")]),a("td",[e._v("没有数据时展示的提示")]),a("td",[e._v("String")]),a("td",[e._v("'赞无数据'")])]),a("tr",[a("td",[e._v("multiple")]),a("td",[e._v("是否呈现多选模式")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("loading")]),a("td",[e._v("是否显示异步加载")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("clearable")]),a("td",[e._v("是否可以清空选项")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("bordered")]),a("td",[e._v("是否显示边框")]),a("td",[e._v("Boolean")]),a("td",[e._v("true")])]),a("tr",[a("td",[e._v("showArrow")]),a("td",[e._v("是否显示下拉按钮")]),a("td",[e._v("Boolean")]),a("td",[e._v("true")])]),a("tr",[a("td",[e._v("transfer")]),a("td",[e._v("默认渲染到body 上，如定位有问题，请尝试修改为 false")]),a("td",[e._v("Boolean")]),a("td",[e._v("true")])]),a("tr",[a("td",[e._v("change")]),a("td",[e._v("在选项状态发生改变时触发，返回选择项{value:xx,label:xx}")]),a("td",[e._v("Function")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("open-change")]),a("td",[e._v("下拉框展开或收起时触发")]),a("td",[e._v("Function")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("options")]),a("td",[e._v("options 数据，如果设置则不需要手动构造 Option 节点")]),a("td",[e._v("Array <{value,label,disabled}>")]),a("td",[e._v("[]")])]),a("tr",[a("td",[e._v("theme")]),a("td",[e._v("theme='light' 时呈现浅色主题")]),a("td",[e._v("String")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("icon")]),a("td",[e._v("自定义图标")]),a("td",[e._v("String")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("shape")]),a("td",[e._v("shape='circle' 时呈现圆角")]),a("td",[e._v("String")]),a("td",[e._v("-")])])])]),a("h3",{attrs:{id:"option-api",tabindex:"-1"}},[e._v("Option API "),a("a",{staticClass:"anchor",attrs:{href:"#option-api"}},[e._v("#")])]),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("key")]),a("td",[e._v("和 value 含义一致。如果 Vue 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置")]),a("td",[e._v("String,Number")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("value")]),a("td",[e._v("选项值，默认根据此属性值进行筛选，必填")]),a("td",[e._v("String,Number")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("label")]),a("td",[e._v("选项显示的内容")]),a("td",[e._v("String,Number")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("是否禁用当前项")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])])])])])}],he={},be=(0,r.Z)(he,de,ve,!1,null,null,null),me=be.exports,ge={render(){const e=arguments[0];return e("div",{class:"demo-select"},[e(s),e(h),e(w),e(C),e(q),e(L),e(E),e(W),e(te),e(ce),e(me)])}},fe=ge,_e=(0,r.Z)(fe,ie,oe,!1,null,null,null),Oe=_e.exports}}]);