/*!
 * kui-vue v3.4.2
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[9760],{8965:function(t,e,n){"use strict";n.r(e);var r=n(8081),a=n.n(r),o=n(3645),c=n.n(o)()(a());c.push([t.id,"\n.demo-card[data-v-57445046]{\n  padding:20px;\n  background-color:#7f7f7f26;\n}\n",""]),e.default=c},3645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(c[d]=!0)}for(var i=0;i<t.length;i++){var l=[].concat(t[i]);r&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},8081:function(t){"use strict";t.exports=function(t){return t[1]}},7752:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var r=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Card",{attrs:{title:"卡片标题",icon:t.Heart,bordered:""}},[e("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("更多")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")])])],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),t._v(" "),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("title")]),t._v(" 和 "),e("code",{pre:!0},[t._v("icon")]),t._v(" 可设置标题和图标")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <Card title="卡片标题" :icon="Heart" bordered>\n      <a slot="extra" href="#">更多</a>\n      <p>card content</p>\n      <p>card content</p>\n      <p>card content</p>\n      <p>card content</p>\n      <p>card content</p>\n      <p>card content</p>\n    </Card>\n  </div>\n</template>\n<script>\nimport { Heart } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Heart\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};r._withStripped=!0;var a=n(2324),o={data(){return{Heart:a.Heart}}},c=n(1900),s=(0,c.Z)(o,r,[],!1,null,null,null).exports,d=function(){this._self._c;return this._m(0)};d._withStripped=!0;var i=(0,c.Z)({},d,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Card 卡片")]),t._v(" "),e("p",[t._v("通用卡片容器")]),t._v(" "),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),t._v(" "),e("p",[t._v("最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。")]),t._v(" "),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],!1,null,null,null).exports,l=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",{staticClass:"demo-card"},[e("Card",{attrs:{title:"卡片标题",icon:t.Heart,bordered:!1}},[e("a",{attrs:{slot:"extra"},on:{click:function(e){return t.$Message.info("click")}},slot:"extra"},[t._v("更多")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")])])],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"边框",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#边框"}},[t._v("边框")])]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("bordered")]),t._v(" 可以设置是否显示边框")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div class="demo-card">\n    <Card title="卡片标题" :icon="Heart" :bordered="false">\n      <a slot="extra" @click="$Message.info(\'click\')">更多</a>\n      <p>card content</p>\n      <p>card content</p>\n      <p>card content</p>\n      <p>card content</p>\n      <p>card content</p>\n      <p>card content</p>\n    </Card>\n  </div>\n</template>\n<script>\nimport { Heart } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Heart\n    }\n  }\n}\n<\/script>\n<style scoped>\n.demo-card{\n  padding:20px;\n  background-color:#7f7f7f26;\n}\n</style>\n\n')])])])],2)};l._withStripped=!0;var v={data(){return{Heart:a.Heart}}},p=(n(8662),(0,c.Z)(v,l,[],!1,null,"57445046",null).exports),u=function(){this._self._c;return this._m(0)};u._withStripped=!0;var _=(0,c.Z)({},u,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("卡片的标题")]),t._v(" "),e("td",[t._v("String、slot")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("卡片标题的图标")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("bordered")]),t._v(" "),e("td",[t._v("卡片是否显示边框")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("extra")]),t._v(" "),e("td",[t._v("卡片标题扩展")]),t._v(" "),e("td",[t._v("slot")]),t._v(" "),e("td",[t._v("-")])])])])])}],!1,null,null,null).exports,f={render(){const t=arguments[0];return t("div",[t(i),t(s),t(p),t(_)])}},h=f,m=(0,c.Z)(h,undefined,undefined,!1,null,null,null).exports},8662:function(t,e,n){var r=n(8965);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(5346).Z)("cdacca62",r,!1,{})},5346:function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],c=o[0],s={id:t+":"+a,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(s):n.push(r[c]={id:c,parts:[s]})}return n}n.d(e,{Z:function(){return _}});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},c=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,d=0,i=!1,l=function(){},v=null,p="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(t,e,n,a){i=n,v=a||{};var c=r(t,e);return f(c),function(e){for(var n=[],a=0;a<c.length;a++){var s=c[a];(d=o[s.id]).refs--,n.push(d)}e?f(c=r(t,e)):c=[];for(a=0;a<n.length;a++){var d;if(0===(d=n[a]).refs){for(var i=0;i<d.parts.length;i++)d.parts[i]();delete o[d.id]}}}}function f(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(m(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var c=[];for(a=0;a<n.parts.length;a++)c.push(m(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:c}}}}function h(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+p+'~="'+t.id+'"]');if(r){if(i)return l;r.parentNode.removeChild(r)}if(u){var a=d++;r=s||(s=h()),e=x.bind(null,r,a,!1),n=x.bind(null,r,a,!0)}else r=h(),e=C.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var g,b=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,a);else{var o=document.createTextNode(a),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(o,c[e]):t.appendChild(o)}}function C(t,e){var n=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),v.ssrId&&t.setAttribute(p,e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}}]);