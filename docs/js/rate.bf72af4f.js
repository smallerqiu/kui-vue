/*!
 * kui-vue v3.3.5-a
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[3905],{6965:function(t,e,a){a.r(e),a.d(e,{default:function(){return ot}});var l,r,n=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Rate评分")]),e("p",[t._v("评分组件。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t._v("何时使用 "),e("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[t._v("#")])]),e("ul",[e("li",[t._v("对评价进行展示。")]),e("li",[t._v("对事物进行快速的评级操作。")])]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t._v("代码演示 "),e("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[t._v("#")])])])}],s=a(1001),i={},d=(0,s.Z)(i,n,o,!1,null,null,null),v=d.exports,u=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Rate",{attrs:{size:30,value:2}}),e("br"),e("Rate",{attrs:{value:3}}),e("br"),e("Rate",{attrs:{icon:t.Heart,allowHalf:"",color:"red",value:2.5,size:30}}),e("br"),e("Rate",{attrs:{icon:t.Heart,allowHalf:"",color:"red",value:3.5,size:40}})],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[t._v("基本用法 "),e("a",{staticClass:"anchor",attrs:{href:"#基本用法"}},[t._v("#")])]),e("p",[t._v("最简单的用法。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Rate :size="30" :value="2"/>\n    <br/>\n    <Rate :value="3"/>\n    <br />\n    <Rate :icon="Heart" allowHalf color="red" :value="2.5" :size="30"/>\n    <br />\n    <Rate :icon="Heart" allowHalf color="red" :value="3.5" :size="40"/>\n  </div>\n</template>\n<script>\nimport { Heart } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Heart\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},c=[],p=a(5118),_={data(){return{Heart:p.Heart}}},m=_,f=(0,s.Z)(m,u,c,!1,null,null,null),h=f.exports,b=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Rate",{attrs:{allowHalf:"",value:2.5}})],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"半星",tabindex:"-1"}},[t._v("半星 "),e("a",{staticClass:"anchor",attrs:{href:"#半星"}},[t._v("#")])]),e("p",[t._v("支持选中半星。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Rate allowHalf :value="2.5" />\n  </div>\n</template>\n')])])])],2)]],2)},H=[],w={},R=(0,s.Z)(w,b,H,!1,null,null,null),x=R.exports,g=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Rate",{attrs:{tooltips:t.desc},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "+t._s(t.value?t.desc[t.value-1]:"")+" ")],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"文案展现",tabindex:"-1"}},[t._v("文案展现 "),e("a",{staticClass:"anchor",attrs:{href:"#文案展现"}},[t._v("#")])]),e("p",[t._v("给评分组件加上文案展示。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <div>\n    <Rate :tooltips=\"desc\" v-model=\"value\"/> \n    {{ value ? desc[value-1] : ''}}\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return { \n      value:3 ,\n      desc:['terrible', 'bad', 'normal', 'good', 'wonderful']\n    }\n  }\n}\n<\/script>\n")])])])],2)]],2)},C=[],V={data(){return{value:3,desc:["terrible","bad","normal","good","wonderful"]}}},k=V,Z=(0,s.Z)(k,g,C,!1,null,null,null),z=Z.exports,S=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Rate",{attrs:{disabled:"",value:2.5,allowHalf:""}}),e("br"),e("br"),e("Rate",{attrs:{disabled:"",value:3.3,"show-score":"",icon:t.Heart}}),e("br"),e("br"),e("Rate",{attrs:{disabled:"",value:8.7,"show-score":"",count:10}})],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"只读",tabindex:"-1"}},[t._v("只读 "),e("a",{staticClass:"anchor",attrs:{href:"#只读"}},[t._v("#")])]),e("p",[t._v("只读，无法进行鼠标交互。只读，支持小数分值.")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Rate disabled :value="2.5" allowHalf />\n    <br />\n    <br />\n    <Rate disabled :value="3.3" show-score :icon="Heart"/>\n    <br />\n    <br />\n    <Rate disabled :value="8.7" show-score :count="10"/>\n  </div>\n</template>\n<script>\nimport { Heart } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Heart\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},M=[],y={data(){return{Heart:p.Heart}}},A=y,B=(0,s.Z)(A,S,M,!1,null,null,null),L=B.exports,O=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Rate",{attrs:{allowClear:!0,value:3}}),t._v(" allowClear = true "),e("br"),e("Rate",{attrs:{allowClear:!1,value:3}}),t._v(" allowClear = false ")],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"清除",tabindex:"-1"}},[t._v("清除 "),e("a",{staticClass:"anchor",attrs:{href:"#清除"}},[t._v("#")])]),e("p",[t._v("支持允许或者禁用清除。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Rate :allowClear="true" :value="3" />  allowClear = true\n    <br />\n    <Rate :allowClear="false" :value="3" /> allowClear = false\n  </div>\n</template>\n')])])])],2)]],2)},N=[],F={},I=(0,s.Z)(F,O,N,!1,null,null,null),P=I.exports,j=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Rate",{attrs:{icon:t.Heart,allowHalf:""}}),e("br"),e("Rate",{staticStyle:{fontSize:"36px"},attrs:{character:"A",allowHalf:""}}),e("br"),e("Rate",{attrs:{character:"龍",allowHalf:""}})],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"其他字符",tabindex:"-1"}},[t._v("其他字符 "),e("a",{staticClass:"anchor",attrs:{href:"#其他字符"}},[t._v("#")])]),e("p",[t._v("可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Rate :icon="Heart" allowHalf />\n    <br />\n    <Rate character="A" allowHalf style="fontSize: 36px"  />\n    <br />\n    <Rate character="龍" allowHalf />\n  </div>\n</template>\n<script>\nimport { Heart } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Heart\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},q=[],D={data(){return{Heart:p.Heart}}},E=D,G=(0,s.Z)(E,j,q,!1,null,null,null),J=G.exports,K=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("div",[e("Rate",{attrs:{character:t=>t+1,value:2,count:9}}),e("br"),e("br"),e("Rate",{attrs:{icon:e=>t.icons[e],value:3}})],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"自定义字符",tabindex:"-1"}},[t._v("自定义字符 "),e("a",{staticClass:"anchor",attrs:{href:"#自定义字符"}},[t._v("#")])]),e("p",[t._v("可以自定义每一个字符。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Rate :character="(i)=>i+1" :value="2" :count="9"/>\n    <br />\n    <br />\n    <Rate :icon="(i)=> icons[i]" :value="3"/>\n  </div>\n</template>\n<script>\nimport { VolumeOff, VolumeLow, VolumeMedium, VolumeHigh, VolumeMute } from "kui-icons";\nexport default{\n  data() {\n    return {\n      icons:[\n        VolumeOff,\n        VolumeLow,\n        VolumeMedium,\n        VolumeHigh,\n        VolumeMute\n      ]\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},Q=[],T={data(){return{icons:[p.VolumeOff,p.VolumeLow,p.VolumeMedium,p.VolumeHigh,p.VolumeMute]}}},U=T,W=(0,s.Z)(U,K,Q,!1,null,null,null),X=W.exports,Y=function(){var t=this;t._self._c;return t._m(0)},$=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{attrs:{id:"rate-api",tabindex:"-1"}},[t._v("Rate API "),e("a",{staticClass:"anchor",attrs:{href:"#rate-api"}},[t._v("#")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("value(v-model)")]),e("td",[t._v("当前数，受控值")]),e("td",[t._v("Number")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("allowClear")]),e("td",[t._v("是否允许再次点击后清除")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("allowHalf")]),e("td",[t._v("是否允许半选")]),e("td",[t._v("Boolean")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("showScore")]),e("td",[t._v("是否显示分数")]),e("td",[t._v("Boolean")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("character")]),e("td",[t._v("自定义字符")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("count")]),e("td",[t._v("star 总数")]),e("td",[t._v("Number")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("只读，无法进行交互")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("tooltips")]),e("td",[t._v("自定义每项的提示信息")]),e("td",[t._v("String[]")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("change")]),e("td",[t._v("选择时的回调")]),e("td",[t._v("Function(value:number))")]),e("td",[t._v("-")])])])])])}],tt={},et=(0,s.Z)(tt,Y,$,!1,null,null,null),at=et.exports,lt={render(){const t=arguments[0];return t("div",{class:"demo-rate"},[t(v),t(h),t(x),t(z),t(L),t(P),t(J),t(X),t(at)])}},rt=lt,nt=(0,s.Z)(rt,l,r,!1,null,null,null),ot=nt.exports}}]);