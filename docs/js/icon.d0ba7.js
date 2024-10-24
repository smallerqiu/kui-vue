/*!
 * kui-vue v3.4.7
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[5982],{2732:function(t,e,r){r.r(e),r.d(e,{default:function(){return I}});var o=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Icon",{attrs:{type:t.Heart}}),t._v(" "),e("Icon",{attrs:{type:t.LogoKui,size:"25"}}),t._v(" "),e("Icon",{attrs:{type:t.LogoKui,size:"30",color:"#00be83"}}),t._v(" "),e("Icon",{attrs:{type:t.LogoKui,spin:"",size:"25"}})],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),t._v(" "),e("p",[t._v("可以通过 "),e("code",{pre:!0},[t._v("type")]),t._v("、"),e("code",{pre:!0},[t._v("size")]),t._v("  、"),e("code",{pre:!0},[t._v("color")]),t._v(" 属性分别设置图标的类型、大小、颜色,也可以通过设置 "),e("code",{pre:!0},[t._v("spin")]),t._v(" 属性来实现动画旋转效果。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Icon :type="Heart" />\n    <Icon :type="LogoKui" size="25" />\n    <Icon :type="LogoKui" size="30" color="#00be83" />\n    <Icon :type="LogoKui" spin size="25" />\n  </div>\n</template>\n<script>\nimport { Heart, LogoKui } from \'kui-icons\'\nexport default{\n  data() {\n    return{\n      Heart , LogoKui\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};o._withStripped=!0;var n=r(2324),s={data(){return{Heart:n.Heart,LogoKui:n.LogoKui}}},i=r(1900),a=(0,i.Z)(s,o,[],!1,null,null,null).exports,v=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Icon",{attrs:{type:t.ChevronDoubleForward,strokeWidth:20}}),t._v(" "),e("Icon",{attrs:{type:t.ChevronDoubleForward}}),t._v(" "),e("Icon",{attrs:{type:t.ChevronDoubleForward,strokeWidth:80}}),t._v(" "),e("br"),t._v(" "),e("Icon",{attrs:{type:t.ChevronForward,strokeWidth:20}}),t._v(" "),e("Icon",{attrs:{type:t.ChevronForward}}),t._v(" "),e("Icon",{attrs:{type:t.ChevronForward,strokeWidth:80}})],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"线条粗细",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线条粗细"}},[t._v("线条粗细")])]),t._v(" "),e("p",[t._v("可以通过 "),e("code",{pre:!0},[t._v("strokeWidth")]),t._v(" 属性设置图标的线条。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Icon :type="ChevronDoubleForward" :strokeWidth="20"/>\n    <Icon :type="ChevronDoubleForward" />\n    <Icon :type="ChevronDoubleForward" :strokeWidth="80"/>\n    <br/>\n    <Icon :type="ChevronForward" :strokeWidth="20"/>\n    <Icon :type="ChevronForward" />\n    <Icon :type="ChevronForward" :strokeWidth="80"/>\n  </div>\n</template>\n<script>\nimport { ChevronForward ,ChevronDoubleForward } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      ChevronForward,ChevronDoubleForward\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};v._withStripped=!0;var l={data(){return{ChevronForward:n.ChevronForward,ChevronDoubleForward:n.ChevronDoubleForward}}},c=(0,i.Z)(l,v,[],!1,null,null,null).exports,_=function(){this._self._c;return this._m(0)};_._withStripped=!0;var p=(0,i.Z)({},_,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Icon 图标")]),t._v(" "),e("p",[t._v("kui 的图标使用开源项目 "),e("a",{attrs:{href:"http://ionicons.com/"}},[t._v("ionicons")]),t._v(" 前版本5.5")]),t._v(" "),e("blockquote",[e("p",[t._v("3.x 版本以后不再支持"),e("code",{pre:!0},[t._v("webfont")]),t._v(" 使用 "),e("code",{pre:!0},[t._v("svg")]),t._v("代替")])]),t._v(" "),e("p",[t._v("使用图标组件，你需要安装 "),e("code",{pre:!0},[t._v("kui-icons")]),t._v(" 图标组件包：")]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("npm install --save kui-icons\n")])]),t._v(" "),e("h2",{attrs:{id:"使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("使用")])]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("<template>\n  <div>\n    <Icon :type=\"Heart\" />\n  </div>\n</template>\n<script>\nimport { Heart } from 'kui-icons'\nexport default{\n  data() {\n    return {\n      Heart\n    }\n  }\n}\n<\/script>\n")])]),t._v(" "),e("p",[t._v("3.3 版本开始, 使用 Icon 需要单独引入，使用按需加载，这样在编译之后的体积会变得更小。")]),t._v(" "),e("p",[t._v("3.1.1 版本之后 使用 "),e("code",{pre:!0},[t._v("ionicons")]),t._v(" 图标库 5.5 版本, 5.0 图标库请配合 "),e("code",{pre:!0},[t._v("kui-vue@3.1.0")])]),t._v(" "),e("h2",{attrs:{id:"使用sprite模式",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用sprite模式"}},[t._v("使用Sprite模式")])]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v('import sprite from \'kui-icons/lib/sprite.svg\'\n\n<svg width="1em" height="1em">\n  <use xlink:href={`${sprite}#LogoKui`}></use>\n</svg>\n\n')])]),t._v(" "),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],!1,null,null,null).exports,d=function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("图标快速检索")]),t._v(" "),e("br"),t._v(" "),e("Affix",{attrs:{offsetTop:65}},[e("Space",{staticStyle:{width:"80%"},attrs:{size:"large",compact:""}},[e("Input",{staticStyle:{background:"var(--kui-color-back)"},attrs:{placeholder:"输入英文关键字，搜索图标，点击图标即可复制",icon:t.LogoKui,clearable:""},on:{input:t.search},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}}),t._v(" "),e("RadioGroup",{on:{change:t.switchIcon},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[e("RadioButton",{attrs:{value:"outline"}},[t._v("Outline")]),t._v(" "),e("RadioButton",{attrs:{value:"filled"}},[t._v("Filled")])],1)],1)],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"show-icons"},[t.showIcons.length?[t._m(0),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"icon-list"},t._l(t.showIcons,(function(r,o){return e("span",{key:o,staticClass:"icon-item",on:{click:function(e){return e.stopPropagation(),t.copy(r)}}},[e("Icon",{attrs:{type:t.icons[r]}}),t._v(" "),e("span",{staticClass:"item-text"},[t._v(t._s(r))])],1)})),0)]:t._e(),t._v(" "),t.logo.length?[e("h3",[t._v("Logos")]),t._v(" "),e("div",{staticClass:"icon-list"},t._l(t.logo,(function(r,o){return e("span",{key:o,staticClass:"icon-item",on:{click:function(e){return e.stopPropagation(),t.copy(r)}}},[e("Icon",{attrs:{type:t.icons[r]}}),t._v(" "),e("span",{staticClass:"item-text"},[t._v(t._s(r))])],1)})),0)]:t._e(),t._v(" "),t.showIcons.length||t.logo.length?t._e():e("h3",{staticStyle:{"text-align":"center","padding-bottom":"50px",color:"#888"}},[t._v('\n      No results for "'+t._s(t.key)+'"\n    ')])],2)],1)};d._withStripped=!0;const u=Object.keys(n);let h=u.filter((t=>/Logo/.test(t))),f=u.filter((t=>{let e=!1;if(e=!!/Outline/.test(t)||u.filter((e=>e==t+"Outline")).length<=0&&!/Logo/.test(t),e)return t})),g=u.filter((t=>!/Logo/.test(t)&&!/Outline/.test(t)));var y={data(){return{icons:n,LogoKui:n.LogoKui,key:"",type:"filled",logo:h||[],showIcons:g||[]}},methods:{switchIcon(){this.filter(this.key)},search(t){let e=this.key;e=e.replace(/ /g,""),this.filter(e)},filter(t){let{showIcons:e,logo:r,type:o}=this,n="outline"==o?f:g;t?(t=t.toLowerCase(),e=n.filter((e=>e.replace("Outline","").toLowerCase().indexOf(t)>=0)),r=h.filter((e=>e.toLowerCase().indexOf(t)>=0))):(e=n,r=h),this.showIcons=e,this.logo=r},copy(t){let e=`<Icon type="${t}" />`;this.$copyText(e).then((t=>{this.$Message.success("代码复制成功！")}),(t=>{this.$Message.error("复制代码失败，请手动复制")}))}}},m=(0,i.Z)(y,d,[function(){var t=this._self._c;return t("div",{staticClass:"icon-head"},[t("h3",[t("span",[this._v("App icons")])])])}],!1,null,null,null).exports,k=function(){this._self._c;return this._m(0)};k._withStripped=!0;var w=(0,i.Z)({},k,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("图标类型。遵循图标的命名规范")]),t._v(" "),e("td",[t._v("Array")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("图标的大小，单位是 px")]),t._v(" "),e("td",[t._v("String,Number")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("图标的颜色")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("spin")]),t._v(" "),e("td",[t._v("是否有旋转动画")]),t._v(" "),e("td",[t._v("Boolen")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("strokeWidth")]),t._v(" "),e("td",[t._v("图标的线条粗细")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("false")])])])])])}],!1,null,null,null).exports,b={render(){const t=arguments[0];return t("div",[t(p),t(a),t(c),t(w),t(m)])}},C=b,I=(0,i.Z)(C,undefined,undefined,!1,null,null,null).exports}}]);