/*!
 * kui-vue v3.3.5-d
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[8192],{4923:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": function() { return /* binding */ demo; }\n});\n\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/progress/demo/info.md?vue&type=template&id=3fcd7727&\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h1\', [_vm._v("Progress 进度条")]), _c(\'p\', [_vm._v("展示操作的当前进度。")]), _c(\'h2\', {\n    attrs: {\n      "id": "何时使用",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#何时使用"\n    }\n  }, [_vm._v("何时使用")])]), _c(\'p\', [_vm._v("在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。")]), _c(\'ul\', [_c(\'li\', [_vm._v("当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；")]), _c(\'li\', [_vm._v("当需要显示一个操作完成的百分比时。")])]), _c(\'h2\', {\n    attrs: {\n      "id": "代码演示",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#代码演示"\n    }\n  }, [_vm._v("代码演示")])])]);\n}];\n\n;// CONCATENATED MODULE: ./components/progress/demo/info.md?vue&type=template&id=3fcd7727&\n\n// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(3736);\n;// CONCATENATED MODULE: ./components/progress/demo/info.md\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,componentNormalizer/* default */.Z)(\n  script,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var info = (component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/progress/demo/base.md?vue&type=template&id=092657d9&\nvar basevue_type_template_id_092657d9_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'Progress\', {\n    attrs: {\n      "percent": 30\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "percent": 50,\n      "status": "active"\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "percent": 70,\n      "status": "exception"\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "percent": 100\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "percent": 50,\n      "showInfo": false\n    }\n  })], 1), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "进度条",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#进度条"\n    }\n  }, [_vm._v("进度条")])]), _c(\'p\', [_vm._v("标准的进度条。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <Progress :percent=\\"30\\" />\\n  <Progress :percent=\\"50\\" status=\\"active\\" />\\n  <Progress :percent=\\"70\\" status=\\"exception\\" />\\n  <Progress :percent=\\"100\\" />\\n  <Progress :percent=\\"50\\" :showInfo=\\"false\\" />\\n</template>\\n\\n")])])])], 2);\n};\nvar basevue_type_template_id_092657d9_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./components/progress/demo/base.md\n\nvar base_script = {}\n\n\n/* normalize component */\n;\nvar base_component = (0,componentNormalizer/* default */.Z)(\n  base_script,\n  basevue_type_template_id_092657d9_render,\n  basevue_type_template_id_092657d9_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var base = (base_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/progress/demo/circle.md?vue&type=template&id=2f9e1e80&\nvar circlevue_type_template_id_2f9e1e80_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'Progress\', {\n    attrs: {\n      "type": "circle",\n      "percent": 50\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "type": "circle",\n      "percent": 70,\n      "status": "exception"\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "type": "circle",\n      "percent": 100\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "type": "circle",\n      "percent": 50\n    }\n  }, [_c(\'div\', {\n    staticClass: "demo-progress",\n    attrs: {\n      "slot": "format"\n    },\n    slot: "format"\n  }, [_c(\'h2\', {\n    staticStyle: {\n      "margin": "0"\n    }\n  }, [_vm._v("13389")]), _c(\'span\', [_vm._v("今日步数")])])])], 1), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "进度圈",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#进度圈"\n    }\n  }, [_vm._v("进度圈")])]), _c(\'p\', [_vm._v("圆形的进度条。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <Progress type=\\"circle\\" :percent=\\"50\\" />\\n  <Progress type=\\"circle\\" :percent=\\"70\\" status=\\"exception\\" />\\n  <Progress type=\\"circle\\" :percent=\\"100\\" />\\n   <Progress type=\\"circle\\" :percent=\\"50\\">\\n    <div slot=\\"format\\" class=\\"demo-progress\\">\\n      <h2 style=\\"margin:0\\">13389</h2>\\n      <span>今日步数</span>\\n    </div>\\n  </Progress>\\n</template>\\n<style>\\n.demo-progress>h2{\\n  font-size:23px\\n}\\n.demo-progress>span{\\n  font-size:14px;\\n  color:#999;\\n}\\n</style>\\n\\n")])])])], 2);\n};\nvar circlevue_type_template_id_2f9e1e80_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./components/progress/demo/circle.md\n\nvar circle_script = {}\n;\n\n\n/* normalize component */\n\nvar circle_component = (0,componentNormalizer/* default */.Z)(\n  circle_script,\n  circlevue_type_template_id_2f9e1e80_render,\n  circlevue_type_template_id_2f9e1e80_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var circle = (circle_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/progress/demo/dynamic.md?vue&type=template&id=904e9002&\nvar dynamicvue_type_template_id_904e9002_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'Progress\', {\n    staticStyle: {\n      "width": "300px",\n      "margin-bottom": "30px"\n    },\n    attrs: {\n      "percent": _vm.percent\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "percent": _vm.percent,\n      "type": "circle"\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "percent": _vm.percent,\n      "type": "dashboard"\n    }\n  }), _c(\'br\'), _c(\'ButtonGroup\', {\n    attrs: {\n      "circle": ""\n    }\n  }, [_c(\'Button\', {\n    attrs: {\n      "icon": _vm.Remove\n    },\n    on: {\n      "click": _vm.decline\n    }\n  }), _c(\'Button\', {\n    attrs: {\n      "icon": _vm.Add\n    },\n    on: {\n      "click": _vm.increase\n    }\n  })], 1)], 1), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "动态展示",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#动态展示"\n    }\n  }, [_vm._v("动态展示")])]), _c(\'p\', [_vm._v("会动的进度条才是好进度条。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <Progress :percent=\\"percent\\" style=\\"width:300px;margin-bottom:30px;\\"/>\\n  <Progress :percent=\\"percent\\" type=\\"circle\\"/>\\n  <Progress :percent=\\"percent\\" type=\\"dashboard\\" />\\n  <br/>\\n  <ButtonGroup circle>\\n    <Button @click=\\"decline\\" :icon=\\"Remove\\" />\\n    <Button @click=\\"increase\\" :icon=\\"Add\\"/>\\n  </ButtonGroup>\\n</template>\\n<script>\\nimport { Remove, Add } from \\"kui-icons\\";\\nexport default{\\n  data() {\\n    return {\\n      Remove,Add,\\n      percent:30\\n    }\\n  },\\n  methods:{\\n    increase() {\\n      let percent = this.percent + 5;\\n      if (percent > 100) {\\n        percent = 100;\\n      }\\n      this.percent = percent;\\n    },\\n    decline() {\\n      let percent = this.percent - 5;\\n      if (percent < 0) {\\n        percent = 0;\\n      }\\n      this.percent = percent;\\n    },\\n  }\\n}\\n<\/script>  \\n\\n")])])])], 2);\n};\nvar dynamicvue_type_template_id_904e9002_staticRenderFns = [];\n\n// EXTERNAL MODULE: ./node_modules/kui-icons/lib/dist.js\nvar dist = __webpack_require__(5118);\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/progress/demo/dynamic.md?vue&type=script&lang=js&\n\n/* harmony default export */ var dynamicvue_type_script_lang_js_ = ({\n  data() {\n    return {\n      Remove: dist.Remove,\n      Add: dist.Add,\n      percent: 30\n    };\n  },\n  methods: {\n    increase() {\n      let percent = this.percent + 5;\n      if (percent > 100) {\n        percent = 100;\n      }\n      this.percent = percent;\n    },\n    decline() {\n      let percent = this.percent - 5;\n      if (percent < 0) {\n        percent = 0;\n      }\n      this.percent = percent;\n    }\n  }\n});\n;// CONCATENATED MODULE: ./components/progress/demo/dynamic.md?vue&type=script&lang=js&\n /* harmony default export */ var demo_dynamicvue_type_script_lang_js_ = (dynamicvue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/progress/demo/dynamic.md\n\n\n\n\n\n/* normalize component */\n;\nvar dynamic_component = (0,componentNormalizer/* default */.Z)(\n  demo_dynamicvue_type_script_lang_js_,\n  dynamicvue_type_template_id_904e9002_render,\n  dynamicvue_type_template_id_904e9002_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var dynamic = (dynamic_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/progress/demo/dashboard.md?vue&type=template&id=44229896&\nvar dashboardvue_type_template_id_44229896_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_vm._v(" gapDegree：" + _vm._s(_vm.gap) + " "), _c(\'Slider\', {\n    attrs: {\n      "min": 50,\n      "max": 160\n    },\n    model: {\n      value: _vm.gap,\n      callback: function ($$v) {\n        _vm.gap = $$v;\n      },\n      expression: "gap"\n    }\n  }), _c(\'br\'), _c(\'br\'), _c(\'RadioGroup\', {\n    attrs: {\n      "options": _vm.caps,\n      "type": "button",\n      "theme": "light"\n    },\n    model: {\n      value: _vm.strokeLinecap,\n      callback: function ($$v) {\n        _vm.strokeLinecap = $$v;\n      },\n      expression: "strokeLinecap"\n    }\n  }), _c(\'br\'), _c(\'br\'), _c(\'Progress\', {\n    attrs: {\n      "type": "dashboard",\n      "percent": 50,\n      "gapDegree": _vm.gap,\n      "strokeLinecap": _vm.strokeLinecap\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "type": "dashboard",\n      "percent": 100,\n      "gapDegree": _vm.gap,\n      "strokeLinecap": _vm.strokeLinecap\n    }\n  })], 1), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "盘仪表进度条",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#盘仪表进度条"\n    }\n  }, [_vm._v("盘仪表进度条")])]), _c(\'p\', [_vm._v("盘仪表进度条。可通过"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("gapDegree")]), _vm._v("调节缺口大小。"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("strokeLinecap=\\"square|round\\"")]), _vm._v(" 可以调整进度条边缘的形状。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  gapDegree：{{gap}}\\n  <Slider v-model=\\"gap\\" :min=\\"50\\" :max=\\"160\\" />\\n  <br/>\\n  <br/>\\n  <RadioGroup :options=\\"caps\\" v-model=\\"strokeLinecap\\" type=\\"button\\" theme=\\"light\\"/>\\n  <br/>\\n  <br/>\\n  <Progress type=\\"dashboard\\" :percent=\\"50\\" :gapDegree=\\"gap\\"  :strokeLinecap=\\"strokeLinecap\\"/>\\n  <Progress type=\\"dashboard\\" :percent=\\"100\\" :gapDegree=\\"gap\\" :strokeLinecap=\\"strokeLinecap\\"/>\\n</template>\\n<script>\\nexport default{\\n  data() {\\n    return {\\n      gap:140,\\n      strokeLinecap:\'round\',\\n      caps:[\\n       {label:\'Butt\',value:\'butt\'},\\n       {label:\'Round\',value:\'round\'},\\n       {label:\'Square\',value:\'square\'},\\n      ]\\n    }\\n  }\\n}\\n<\/script>\\n\\n")])])])], 2);\n};\nvar dashboardvue_type_template_id_44229896_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/progress/demo/dashboard.md?vue&type=script&lang=js&\n/* harmony default export */ var dashboardvue_type_script_lang_js_ = ({\n  data() {\n    return {\n      gap: 140,\n      strokeLinecap: \'round\',\n      caps: [{\n        label: \'Butt\',\n        value: \'butt\'\n      }, {\n        label: \'Round\',\n        value: \'round\'\n      }, {\n        label: \'Square\',\n        value: \'square\'\n      }]\n    };\n  }\n});\n;// CONCATENATED MODULE: ./components/progress/demo/dashboard.md?vue&type=script&lang=js&\n /* harmony default export */ var demo_dashboardvue_type_script_lang_js_ = (dashboardvue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/progress/demo/dashboard.md\n\n\n\n\n\n/* normalize component */\n;\nvar dashboard_component = (0,componentNormalizer/* default */.Z)(\n  demo_dashboardvue_type_script_lang_js_,\n  dashboardvue_type_template_id_44229896_render,\n  dashboardvue_type_template_id_44229896_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var dashboard = (dashboard_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/progress/demo/color.md?vue&type=template&id=48c555d7&\nvar colorvue_type_template_id_48c555d7_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'Progress\', {\n    staticStyle: {\n      "width": "300px",\n      "margin-bottom": "30px"\n    },\n    attrs: {\n      "percent": _vm.percent,\n      "format": _vm.format1,\n      "color": _vm.color\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "percent": _vm.percent,\n      "type": "circle",\n      "format": _vm.format2,\n      "color": _vm.color\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "percent": _vm.percent,\n      "type": "dashboard",\n      "format": _vm.format3,\n      "color": _vm.color\n    }\n  }), _c(\'br\'), _c(\'ButtonGroup\', {\n    attrs: {\n      "circle": ""\n    }\n  }, [_c(\'Button\', {\n    attrs: {\n      "icon": _vm.Remove\n    },\n    on: {\n      "click": _vm.decline\n    }\n  }), _c(\'Button\', {\n    attrs: {\n      "icon": _vm.Add\n    },\n    on: {\n      "click": _vm.increase\n    }\n  })], 1)], 1), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "颜色和格式",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#颜色和格式"\n    }\n  }, [_vm._v("颜色和格式")])]), _c(\'p\', [_vm._v("自定义颜色和自定义格式。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <Progress :percent=\\"percent\\" :format=\\"format1\\" :color=\\"color\\"  style=\\"width:300px;margin-bottom:30px;\\"/>\\n  <Progress :percent=\\"percent\\" type=\\"circle\\" :format=\\"format2\\" :color=\\"color\\" />\\n  <Progress :percent=\\"percent\\" type=\\"dashboard\\" :format=\\"format3\\" :color=\\"color\\" />\\n  <br/>\\n  <ButtonGroup circle>\\n    <Button @click=\\"decline\\" :icon=\\"Remove\\" />\\n    <Button @click=\\"increase\\" :icon=\\"Add\\" />\\n  </ButtonGroup>\\n</template>\\n<script>\\nimport { Remove, Add } from \\"kui-icons\\";\\nexport default{\\n  data() {\\n    return {\\n      Remove,Add,\\n      percent:0,\\n      color:\'\'\\n    }\\n  },\\n  methods:{\\n    format2(percent){\\n      return percent + \'℃\'\\n    },\\n    format3(percent){\\n      return percent + \'升\'\\n    },\\n    format1(){\\n      let percent = this.percent\\n      if(percent < 30){\\n        return \'空\';\\n      } else if( percent >= 30 && percent < 50 ){\\n        return \'弱\'\\n      } else if( percent >= 50 && percent < 80 ){\\n        return \'中\'\\n      } else if( percent >= 80 ){\\n        return \'强\'\\n      }\\n    },\\n    increase() {\\n      let percent = this.percent + 5;\\n      if (percent > 100) {\\n        percent = 100;\\n      }\\n      this.percent = percent;\\n      this.changeColor(percent)\\n    },\\n    decline() {\\n      let percent = this.percent - 5;\\n      if (percent < 0) {\\n        percent = 0;\\n      }\\n      this.percent = percent;\\n      this.changeColor(percent)\\n    },\\n    changeColor(percent){\\n      let {color} = this\\n      if( percent >= 30 && percent < 50 ){\\n        color = \'#bdc78d\'\\n      } else if( percent >= 50 && percent < 80 ){\\n        color = \'#c7b98d\'\\n      } else if( percent >= 80 ){\\n        color = \'#f79e08\'\\n      }\\n      this.color = color\\n    }\\n  }\\n}\\n<\/script>  \\n\\n")])])])], 2);\n};\nvar colorvue_type_template_id_48c555d7_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/progress/demo/color.md?vue&type=script&lang=js&\n\n/* harmony default export */ var colorvue_type_script_lang_js_ = ({\n  data() {\n    return {\n      Remove: dist.Remove,\n      Add: dist.Add,\n      percent: 0,\n      color: \'\'\n    };\n  },\n  methods: {\n    format2(percent) {\n      return percent + \'℃\';\n    },\n    format3(percent) {\n      return percent + \'升\';\n    },\n    format1() {\n      let percent = this.percent;\n      if (percent < 30) {\n        return \'空\';\n      } else if (percent >= 30 && percent < 50) {\n        return \'弱\';\n      } else if (percent >= 50 && percent < 80) {\n        return \'中\';\n      } else if (percent >= 80) {\n        return \'强\';\n      }\n    },\n    increase() {\n      let percent = this.percent + 5;\n      if (percent > 100) {\n        percent = 100;\n      }\n      this.percent = percent;\n      this.changeColor(percent);\n    },\n    decline() {\n      let percent = this.percent - 5;\n      if (percent < 0) {\n        percent = 0;\n      }\n      this.percent = percent;\n      this.changeColor(percent);\n    },\n    changeColor(percent) {\n      let {\n        color\n      } = this;\n      if (percent >= 30 && percent < 50) {\n        color = \'#bdc78d\';\n      } else if (percent >= 50 && percent < 80) {\n        color = \'#c7b98d\';\n      } else if (percent >= 80) {\n        color = \'#f79e08\';\n      }\n      this.color = color;\n    }\n  }\n});\n;// CONCATENATED MODULE: ./components/progress/demo/color.md?vue&type=script&lang=js&\n /* harmony default export */ var demo_colorvue_type_script_lang_js_ = (colorvue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./components/progress/demo/color.md\n\n\n\n\n\n/* normalize component */\n;\nvar color_component = (0,componentNormalizer/* default */.Z)(\n  demo_colorvue_type_script_lang_js_,\n  colorvue_type_template_id_48c555d7_render,\n  colorvue_type_template_id_48c555d7_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var color = (color_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/progress/demo/size.md?vue&type=template&id=21710304&\nvar sizevue_type_template_id_21710304_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_vm._v(" Custom: "), _c(\'Progress\', {\n    attrs: {\n      "strokeHeight": 10,\n      "percent": 50\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "strokeHeight": 3,\n      "percent": 50\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "strokeWidth": 15,\n      "type": "circle",\n      "width": 80,\n      "percent": 50\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "strokeWidth": 3,\n      "type": "circle",\n      "width": 80,\n      "percent": 50\n    }\n  }), _c(\'br\'), _vm._v(" Small: "), _c(\'div\', {\n    style: {\n      width: \'300px\',\n      marginBottom: \'30px\'\n    }\n  }, [_c(\'Progress\', {\n    attrs: {\n      "size": "small",\n      "percent": 50\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "size": "small",\n      "percent": 70,\n      "status": "exception"\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "size": "small",\n      "percent": 10\n    }\n  })], 1), _c(\'Progress\', {\n    attrs: {\n      "type": "circle",\n      "width": 80,\n      "percent": 50\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "type": "circle",\n      "width": 80,\n      "percent": 70,\n      "status": "exception"\n    }\n  }), _c(\'Progress\', {\n    attrs: {\n      "type": "circle",\n      "width": 80,\n      "percent": 100\n    }\n  })], 1), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "尺寸",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#尺寸"\n    }\n  }, [_vm._v("尺寸")])]), _c(\'p\', [_vm._v("适合放在较狭窄的区域内。")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  Custom:\\n  <Progress :strokeHeight=\\"10\\" :percent=\\"50\\" />\\n  <Progress :strokeHeight=\\"3\\" :percent=\\"50\\" />\\n  <Progress :strokeWidth=\\"15\\" type=\\"circle\\" :width=\\"80\\" :percent=\\"50\\" />\\n  <Progress :strokeWidth=\\"3\\" type=\\"circle\\" :width=\\"80\\" :percent=\\"50\\" />\\n  <br/>\\n  Small:\\n  <div :style=\\"{width:\'300px\',marginBottom:\'30px\'}\\">\\n    <Progress size=\\"small\\" :percent=\\"50\\" />\\n    <Progress size=\\"small\\" :percent=\\"70\\" status=\\"exception\\" />\\n    <Progress size=\\"small\\" :percent=\\"10\\"  />\\n  </div>\\n  <Progress type=\\"circle\\" :width=\\"80\\" :percent=\\"50\\" />\\n  <Progress type=\\"circle\\" :width=\\"80\\" :percent=\\"70\\" status=\\"exception\\" />\\n  <Progress type=\\"circle\\" :width=\\"80\\" :percent=\\"100\\" />\\n</template>\\n\\n")])])])], 2);\n};\nvar sizevue_type_template_id_21710304_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./components/progress/demo/size.md\n\nvar size_script = {}\n\n\n/* normalize component */\n;\nvar size_component = (0,componentNormalizer/* default */.Z)(\n  size_script,\n  sizevue_type_template_id_21710304_render,\n  sizevue_type_template_id_21710304_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var size = (size_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./components/progress/index.md?vue&type=template&id=07e54694&\nvar progressvue_type_template_id_07e54694_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar progressvue_type_template_id_07e54694_staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h2\', {\n    attrs: {\n      "id": "api",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#api"\n    }\n  }, [_vm._v("API")])]), _c(\'table\', [_c(\'thead\', [_c(\'tr\', [_c(\'th\', [_vm._v("属性")]), _c(\'th\', [_vm._v("说明")]), _c(\'th\', [_vm._v("类型")]), _c(\'th\', [_vm._v("默认值")])])]), _c(\'tbody\', [_c(\'tr\', [_c(\'td\', [_vm._v("percent")]), _c(\'td\', [_vm._v("进度百分比")]), _c(\'td\', [_vm._v("Number")]), _c(\'td\', [_vm._v("0")])]), _c(\'tr\', [_c(\'td\', [_vm._v("color")]), _c(\'td\', [_vm._v("进度条颜色")]), _c(\'td\', [_vm._v("String")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("strokeLinecap")]), _c(\'td\', [_vm._v("进度条的样式")]), _c(\'td\', [_vm._v("[round | square | butt]")]), _c(\'td\', [_vm._v("round")])]), _c(\'tr\', [_c(\'td\', [_vm._v("width")]), _c(\'td\', [_vm._v("圆形进度条画布宽度，单位 px")]), _c(\'td\', [_vm._v("number")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("size")]), _c(\'td\', [_vm._v("值为"), _c(\'code\', {\n    pre: true\n  }, [_vm._v("small")]), _vm._v("，展示小尺寸")]), _c(\'td\', [_vm._v("String")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("format")]), _c(\'td\', [_vm._v("自定义进度条文字")]), _c(\'td\', [_vm._v("Function | slot")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("status")]), _c(\'td\', [_vm._v("进度条状态,提供四种类型: "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("active")]), _vm._v(","), _c(\'code\', {\n    pre: true\n  }, [_vm._v("exception")]), _vm._v(","), _c(\'code\', {\n    pre: true\n  }, [_vm._v("success")]), _vm._v(","), _c(\'code\', {\n    pre: true\n  }, [_vm._v("normal")])]), _c(\'td\', [_vm._v("String")]), _c(\'td\', [_vm._v("normal")])]), _c(\'tr\', [_c(\'td\', [_vm._v("type")]), _c(\'td\', [_vm._v("进度条类型,提供三种类型: "), _c(\'code\', {\n    pre: true\n  }, [_vm._v("line")]), _vm._v(","), _c(\'code\', {\n    pre: true\n  }, [_vm._v("circle")]), _vm._v(","), _c(\'code\', {\n    pre: true\n  }, [_vm._v("dashboard")])]), _c(\'td\', [_vm._v("String")]), _c(\'td\', [_vm._v("-")])]), _c(\'tr\', [_c(\'td\', [_vm._v("showInfo")]), _c(\'td\', [_vm._v("是否显示进度文字")]), _c(\'td\', [_vm._v("Boolean")]), _c(\'td\', [_vm._v("true")])]), _c(\'tr\', [_c(\'td\', [_vm._v("gapDegree")]), _c(\'td\', [_vm._v("仪表盘进度条缺口角度，可取值 0 ~ 295")]), _c(\'td\', [_vm._v("number")]), _c(\'td\', [_vm._v("75")])]), _c(\'tr\', [_c(\'td\', [_vm._v("strokeWidth")]), _c(\'td\', [_vm._v("圆形进度条线的宽度")]), _c(\'td\', [_vm._v("number")]), _c(\'td\', [_vm._v("6")])]), _c(\'tr\', [_c(\'td\', [_vm._v("strokeHeight")]), _c(\'td\', [_vm._v("进度条线的高度")]), _c(\'td\', [_vm._v("number")]), _c(\'td\', [_vm._v("-")])])])])]);\n}];\n\n;// CONCATENATED MODULE: ./components/progress/index.md?vue&type=template&id=07e54694&\n\n;// CONCATENATED MODULE: ./components/progress/index.md\n\nvar progress_script = {}\n\n\n/* normalize component */\n;\nvar progress_component = (0,componentNormalizer/* default */.Z)(\n  progress_script,\n  progressvue_type_template_id_07e54694_render,\n  progressvue_type_template_id_07e54694_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var progress = (progress_component.exports);\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/progress/demo/index.vue?vue&type=script&lang=js&\n\n\n\n\n\n\n\n\n/* harmony default export */ var demovue_type_script_lang_js_ = ({\n  render() {\n    const h = arguments[0];\n    return h("div", {\n      "class": "demo-progress"\n    }, [h(info), h(base), h(circle), h(dashboard), h(dynamic), h(color), h(size), h(progress)]);\n  }\n});\n;// CONCATENATED MODULE: ./components/progress/demo/index.vue?vue&type=script&lang=js&\n /* harmony default export */ var progress_demovue_type_script_lang_js_ = (demovue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-32.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-32.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-32.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-32.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/progress/demo/index.vue?vue&type=style&index=0&id=fbadb65c&prod&lang=less&\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./components/progress/demo/index.vue?vue&type=style&index=0&id=fbadb65c&prod&lang=less&\n\n;// CONCATENATED MODULE: ./components/progress/demo/index.vue\nvar demo_render, demo_staticRenderFns\n;\n\n;\n\n\n/* normalize component */\n\nvar demo_component = (0,componentNormalizer/* default */.Z)(\n  progress_demovue_type_script_lang_js_,\n  demo_render,\n  demo_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var demo = (demo_component.exports);\n\n//# sourceURL=webpack://kui-vue/./components/progress/demo/index.vue_+_28_modules?')}}]);