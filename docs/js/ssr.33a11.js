/*!
 * kui-vue v3.3.6-b
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[2125],{8483:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var r=function(){this._self._c;return this._m(0)};r._withStripped=!0;var a=(0,t(1900).Z)({},r,[function(){var e=this,n=e._self._c;return n("div",{staticClass:"markdown-body"},[n("h1",[e._v("服务端渲染的支持")]),e._v(" "),n("h3",{attrs:{id:"nuxt-环境构建",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-环境构建"}},[e._v("nuxt 环境构建")])]),e._v(" "),n("p",[e._v("使用npx 或者 yarn 初始化项目,使用npm i npx -g 安装npx 或 yarn")]),e._v(" "),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[e._v("$ npx create-nuxt-app <project-name>\n#or\n$ yarn create nuxt-app <project-name>\n")])]),e._v(" "),n("p",[e._v("更多详情请参阅 https://nuxtjs.org/guide/installation")]),e._v(" "),n("p",[e._v("一步步完成后找到"),n("code",{pre:!0},[e._v("plugins")]),e._v("目录，新建"),n("code",{pre:!0},[e._v("kui.js")]),e._v("，写入以下内容：")]),e._v(" "),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("import Vue from 'vue';\nimport kui from 'kui-vue';\n\nVue.use(kui);\nimport 'kui-vue/dist/k-ui.css';\n")])]),e._v(" "),n("p",[e._v("然后修改根目录"),n("code",{pre:!0},[e._v("nuxt.config.js")]),e._v("，修改配置文件，如下")]),e._v(" "),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("module.exports = {\n  /*\n  ** Headers of the page\n  */\n  head: {\n    title: '{{ name }}',\n    meta: [\n      { charset: 'utf-8' },\n      { name: 'viewport', content: 'width=device-width, initial-scale=1' },\n      { hid: 'description', name: 'description', content: '{{ escape description }}' }\n    ],\n    link: [\n      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }\n    ]\n  },\n  plugins: [\n      { src: '~plugins/kui', ssr: true }  // add\n  ],\n  //....\n}\n")])]),e._v(" "),n("p",[e._v("至此，配置完成，所有组件将支持服务端渲染了。只要是对Nuxt universal 模式的支持")]),e._v(" "),n("h3",{attrs:{id:"nuxt-多语言支持",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-多语言支持"}},[e._v("nuxt 多语言支持")])]),e._v(" "),n("p",[n("code",{pre:!0},[e._v("plugins")]),e._v("目录，新建"),n("code",{pre:!0},[e._v("kui.js")]),e._v("，写入以下内容：")]),e._v(" "),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("import Vue from \"vue\";\nimport VueI18n from 'vue-i18n'\nimport KUI from 'kui-vue';\nVue.use(VueI18n)\n\n\nimport kui_en from 'kui-vue/components/locale/lang/en'\nimport kui_zh from 'kui-vue/components/locale/lang/zh-CN'\n\n//Others\nlet zh = { hello:'你好' }\nlet en = { hello:'hello' }\n\nexport default ({ app, store }) => {\n  let i18n = new VueI18n({\n    locale: store.state.lang||'en',\n    fallbackLocale: 'en',\n    messages: {\n      zh: Object.assign(zh, kui_zh),\n      en: Object.assign(en, kui_en),\n    }\n  });\n  app.i18n = i18n\n  Vue.use(KUI, {\n    i18n: (key, value) => i18n.t(key, value)\n  })\n}\n")])]),e._v(" "),n("p",[e._v("有遇无法编译问题,修改 "),n("code",{pre:!0},[e._v("nuxt.config.js")])]),e._v(" "),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("export default{\n  ...\n    build:{\n++    transpile:['kui-vue']  \n    }\n  ...\n}\n")])])])}],!1,null,null,null).exports}}]);