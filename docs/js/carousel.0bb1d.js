/*!
 * kui-vue v3.4.7
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[2369],{9325:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var r=function(){this._self._c;return this._m(0)};r._withStripped=!0;var l=a(1900),v=(0,l.Z)({},r,[function(){var e=this,t=e._self._c;return t("div",{staticClass:"markdown-body"},[t("h1",[e._v("Carousel 走马灯")]),e._v(" "),t("p",[e._v("旋转木马，一组轮播的区域。")]),e._v(" "),t("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[e._v("何时使用")])]),e._v(" "),t("ul",[t("li",[e._v("当有一组平级的内容。")]),e._v(" "),t("li",[e._v("当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。")]),e._v(" "),t("li",[e._v("常用于一组图片或卡片轮播。")])]),e._v(" "),t("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[e._v("代码演示")])])])}],!1,null,null,null).exports,s=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",[t("Carousel",{attrs:{value:2}},[t("CarouselItem",[e._v("1")]),e._v(" "),t("CarouselItem",[e._v("2")]),e._v(" "),t("CarouselItem",[e._v("3")]),e._v(" "),t("CarouselItem",[e._v("4")])],1)],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[e._v("基本用法")])]),e._v(" "),t("p",[e._v("最简单的用法,可以通过 "),t("code",{pre:!0},[e._v("value(v-model)")]),e._v(" 指定初始值")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <Carousel :value="2">\n      <CarouselItem>1</CarouselItem>\n      <CarouselItem>2</CarouselItem>\n      <CarouselItem>3</CarouselItem>\n      <CarouselItem>4</CarouselItem>\n    </Carousel>  \n  </div>\n</template>\n\n')])])])],2)};s._withStripped=!0;var _=(0,l.Z)({},s,[],!1,null,null,null).exports,o=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",[t("Carousel",{attrs:{vertical:""}},[t("CarouselItem",[e._v("1")]),e._v(" "),t("CarouselItem",[e._v("2")]),e._v(" "),t("CarouselItem",[e._v("3")]),e._v(" "),t("CarouselItem",[e._v("4")])],1)],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"垂直",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垂直"}},[e._v("垂直")])]),e._v(" "),t("p",[e._v("通过设置 "),t("code",{pre:!0},[e._v("vertical")]),e._v(" 呈现垂直模式,此时不显示左右箭头")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <div>\n    <Carousel vertical>\n      <CarouselItem>1</CarouselItem>\n      <CarouselItem>2</CarouselItem>\n      <CarouselItem>3</CarouselItem>\n      <CarouselItem>4</CarouselItem>\n    </Carousel>  \n  </div>\n</template>\n\n")])])])],2)};o._withStripped=!0;var n=(0,l.Z)({},o,[],!1,null,null,null).exports,u=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",[t("Carousel",{attrs:{autoplay:""}},[t("CarouselItem",[e._v("1")]),e._v(" "),t("CarouselItem",[e._v("2")]),e._v(" "),t("CarouselItem",[e._v("3")]),e._v(" "),t("CarouselItem",[e._v("4")])],1)],1)]),e._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"自动播放",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动播放"}},[e._v("自动播放")])]),e._v(" "),t("p",[e._v("通过设置 "),t("code",{pre:!0},[e._v("autoplay")]),e._v(" ，可实现定时自动播放，通过 "),t("code",{pre:!0},[e._v("delay")]),e._v(" 设置间隔播放时间，默认 "),t("code",{pre:!0},[e._v("3000")]),e._v(" ，单位毫秒")])]),e._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <div>\n    <Carousel autoplay>\n      <CarouselItem>1</CarouselItem>\n      <CarouselItem>2</CarouselItem>\n      <CarouselItem>3</CarouselItem>\n      <CarouselItem>4</CarouselItem>\n    </Carousel>  \n  </div>\n</template>\n\n")])])])],2)};u._withStripped=!0;var d=(0,l.Z)({},u,[],!1,null,null,null).exports,i=function(){this._self._c;return this._m(0)};i._withStripped=!0;var m=(0,l.Z)({},i,[function(){var e=this,t=e._self._c;return t("div",{staticClass:"markdown-body"},[t("h2",{attrs:{id:"api",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("API")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("默认值")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("value")]),e._v(" "),t("td",[e._v("幻灯片的索引，从 0 开始，可以使用 "),t("code",{pre:!0},[e._v("v-model")]),e._v(" 双向绑定数据")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[e._v("0")])]),e._v(" "),t("tr",[t("td",[e._v("loop")]),e._v(" "),t("td",[e._v("是否开启循环")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("vertical")]),e._v(" "),t("td",[e._v("是否垂直模式显示")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("false")])]),e._v(" "),t("tr",[t("td",[e._v("autoplay")]),e._v(" "),t("td",[e._v("是否自动切换")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("false")])]),e._v(" "),t("tr",[t("td",[e._v("delay")]),e._v(" "),t("td",[e._v("自动切换的时间间隔，单位为毫秒")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[e._v("3000")])])])])])}],!1,null,null,null).exports,p={render(){const e=arguments[0];return e("div",{class:"demo-carousel"},[e(v),e(_),e(n),e(d),e(m)])}},c=p,C=(0,l.Z)(c,undefined,undefined,!1,null,null,null).exports}}]);