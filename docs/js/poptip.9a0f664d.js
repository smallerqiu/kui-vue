/*!
 * kui-vue v3.3.5-d
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[5720],{8385:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": function() { return /* binding */ demo; }\n});\n\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/poptip/demo/info.md?vue&type=template&id=9587f4f6&\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h1\', [_vm._v("Poptip 气泡卡片")]), _c(\'p\', [_vm._v("点击/鼠标移入元素，弹出气泡式的卡片浮层。")]), _c(\'h2\', {\n    attrs: {\n      "id": "何时使用",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#何时使用"\n    }\n  }, [_vm._v("何时使用")])]), _c(\'p\', [_vm._v("当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。")]), _c(\'p\', [_vm._v("和 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("Tooltip")]), _vm._v(" 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。")]), _c(\'h2\', {\n    attrs: {\n      "id": "代码演示",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#代码演示"\n    }\n  }, [_vm._v("代码演示")])])]);\n}];\n\n;// CONCATENATED MODULE: ./components/poptip/demo/info.md?vue&type=template&id=9587f4f6&\n\n// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(3736);\n;// CONCATENATED MODULE: ./components/poptip/demo/info.md\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,componentNormalizer/* default */.Z)(\n  script,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var info = (component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/poptip/demo/base.md?vue&type=template&id=2fd869dc&\nvar basevue_type_template_id_2fd869dc_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'Poptip\', {\n    attrs: {\n      "title": "标题"\n    }\n  }, [_c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v("明月几时有,把酒问青天!")]), _c(\'p\', [_vm._v("明月几时有,把酒问青天!")])]), _c(\'Button\', {\n    attrs: {\n      "type": "primary"\n    }\n  }, [_vm._v("Hover me")])], 2), _c(\'Poptip\', [_c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v("明月几时有,把酒问青天!")]), _c(\'p\', [_vm._v("明月几时有,把酒问青天!")])]), _c(\'Button\', {\n    attrs: {\n      "type": "primary"\n    }\n  }, [_vm._v("No title")])], 2)], 1), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "基础用法",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#基础用法"\n    }\n  }, [_vm._v("基础用法")])]), _c(\'p\', [_vm._v("最简单的用法，浮层的大小由内容区域决定。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <Poptip title=\\"标题\\">\\n    <template slot=\\"content\\">\\n      <p>明月几时有,把酒问青天!</p>\\n      <p>明月几时有,把酒问青天!</p>\\n    </template>\\n    <Button type=\\"primary\\">Hover me</Button>\\n  </Poptip>\\n  <Poptip>\\n    <template slot=\\"content\\">\\n      <p>明月几时有,把酒问青天!</p>\\n      <p>明月几时有,把酒问青天!</p>\\n    </template>\\n    <Button type=\\"primary\\">No title</Button>\\n  </Poptip>\\n</template>\\n\\n")])])])], 2);\n};\nvar basevue_type_template_id_2fd869dc_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./components/poptip/demo/base.md\n\nvar base_script = {}\n\n\n/* normalize component */\n;\nvar base_component = (0,componentNormalizer/* default */.Z)(\n  base_script,\n  basevue_type_template_id_2fd869dc_render,\n  basevue_type_template_id_2fd869dc_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var base = (base_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/poptip/demo/trigger.md?vue&type=template&id=6c6158a7&\nvar triggervue_type_template_id_6c6158a7_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'Poptip\', {\n    attrs: {\n      "title": "标题"\n    }\n  }, [_c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v("明月几时有,把酒问青天!")]), _c(\'p\', [_vm._v("明月几时有,把酒问青天!")])]), _c(\'Button\', {\n    attrs: {\n      "type": "primary"\n    }\n  }, [_vm._v("Hover me")])], 2), _c(\'Poptip\', {\n    attrs: {\n      "title": "标题",\n      "trigger": "click"\n    }\n  }, [_c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v("明月几时有,把酒问青天!")]), _c(\'p\', [_vm._v("明月几时有,把酒问青天!")])]), _c(\'Button\', {\n    attrs: {\n      "type": "primary"\n    }\n  }, [_vm._v("Click me")])], 2)], 1), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "触发模式",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#触发模式"\n    }\n  }, [_vm._v("触发模式")])]), _c(\'p\', [_vm._v("通过 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("trigger")]), _vm._v("来控制触发模式, 鼠标移入 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("hover")]), _vm._v("、点击 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("click")]), _vm._v("。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <Poptip title=\\"标题\\">\\n    <template slot=\\"content\\">\\n      <p>明月几时有,把酒问青天!</p>\\n      <p>明月几时有,把酒问青天!</p>\\n    </template>\\n    <Button type=\\"primary\\">Hover me</Button>\\n  </Poptip>\\n  <Poptip title=\\"标题\\" trigger=\\"click\\">\\n    <template slot=\\"content\\">\\n      <p>明月几时有,把酒问青天!</p>\\n      <p>明月几时有,把酒问青天!</p>\\n    </template>\\n    <Button type=\\"primary\\">Click me</Button>\\n  </Poptip>\\n</template>\\n\\n")])])])], 2);\n};\nvar triggervue_type_template_id_6c6158a7_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./components/poptip/demo/trigger.md\n\nvar trigger_script = {}\n\n\n/* normalize component */\n;\nvar trigger_component = (0,componentNormalizer/* default */.Z)(\n  trigger_script,\n  triggervue_type_template_id_6c6158a7_render,\n  triggervue_type_template_id_6c6158a7_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var trigger = (trigger_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/poptip/demo/closeinside.md?vue&type=template&id=34e7a448&\nvar closeinsidevue_type_template_id_34e7a448_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'Poptip\', {\n    attrs: {\n      "title": "标题",\n      "trigger": "click"\n    },\n    model: {\n      value: _vm.show,\n      callback: function ($$v) {\n        _vm.show = $$v;\n      },\n      expression: "show"\n    }\n  }, [_c(\'template\', {\n    slot: "content"\n  }, [_c(\'a\', {\n    on: {\n      "click": function ($event) {\n        _vm.show = false;\n      }\n    }\n  }, [_vm._v("Close")])]), _c(\'Button\', {\n    attrs: {\n      "type": "primary"\n    }\n  }, [_vm._v("Click me")])], 2)], 1), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "从浮层内关闭",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#从浮层内关闭"\n    }\n  }, [_vm._v("从浮层内关闭")])]), _c(\'p\', [_vm._v("使用 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("v-model")]), _vm._v(" 属性控制浮层显示。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <Poptip title=\\"标题\\" trigger=\\"click\\" v-model=\\"show\\">\\n    <template slot=\\"content\\">\\n      <a @click=\\"show=false\\">Close</a>\\n    </template>\\n    <Button type=\\"primary\\">Click me</Button>\\n  </Poptip>\\n</template>\\n<script>\\nexport default{\\n  data() {\\n    return {\\n      show:false,\\n    }\\n  }\\n}\\n<\/script>\\n\\n")])])])], 2);\n};\nvar closeinsidevue_type_template_id_34e7a448_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/poptip/demo/closeinside.md?vue&type=script&lang=js&\n/* harmony default export */ var closeinsidevue_type_script_lang_js_ = ({\n  data() {\n    return {\n      show: false\n    };\n  }\n});\n;// CONCATENATED MODULE: ./components/poptip/demo/closeinside.md?vue&type=script&lang=js&\n /* harmony default export */ var demo_closeinsidevue_type_script_lang_js_ = (closeinsidevue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/poptip/demo/closeinside.md\n\n\n\n\n\n/* normalize component */\n;\nvar closeinside_component = (0,componentNormalizer/* default */.Z)(\n  demo_closeinsidevue_type_script_lang_js_,\n  closeinsidevue_type_template_id_34e7a448_render,\n  closeinsidevue_type_template_id_34e7a448_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var closeinside = (closeinside_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/poptip/demo/placement.md?vue&type=template&id=29ad6a8c&\nvar placementvue_type_template_id_29ad6a8c_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'div\', {\n    staticStyle: {\n      "margin-left": "70px",\n      "white-space": "nowrap"\n    }\n  }, [_c(\'Poptip\', {\n    attrs: {\n      "placement": "top-left"\n    }\n  }, [_c(\'Button\', [_vm._v("TL")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2), _c(\'Poptip\', {\n    attrs: {\n      "placement": "top"\n    }\n  }, [_c(\'Button\', [_vm._v("Top")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2), _c(\'Poptip\', {\n    attrs: {\n      "placement": "top-right"\n    }\n  }, [_c(\'Button\', [_vm._v("TR")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2)], 1), _c(\'div\', {\n    staticStyle: {\n      "float": "left",\n      "height": "125px",\n      "width": "70px"\n    }\n  }, [_c(\'Poptip\', {\n    attrs: {\n      "placement": "left-top"\n    }\n  }, [_c(\'Button\', [_vm._v("LT")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2), _c(\'Poptip\', {\n    attrs: {\n      "placement": "left"\n    }\n  }, [_c(\'Button\', [_vm._v("Left")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2), _c(\'Poptip\', {\n    attrs: {\n      "placement": "left-bottom"\n    }\n  }, [_c(\'Button\', [_vm._v("LB")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2)], 1), _c(\'div\', {\n    staticStyle: {\n      "margin-left": "310px",\n      "height": "125px",\n      "width": "70px"\n    }\n  }, [_c(\'Poptip\', {\n    attrs: {\n      "placement": "right-top"\n    }\n  }, [_c(\'Button\', [_vm._v("RT")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2), _c(\'Poptip\', {\n    attrs: {\n      "placement": "right"\n    }\n  }, [_c(\'Button\', [_vm._v("Right")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2), _c(\'Poptip\', {\n    attrs: {\n      "placement": "right-bottom"\n    }\n  }, [_c(\'Button\', [_vm._v("RB")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2)], 1), _c(\'div\', {\n    staticStyle: {\n      "margin-left": "70px",\n      "white-space": "nowrap"\n    }\n  }, [_c(\'Poptip\', {\n    attrs: {\n      "placement": "bottom-left"\n    }\n  }, [_c(\'Button\', [_vm._v("BL")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2), _c(\'Poptip\', {\n    attrs: {\n      "placement": "bottom"\n    }\n  }, [_c(\'Button\', [_vm._v("Bottom")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2), _c(\'Poptip\', {\n    attrs: {\n      "placement": "bottom-right"\n    }\n  }, [_c(\'Button\', [_vm._v("BR")]), _c(\'template\', {\n    slot: "content"\n  }, [_c(\'p\', [_vm._v(_vm._s(_vm.tip))]), _c(\'p\', [_vm._v(_vm._s(_vm.tip))])])], 2)], 1)]), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "位置",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#位置"\n    }\n  }, [_vm._v("位置")])]), _c(\'p\', [_vm._v("通过 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("placement")]), _vm._v("控制方向, 位置有十二个方向。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <div style=\\"margin-left:70px;white-space: nowrap;\\">\\n    <Poptip placement=\\"top-left\\">\\n      <Button>TL</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n    <Poptip placement=\\"top\\">\\n      <Button>Top</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n    <Poptip placement=\\"top-right\\">\\n      <Button>TR</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n  </div>\\n  <div style=\\"float:left;height:125px;width:70px;\\">\\n    <Poptip placement=\\"left-top\\">\\n      <Button>LT</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n    <Poptip placement=\\"left\\">\\n      <Button>Left</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n    <Poptip placement=\\"left-bottom\\">\\n      <Button>LB</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n  </div>\\n  <div style=\\"margin-left:310px;height:125px;width:70px;\\">\\n    <Poptip placement=\\"right-top\\">\\n      <Button>RT</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n    <Poptip placement=\\"right\\">\\n      <Button>Right</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n    <Poptip placement=\\"right-bottom\\">\\n      <Button>RB</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n  </div>\\n  <div style=\\"margin-left:70px;white-space: nowrap;\\">\\n    <Poptip placement=\\"bottom-left\\">\\n      <Button>BL</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n    <Poptip placement=\\"bottom\\" >\\n      <Button>Bottom</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n    <Poptip placement=\\"bottom-right\\" >\\n      <Button>BR</Button>\\n      <template slot=\\"content\\">\\n        <p>{{tip}}</p>\\n        <p>{{tip}}</p>\\n      </template>\\n    </Poptip>\\n  </div>\\n</template>\\n<script>\\nexport default{\\n  data() {\\n    return {\\n      tip:\'明月几时有,把酒问青天!\',\\n    }\\n  }\\n}\\n<\/script>\\n\\n")])])])], 2);\n};\nvar placementvue_type_template_id_29ad6a8c_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/poptip/demo/placement.md?vue&type=script&lang=js&\n/* harmony default export */ var placementvue_type_script_lang_js_ = ({\n  data() {\n    return {\n      tip: \'明月几时有,把酒问青天!\'\n    };\n  }\n});\n;// CONCATENATED MODULE: ./components/poptip/demo/placement.md?vue&type=script&lang=js&\n /* harmony default export */ var demo_placementvue_type_script_lang_js_ = (placementvue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/poptip/demo/placement.md\n\n\n\n\n\n/* normalize component */\n;\nvar placement_component = (0,componentNormalizer/* default */.Z)(\n  demo_placementvue_type_script_lang_js_,\n  placementvue_type_template_id_29ad6a8c_render,\n  placementvue_type_template_id_29ad6a8c_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var placement = (placement_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/poptip/index.md?vue&type=template&id=7c0bfe4e&\nvar poptipvue_type_template_id_7c0bfe4e_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar poptipvue_type_template_id_7c0bfe4e_staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h2\', {\n    attrs: {\n      "id": "api",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#api"\n    }\n  }, [_vm._v("API")])]), _c(\'table\', [_c(\'thead\', [_c(\'tr\', [_c(\'th\', [_vm._v("属性")]), _c(\'th\', [_vm._v("说明")]), _c(\'th\', [_vm._v("类型")]), _c(\'th\', [_vm._v("默认值")])])]), _c(\'tbody\', [_c(\'tr\', [_c(\'td\', [_vm._v("trigger")]), _c(\'td\', [_vm._v("触发方式，可选值为 "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("hover")]), _vm._v("（悬停）"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("click")]), _vm._v("（点击）")]), _c(\'td\', [_vm._v("String")]), _c(\'td\', [_vm._v("click")])]), _c(\'tr\', [_c(\'td\', [_vm._v("title")]), _c(\'td\', [_vm._v("显示的标题")]), _c(\'td\', [_vm._v("String")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("content")]), _c(\'td\', [_vm._v("显示的正文内容")]), _c(\'td\', [_vm._v("slots")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("placement")]), _c(\'td\', [_vm._v("提示框出现的位置，可选值为"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("top")]), _vm._v("，"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("top-left")]), _vm._v("，"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("top-right")]), _vm._v("，"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("bottom")]), _vm._v("，"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("bottom-left")]), _vm._v("，"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("bottom-right")]), _vm._v("，"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("left")]), _vm._v("，"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("left-top")]), _vm._v("，"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("left-bottom")]), _vm._v("，"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("right")]), _vm._v("，"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("right-top")]), _vm._v("，"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("right-bottom")])]), _c(\'td\', [_vm._v("String")]), _c(\'td\', [_vm._v("top")])]), _c(\'tr\', [_c(\'td\', [_vm._v("width")]), _c(\'td\', [_vm._v("展示的宽度,默认为内容区域的大小")]), _c(\'td\', [_vm._v("String,Number")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("transfer")]), _c(\'td\', [_vm._v("默认渲染到body 上，如定位有问题，请尝试修改为 false")]), _c(\'td\', [_vm._v("Boolean")]), _c(\'td\', [_vm._v("true")])])])])]);\n}];\n\n;// CONCATENATED MODULE: ./components/poptip/index.md?vue&type=template&id=7c0bfe4e&\n\n;// CONCATENATED MODULE: ./components/poptip/index.md\n\nvar poptip_script = {}\n\n\n/* normalize component */\n;\nvar poptip_component = (0,componentNormalizer/* default */.Z)(\n  poptip_script,\n  poptipvue_type_template_id_7c0bfe4e_render,\n  poptipvue_type_template_id_7c0bfe4e_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var poptip = (poptip_component.exports);\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/poptip/demo/index.vue?vue&type=script&lang=js&\n\n\n\n\n\n\n/* harmony default export */ var demovue_type_script_lang_js_ = ({\n  render() {\n    const h = arguments[0];\n    return h("div", {\n      "class": "demo-poptip"\n    }, [h(info), h(base), h(trigger), h(closeinside), h(placement), h(poptip)]);\n  }\n});\n;// CONCATENATED MODULE: ./components/poptip/demo/index.vue?vue&type=script&lang=js&\n /* harmony default export */ var poptip_demovue_type_script_lang_js_ = (demovue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-32.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-32.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-32.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-32.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/poptip/demo/index.vue?vue&type=style&index=0&id=3f4e5ec5&prod&lang=less&\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./components/poptip/demo/index.vue?vue&type=style&index=0&id=3f4e5ec5&prod&lang=less&\n\n;// CONCATENATED MODULE: ./components/poptip/demo/index.vue\nvar demo_render, demo_staticRenderFns\n;\n\n;\n\n\n/* normalize component */\n\nvar demo_component = (0,componentNormalizer/* default */.Z)(\n  poptip_demovue_type_script_lang_js_,\n  demo_render,\n  demo_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var demo = (demo_component.exports);\n\n//# sourceURL=webpack://kui-vue/./components/poptip/demo/index.vue_+_22_modules?')}}]);