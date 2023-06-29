/*!
 * kui-vue v3.3.5-a
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[1181],{205:function(t,e,s){s.r(e),s.d(e,{default:function(){return O}});var i,r,l=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("Descriptions",{attrs:{title:"订单信息"}},[e("DescriptionsItem",{attrs:{label:"订单编号"}},[t._v("20202203302200")]),e("DescriptionsItem",{attrs:{label:"价格"}},[t._v("￥ 199.99")]),e("DescriptionsItem",{attrs:{label:"姓名"}},[t._v("王大锤")]),e("DescriptionsItem",{attrs:{label:"电话"}},[t._v("13888888888")]),e("DescriptionsItem",{attrs:{label:"收货地址"}},[t._v(" 湖北省武汉市洪山区 光谷 188号 ")])],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[t._v("基础用法 "),e("a",{staticClass:"anchor",attrs:{href:"#基础用法"}},[t._v("#")])]),e("p",[t._v("简单的展示。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Descriptions title="订单信息">\n    <DescriptionsItem label="订单编号">20202203302200</DescriptionsItem>\n    <DescriptionsItem label="价格">￥ 199.99</DescriptionsItem>\n    <DescriptionsItem label="姓名">王大锤</DescriptionsItem>\n    <DescriptionsItem label="电话">13888888888</DescriptionsItem>\n    <DescriptionsItem label="收货地址">\n      湖北省武汉市洪山区 光谷 188号\n    </DescriptionsItem>\n  </Descriptions>\n</template>\n')])])])],2)]],2)},n=[],a=s(1001),o={},p=(0,a.Z)(o,l,n,!1,null,null,null),c=p.exports,m=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Descriptions 描述列表")]),e("p",[t._v("成组展示多个只读字段。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t._v("何时使用 "),e("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[t._v("#")])]),e("p",[t._v("常见于详情页的信息展示。")]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t._v("代码演示 "),e("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[t._v("#")])])])}],D={},b=(0,a.Z)(D,m,v,!1,null,null,null),_=b.exports,I=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("Descriptions",{attrs:{title:"订单信息",bordered:""}},[e("DescriptionsItem",{attrs:{label:"订单编号"}},[t._v("20202203302200")]),e("DescriptionsItem",{attrs:{label:"姓名"}},[t._v("王大锤")]),e("DescriptionsItem",{attrs:{label:"电话"}},[t._v("13888888888")]),e("DescriptionsItem",{attrs:{label:"下单时间"}},[t._v("2022-05-03 12:12:33")]),e("DescriptionsItem",{attrs:{label:"付款时间",span:3}},[t._v("2022-05-03 12:15:33")]),e("DescriptionsItem",{attrs:{label:"状态",span:5}},[e("Badge",{attrs:{status:"success",text:"已发货"}})],1),e("DescriptionsItem",{attrs:{label:"价格"}},[t._v("￥ 199.99")]),e("DescriptionsItem",{attrs:{label:"优惠金额"}},[t._v("￥ 0.99")]),e("DescriptionsItem",{attrs:{label:"实付金额"}},[t._v("￥ 199.00")]),e("DescriptionsItem",{attrs:{label:"备注信息"}},[t._v(" 请把货物发至: "),e("br"),t._v(" 湖北省武汉市洪山区 光谷 188号 "),e("br"),t._v(" 让快递小哥轻拿轻放"),e("br"),t._v(" 谢谢！ ")])],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"带边框的",tabindex:"-1"}},[t._v("带边框的 "),e("a",{staticClass:"anchor",attrs:{href:"#带边框的"}},[t._v("#")])]),e("p",[t._v("带边框和背景颜色列表。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Descriptions title="订单信息" bordered>\n    <DescriptionsItem label="订单编号">20202203302200</DescriptionsItem>\n    <DescriptionsItem label="姓名">王大锤</DescriptionsItem>\n    <DescriptionsItem label="电话">13888888888</DescriptionsItem>\n    <DescriptionsItem label="下单时间">2022-05-03 12:12:33</DescriptionsItem>\n    <DescriptionsItem label="付款时间" :span="3">2022-05-03 12:15:33</DescriptionsItem>\n    <DescriptionsItem label="状态" :span="5"><Badge status="success" text="已发货" /></DescriptionsItem>\n    <DescriptionsItem label="价格">￥ 199.99</DescriptionsItem>\n    <DescriptionsItem label="优惠金额">￥ 0.99</DescriptionsItem>\n    <DescriptionsItem label="实付金额">￥ 199.00</DescriptionsItem>\n    <DescriptionsItem label="备注信息" >\n      请把货物发至: <br/>\n      湖北省武汉市洪山区 光谷 188号 <br/>\n      让快递小哥轻拿轻放<br/>\n      谢谢！\n    </DescriptionsItem>\n  </Descriptions>\n</template>\n')])])])],2)]],2)},d=[],u={},h=(0,a.Z)(u,I,d,!1,null,null,null),f=h.exports,x=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("RadioGroup",{attrs:{options:t.types,type:"button"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),e("br"),e("br"),e("Descriptions",{attrs:{title:"订单信息",bordered:"",size:t.size}},[e("Button",{attrs:{slot:"extra",size:"small",type:"primary"},slot:"extra"},[t._v("更新信息")]),e("DescriptionsItem",{attrs:{label:"订单编号"}},[t._v("20202203302200")]),e("DescriptionsItem",{attrs:{label:"姓名"}},[t._v("王大锤")]),e("DescriptionsItem",{attrs:{label:"电话"}},[t._v("13888888888")]),e("DescriptionsItem",{attrs:{label:"价格"}},[t._v("￥ 199.99")]),e("DescriptionsItem",{attrs:{label:"优惠金额"}},[t._v("￥ 0.99")]),e("DescriptionsItem",{attrs:{label:"实付金额"}},[t._v("￥ 199.00")]),e("DescriptionsItem",{attrs:{label:"备注信息",span:5}},[t._v(" 请把货物发至: "),e("br"),t._v(" 湖北省武汉市洪山区 光谷 188号 "),e("br"),t._v(" 让快递小哥轻拿轻放"),e("br"),t._v(" 谢谢！ ")])],1),e("br"),e("br"),e("Descriptions",{attrs:{title:"订单信息",size:t.size}},[e("Button",{attrs:{slot:"extra",size:"small",type:"primary"},slot:"extra"},[t._v("更新信息")]),e("DescriptionsItem",{attrs:{label:"订单编号"}},[t._v("20202203302200")]),e("DescriptionsItem",{attrs:{label:"价格"}},[t._v("￥ 199.99")]),e("DescriptionsItem",{attrs:{label:"姓名"}},[t._v("王大锤")]),e("DescriptionsItem",{attrs:{label:"电话"}},[t._v("13888888888")]),e("DescriptionsItem",{attrs:{label:"收货地址"}},[t._v(" 湖北省武汉市洪山区 光谷 188号 ")])],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"自定义尺寸",tabindex:"-1"}},[t._v("自定义尺寸 "),e("a",{staticClass:"anchor",attrs:{href:"#自定义尺寸"}},[t._v("#")])]),e("p",[t._v("自定义尺寸，适应在各种容器中展示。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <RadioGroup :options="types" v-model="size" type="button" />\n  <br/>\n  <br/>\n  <Descriptions title="订单信息" bordered :size="size">\n    <Button slot="extra" size="small" type="primary">更新信息</Button>\n    <DescriptionsItem label="订单编号">20202203302200</DescriptionsItem>\n    <DescriptionsItem label="姓名">王大锤</DescriptionsItem>\n    <DescriptionsItem label="电话">13888888888</DescriptionsItem>\n    <DescriptionsItem label="价格">￥ 199.99</DescriptionsItem>\n    <DescriptionsItem label="优惠金额">￥ 0.99</DescriptionsItem>\n    <DescriptionsItem label="实付金额">￥ 199.00</DescriptionsItem>\n    <DescriptionsItem label="备注信息" :span="5">\n      请把货物发至: <br/>\n      湖北省武汉市洪山区 光谷 188号 <br/>\n      让快递小哥轻拿轻放<br/>\n      谢谢！\n    </DescriptionsItem>\n  </Descriptions>\n  <br/>\n  <br/>\n  <Descriptions title="订单信息" :size="size">\n    <Button slot="extra" size="small" type="primary">更新信息</Button>\n    <DescriptionsItem label="订单编号">20202203302200</DescriptionsItem>\n    <DescriptionsItem label="价格">￥ 199.99</DescriptionsItem>\n    <DescriptionsItem label="姓名">王大锤</DescriptionsItem>\n    <DescriptionsItem label="电话">13888888888</DescriptionsItem>\n    <DescriptionsItem label="收货地址">\n      湖北省武汉市洪山区 光谷 188号\n    </DescriptionsItem>\n  </Descriptions>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      types:[\n        { label:\'Default\' ,value:\'default\'},\n        { label:\'Middle\' ,value:\'middle\'},\n        { label:\'Small\' ,value:\'small\'},\n      ],\n      size:\'default\'\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},y=[],z={data(){return{types:[{label:"Default",value:"default"},{label:"Middle",value:"middle"},{label:"Small",value:"small"}],size:"default"}}},g=z,B=(0,a.Z)(g,x,y,!1,null,null,null),C=B.exports,Z=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("Descriptions",{attrs:{title:"订单信息",layout:"vertical"}},[e("DescriptionsItem",{attrs:{label:"订单编号"}},[t._v("20202203302200")]),e("DescriptionsItem",{attrs:{label:"价格"}},[t._v("￥ 199.99")]),e("DescriptionsItem",{attrs:{label:"姓名"}},[t._v("王大锤")]),e("DescriptionsItem",{attrs:{label:"电话"}},[t._v("13888888888")]),e("DescriptionsItem",{attrs:{label:"收货地址"}},[t._v(" 湖北省武汉市洪山区 光谷 188号 ")])],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"垂直",tabindex:"-1"}},[t._v("垂直 "),e("a",{staticClass:"anchor",attrs:{href:"#垂直"}},[t._v("#")])]),e("p",[t._v("垂直的列表。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Descriptions title="订单信息" layout="vertical">\n    <DescriptionsItem label="订单编号">20202203302200</DescriptionsItem>\n    <DescriptionsItem label="价格">￥ 199.99</DescriptionsItem>\n    <DescriptionsItem label="姓名">王大锤</DescriptionsItem>\n    <DescriptionsItem label="电话">13888888888</DescriptionsItem>\n    <DescriptionsItem label="收货地址">\n      湖北省武汉市洪山区 光谷 188号\n    </DescriptionsItem>\n  </Descriptions>\n</template>\n')])])])],2)]],2)},k=[],S={},w=(0,a.Z)(S,Z,k,!1,null,null,null),G=w.exports,M=function(){var t=this,e=t._self._c;return e("div",[[e("demo",[e("template",{slot:"component"},[e("Descriptions",{attrs:{title:"订单信息",bordered:"",layout:"vertical"}},[e("DescriptionsItem",{attrs:{label:"订单编号"}},[t._v("20202203302200")]),e("DescriptionsItem",{attrs:{label:"姓名"}},[t._v("王大锤")]),e("DescriptionsItem",{attrs:{label:"电话"}},[t._v("13888888888")]),e("DescriptionsItem",{attrs:{label:"下单时间"}},[t._v("2022-05-03 12:12:33")]),e("DescriptionsItem",{attrs:{label:"付款时间",span:3}},[t._v("2022-05-03 12:15:33")]),e("DescriptionsItem",{attrs:{label:"状态",span:5}},[e("Badge",{attrs:{status:"success",text:"已发货"}})],1),e("DescriptionsItem",{attrs:{label:"价格"}},[t._v("￥ 199.99")]),e("DescriptionsItem",{attrs:{label:"优惠金额"}},[t._v("￥ 0.99")]),e("DescriptionsItem",{attrs:{label:"实付金额"}},[t._v("￥ 199.00")]),e("DescriptionsItem",{attrs:{label:"备注信息",span:5}},[t._v(" 请把货物发至: "),e("br"),t._v(" 湖北省武汉市洪山区 光谷 188号 "),e("br"),t._v(" 让快递小哥轻拿轻放"),e("br"),t._v(" 谢谢！ ")])],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"垂直带边框",tabindex:"-1"}},[t._v("垂直带边框 "),e("a",{staticClass:"anchor",attrs:{href:"#垂直带边框"}},[t._v("#")])]),e("p",[t._v("垂直带边框和背景颜色的列表。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Descriptions title="订单信息" bordered layout="vertical">\n    <DescriptionsItem label="订单编号">20202203302200</DescriptionsItem>\n    <DescriptionsItem label="姓名">王大锤</DescriptionsItem>\n    <DescriptionsItem label="电话">13888888888</DescriptionsItem>\n    <DescriptionsItem label="下单时间">2022-05-03 12:12:33</DescriptionsItem>\n    <DescriptionsItem label="付款时间" :span="3">2022-05-03 12:15:33</DescriptionsItem>\n    <DescriptionsItem label="状态" :span="5"><Badge status="success" text="已发货" /></DescriptionsItem>\n    <DescriptionsItem label="价格">￥ 199.99</DescriptionsItem>\n    <DescriptionsItem label="优惠金额">￥ 0.99</DescriptionsItem>\n    <DescriptionsItem label="实付金额">￥ 199.00</DescriptionsItem>\n    <DescriptionsItem label="备注信息" :span="5">\n      请把货物发至: <br/>\n      湖北省武汉市洪山区 光谷 188号 <br/>\n      让快递小哥轻拿轻放<br/>\n      谢谢！\n    </DescriptionsItem>\n  </Descriptions>\n</template>\n')])])])],2)]],2)},R=[],A={},N=(0,a.Z)(A,M,R,!1,null,null,null),P=N.exports,j=function(){var t=this;t._self._c;return t._m(0)},q=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{attrs:{id:"api",tabindex:"-1"}},[t._v("API "),e("a",{staticClass:"anchor",attrs:{href:"#api"}},[t._v("#")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("bordered")]),e("td",[t._v("是否展示边框")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("column")]),e("td",[t._v("一行的 DescriptionItems 数量")]),e("td",[t._v("Number")]),e("td",[t._v("3")])]),e("tr",[e("td",[t._v("extra")]),e("td",[t._v("描述列表的操作区域，显示在右上方")]),e("td",[t._v("String,slot")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("layout")]),e("td",[t._v("描述布局")]),e("td",[t._v("horizontal | vertical")]),e("td",[t._v("horizontal")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("设置列表的大小。可以设置为 middle 、small")]),e("td",[t._v("default | middle | small")]),e("td",[t._v("default")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("描述列表的标题，显示在最顶部")]),e("td",[t._v("String,slot")]),e("td",[t._v("-")])])])]),e("h3",{attrs:{id:"item-props",tabindex:"-1"}},[t._v("Item props "),e("a",{staticClass:"anchor",attrs:{href:"#item-props"}},[t._v("#")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("label")]),e("td",[t._v("内容的描述")]),e("td",[t._v("String | slot")]),e("td",[t._v("-")])])])])])}],E={},F=(0,a.Z)(E,j,q,!1,null,null,null),H=F.exports,J={render(){const t=arguments[0];return t("div",{class:"demo-descriptions"},[t(_),t(c),t(f),t(C),t(G),t(P),t(H)])}},K=J,L=(0,a.Z)(K,i,r,!1,null,null,null),O=L.exports}}]);