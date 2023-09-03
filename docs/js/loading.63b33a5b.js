/*!
 * kui-vue v3.3.5-d
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[6227],{1813:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": function() { return /* binding */ demo; }\n});\n\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/loading/demo/info.md?vue&type=template&id=85fb4b3e&\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h1\', [_vm._v("Loading 加载进度")]), _c(\'p\', [_vm._v("进度加载。")]), _c(\'h2\', {\n    attrs: {\n      "id": "何时使用",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#何时使用"\n    }\n  }, [_vm._v("何时使用")])]), _c(\'ul\', [_c(\'li\', [_vm._v("异步请求时展示进度")])]), _c(\'h2\', {\n    attrs: {\n      "id": "示例",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#示例"\n    }\n  }, [_vm._v("示例")])]), _c(\'p\', [_vm._v("模拟路由加载")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-js"\n    }\n  }, [_vm._v("// # router.js\\n\\nimport Vue from \'vue\'\\nimport Router from \'vue-router\'\\nimport kui from \'kui-vue\'\\n\\nVue.use(Router)\\nlet router = new Router({\\n  ....\\n})\\nrouter.beforeEach((to, from, next) => {\\n  kui.Loading.start();\\n  next();\\n});\\n\\nrouter.afterEach(route => {\\n  kui.Loading.finish();\\n});\\n")])]), _c(\'p\', [_vm._v("模拟ajax 请求")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-js"\n    }\n  }, [_vm._v("// 以jQuery的Ajax为例，部分代码省略\\nimport $ from \'jquery\';\\nexport default {\\n  methods: {\\n    getData () {\\n      this.$Loading.start();\\n      $.ajax({\\n        url: \'/api/someurl\',\\n        type: \'get\',\\n        success: () => {\\n          this.$Loading.finish();\\n        }\\n        error: () => {\\n          this.$Loading.error();\\n        },\\n      });\\n    }\\n  }\\n}\\n")])]), _c(\'h2\', {\n    attrs: {\n      "id": "代码演示",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#代码演示"\n    }\n  }, [_vm._v("代码演示")])])]);\n}];\n\n;// CONCATENATED MODULE: ./components/loading/demo/info.md?vue&type=template&id=85fb4b3e&\n\n// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(3736);\n;// CONCATENATED MODULE: ./components/loading/demo/info.md\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,componentNormalizer/* default */.Z)(\n  script,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var info = (component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/loading/demo/base.md?vue&type=template&id=1c8fe659&\nvar basevue_type_template_id_1c8fe659_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'div\', [_c(\'Button\', {\n    on: {\n      "click": function ($event) {\n        return _vm.start();\n      }\n    }\n  }, [_vm._v("start")]), _c(\'Button\', {\n    on: {\n      "click": _vm.finish\n    }\n  }, [_vm._v("finish")]), _c(\'Button\', {\n    on: {\n      "click": _vm.error\n    }\n  }, [_vm._v("error")]), _c(\'Button\', {\n    on: {\n      "click": function ($event) {\n        return _vm.upload(30);\n      }\n    }\n  }, [_vm._v("upload 30%")]), _c(\'Button\', {\n    on: {\n      "click": function ($event) {\n        return _vm.upload(80);\n      }\n    }\n  }, [_vm._v("upload 80%")]), _c(\'Button\', {\n    on: {\n      "click": function ($event) {\n        return _vm.destroy();\n      }\n    }\n  }, [_vm._v("destroy")])], 1)]), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "基本用法",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#基本用法"\n    }\n  }, [_vm._v("基本用法")])]), _c(\'p\', [_vm._v("最简单的用法。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <div>\\n    <Button @click=\\"start()\\">start</Button>\\n    <Button @click=\\"finish\\">finish</Button>\\n    <Button @click=\\"error\\">error</Button>\\n    <Button @click=\\"upload(30)\\">upload 30%</Button>\\n    <Button @click=\\"upload(80)\\">upload 80%</Button>\\n    <Button @click=\\"destroy()\\">destroy</Button>\\n  </div>\\n</template>\\n<script>\\nexport default{\\n  methods: {\\n    upload(percent){\\n      this.$Loading.upload(percent);\\n    },\\n    start() {\\n      this.$Loading.start();\\n    },\\n    finish() {\\n      this.$Loading.finish();\\n    },\\n    error() {\\n      this.$Loading.error();\\n    },\\n    destroy(){\\n      this.$Loading.destroy();\\n    }\\n  }\\n}\\n<\/script>\\n\\n")])])])], 2);\n};\nvar basevue_type_template_id_1c8fe659_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/loading/demo/base.md?vue&type=script&lang=js&\n/* harmony default export */ var basevue_type_script_lang_js_ = ({\n  methods: {\n    upload(percent) {\n      this.$Loading.upload(percent);\n    },\n    start() {\n      this.$Loading.start();\n    },\n    finish() {\n      this.$Loading.finish();\n    },\n    error() {\n      this.$Loading.error();\n    },\n    destroy() {\n      this.$Loading.destroy();\n    }\n  }\n});\n;// CONCATENATED MODULE: ./components/loading/demo/base.md?vue&type=script&lang=js&\n /* harmony default export */ var demo_basevue_type_script_lang_js_ = (basevue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/loading/demo/base.md\n\n\n\n\n\n/* normalize component */\n;\nvar base_component = (0,componentNormalizer/* default */.Z)(\n  demo_basevue_type_script_lang_js_,\n  basevue_type_template_id_1c8fe659_render,\n  basevue_type_template_id_1c8fe659_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var base = (base_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/loading/index.md?vue&type=template&id=4cbfcb7d&\nvar loadingvue_type_template_id_4cbfcb7d_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar loadingvue_type_template_id_4cbfcb7d_staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h2\', {\n    attrs: {\n      "id": "loading-api",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#loading-api"\n    }\n  }, [_vm._v("Loading API")])]), _c(\'table\', [_c(\'thead\', [_c(\'tr\', [_c(\'th\', [_vm._v("属性")]), _c(\'th\', [_vm._v("说明")]), _c(\'th\', [_vm._v("类型")]), _c(\'th\', [_vm._v("默认值")])])]), _c(\'tbody\', [_c(\'tr\', [_c(\'td\', [_vm._v("start")]), _c(\'td\', [_vm._v("开始加载")]), _c(\'td\', [_vm._v("Function")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("finish")]), _c(\'td\', [_vm._v("完成加载")]), _c(\'td\', [_vm._v("Function")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("error")]), _c(\'td\', [_vm._v("加载错误")]), _c(\'td\', [_vm._v("Function")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("update")]), _c(\'td\', [_vm._v("手动更新进度")]), _c(\'td\', [_vm._v("Function(percent)")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("destroy")]), _c(\'td\', [_vm._v("vue的$.destroy()")]), _c(\'td\', [_vm._v("Function")]), _c(\'td\', [_vm._v("-")])])])])]);\n}];\n\n;// CONCATENATED MODULE: ./components/loading/index.md?vue&type=template&id=4cbfcb7d&\n\n;// CONCATENATED MODULE: ./components/loading/index.md\n\nvar loading_script = {}\n\n\n/* normalize component */\n;\nvar loading_component = (0,componentNormalizer/* default */.Z)(\n  loading_script,\n  loadingvue_type_template_id_4cbfcb7d_render,\n  loadingvue_type_template_id_4cbfcb7d_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var loading = (loading_component.exports);\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/loading/demo/index.vue?vue&type=script&lang=js&\n\n\n\n/* harmony default export */ var demovue_type_script_lang_js_ = ({\n  render() {\n    const h = arguments[0];\n    return h("div", {\n      "class": "demo-loading"\n    }, [h(info), h(base), h(loading)]);\n  }\n});\n;// CONCATENATED MODULE: ./components/loading/demo/index.vue?vue&type=script&lang=js&\n /* harmony default export */ var loading_demovue_type_script_lang_js_ = (demovue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-32.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-32.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-32.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-32.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/loading/demo/index.vue?vue&type=style&index=0&id=63f93f4e&prod&lang=less&\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./components/loading/demo/index.vue?vue&type=style&index=0&id=63f93f4e&prod&lang=less&\n\n;// CONCATENATED MODULE: ./components/loading/demo/index.vue\nvar demo_render, demo_staticRenderFns\n;\n\n;\n\n\n/* normalize component */\n\nvar demo_component = (0,componentNormalizer/* default */.Z)(\n  loading_demovue_type_script_lang_js_,\n  demo_render,\n  demo_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var demo = (demo_component.exports);\n\n//# sourceURL=webpack://kui-vue/./components/loading/demo/index.vue_+_14_modules?')}}]);