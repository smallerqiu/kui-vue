/*!
 * kui-vue v3.3.5-d
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[2580],{439:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": function() { return /* binding */ i18n; }\n});\n\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./src/views/i18n.md?vue&type=template&id=1fb1dc06&\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h1\', [_vm._v("国际化")]), _c(\'p\', [_vm._v("KUI 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 main.js 中：")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-js"\n    }\n  }, [_vm._v("// 完整引入 KUI\\nimport Vue from \'vue\'\\nimport KUI from \'kui-vue\'\\n// import en \\nimport locale from \'kui-vue/components/locale/lang/en\'\\n// set default lang\\nVue.use(KUI, { locale })\\n")])]), _c(\'p\', [_vm._v("或 按需引入")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-js"\n    }\n  }, [_vm._v("// 按需引入 KUI\\nimport Vue from \'vue\'\\nimport {  Select } from \'kui-vue\'\\nimport lang from \'kui-vue/components/locale/lang/en\'\\nimport locale from \'kui-vue/components/locale\'\\n\\n// 设置语言\\nlocale.use(lang)\\n\\n// 引入组件\\nVue.component(Select.name, Select)\\n")])]), _c(\'p\', [_vm._v("如果使用其它语言，默认情况下中文语言包依旧是被引入的，可以使用 webpack 的 NormalModuleReplacementPlugin 替换默认语言包。")]), _c(\'p\', [_vm._v("webpack.config.js")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-js"\n    }\n  }, [_vm._v("{\\n  plugins: [\\n    new webpack.NormalModuleReplacementPlugin(/kui-vue[\\\\/\\\\\\\\]components[\\\\/\\\\\\\\]locale[\\\\/\\\\\\\\]lang[\\\\/\\\\\\\\]zh-CN/, \'kui-vue/components/locale/lang/en\')\\n  ]\\n}\\n")])]), _c(\'h2\', {\n    attrs: {\n      "id": "配合-vue-i18n@6.x+",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#配合-vue-i18n@6.x+"\n    }\n  }, [_vm._v("配合 vue-i18n@6.x+")])]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-js"\n    }\n  }, [_vm._v("import Vue from \'vue\'\\nimport VueI18n from \'vue-i18n\'\\nimport KUI from \'kui-vue\'\\nimport en from \'kui-vue/dist/locale/en\'\\nimport zh from \'kui-vue/dist/locale/zhCN\'\\nimport router from \'./router.js\'\\nimport App from \'./src/App.vue\'\\n\\nVue.use(VueI18n)\\n// Create VueI18n instance with options\\nconst i18n = new VueI18n({\\n  locale: \'en\', // set default locale\\n  messages:{ en,zh }, // set locale messages\\n})\\n\\nVue.use(KUI, {\\n  i18n: (key, value) => i18n.t(key, value)\\n})\\n\\nnew Vue({\\n  i18n,\\n  router,\\n  render: h => h(App),\\n}).$mount(\'#app\')\\n\\n// to change \\ni18n.local = \'zh\' // or others\\n")])]), _c(\'h2\', {\n    attrs: {\n      "id": "通过-cdn-的方式加载语言文件",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#通过-cdn-的方式加载语言文件"\n    }\n  }, [_vm._v("通过 CDN 的方式加载语言文件")])]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<script src=\\"//unpkg.com/vue\\"><\/script>\\n<script src=\\"//unpkg.com/kui-vue\\"><\/script>\\n<script src=\\"//unpkg.com/kui-vue/dist/locale/en.js\\"><\/script>\\n\\n<script>\\n  kui.locale(kui_lang_en)\\n<\/script>\\n")])]), _c(\'p\', [_vm._v("搭配 vue-i18n 使用")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<script src=\\"//unpkg.com/vue\\"><\/script>\\n<script src=\\"//unpkg.com/vue-i18n/dist/vue-i18n.js\\"><\/script>\\n<script src=\\"//unpkg.com/kui-vue\\"><\/script>\\n\\n<script src=\\"//unpkg.com/kui-vue/dist/locale/en.js\\"><\/script>\\n<script src=\\"//unpkg.com/kui-vue/dist/locale/zh-CN.js\\"><\/script>\\n<script src=\\"//unpkg.com/kui-vue/dist/locale/fr.js\\"><\/script>\\n\\n<script>\\n  // vue-i18n@6.x\\n  const i18n = new VueI18n({\\n    locale: \'en\', // 语言标识\\n    messages: {\\n      en: kui_lang_en,\\n      zhCN: kui_lang_zhCN,\\n      fr: kui_lang_fr\\n    }\\n  })\\n  // vue-i18n@6.x\\n  kui.i18n((key, value) => i18n.t(key, value))\\n<\/script>\\n")])]), _c(\'h3\', {\n    attrs: {\n      "id": "nuxt-多语言支持",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#nuxt-多语言支持"\n    }\n  }, [_vm._v("nuxt 多语言支持")])]), _c(\'p\', [_c(\'code\', {\n    pre: true\n  }, [_vm._v("plugins")]), _vm._v("目录，新建"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("kui.js")]), _vm._v("，写入以下内容：")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-js"\n    }\n  }, [_vm._v("import Vue from \\"vue\\";\\nimport VueI18n from \'vue-i18n\'\\nimport KUI from \'kui-vue\';\\nVue.use(VueI18n)\\n\\n\\nimport kui_en from \'kui-vue/components/locale/lang/en\'\\nimport kui_zh from \'kui-vue/components/locale/lang/zh-CN\'\\n\\n//Others\\nlet zh = { hello:\'你好\' }\\nlet en = { hello:\'hello\' }\\n\\nexport default ({ app, store }) => {\\n  let i18n = new VueI18n({\\n    locale: store.state.lang||\'en\',\\n    fallbackLocale: \'en\',\\n    messages: {\\n      zh: Object.assign(zh, kui_zh),\\n      en: Object.assign(en, kui_en),\\n    }\\n  });\\n  app.i18n = i18n\\n  Vue.use(KUI, {\\n    i18n: (key, value) => i18n.t(key, value)\\n  })\\n}\\n")])]), _c(\'p\', [_vm._v("有遇无法编译问题,修改 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("nuxt.config.js")])]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-js"\n    }\n  }, [_vm._v("export default{\\n  ...\\n    build:{\\n++    transpile:[\'kui-vue\']  \\n    }\\n  ...\\n}\\n")])]), _c(\'p\', [_vm._v("目前 KUI 内置了以下语言：")]), _c(\'ul\', [_c(\'li\', [_vm._v("简体中文(zh-CN)")]), _c(\'li\', [_vm._v("繁体中文(zh-TW)")]), _c(\'li\', [_vm._v("德语(de)")]), _c(\'li\', [_vm._v("希腊语(el)")]), _c(\'li\', [_vm._v("英语(en)")]), _c(\'li\', [_vm._v("法语(fr)")]), _c(\'li\', [_vm._v("意大利语(it)")]), _c(\'li\', [_vm._v("日语(ja)")]), _c(\'li\', [_vm._v("韩语(ko)")]), _c(\'li\', [_vm._v("俄语(ru)")]), _c(\'li\', [_vm._v("泰语(th)")]), _c(\'li\', [_vm._v("乌克兰语(ua)")]), _c(\'li\', [_vm._v("越南语(vi)")])]), _c(\'p\', [_vm._v("欢迎贡献代码，以支持更多语言。"), _c(\'a\', {\n    attrs: {\n      "href": "https://gitee.com/chuchur/kui-vue/tree/master/components/locale/lang"\n    }\n  }, [_vm._v("Join")])])]);\n}];\n\n;// CONCATENATED MODULE: ./src/views/i18n.md?vue&type=template&id=1fb1dc06&\n\n// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(3736);\n;// CONCATENATED MODULE: ./src/views/i18n.md\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,componentNormalizer/* default */.Z)(\n  script,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var i18n = (component.exports);\n\n//# sourceURL=webpack://kui-vue/./src/views/i18n.md_+_2_modules?')}}]);