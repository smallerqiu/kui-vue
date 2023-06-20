/*!
 * kui-vue v3.3.3
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[2369],{7256:function(e,t,l){l.r(t),l.d(t,{default:function(){return D}});var a,r,s=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Carousel 走马灯")]),t("p",[e._v("旋转木马，一组轮播的区域。")]),t("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e._v("何时使用 "),t("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[e._v("#")])]),t("ul",[t("li",[e._v("当有一组平级的内容。")]),t("li",[e._v("当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。")]),t("li",[e._v("常用于一组图片或卡片轮播。")])]),t("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e._v("代码演示 "),t("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[e._v("#")])])])}],v=l(1001),u={},n=(0,v.Z)(u,s,o,!1,null,null,null),_=n.exports,d=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[t("div",[t("Carousel",{attrs:{value:2}},[t("CarouselItem",[e._v("1")]),t("CarouselItem",[e._v("2")]),t("CarouselItem",[e._v("3")]),t("CarouselItem",[e._v("4")])],1)],1)]),t("template",{slot:"description"},[t("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e._v("基本用法 "),t("a",{staticClass:"anchor",attrs:{href:"#基本用法"}},[e._v("#")])]),t("p",[e._v("最简单的用法,可以通过 "),t("code",{pre:!0},[e._v("value(v-model)")]),e._v(" 指定初始值")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <Carousel :value="2">\n      <CarouselItem>1</CarouselItem>\n      <CarouselItem>2</CarouselItem>\n      <CarouselItem>3</CarouselItem>\n      <CarouselItem>4</CarouselItem>\n    </Carousel>  \n  </div>\n</template>\n')])])])],2)]],2)},i=[],m={},c=(0,v.Z)(m,d,i,!1,null,null,null),p=c.exports,C=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[t("div",[t("Carousel",{attrs:{vertical:""}},[t("CarouselItem",[e._v("1")]),t("CarouselItem",[e._v("2")]),t("CarouselItem",[e._v("3")]),t("CarouselItem",[e._v("4")])],1)],1)]),t("template",{slot:"description"},[t("h4",{attrs:{id:"垂直",tabindex:"-1"}},[e._v("垂直 "),t("a",{staticClass:"anchor",attrs:{href:"#垂直"}},[e._v("#")])]),t("p",[e._v("通过设置 "),t("code",{pre:!0},[e._v("vertical")]),e._v(" 呈现垂直模式,此时不显示左右箭头")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <div>\n    <Carousel vertical>\n      <CarouselItem>1</CarouselItem>\n      <CarouselItem>2</CarouselItem>\n      <CarouselItem>3</CarouselItem>\n      <CarouselItem>4</CarouselItem>\n    </Carousel>  \n  </div>\n</template>\n")])])])],2)]],2)},h=[],I={},f=(0,v.Z)(I,C,h,!1,null,null,null),b=f.exports,x=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[t("div",[t("Carousel",{attrs:{autoplay:""}},[t("CarouselItem",[e._v("1")]),t("CarouselItem",[e._v("2")]),t("CarouselItem",[e._v("3")]),t("CarouselItem",[e._v("4")])],1)],1)]),t("template",{slot:"description"},[t("h4",{attrs:{id:"自动播放",tabindex:"-1"}},[e._v("自动播放 "),t("a",{staticClass:"anchor",attrs:{href:"#自动播放"}},[e._v("#")])]),t("p",[e._v("通过设置 "),t("code",{pre:!0},[e._v("autoplay")]),e._v(" ，可实现定时自动播放，通过 "),t("code",{pre:!0},[e._v("delay")]),e._v(" 设置间隔播放时间，默认 "),t("code",{pre:!0},[e._v("3000")]),e._v(" ，单位毫秒")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <div>\n    <Carousel autoplay>\n      <CarouselItem>1</CarouselItem>\n      <CarouselItem>2</CarouselItem>\n      <CarouselItem>3</CarouselItem>\n      <CarouselItem>4</CarouselItem>\n    </Carousel>  \n  </div>\n</template>\n")])])])],2)]],2)},y=[],g={},k=(0,v.Z)(g,x,y,!1,null,null,null),Z=k.exports,B=function(){var e=this;e._self._c;return e._m(0)},w=[function(){var e=this,t=e._self._c;return t("div",[t("h3",{attrs:{id:"api",tabindex:"-1"}},[e._v("API "),t("a",{staticClass:"anchor",attrs:{href:"#api"}},[e._v("#")])]),t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("幻灯片的索引，从 0 开始，可以使用 "),t("code",{pre:!0},[e._v("v-model")]),e._v(" 双向绑定数据")]),t("td",[e._v("Number")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("loop")]),t("td",[e._v("是否开启循环")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("vertical")]),t("td",[e._v("是否垂直模式显示")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("autoplay")]),t("td",[e._v("是否自动切换")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("delay")]),t("td",[e._v("自动切换的时间间隔，单位为毫秒")]),t("td",[e._v("Number")]),t("td",[e._v("3000")])])])])])}],N={},A=(0,v.Z)(N,B,w,!1,null,null,null),P=A.exports,j={render(){const e=arguments[0];return e("div",{class:"demo-carousel"},[e(_),e(p),e(b),e(Z),e(P)])}},q=j,z=(0,v.Z)(q,a,r,!1,null,null,null),D=z.exports}}]);