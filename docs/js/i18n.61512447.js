/*!
 * kui-vue v3.3.5-b
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[2580],{1450:function(e,n,r){r.r(n),r.d(n,{default:function(){return a}});var t=function(){var e=this;e._self._c;return e._m(0)},u=[function(){var e=this,n=e._self._c;return n("div",[n("h1",[e._v("国际化")]),n("p",[e._v("KUI 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 main.js 中：")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("// 完整引入 KUI\nimport Vue from 'vue'\nimport KUI from 'kui-vue'\n// import en \nimport locale from 'kui-vue/components/locale/lang/en'\n// set default lang\nVue.use(KUI, { locale })\n")])]),n("p",[e._v("或 按需引入")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("// 按需引入 KUI\nimport Vue from 'vue'\nimport {  Select } from 'kui-vue'\nimport lang from 'kui-vue/components/locale/lang/en'\nimport locale from 'kui-vue/components/locale'\n\n// 设置语言\nlocale.use(lang)\n\n// 引入组件\nVue.component(Select.name, Select)\n")])]),n("p",[e._v("如果使用其它语言，默认情况下中文语言包依旧是被引入的，可以使用 webpack 的 NormalModuleReplacementPlugin 替换默认语言包。")]),n("p",[e._v("webpack.config.js")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("{\n  plugins: [\n    new webpack.NormalModuleReplacementPlugin(/kui-vue[\\/\\\\]components[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]zh-CN/, 'kui-vue/components/locale/lang/en')\n  ]\n}\n")])]),n("h2",{attrs:{id:"配合-vue-i18n@6.x+",tabindex:"-1"}},[e._v("配合 vue-i18n@6.x+ "),n("a",{staticClass:"anchor",attrs:{href:"#配合-vue-i18n@6.x+"}},[e._v("#")])]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("import Vue from 'vue'\nimport VueI18n from 'vue-i18n'\nimport KUI from 'kui-vue'\nimport en from 'kui-vue/dist/locale/en'\nimport zh from 'kui-vue/dist/locale/zhCN'\nimport router from './router.js'\nimport App from './src/App.vue'\n\nVue.use(VueI18n)\n// Create VueI18n instance with options\nconst i18n = new VueI18n({\n  locale: 'en', // set default locale\n  messages:{ en,zh }, // set locale messages\n})\n\nVue.use(KUI, {\n  i18n: (key, value) => i18n.t(key, value)\n})\n\nnew Vue({\n  i18n,\n  router,\n  render: h => h(App),\n}).$mount('#app')\n\n// to change \ni18n.local = 'zh' // or others\n")])]),n("h2",{attrs:{id:"通过-cdn-的方式加载语言文件",tabindex:"-1"}},[e._v("通过 CDN 的方式加载语言文件 "),n("a",{staticClass:"anchor",attrs:{href:"#通过-cdn-的方式加载语言文件"}},[e._v("#")])]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<script src="//unpkg.com/vue"><\/script>\n<script src="//unpkg.com/kui-vue"><\/script>\n<script src="//unpkg.com/kui-vue/dist/locale/en.js"><\/script>\n\n<script>\n  kui.locale(kui_lang_en)\n<\/script>\n')])]),n("p",[e._v("搭配 vue-i18n 使用")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<script src="//unpkg.com/vue"><\/script>\n<script src="//unpkg.com/vue-i18n/dist/vue-i18n.js"><\/script>\n<script src="//unpkg.com/kui-vue"><\/script>\n\n<script src="//unpkg.com/kui-vue/dist/locale/en.js"><\/script>\n<script src="//unpkg.com/kui-vue/dist/locale/zh-CN.js"><\/script>\n<script src="//unpkg.com/kui-vue/dist/locale/fr.js"><\/script>\n\n<script>\n  // vue-i18n@6.x\n  const i18n = new VueI18n({\n    locale: \'en\', // 语言标识\n    messages: {\n      en: kui_lang_en,\n      zhCN: kui_lang_zhCN,\n      fr: kui_lang_fr\n    }\n  })\n  // vue-i18n@6.x\n  kui.i18n((key, value) => i18n.t(key, value))\n<\/script>\n')])]),n("h3",{attrs:{id:"nuxt-多语言支持",tabindex:"-1"}},[e._v("nuxt 多语言支持 "),n("a",{staticClass:"anchor",attrs:{href:"#nuxt-多语言支持"}},[e._v("#")])]),n("p",[n("code",{pre:!0},[e._v("plugins")]),e._v("目录，新建"),n("code",{pre:!0},[e._v("kui.js")]),e._v("，写入以下内容：")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("import Vue from \"vue\";\nimport VueI18n from 'vue-i18n'\nimport KUI from 'kui-vue';\nVue.use(VueI18n)\n\n\nimport kui_en from 'kui-vue/components/locale/lang/en'\nimport kui_zh from 'kui-vue/components/locale/lang/zh-CN'\n\n//Others\nlet zh = { hello:'你好' }\nlet en = { hello:'hello' }\n\nexport default ({ app, store }) => {\n  let i18n = new VueI18n({\n    locale: store.state.lang||'en',\n    fallbackLocale: 'en',\n    messages: {\n      zh: Object.assign(zh, kui_zh),\n      en: Object.assign(en, kui_en),\n    }\n  });\n  app.i18n = i18n\n  Vue.use(KUI, {\n    i18n: (key, value) => i18n.t(key, value)\n  })\n}\n")])]),n("p",[e._v("有遇无法编译问题,修改 "),n("code",{pre:!0},[e._v("nuxt.config.js")])]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("export default{\n  ...\n    build:{\n++    transpile:['kui-vue']  \n    }\n  ...\n}\n")])]),n("p",[e._v("目前 KUI 内置了以下语言：")]),n("ul",[n("li",[e._v("简体中文(zh-CN)")]),n("li",[e._v("繁体中文(zh-TW)")]),n("li",[e._v("德语(de)")]),n("li",[e._v("希腊语(el)")]),n("li",[e._v("英语(en)")]),n("li",[e._v("法语(fr)")]),n("li",[e._v("意大利语(it)")]),n("li",[e._v("日语(ja)")]),n("li",[e._v("韩语(ko)")]),n("li",[e._v("俄语(ru)")]),n("li",[e._v("泰语(th)")]),n("li",[e._v("乌克兰语(ua)")]),n("li",[e._v("越南语(vi)")])]),n("p",[e._v("欢迎贡献代码，以支持更多语言。"),n("a",{attrs:{href:"https://gitee.com/chuchur/kui-vue/tree/master/components/locale/lang"}},[e._v("Join")])])])}],i=r(1001),s={},l=(0,i.Z)(s,t,u,!1,null,null,null),a=l.exports}}]);