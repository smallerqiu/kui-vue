/*!
 * kui-vue v3.3.5-c
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[5276],{2281:function(t,l,o){o.r(l),o.d(l,{default:function(){return W}});var s,a,e=function(){var t=this;t._self._c;return t._m(0)},n=[function(){var t=this,l=t._self._c;return l("div",{staticClass:"markdown-body"},[l("h1",[t._v("Grid 栅格")]),l("p",[t._v("采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题"),l("br"),t._v(" 两个概念，行 "),l("code",{pre:!0},[t._v("row")]),t._v(" 和列 "),l("code",{pre:!0},[t._v("col")]),t._v(" ，具体使用方法如下：")]),l("ul",[l("li",[t._v("使用 "),l("code",{pre:!0},[t._v("row")]),t._v(" 在水平方向创建一行")]),l("li",[t._v("将一组 "),l("code",{pre:!0},[t._v("col")]),t._v(" 插入在 "),l("code",{pre:!0},[t._v("row")]),t._v(" 中")]),l("li",[t._v("在每个 "),l("code",{pre:!0},[t._v("col")]),t._v(" 中，键入自己的内容")]),l("li",[t._v("通过设置 "),l("code",{pre:!0},[t._v("col")]),t._v(" 的 "),l("code",{pre:!0},[t._v("span")]),t._v(" 参数，指定跨越的范围，其范围是1到24")]),l("li",[t._v("每个 "),l("code",{pre:!0},[t._v("row")]),t._v(" 中的 "),l("code",{pre:!0},[t._v("col")]),t._v(" 总和应该为24")])]),l("blockquote",[l("p",[t._v("注意：非 template/render 模式下，需使用 k-col。")])]),l("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],v=o(1001),d={},c=(0,v.Z)(d,e,n,!1,null,null,null),r=c.exports,i=function(){var t=this,l=t._self._c;return l("Demo",[l("template",{slot:"component"},[l("div",{staticClass:"demo-grid"},[l("Row",[l("Col",{attrs:{span:12}},[t._v("col-12")]),l("Col",{attrs:{span:12}},[t._v("col-12")])],1),l("Row",[l("Col",{attrs:{span:8}},[t._v("col-8")]),l("Col",{attrs:{span:8}},[t._v("col-8")]),l("Col",{attrs:{span:8}},[t._v("col-8")])],1),l("Row",[l("Col",{attrs:{span:6}},[t._v("col-6")]),l("Col",{attrs:{span:6}},[t._v("col-6")]),l("Col",{attrs:{span:6}},[t._v("col-6")]),l("Col",{attrs:{span:6}},[t._v("col-6")])],1)],1)]),l("template",{slot:"description"},[l("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),l("p",[l("code",{pre:!0},[t._v("col")]),t._v(" 必须放在 "),l("code",{pre:!0},[t._v("row")]),t._v(" 里面")])]),l("template",{slot:"code"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-grid">\n    <Row>\n      <Col :span="12">col-12</Col>\n      <Col :span="12">col-12</Col>\n    </Row>\n    <Row>\n      <Col :span="8">col-8</Col>\n      <Col :span="8">col-8</Col>\n      <Col :span="8">col-8</Col>\n    </Row>\n    <Row>\n      <Col :span="6">col-6</Col>\n      <Col :span="6">col-6</Col>\n      <Col :span="6">col-6</Col>\n      <Col :span="6">col-6</Col>\n    </Row>\n  </div>\n</template>\n\n')])])])],2)},p=[],_={},C=(0,v.Z)(_,i,p,!1,null,null,null),u=C.exports,f=function(){var t=this,l=t._self._c;return l("Demo",[l("template",{slot:"component"},[l("div",{staticClass:"demo-grid"},[t._v(" gutter = 10 "),l("Row",{staticClass:"row-gutter",attrs:{gutter:10}},[l("Col",{attrs:{span:12}},[l("div",[t._v("col-12")])]),l("Col",{attrs:{span:12}},[l("div",[t._v("col-12")])])],1),l("br"),l("br"),t._v(" Horizontal Gutter (px): "),l("div",{staticStyle:{width:"55%",padding:"10px"}},[l("Slider",{attrs:{min:8,marks:{8:"8",16:"16",24:"24",32:"32",40:"40"},max:40,step:null},model:{value:t.h,callback:function(l){t.h=l},expression:"h"}})],1),t._v(" Vertical Gutter (px): "),l("div",{staticStyle:{width:"55%",padding:"10px"}},[l("Slider",{attrs:{min:8,max:40,marks:{8:"8",16:"16",24:"24",32:"32",40:"40"},step:null},model:{value:t.v,callback:function(l){t.v=l},expression:"v"}})],1),t._v(" Column Count: "),l("div",{staticStyle:{width:"55%",padding:"10px"}},[l("Slider",{attrs:{min:2,marks:{2:"2",3:"3",4:"4",6:"6",8:"8",12:"12"},max:12,step:null},model:{value:t.cols,callback:function(l){t.cols=l},expression:"cols"}})],1),l("Row",{staticClass:"row-gutter",attrs:{gutter:[t.v,t.h]}},[t._l(t.cols,(function(o){return l("Col",{key:o,attrs:{span:24/t.cols}},[l("div",[t._v("col-"+t._s(t.cols))])])})),t._l(t.cols,(function(o){return l("Col",{key:"_"+o,attrs:{span:24/t.cols}},[l("div",[t._v("col-"+t._s(t.cols))])])}))],2)],1)]),l("template",{slot:"description"},[l("h4",{attrs:{id:"分栏间隔",tabindex:"-1"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#分栏间隔"}},[t._v("分栏间隔")])]),l("p",[t._v("使用 "),l("code",{pre:!0},[t._v("gutter")]),t._v(" 熟悉来设置分栏的间隔,如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距]")])]),l("template",{slot:"code"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-grid">\n    gutter = 10\n    <Row :gutter="10" class="row-gutter">\n      <Col :span="12"><div>col-12</div></Col>\n      <Col :span="12"><div>col-12</div></Col>\n    </Row>\n    <br />\n    <br />\n    Horizontal Gutter (px):\n    <div style="width:55%;padding:10px;">\n      <Slider v-model="h"\n        :min="8"\n        :marks="{8:\'8\',16:\'16\',24:\'24\',32:\'32\',40:\'40\'}"\n        :max="40"\n        :step="null" />\n    </div>\n    Vertical Gutter (px):\n    <div style="width:55%;padding:10px;">\n      <Slider v-model="v"\n        :min="8"\n        :max="40"\n        :marks="{8:\'8\',16:\'16\',24:\'24\',32:\'32\',40:\'40\'}"\n        :step="null" />\n    </div>\n    Column Count:\n    <div style="width:55%;padding:10px;">\n      <Slider v-model="cols"\n        :min="2"\n        :marks="{2:\'2\',3:\'3\',4:\'4\',6:\'6\',8:\'8\',12:\'12\'}"\n        :max="12"\n        :step="null" />\n    </div>\n    <Row :gutter="[v,h]"\n      class="row-gutter">\n      <Col :span="24/cols"\n        v-for="c in cols"\n        :key="c">\n      <div>col-{{cols}}</div>\n      </Col>\n      <Col :span="24/cols"\n        v-for="x in cols"\n        :key="\'_\'+x">\n      <div>col-{{cols}}</div>\n      </Col>\n    </Row>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      h: 8,\n      v: 8,\n      cols: 4\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},m=[],x={data(){return{h:8,v:8,cols:4}}},h=x,w=(0,v.Z)(h,f,m,!1,null,null,null),b=w.exports,g=function(){var t=this,l=t._self._c;return l("Demo",[l("template",{slot:"component"},[l("div",{staticClass:"demo-grid"},[l("Row",[l("Col",{attrs:{span:8}},[t._v("col-8")]),l("Col",{attrs:{span:8,offset:8}},[t._v("col-8 | offset-8")])],1),l("Row",[l("Col",{attrs:{span:6}},[t._v("col-6")]),l("Col",{attrs:{span:6,offset:6}},[t._v("col-6 | offset-6")]),l("Col",{attrs:{span:6}},[t._v("col-6")])],1),l("Row",[l("Col",{attrs:{span:12,offset:12}},[t._v("col-12 offset-12")])],1)],1)]),l("template",{slot:"description"},[l("h4",{attrs:{id:"栅格偏移",tabindex:"-1"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#栅格偏移"}},[t._v("栅格偏移")])]),l("p",[t._v("通过设置 "),l("code",{pre:!0},[t._v("offset")]),t._v(" 属性，将列进行左右偏移，偏移栅格数为 "),l("code",{pre:!0},[t._v("offset")]),t._v(" 的值。")])]),l("template",{slot:"code"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-grid">\n    <Row>\n      <Col :span="8">col-8</Col>\n      <Col :span="8" :offset="8">col-8 | offset-8</Col>\n    </Row>\n    <Row>\n      <Col :span="6">col-6</Col>\n      <Col :span="6" :offset="6">col-6 | offset-6</Col>\n      <Col :span="6">col-6</Col>\n    </Row>\n    <Row>\n      <Col :span="12" :offset="12">col-12 offset-12</Col>\n    </Row>\n  </div>\n</template>\n\n')])])])],2)},R=[],y={},k=(0,v.Z)(y,g,R,!1,null,null,null),j=k.exports,S=function(){var t=this,l=t._self._c;return l("Demo",[l("template",{slot:"component"},[l("div",{staticClass:"demo-grid"},[l("p",[t._v("Align Top")]),l("Row",{staticClass:"demo-back",attrs:{type:"flex",align:"top",justify:"space-around"}},[l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-96"},[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-64"},[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-128"},[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-72"},[t._v("col-4")])])],1),l("p",[t._v("Align Middle")]),l("Row",{staticClass:"demo-back",attrs:{type:"flex",align:"middle",justify:"space-around"}},[l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-96"},[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-64"},[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-128"},[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-72"},[t._v("col-4")])])],1),l("p",[t._v("Align Bottom")]),l("Row",{staticClass:"demo-back",attrs:{type:"flex",align:"bottom",justify:"space-around"}},[l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-96"},[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-64"},[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-128"},[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",{staticClass:"h-72"},[t._v("col-4")])])],1)],1)]),l("template",{slot:"description"},[l("h4",{attrs:{id:"flex-对齐",tabindex:"-1"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#flex-对齐"}},[t._v("Flex 对齐")])]),l("p",[t._v("Flex 子元素垂直对齐。")])]),l("template",{slot:"code"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-grid">\n    <p>Align Top</p>\n    <Row type="flex" align="top" justify="space-around" class="demo-back">\n      <Col :span="4"><div class="h-96">col-4</div></Col>\n      <Col :span="4"><div class="h-64">col-4</div></Col>\n      <Col :span="4"><div class="h-128">col-4</div></Col>\n      <Col :span="4"><div class="h-72">col-4</div></Col>\n    </Row>\n    <p>Align Middle</p>\n    <Row type="flex" align="middle"  justify="space-around" class="demo-back">\n      <Col :span="4"><div class="h-96">col-4</div></Col>\n      <Col :span="4"><div class="h-64">col-4</div></Col>\n      <Col :span="4"><div class="h-128">col-4</div></Col>\n      <Col :span="4"><div class="h-72">col-4</div></Col>\n    </Row>\n    <p>Align Bottom</p>\n    <Row type="flex" align="bottom" justify="space-around" class="demo-back">\n      <Col :span="4"><div class="h-96">col-4</div></Col>\n      <Col :span="4"><div class="h-64">col-4</div></Col>\n      <Col :span="4"><div class="h-128">col-4</div></Col>\n      <Col :span="4"><div class="h-72">col-4</div></Col>\n    </Row>\n  </div>\n</template>\n\n')])])])],2)},A=[],Z={},F=(0,v.Z)(Z,S,A,!1,null,null,null),D=F.exports,G=function(){var t=this,l=t._self._c;return l("Demo",[l("template",{slot:"component"},[l("div",{staticClass:"demo-grid"},[l("p",[t._v("start")]),l("Row",{staticClass:"demo-back",attrs:{type:"flex",justify:"start"}},[l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])])],1),l("p",[t._v("center")]),l("Row",{staticClass:"demo-back",attrs:{type:"flex",justify:"center"}},[l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])])],1),l("p",[t._v("end")]),l("Row",{staticClass:"demo-back",attrs:{type:"flex",justify:"end"}},[l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])])],1),l("p",[t._v("space-around")]),l("Row",{staticClass:"demo-back",attrs:{type:"flex",justify:"space-around"}},[l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])])],1),l("p",[t._v("space-between")]),l("Row",{staticClass:"demo-back",attrs:{type:"flex",justify:"space-between"}},[l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])]),l("Col",{attrs:{span:4}},[l("div",[t._v("col-4")])])],1)],1)]),l("template",{slot:"description"},[l("h4",{attrs:{id:"flex-布局",tabindex:"-1"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局"}},[t._v("Flex 布局")])]),l("p",[t._v("Flex 布局基础。"),l("br"),t._v(" 使用 "),l("code",{pre:!0},[t._v("row-flex")]),t._v(" 定义 "),l("code",{pre:!0},[t._v("flex")]),t._v(" 布局，其子元素根据不同的值 "),l("code",{pre:!0},[t._v("start")]),t._v(","),l("code",{pre:!0},[t._v("center")]),t._v(","),l("code",{pre:!0},[t._v("end")]),t._v(","),l("code",{pre:!0},[t._v("space-between")]),t._v(","),l("code",{pre:!0},[t._v("space-around")]),t._v("，分别定义其在父节点里面的排版方式。")])]),l("template",{slot:"code"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-grid">\n    <p>start</p>\n    <Row type="flex" justify="start" class="demo-back">\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n    </Row>\n    <p>center</p>\n    <Row type="flex" justify="center" class="demo-back">\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n    </Row>\n    <p>end</p>\n    <Row type="flex" justify="end" class="demo-back">\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n    </Row>\n    <p>space-around</p>\n    <Row type="flex" justify="space-around" class="demo-back">\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n    </Row>\n    <p>space-between</p>\n    <Row type="flex" justify="space-between" class="demo-back">\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n      <Col :span="4"><div>col-4</div></Col>\n    </Row>\n  </div>\n</template>\n\n')])])])],2)},N=[],P={},z=(0,v.Z)(P,G,N,!1,null,null,null),B=z.exports,H=function(){var t=this,l=t._self._c;return l("Demo",[l("template",{slot:"component"},[l("div",{staticClass:"demo-grid"},[l("p",[t._v("Percentage columns")]),l("Row",{staticClass:"demo-back",attrs:{type:"flex"}},[l("Col",{attrs:{flex:3}},[l("div",[t._v("3/8")])]),l("Col",{attrs:{flex:5}},[l("div",[t._v("5/8")])])],1),l("p",[t._v("Fill rest")]),l("Row",{staticClass:"demo-back",attrs:{type:"flex"}},[l("Col",{attrs:{flex:"100px"}},[l("div",[t._v("100px")])]),l("Col",{attrs:{flex:"auto"}},[l("div",[t._v("auto")])])],1),l("p",[t._v("Raw flex style")]),l("Row",{staticClass:"demo-back",attrs:{type:"flex"}},[l("Col",{attrs:{flex:"1 1 128px"}},[l("div",[t._v("1 1 128px")])]),l("Col",{attrs:{flex:"0 1 256px"}},[l("div",[t._v("0 1 256px")])])],1)],1)]),l("template",{slot:"description"},[l("h4",{attrs:{id:"flex-填充",tabindex:"-1"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#flex-填充"}},[t._v("Flex 填充")])]),l("p",[t._v("Col 提供 flex 属性以支持填充。")])]),l("template",{slot:"code"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-grid">\n    <p>Percentage columns</p>\n    <Row type="flex" class="demo-back">\n      <Col :flex="3"><div>3/8</div></Col>\n      <Col :flex="5"><div>5/8</div></Col>\n    </Row>\n    <p>Fill rest</p>\n    <Row type="flex" class="demo-back">\n      <Col flex="100px"><div>100px</div></Col>\n      <Col flex="auto"><div>auto</div></Col>\n    </Row>\n    <p>Raw flex style</p>\n    <Row type="flex" class="demo-back">\n      <Col flex="1 1 128px"><div>1 1 128px</div></Col>\n      <Col flex="0 1 256px"><div>0 1 256px</div></Col>\n    </Row>\n  </div>\n</template>\n\n')])])])],2)},I=[],M={},T=(0,v.Z)(M,H,I,!1,null,null,null),V=T.exports,q=function(){var t=this;t._self._c;return t._m(0)},E=[function(){var t=this,l=t._self._c;return l("div",{staticClass:"markdown-body"},[l("h2",{attrs:{id:"row-api",tabindex:"-1"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#row-api"}},[t._v("Row API")])]),l("table",[l("thead",[l("tr",[l("th",[t._v("属性")]),l("th",[t._v("说明")]),l("th",[t._v("类型")]),l("th",[t._v("默认值")])])]),l("tbody",[l("tr",[l("td",[t._v("align")]),l("td",[t._v("flex 布局下的垂直对齐方式："),l("code",{pre:!0},[t._v("top")]),t._v(" "),l("code",{pre:!0},[t._v("middle")]),t._v(" "),l("code",{pre:!0},[t._v("bottom")])]),l("td",[t._v("String")]),l("td",[l("code",{pre:!0},[t._v("top")])])]),l("tr",[l("td",[t._v("justify")]),l("td",[t._v("flex 布局下的水平排列方式："),l("code",{pre:!0},[t._v("start")]),t._v(" "),l("code",{pre:!0},[t._v("end")]),t._v(" "),l("code",{pre:!0},[t._v("center")]),t._v(" "),l("code",{pre:!0},[t._v("space-around")]),t._v(" "),l("code",{pre:!0},[t._v("space-between")])]),l("td",[t._v("String")]),l("td",[l("code",{pre:!0},[t._v("start")])])]),l("tr",[l("td",[t._v("gutter")]),l("td",[t._v("栅格间距，单位 px，左右平分,使用数组形式同时设置 [水平间距, 垂直间距]")]),l("td",[t._v("Number,Array")]),l("td",[t._v("-")])]),l("tr",[l("td",[t._v("type")]),l("td",[t._v("布局模式，可选 flex，现代浏览器 下有效")]),l("td",[t._v("String")]),l("td")])])]),l("h2",{attrs:{id:"col-api",tabindex:"-1"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#col-api"}},[t._v("Col API")])]),l("table",[l("thead",[l("tr",[l("th",[t._v("属性")]),l("th",[t._v("说明")]),l("th",[t._v("类型")]),l("th",[t._v("默认值")])])]),l("tbody",[l("tr",[l("td",[t._v("span")]),l("td",[t._v("栅格的占位格数，可选值为0~24的整数")]),l("td",[t._v("Number")]),l("td",[t._v("-")])]),l("tr",[l("td",[t._v("offset")]),l("td",[t._v("栅格左侧的间隔格数，可选值为1~24的整数")]),l("td",[t._v("Number")]),l("td",[t._v("-")])]),l("tr",[l("td",[t._v("flex")]),l("td",[t._v("flex 布局填充")]),l("td",[t._v("Number,String")]),l("td",[t._v("-")])])])])])}],J={},K=(0,v.Z)(J,q,E,!1,null,null,null),L=K.exports,O={render(){const t=arguments[0];return t("div",[t(r),t(u),t(b),t(j),t(D),t(B),t(V),t(L)])}},Q=O,U=(0,v.Z)(Q,s,a,!1,null,null,null),W=U.exports}}]);