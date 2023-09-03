/*!
 * kui-vue v3.3.5-d
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[922],{5925:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": function() { return /* binding */ demo; }\n});\n\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/demo/info.md?vue&type=template&id=b00beff0&\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h1\', [_vm._v("Collapse 折叠面板")]), _c(\'p\', [_vm._v("可以折叠/展开的内容区域。")]), _c(\'h2\', {\n    attrs: {\n      "id": "何时使用",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#何时使用"\n    }\n  }, [_vm._v("何时使用")])]), _c(\'ul\', [_c(\'li\', [_vm._v("对复杂区域进行分组和隐藏，保持页面的整洁。")]), _c(\'li\', [_vm._v("‘手风琴’ 是一种特殊的折叠面板，只允许单个内容区域展开。")])]), _c(\'h2\', {\n    attrs: {\n      "id": "代码演示",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#代码演示"\n    }\n  }, [_vm._v("代码演示")])])]);\n}];\n\n;// CONCATENATED MODULE: ./components/collapse/demo/info.md?vue&type=template&id=b00beff0&\n\n// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(3736);\n;// CONCATENATED MODULE: ./components/collapse/demo/info.md\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,componentNormalizer/* default */.Z)(\n  script,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var info = (component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/demo/base.md?vue&type=template&id=0b02ccea&\nvar basevue_type_template_id_0b02ccea_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'div\', {\n    staticClass: "demo-collapse"\n  }, [_c(\'Collapse\', {\n    attrs: {\n      "value": [\'1\']\n    }\n  }, [_c(\'Panel\', {\n    key: "1",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])]), _c(\'Panel\', {\n    key: "2",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])]), _c(\'Panel\', {\n    key: "3",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])])], 1)], 1)]), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "基本用法",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#基本用法"\n    }\n  }, [_vm._v("基本用法")])]), _c(\'p\', [_vm._v("默认可以同时展开一个或者多个面板")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <div class=\\"demo-collapse\\">\\n    <Collapse :value=\\"[\'1\']\\">\\n      <Panel title=\\"Panel title\\" key=\\"1\\">\\n        <div>{{text}}</div>\\n      </Panel>\\n      <Panel title=\\"Panel title\\" key=\\"2\\">\\n        <div>{{text}}</div>\\n      </Panel>\\n      <Panel title=\\"Panel title\\" key=\\"3\\">\\n        <div>{{text}}</div>\\n      </Panel>\\n    </Collapse>\\n  </div>\\n</template>\\n<script>\\nexport default {\\n  data() {\\n    return {\\n      text : `A long time ago, In a beautiful kingdom, \\n  there lived a young king and queen, \\n  the people loved them so much; `\\n    }\\n  }\\n}\\n<\/script>\\n\\n")])])])], 2);\n};\nvar basevue_type_template_id_0b02ccea_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/demo/base.md?vue&type=script&lang=js&\n/* harmony default export */ var basevue_type_script_lang_js_ = ({\n  data() {\n    return {\n      text: `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    };\n  }\n});\n;// CONCATENATED MODULE: ./components/collapse/demo/base.md?vue&type=script&lang=js&\n /* harmony default export */ var demo_basevue_type_script_lang_js_ = (basevue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/collapse/demo/base.md\n\n\n\n\n\n/* normalize component */\n;\nvar base_component = (0,componentNormalizer/* default */.Z)(\n  demo_basevue_type_script_lang_js_,\n  basevue_type_template_id_0b02ccea_render,\n  basevue_type_template_id_0b02ccea_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var base = (base_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/demo/accrodion.md?vue&type=template&id=7142d121&\nvar accrodionvue_type_template_id_7142d121_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'div\', {\n    staticClass: "demo-collapse"\n  }, [_c(\'Collapse\', {\n    attrs: {\n      "value": [\'1\'],\n      "accrodion": ""\n    }\n  }, [_c(\'Panel\', {\n    key: "1",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])]), _c(\'Panel\', {\n    key: "2",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])]), _c(\'Panel\', {\n    key: "3",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])])], 1)], 1)]), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "手风琴",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#手风琴"\n    }\n  }, [_vm._v("手风琴")])]), _c(\'p\', [_vm._v("设置 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("accrodion")]), _vm._v(" 只允许同时展开一个面板")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <div class=\\"demo-collapse\\">\\n    <Collapse :value=\\"[\'1\']\\" accrodion>\\n      <Panel title=\\"Panel title\\" key=\\"1\\">\\n        <div>{{text}}</div>\\n      </Panel>\\n      <Panel title=\\"Panel title\\" key=\\"2\\">\\n        <div>{{text}}</div>\\n      </Panel>\\n      <Panel title=\\"Panel title\\" key=\\"3\\">\\n        <div>{{text}}</div>\\n      </Panel>\\n    </Collapse>\\n  </div>\\n</template>\\n<script>\\nexport default {\\n  data() {\\n    return {\\n      text : `A long time ago, In a beautiful kingdom, \\n  there lived a young king and queen, \\n  the people loved them so much; `\\n    }\\n  }\\n}\\n<\/script>\\n\\n")])])])], 2);\n};\nvar accrodionvue_type_template_id_7142d121_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/demo/accrodion.md?vue&type=script&lang=js&\n/* harmony default export */ var accrodionvue_type_script_lang_js_ = ({\n  data() {\n    return {\n      text: `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    };\n  }\n});\n;// CONCATENATED MODULE: ./components/collapse/demo/accrodion.md?vue&type=script&lang=js&\n /* harmony default export */ var demo_accrodionvue_type_script_lang_js_ = (accrodionvue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/collapse/demo/accrodion.md\n\n\n\n\n\n/* normalize component */\n;\nvar accrodion_component = (0,componentNormalizer/* default */.Z)(\n  demo_accrodionvue_type_script_lang_js_,\n  accrodionvue_type_template_id_7142d121_render,\n  accrodionvue_type_template_id_7142d121_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var accrodion = (accrodion_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/demo/nesting.md?vue&type=template&id=c0625d74&\nvar nestingvue_type_template_id_c0625d74_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'div\', {\n    staticClass: "demo-collapse"\n  }, [_c(\'Collapse\', {\n    attrs: {\n      "value": [\'1\']\n    }\n  }, [_c(\'Panel\', {\n    key: "1",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))]), _c(\'Collapse\', {\n    attrs: {\n      "value": [\'1-1\']\n    }\n  }, [_c(\'Panel\', {\n    key: "1-1",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])]), _c(\'Panel\', {\n    key: "1-2",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])])], 1)], 1), _c(\'Panel\', {\n    key: "2",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])]), _c(\'Panel\', {\n    key: "3",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])])], 1)], 1)]), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "嵌套面板",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#嵌套面板"\n    }\n  }, [_vm._v("嵌套面板")])]), _c(\'p\', [_vm._v("嵌套折叠面板。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <div class=\\"demo-collapse\\">\\n    <Collapse :value=\\"[\'1\']\\">\\n      <Panel title=\\"Panel title\\" key=\\"1\\">\\n        <div>{{text}}</div>\\n        <Collapse :value=\\"[\'1-1\']\\">\\n          <Panel title=\\"Panel title\\" key=\\"1-1\\">\\n            <div>{{text}}</div>\\n          </Panel>\\n          <Panel title=\\"Panel title\\" key=\\"1-2\\">\\n            <div>{{text}}</div>\\n          </Panel>\\n        </Collapse>\\n      </Panel>\\n      <Panel title=\\"Panel title\\" key=\\"2\\">\\n        <div>{{text}}</div>\\n      </Panel>\\n      <Panel title=\\"Panel title\\" key=\\"3\\">\\n        <div>{{text}}</div>\\n      </Panel>\\n    </Collapse>\\n  </div>\\n</template>\\n<script>\\nexport default {\\n  data() {\\n    return {\\n      text : `A long time ago, In a beautiful kingdom, \\n  there lived a young king and queen, \\n  the people loved them so much; `\\n    }\\n  }\\n}\\n<\/script>\\n\\n")])])])], 2);\n};\nvar nestingvue_type_template_id_c0625d74_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/demo/nesting.md?vue&type=script&lang=js&\n/* harmony default export */ var nestingvue_type_script_lang_js_ = ({\n  data() {\n    return {\n      text: `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    };\n  }\n});\n;// CONCATENATED MODULE: ./components/collapse/demo/nesting.md?vue&type=script&lang=js&\n /* harmony default export */ var demo_nestingvue_type_script_lang_js_ = (nestingvue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/collapse/demo/nesting.md\n\n\n\n\n\n/* normalize component */\n;\nvar nesting_component = (0,componentNormalizer/* default */.Z)(\n  demo_nestingvue_type_script_lang_js_,\n  nestingvue_type_template_id_c0625d74_render,\n  nestingvue_type_template_id_c0625d74_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var nesting = (nesting_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/demo/sample.md?vue&type=template&id=d3aadc00&\nvar samplevue_type_template_id_d3aadc00_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'div\', {\n    staticClass: "demo-collapse"\n  }, [_c(\'Collapse\', {\n    attrs: {\n      "value": [\'1\'],\n      "sample": ""\n    }\n  }, [_c(\'Panel\', {\n    key: "1",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])]), _c(\'Panel\', {\n    key: "2",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])]), _c(\'Panel\', {\n    key: "3",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'div\', [_vm._v(_vm._s(_vm.text))])])], 1)], 1)]), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "简洁模式",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#简洁模式"\n    }\n  }, [_vm._v("简洁模式")])]), _c(\'p\', [_vm._v("设置 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("sample")]), _vm._v(" 呈现没有边框的简洁样式。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <div class=\\"demo-collapse\\">\\n    <Collapse :value=\\"[\'1\']\\" sample>\\n      <Panel title=\\"Panel title\\" key=\\"1\\">\\n        <div>{{text}}</div>\\n      </Panel>\\n      <Panel title=\\"Panel title\\" key=\\"2\\">\\n        <div>{{text}}</div>\\n      </Panel>\\n      <Panel title=\\"Panel title\\" key=\\"3\\">\\n        <div>{{text}}</div>\\n      </Panel>\\n    </Collapse>\\n  </div>\\n</template>\\n<script>\\nexport default {\\n  data() {\\n    return {\\n      text : `A long time ago, In a beautiful kingdom, \\n  there lived a young king and queen, \\n  the people loved them so much; `\\n    }\\n  }\\n}\\n<\/script>\\n\\n")])])])], 2);\n};\nvar samplevue_type_template_id_d3aadc00_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/demo/sample.md?vue&type=script&lang=js&\n/* harmony default export */ var samplevue_type_script_lang_js_ = ({\n  data() {\n    return {\n      text: `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    };\n  }\n});\n;// CONCATENATED MODULE: ./components/collapse/demo/sample.md?vue&type=script&lang=js&\n /* harmony default export */ var demo_samplevue_type_script_lang_js_ = (samplevue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/collapse/demo/sample.md\n\n\n\n\n\n/* normalize component */\n;\nvar sample_component = (0,componentNormalizer/* default */.Z)(\n  demo_samplevue_type_script_lang_js_,\n  samplevue_type_template_id_d3aadc00_render,\n  samplevue_type_template_id_d3aadc00_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var sample = (sample_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/demo/extra.md?vue&type=template&id=72e4c94a&\nvar extravue_type_template_id_72e4c94a_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'div\', {\n    staticClass: "demo-collapse"\n  }, [_c(\'Collapse\', {\n    attrs: {\n      "value": [\'1\', \'2\']\n    }\n  }, [_c(\'Panel\', {\n    key: "1",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'Icon\', {\n    attrs: {\n      "slot": "extra",\n      "type": _vm.SettingsOutline\n    },\n    slot: "extra"\n  }), _c(\'div\', [_vm._v(_vm._s(_vm.text))])], 1), _c(\'Panel\', {\n    key: "2",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'Icon\', {\n    attrs: {\n      "slot": "extra",\n      "type": _vm.SettingsOutline\n    },\n    slot: "extra"\n  }), _c(\'div\', [_vm._v(_vm._s(_vm.text))])], 1), _c(\'Panel\', {\n    key: "3",\n    attrs: {\n      "title": "Panel title"\n    }\n  }, [_c(\'Icon\', {\n    attrs: {\n      "slot": "extra",\n      "type": _vm.SettingsOutline\n    },\n    slot: "extra"\n  }), _c(\'div\', [_vm._v(_vm._s(_vm.text))])], 1)], 1)], 1)]), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "额外节点",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#额外节点"\n    }\n  }, [_vm._v("额外节点")])]), _c(\'p\', [_vm._v("可以同时展开多个面板。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <div class=\\"demo-collapse\\">\\n    <Collapse :value=\\"[\'1\',\'2\']\\">\\n      <Panel title=\\"Panel title\\" key=\\"1\\">\\n        <Icon slot=\\"extra\\" :type=\\"SettingsOutline\\" />\\n        <div>{{text}}</div>\\n      </Panel>\\n      <Panel title=\\"Panel title\\" key=\\"2\\">\\n        <Icon slot=\\"extra\\" :type=\\"SettingsOutline\\" />\\n        <div>{{text}}</div>\\n      </Panel>\\n      <Panel title=\\"Panel title\\" key=\\"3\\">\\n        <Icon slot=\\"extra\\" :type=\\"SettingsOutline\\" />\\n        <div>{{text}}</div>\\n      </Panel>\\n    </Collapse>\\n  </div>\\n</template>\\n<script>\\nimport { SettingsOutline } from \'kui-icons\'\\nexport default {\\n  data() {\\n    return {\\n      SettingsOutline,\\n      text : `A long time ago, In a beautiful kingdom, \\n  there lived a young king and queen, \\n  the people loved them so much; `\\n    }\\n  }\\n}\\n<\/script>\\n\\n")])])])], 2);\n};\nvar extravue_type_template_id_72e4c94a_staticRenderFns = [];\n\n// EXTERNAL MODULE: ./node_modules/kui-icons/lib/dist.js\nvar dist = __webpack_require__(5118);\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/demo/extra.md?vue&type=script&lang=js&\n\n/* harmony default export */ var extravue_type_script_lang_js_ = ({\n  data() {\n    return {\n      SettingsOutline: dist.SettingsOutline,\n      text: `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    };\n  }\n});\n;// CONCATENATED MODULE: ./components/collapse/demo/extra.md?vue&type=script&lang=js&\n /* harmony default export */ var demo_extravue_type_script_lang_js_ = (extravue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/collapse/demo/extra.md\n\n\n\n\n\n/* normalize component */\n;\nvar extra_component = (0,componentNormalizer/* default */.Z)(\n  demo_extravue_type_script_lang_js_,\n  extravue_type_template_id_72e4c94a_render,\n  extravue_type_template_id_72e4c94a_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var extra = (extra_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/collapse/index.md?vue&type=template&id=1ddd19a8&\nvar collapsevue_type_template_id_1ddd19a8_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar collapsevue_type_template_id_1ddd19a8_staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h2\', {\n    attrs: {\n      "id": "api",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#api"\n    }\n  }, [_vm._v("API")])]), _c(\'table\', [_c(\'thead\', [_c(\'tr\', [_c(\'th\', [_vm._v("属性")]), _c(\'th\', [_vm._v("说明")]), _c(\'th\', [_vm._v("类型")]), _c(\'th\', [_vm._v("默认值")])])]), _c(\'tbody\', [_c(\'tr\', [_c(\'td\', [_vm._v("value")]), _c(\'td\', [_vm._v("当前激活的面板的 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("name")]), _vm._v("，可以使用 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("v-model")]), _vm._v(" 双向绑定")]), _c(\'td\', [_vm._v("Array , String")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("accordion")]), _c(\'td\', [_vm._v("是否开启手风琴模式，开启后每次至多展开一个面板")]), _c(\'td\', [_vm._v("Boolean")]), _c(\'td\', [_vm._v("false")])]), _c(\'tr\', [_c(\'td\', [_vm._v("sample")]), _c(\'td\', [_vm._v("是否开启简洁模式")]), _c(\'td\', [_vm._v("Boolean")]), _c(\'td\', [_vm._v("false")])]), _c(\'tr\', [_c(\'td\', [_vm._v("change")]), _c(\'td\', [_vm._v("切换面板时触发回调，返回当前选项卡的 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("name")])]), _c(\'td\', [_vm._v("Function")]), _c(\'td\', [_vm._v("-")])])])]), _c(\'h2\', {\n    attrs: {\n      "id": "panel",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#panel"\n    }\n  }, [_vm._v("Panel")])]), _c(\'table\', [_c(\'thead\', [_c(\'tr\', [_c(\'th\', [_vm._v("属性")]), _c(\'th\', [_vm._v("说明")]), _c(\'th\', [_vm._v("类型")]), _c(\'th\', [_vm._v("默认值")])])]), _c(\'tbody\', [_c(\'tr\', [_c(\'td\', [_vm._v("title")]), _c(\'td\', [_vm._v("当前激活的面板的标题")]), _c(\'td\', [_vm._v("String")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("key")]), _c(\'td\', [_vm._v("Vue 所需要的key")]), _c(\'td\', [_vm._v("String")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("extra")]), _c(\'td\', [_vm._v("卡片标题扩展")]), _c(\'td\', [_vm._v("slot")]), _c(\'td\', [_vm._v("-")])])])])]);\n}];\n\n;// CONCATENATED MODULE: ./components/collapse/index.md?vue&type=template&id=1ddd19a8&\n\n;// CONCATENATED MODULE: ./components/collapse/index.md\n\nvar collapse_script = {}\n\n\n/* normalize component */\n;\nvar collapse_component = (0,componentNormalizer/* default */.Z)(\n  collapse_script,\n  collapsevue_type_template_id_1ddd19a8_render,\n  collapsevue_type_template_id_1ddd19a8_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var collapse = (collapse_component.exports);\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/collapse/demo/index.vue?vue&type=script&lang=js&\n\n\n\n\n\n\n\n/* harmony default export */ var demovue_type_script_lang_js_ = ({\n  render() {\n    const h = arguments[0];\n    return h("div", [h(info), h(base), h(accrodion), h(nesting), h(extra), h(sample), h(collapse)]);\n  }\n});\n;// CONCATENATED MODULE: ./components/collapse/demo/index.vue?vue&type=script&lang=js&\n /* harmony default export */ var collapse_demovue_type_script_lang_js_ = (demovue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/collapse/demo/index.vue\nvar demo_render, demo_staticRenderFns\n;\n\n\n\n/* normalize component */\n;\nvar demo_component = (0,componentNormalizer/* default */.Z)(\n  collapse_demovue_type_script_lang_js_,\n  demo_render,\n  demo_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var demo = (demo_component.exports);\n\n//# sourceURL=webpack://kui-vue/./components/collapse/demo/index.vue_+_28_modules?')}}]);