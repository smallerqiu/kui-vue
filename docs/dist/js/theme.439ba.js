/*! kui-vue v2.1.6 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{JmIm:function(s,e,t){"use strict";t.r(e);var n={components:{Code:t("rMEQ").a},data:function(){return{a:"//引入 styles\n@import '~kui-vue/src/styles/index.less';\n\n// 主色覆盖为 ff0055\n@main :#ff0055;\n\n// 组件的圆角覆盖为5px\n@radius:~'5px';",b:"import Vue from 'vue';\nimport kui from 'kui-vue';\nimport 'assets/styles/custom.less';\n\nVue.use(kui);"}}},a=t("KHd+"),r=Object(a.a)(n,function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("div",{staticClass:"theme"},[n("h2",[s._v("定制主题")]),s._v(" "),n("p",[s._v("主题可以根据自己的喜好，和项目定制的风格来开发，可以定制颜色和圆角风格。")]),s._v(" "),n("img",{attrs:{src:t("YTfa")}}),s._v(" "),n("br"),s._v(" "),n("h3",[s._v("覆盖定制")]),s._v(" "),n("p",[s._v("如果项目使用webpack构建，可以通过覆盖less变量来定制主题")]),s._v(" "),n("p",[s._v("新建一个less 文件 如：'assets/styles/custom.less',写下如下内容：")]),s._v(" "),n("Code",{attrs:{lang:"js"}},[s._v("\n    "+s._s(s.a)+"\n  ")]),s._v(" "),n("p",[s._v("然后在入口文件 main.js 内导入这个 less 文件即可：")]),s._v(" "),n("Code",{attrs:{lang:"js"}},[s._v("\n    "+s._s(s.b)+"\n  ")])],1)},[],!1,null,null,null);e.default=r.exports},YTfa:function(s,e,n){s.exports=n.p+"img/theme.jpg?77e3bb3"}}]);