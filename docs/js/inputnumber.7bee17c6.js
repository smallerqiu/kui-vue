/*!
 * kui-vue v3.3.4
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[9233],{7925:function(t,n,e){e.r(n),e.d(n,{default:function(){return G}});var r,a,l=function(){var t=this;t._self._c;return t._m(0)},u=[function(){var t=this,n=t._self._c;return n("div",[n("h1",[t._v("InputNumber 数字输入框")]),n("p",[t._v("通过鼠标或键盘，输入范围内的数值。")]),n("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t._v("何时使用 "),n("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[t._v("#")])]),n("p",[t._v("当需要获取标准数值时。")]),n("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t._v("代码演示 "),n("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[t._v("#")])])])}],o=e(1001),s={},p=(0,o.Z)(s,l,u,!1,null,null,null),i=p.exports,d=function(){var t=this,n=t._self._c;return n("div",[[n("demo",[n("template",{slot:"component"},[n("div",{staticStyle:{width:"200px","font-size":"12px"}},[t._v(" 简单数字输入框"),n("br"),n("InputNumber",{model:{value:t.value,callback:function(n){t.value=n},expression:"value"}}),n("br"),n("br"),t._v(" 步长为2"),n("br"),n("InputNumber",{attrs:{step:2,value:2}}),n("br"),n("br"),t._v(" 设置了上下界 min=1,max=10"),n("br"),n("InputNumber",{attrs:{min:1,max:10}}),n("br"),n("br"),t._v(" 禁用"),n("br"),n("InputNumber",{attrs:{disabled:""}})],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[t._v("基本用法 "),n("a",{staticClass:"anchor",attrs:{href:"#基本用法"}},[t._v("#")])]),n("p",[t._v("基本用法")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div style="width:200px;font-size:12px;">\n     简单数字输入框<br/>\n     <InputNumber v-model="value"/>\n     <br/>\n     <br/>\n     步长为2<br/>\n     <InputNumber :step="2" :value="2"/>\n     <br/>\n     <br/>\n     设置了上下界 min=1,max=10<br/>\n     <InputNumber :min="1" :max="10"/>\n     <br/>\n     <br/>\n     禁用<br/>\n     <InputNumber disabled />\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},v=[],c={data(){return{value:""}}},b=c,m=(0,o.Z)(b,d,v,!1,null,null,null),_=m.exports,f=function(){var t=this,n=t._self._c;return n("div",[[n("demo",[n("template",{slot:"component"},[n("div",{staticStyle:{"max-width":"520px"}},[t._v(" 0.1+0.2 = 0.3 (yes) ,输出："+t._s(t.n)+" "),n("InputNumber",{attrs:{step:.2},model:{value:t.n,callback:function(n){t.n=n},expression:"n"}}),n("br"),n("br"),t._v(" 步长为 0.00000000000001 ,输出："+t._s(t.n1)+" "),n("InputNumber",{attrs:{min:0,max:10,step:1e-14},model:{value:t.n1,callback:function(n){t.n1=n},expression:"n1"}}),n("br"),n("br"),t._v(" 保留2位小数, 输出："+t._s(t.n3)),n("br"),n("InputNumber",{attrs:{precision:2},model:{value:t.n3,callback:function(n){t.n3=n},expression:"n3"}}),n("br"),n("br"),t._v(" 货币，千分位,输出： "+t._s(t.n4)),n("br"),n("InputNumber",{attrs:{min:0,formatter:t=>`￥ ${t}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:t=>t.replace(/\￥\s?|(,*)/g,"")},on:{change:t.log},model:{value:t.n4,callback:function(n){t.n4=n},expression:"n4"}}),n("br"),n("br"),t._v(" 百分比% ,输出： "+t._s(t.n5)),n("br"),n("InputNumber",{attrs:{min:0,max:100,formatter:t=>`${t}%`,parser:t=>t.replace("%","")},model:{value:t.n5,callback:function(n){t.n5=n},expression:"n5"}}),n("br"),n("br"),t._v(" 只能输入数字,输出： "+t._s(t.n6)),n("br"),n("InputNumber",{attrs:{formatter:t=>t.replace(/\D/g,"")},model:{value:t.n6,callback:function(n){t.n6=n},expression:"n6"}}),n("br"),n("br"),t._v(" 自定义 ,输出："+t._s(t.n7)),n("br"),n("InputNumber",{attrs:{formatter:t=>String(t).split("").join("-"),parser:t=>t.replace(/\-/g,"")},model:{value:t.n7,callback:function(n){t.n7=n},expression:"n7"}})],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"高精度小数/格式化展示",tabindex:"-1"}},[t._v("高精度小数/格式化展示 "),n("a",{staticClass:"anchor",attrs:{href:"#高精度小数/格式化展示"}},[t._v("#")])]),n("p",[t._v("通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n    <div style="max-width:520px;">\n     0.1+0.2 = 0.3 (yes)     ,输出：{{n}}  \n     <InputNumber :step="0.2" v-model="n"/>\n     <br/>\n     <br/>\n     步长为 0.00000000000001 ,输出：{{n1}}     \n     <InputNumber\n      v-model="n1"\n      :min="0"\n      :max="10"\n      :step="0.00000000000001"/>\n     <br/>\n     <br/>\n     保留2位小数, 输出：{{n3}}<br/>\n     <InputNumber :precision="2" v-model="n3" />\n     <br/>\n     <br/>\n     货币，千分位,输出： {{n4}}<br/>\n     <InputNumber \n      @change="log"\n      v-model="n4"\n      :min="0"\n      :formatter="value => `￥ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, \',\')"\n      :parser="value => value.replace(/\\￥\\s?|(,*)/g, \'\')"\n      />\n      <br/>\n      <br/>\n      百分比% ,输出： {{n5}}<br/>\n      <InputNumber\n        v-model="n5"\n        :min="0"\n        :max="100"\n        :formatter="value => `${value}%`"\n        :parser="value => value.replace(\'%\', \'\')"\n      />\n      <br/>\n      <br/>\n      只能输入数字,输出： {{n6}}<br/>\n      <InputNumber\n        v-model="n6"\n        :formatter="value => value.replace(/\\D/g, \'\')"\n      />\n      <br/>\n      <br/>\n      自定义 ,输出：{{n7}}<br/>\n      <InputNumber\n        v-model="n7"\n        :formatter="value => String(value).split(\'\').join(\'-\')"\n        :parser="value => value.replace(/\\-/g, \'\')"\n      />\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      n:0.1,\n      n1: 1,\n      n3: 3.14159,\n      n4: 1000,\n      n5: 100,\n      n6: \'\',\n      n7: 111111\n    }\n  },\n  methods:{\n    log(value){\n      console.log(value)\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},h=[],x={data(){return{n:.1,n1:1,n3:3.14159,n4:1e3,n5:100,n6:"",n7:111111}},methods:{log(t){console.log(t)}}},g=x,I=(0,o.Z)(g,f,h,!1,null,null,null),N=I.exports,L=function(){var t=this,n=t._self._c;return n("div",[[n("demo",[n("template",{slot:"component"},[n("div",{staticStyle:{width:"256px"}},[n("InputNumber",{attrs:{placeholder:"请填写您的薪资",icon:t.LogoYen}},[n("template",{slot:"suffix"},[n("Tooltip",{attrs:{title:"此处如果不知道怎么填，请咨询管理员"}},[n("Icon",{attrs:{type:t.Heart,color:"red"}})],1)],1)],2),n("br"),n("br"),n("InputNumber",{attrs:{placeholder:"请输入金额",suffix:"元",prefix:"$"}}),n("br"),n("br"),n("InputNumber",{attrs:{placeholder:"请输入充值金额",step:50,suffix:"元",prefix:"充值"}}),n("br"),n("br"),n("InputNumber",{attrs:{placeholder:"请输入金额",suffix:".00"}})],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"扩展,-前缀和后缀",tabindex:"-1"}},[t._v("扩展, 前缀和后缀 "),n("a",{staticClass:"anchor",attrs:{href:"#扩展,-前缀和后缀"}},[t._v("#")])]),n("p",[t._v("suffix，prefix 扩展")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div style="width:256px;">\n    <InputNumber placeholder="请填写您的薪资" :icon="LogoYen" >\n      <template slot="suffix">\n          <Tooltip title="此处如果不知道怎么填，请咨询管理员">\n            <Icon :type="Heart" color="red"/>\n          </Tooltip>  \n      </template>\n    </InputNumber>\n    <br/>\n    <br/>\n    <InputNumber placeholder="请输入金额" suffix="元" prefix="$"/>\n    <br/>\n    <br/>\n    <InputNumber placeholder="请输入充值金额" :step="50" suffix="元" prefix="充值"/>\n    <br/>\n    <br/>\n    <InputNumber placeholder="请输入金额" suffix=".00"/>\n  </div>\n</template>\n<script>\nimport { Heart, LogoYen } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Heart, LogoYen\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},k=[],y=e(5118),S={data(){return{Heart:y.Heart,LogoYen:y.LogoYen}}},w=S,K=(0,o.Z)(w,L,k,!1,null,null,null),C=K.exports,z=function(){var t=this,n=t._self._c;return n("div",[[n("demo",[n("template",{slot:"component"},[n("div",{staticStyle:{width:"512px"}},[n("InputNumber",{attrs:{placeholder:"Large Input",size:"large",icon:t.LogoKui,clearable:""}}),n("br"),n("br"),n("InputNumber",{attrs:{placeholder:"Base Input",icon:t.LogoKui,clearable:""}}),n("br"),n("br"),n("InputNumber",{attrs:{size:"small",placeholder:"Small Input",icon:t.LogoKui,clearable:""}})],1)]),n("template",{slot:"description"},[n("h4",{attrs:{id:"尺寸",tabindex:"-1"}},[t._v("尺寸 "),n("a",{staticClass:"anchor",attrs:{href:"#尺寸"}},[t._v("#")])]),n("p",[n("code",{pre:!0},[t._v("large")]),t._v(" 为大尺寸， "),n("code",{pre:!0},[t._v("small")]),t._v(" 为小尺寸")])]),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div style="width:512px;">\n    <InputNumber placeholder="Large Input" size="large" :icon="LogoKui" clearable />\n    <br/>\n    <br/>\n    <InputNumber placeholder="Base Input" :icon="LogoKui" clearable />\n    <br/>\n    <br/>\n    <InputNumber size="small" placeholder="Small Input" :icon="LogoKui" clearable />\n  </div>\n</template>\n<script>\nimport { LogoKui } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      LogoKui\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},Z=[],B={data(){return{LogoKui:y.LogoKui}}},H=B,Y=(0,o.Z)(H,z,Z,!1,null,null,null),$=Y.exports,F=function(){var t=this;t._self._c;return t._m(0)},T=[function(){var t=this,n=t._self._c;return n("div",[n("h3",{attrs:{id:"inputnumber-api",tabindex:"-1"}},[t._v("InputNumber API "),n("a",{staticClass:"anchor",attrs:{href:"#inputnumber-api"}},[t._v("#")])]),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("min")]),n("td",[t._v("最小值")]),n("td",[t._v("number")]),n("td",[t._v("0")])]),n("tr",[n("td",[t._v("max")]),n("td",[t._v("最大值")]),n("td",[t._v("number")]),n("td",[t._v("100")])]),n("tr",[n("td",[t._v("step")]),n("td",[t._v("每次改变步数，可以为小数")]),n("td",[t._v("Number,String")]),n("td",[t._v("1")])]),n("tr",[n("td",[t._v("value(v-model)")]),n("td",[t._v("当前值")]),n("td",[t._v("Number")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("formatter")]),n("td",[t._v("指定输入框展示值的格式")]),n("td",[t._v("Function")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("parser")]),n("td",[t._v("指定从 formatter 里转换回数字的方式，和 formatter 搭配使用")]),n("td",[t._v("Function")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("change")]),n("td",[t._v("变化回调")]),n("td",[t._v("Function")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("size")]),n("td",[t._v("输入框大小")]),n("td",[t._v("String")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("disabled")]),n("td",[t._v("禁用")]),n("td",[t._v("Boolean")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("precision")]),n("td",[t._v("数值精度")]),n("td",[t._v("Number")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("suffix")]),n("td",[t._v("自定义后缀")]),n("td",[t._v("String,slot")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("prefix")]),n("td",[t._v("前缀内容")]),n("td",[t._v("String,slot")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("controls")]),n("td",[t._v("是否显示增减按钮")]),n("td",[t._v("Boolean")]),n("td",[t._v("true")])])])])])}],j={},D=(0,o.Z)(j,F,T,!1,null,null,null),A=D.exports,P={render(){const t=arguments[0];return t("div",{class:"demo-inputnumber"},[t(i),t(_),t(N),t(C),t($),t(A)])}},q=P,E=(0,o.Z)(q,r,a,!1,null,null,null),G=E.exports}}]);