/*!
 * kui-vue v3.3.4
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[8192],{6129:function(e,t,r){r.r(t),r.d(t,{default:function(){return $}});var n,s,o=function(){var e=this;e._self._c;return e._m(0)},c=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Progress 进度条")]),t("p",[e._v("展示操作的当前进度。")]),t("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e._v("何时使用 "),t("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[e._v("#")])]),t("p",[e._v("在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。")]),t("ul",[t("li",[e._v("当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；")]),t("li",[e._v("当需要显示一个操作完成的百分比时。")])]),t("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e._v("代码演示 "),t("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[e._v("#")])])])}],a=r(1001),p={},l=(0,a.Z)(p,o,c,!1,null,null,null),i=l.exports,d=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[t("Progress",{attrs:{percent:30}}),t("Progress",{attrs:{percent:50,status:"active"}}),t("Progress",{attrs:{percent:70,status:"exception"}}),t("Progress",{attrs:{percent:100}}),t("Progress",{attrs:{percent:50,showInfo:!1}})],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"进度条",tabindex:"-1"}},[e._v("进度条 "),t("a",{staticClass:"anchor",attrs:{href:"#进度条"}},[e._v("#")])]),t("p",[e._v("标准的进度条。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <Progress :percent="30" />\n  <Progress :percent="50" status="active" />\n  <Progress :percent="70" status="exception" />\n  <Progress :percent="100" />\n  <Progress :percent="50" :showInfo="false" />\n</template>\n')])])])],2)]],2)},v=[],u={},m=(0,a.Z)(u,d,v,!1,null,null,null),h=m.exports,_=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[t("Progress",{attrs:{type:"circle",percent:50}}),t("Progress",{attrs:{type:"circle",percent:70,status:"exception"}}),t("Progress",{attrs:{type:"circle",percent:100}}),t("Progress",{attrs:{type:"circle",percent:50}},[t("div",{staticClass:"demo-progress",attrs:{slot:"format"},slot:"format"},[t("h2",{staticStyle:{margin:"0"}},[e._v("13389")]),t("span",[e._v("今日步数")])])])],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"进度圈",tabindex:"-1"}},[e._v("进度圈 "),t("a",{staticClass:"anchor",attrs:{href:"#进度圈"}},[e._v("#")])]),t("p",[e._v("圆形的进度条。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <Progress type="circle" :percent="50" />\n  <Progress type="circle" :percent="70" status="exception" />\n  <Progress type="circle" :percent="100" />\n   <Progress type="circle" :percent="50">\n    <div slot="format" class="demo-progress">\n      <h2 style="margin:0">13389</h2>\n      <span>今日步数</span>\n    </div>\n  </Progress>\n</template>\n<style>\n.demo-progress>h2{\n  font-size:23px\n}\n.demo-progress>span{\n  font-size:14px;\n  color:#999;\n}\n</style>\n')])])])],2)]],2)},g=[],f={},b=(0,a.Z)(f,_,g,!1,null,null,null),P=b.exports,x=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[t("Progress",{staticStyle:{width:"300px","margin-bottom":"30px"},attrs:{percent:e.percent}}),t("Progress",{attrs:{percent:e.percent,type:"circle"}}),t("Progress",{attrs:{percent:e.percent,type:"dashboard"}}),t("br"),t("ButtonGroup",{attrs:{circle:""}},[t("Button",{attrs:{icon:e.Remove},on:{click:e.decline}}),t("Button",{attrs:{icon:e.Add},on:{click:e.increase}})],1)],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"动态展示",tabindex:"-1"}},[e._v("动态展示 "),t("a",{staticClass:"anchor",attrs:{href:"#动态展示"}},[e._v("#")])]),t("p",[e._v("会动的进度条才是好进度条。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <Progress :percent="percent" style="width:300px;margin-bottom:30px;"/>\n  <Progress :percent="percent" type="circle"/>\n  <Progress :percent="percent" type="dashboard" />\n  <br/>\n  <ButtonGroup circle>\n    <Button @click="decline" :icon="Remove" />\n    <Button @click="increase" :icon="Add"/>\n  </ButtonGroup>\n</template>\n<script>\nimport { Remove, Add } from "kui-icons";\nexport default{\n  data() {\n    return {\n      Remove,Add,\n      percent:30\n    }\n  },\n  methods:{\n    increase() {\n      let percent = this.percent + 5;\n      if (percent > 100) {\n        percent = 100;\n      }\n      this.percent = percent;\n    },\n    decline() {\n      let percent = this.percent - 5;\n      if (percent < 0) {\n        percent = 0;\n      }\n      this.percent = percent;\n    },\n  }\n}\n<\/script>  \n')])])])],2)]],2)},k=[],y=r(5118),w={data(){return{Remove:y.Remove,Add:y.Add,percent:30}},methods:{increase(){let e=this.percent+5;e>100&&(e=100),this.percent=e},decline(){let e=this.percent-5;e<0&&(e=0),this.percent=e}}},C=w,B=(0,a.Z)(C,x,k,!1,null,null,null),L=B.exports,R=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[e._v(" gapDegree："+e._s(e.gap)+" "),t("Slider",{attrs:{min:50,max:160},model:{value:e.gap,callback:function(t){e.gap=t},expression:"gap"}}),t("br"),t("br"),t("RadioGroup",{attrs:{options:e.caps,type:"button",theme:"light"},model:{value:e.strokeLinecap,callback:function(t){e.strokeLinecap=t},expression:"strokeLinecap"}}),t("br"),t("br"),t("Progress",{attrs:{type:"dashboard",percent:50,gapDegree:e.gap,strokeLinecap:e.strokeLinecap}}),t("Progress",{attrs:{type:"dashboard",percent:100,gapDegree:e.gap,strokeLinecap:e.strokeLinecap}})],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"盘仪表进度条",tabindex:"-1"}},[e._v("盘仪表进度条 "),t("a",{staticClass:"anchor",attrs:{href:"#盘仪表进度条"}},[e._v("#")])]),t("p",[e._v("盘仪表进度条。可通过"),t("code",{pre:!0},[e._v("gapDegree")]),e._v("调节缺口大小。"),t("code",{pre:!0},[e._v('strokeLinecap="square|round"')]),e._v(" 可以调整进度条边缘的形状。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  gapDegree：{{gap}}\n  <Slider v-model="gap" :min="50" :max="160" />\n  <br/>\n  <br/>\n  <RadioGroup :options="caps" v-model="strokeLinecap" type="button" theme="light"/>\n  <br/>\n  <br/>\n  <Progress type="dashboard" :percent="50" :gapDegree="gap"  :strokeLinecap="strokeLinecap"/>\n  <Progress type="dashboard" :percent="100" :gapDegree="gap" :strokeLinecap="strokeLinecap"/>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      gap:140,\n      strokeLinecap:\'round\',\n      caps:[\n       {label:\'Butt\',value:\'butt\'},\n       {label:\'Round\',value:\'round\'},\n       {label:\'Square\',value:\'square\'},\n      ]\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},A=[],S={data(){return{gap:140,strokeLinecap:"round",caps:[{label:"Butt",value:"butt"},{label:"Round",value:"round"},{label:"Square",value:"square"}]}}},z=S,Z=(0,a.Z)(z,R,A,!1,null,null,null),D=Z.exports,G=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[t("Progress",{staticStyle:{width:"300px","margin-bottom":"30px"},attrs:{percent:e.percent,format:e.format1,color:e.color}}),t("Progress",{attrs:{percent:e.percent,type:"circle",format:e.format2,color:e.color}}),t("Progress",{attrs:{percent:e.percent,type:"dashboard",format:e.format3,color:e.color}}),t("br"),t("ButtonGroup",{attrs:{circle:""}},[t("Button",{attrs:{icon:e.Remove},on:{click:e.decline}}),t("Button",{attrs:{icon:e.Add},on:{click:e.increase}})],1)],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"颜色和格式",tabindex:"-1"}},[e._v("颜色和格式 "),t("a",{staticClass:"anchor",attrs:{href:"#颜色和格式"}},[e._v("#")])]),t("p",[e._v("自定义颜色和自定义格式。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <Progress :percent="percent" :format="format1" :color="color"  style="width:300px;margin-bottom:30px;"/>\n  <Progress :percent="percent" type="circle" :format="format2" :color="color" />\n  <Progress :percent="percent" type="dashboard" :format="format3" :color="color" />\n  <br/>\n  <ButtonGroup circle>\n    <Button @click="decline" :icon="Remove" />\n    <Button @click="increase" :icon="Add" />\n  </ButtonGroup>\n</template>\n<script>\nimport { Remove, Add } from "kui-icons";\nexport default{\n  data() {\n    return {\n      Remove,Add,\n      percent:0,\n      color:\'\'\n    }\n  },\n  methods:{\n    format2(percent){\n      return percent + \'℃\'\n    },\n    format3(percent){\n      return percent + \'升\'\n    },\n    format1(){\n      let percent = this.percent\n      if(percent < 30){\n        return \'空\';\n      } else if( percent >= 30 && percent < 50 ){\n        return \'弱\'\n      } else if( percent >= 50 && percent < 80 ){\n        return \'中\'\n      } else if( percent >= 80 ){\n        return \'强\'\n      }\n    },\n    increase() {\n      let percent = this.percent + 5;\n      if (percent > 100) {\n        percent = 100;\n      }\n      this.percent = percent;\n      this.changeColor(percent)\n    },\n    decline() {\n      let percent = this.percent - 5;\n      if (percent < 0) {\n        percent = 0;\n      }\n      this.percent = percent;\n      this.changeColor(percent)\n    },\n    changeColor(percent){\n      let {color} = this\n      if( percent >= 30 && percent < 50 ){\n        color = \'#bdc78d\'\n      } else if( percent >= 50 && percent < 80 ){\n        color = \'#c7b98d\'\n      } else if( percent >= 80 ){\n        color = \'#f79e08\'\n      }\n      this.color = color\n    }\n  }\n}\n<\/script>  \n')])])])],2)]],2)},q=[],H={data(){return{Remove:y.Remove,Add:y.Add,percent:0,color:""}},methods:{format2(e){return e+"℃"},format3(e){return e+"升"},format1(){let e=this.percent;return e<30?"空":e>=30&&e<50?"弱":e>=50&&e<80?"中":e>=80?"强":void 0},increase(){let e=this.percent+5;e>100&&(e=100),this.percent=e,this.changeColor(e)},decline(){let e=this.percent-5;e<0&&(e=0),this.percent=e,this.changeColor(e)},changeColor(e){let{color:t}=this;e>=30&&e<50?t="#bdc78d":e>=50&&e<80?t="#c7b98d":e>=80&&(t="#f79e08"),this.color=t}}},W=H,I=(0,a.Z)(W,G,q,!1,null,null,null),F=I.exports,N=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[e._v(" Custom: "),t("Progress",{attrs:{strokeHeight:10,percent:50}}),t("Progress",{attrs:{strokeHeight:3,percent:50}}),t("Progress",{attrs:{strokeWidth:15,type:"circle",width:80,percent:50}}),t("Progress",{attrs:{strokeWidth:3,type:"circle",width:80,percent:50}}),t("br"),e._v(" Small: "),t("div",{style:{width:"300px",marginBottom:"30px"}},[t("Progress",{attrs:{size:"small",percent:50}}),t("Progress",{attrs:{size:"small",percent:70,status:"exception"}}),t("Progress",{attrs:{size:"small",percent:10}})],1),t("Progress",{attrs:{type:"circle",width:80,percent:50}}),t("Progress",{attrs:{type:"circle",width:80,percent:70,status:"exception"}}),t("Progress",{attrs:{type:"circle",width:80,percent:100}})],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"尺寸",tabindex:"-1"}},[e._v("尺寸 "),t("a",{staticClass:"anchor",attrs:{href:"#尺寸"}},[e._v("#")])]),t("p",[e._v("适合放在较狭窄的区域内。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  Custom:\n  <Progress :strokeHeight="10" :percent="50" />\n  <Progress :strokeHeight="3" :percent="50" />\n  <Progress :strokeWidth="15" type="circle" :width="80" :percent="50" />\n  <Progress :strokeWidth="3" type="circle" :width="80" :percent="50" />\n  <br/>\n  Small:\n  <div :style="{width:\'300px\',marginBottom:\'30px\'}">\n    <Progress size="small" :percent="50" />\n    <Progress size="small" :percent="70" status="exception" />\n    <Progress size="small" :percent="10"  />\n  </div>\n  <Progress type="circle" :width="80" :percent="50" />\n  <Progress type="circle" :width="80" :percent="70" status="exception" />\n  <Progress type="circle" :width="80" :percent="100" />\n</template>\n')])])])],2)]],2)},j=[],E={},J=(0,a.Z)(E,N,j,!1,null,null,null),K=J.exports,M=function(){var e=this;e._self._c;return e._m(0)},O=[function(){var e=this,t=e._self._c;return t("div",[t("h2",{attrs:{id:"api",tabindex:"-1"}},[e._v("API "),t("a",{staticClass:"anchor",attrs:{href:"#api"}},[e._v("#")])]),t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("percent")]),t("td",[e._v("进度百分比")]),t("td",[e._v("Number")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("color")]),t("td",[e._v("进度条颜色")]),t("td",[e._v("String")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("strokeLinecap")]),t("td",[e._v("进度条的样式")]),t("td",[e._v("[round | square | butt]")]),t("td",[e._v("round")])]),t("tr",[t("td",[e._v("width")]),t("td",[e._v("圆形进度条画布宽度，单位 px")]),t("td",[e._v("number")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("值为"),t("code",{pre:!0},[e._v("small")]),e._v("，展示小尺寸")]),t("td",[e._v("String")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("format")]),t("td",[e._v("自定义进度条文字")]),t("td",[e._v("Function | slot")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("status")]),t("td",[e._v("进度条状态,提供四种类型: "),t("code",{pre:!0},[e._v("active")]),e._v(","),t("code",{pre:!0},[e._v("exception")]),e._v(","),t("code",{pre:!0},[e._v("success")]),e._v(","),t("code",{pre:!0},[e._v("normal")])]),t("td",[e._v("String")]),t("td",[e._v("normal")])]),t("tr",[t("td",[e._v("type")]),t("td",[e._v("进度条类型,提供三种类型: "),t("code",{pre:!0},[e._v("line")]),e._v(","),t("code",{pre:!0},[e._v("circle")]),e._v(","),t("code",{pre:!0},[e._v("dashboard")])]),t("td",[e._v("String")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("showInfo")]),t("td",[e._v("是否显示进度文字")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("gapDegree")]),t("td",[e._v("仪表盘进度条缺口角度，可取值 0 ~ 295")]),t("td",[e._v("number")]),t("td",[e._v("75")])]),t("tr",[t("td",[e._v("strokeWidth")]),t("td",[e._v("圆形进度条线的宽度")]),t("td",[e._v("number")]),t("td",[e._v("6")])]),t("tr",[t("td",[e._v("strokeHeight")]),t("td",[e._v("进度条线的高度")]),t("td",[e._v("number")]),t("td",[e._v("-")])])])])])}],Q={},T=(0,a.Z)(Q,M,O,!1,null,null,null),U=T.exports,V={render(){const e=arguments[0];return e("div",{class:"demo-progress"},[e(i),e(h),e(P),e(D),e(L),e(F),e(K),e(U)])}},X=V,Y=(0,a.Z)(X,n,s,!1,null,null,null),$=Y.exports}}]);