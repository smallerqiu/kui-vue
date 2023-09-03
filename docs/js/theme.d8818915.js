/*!
 * kui-vue v3.3.5-d
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[8505],{8624:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": function() { return /* binding */ theme; }\n});\n\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./src/views/theme.md?vue&type=template&id=67563cb8&\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h1\', [_vm._v("定制主题")]), _c(\'p\', [_vm._v("设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。")]), _c(\'p\', [_c(\'img\', {\n    staticClass: "demo-theme",\n    attrs: {\n      "src": "https://k-ui.cn/img/theme.jpg"\n    }\n  })]), _c(\'h3\', {\n    attrs: {\n      "id": "覆盖定制",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#覆盖定制"\n    }\n  }, [_vm._v("覆盖定制")])]), _c(\'p\', [_vm._v("如果项目使用webpack构建，可以通过覆盖less变量来定制主题"), _c(\'br\'), _vm._v(" 新建一个less 文件 如：\'assets/styles/custom.less\',写下如下内容：")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-less"\n    }\n  }, [_vm._v("//引入 styles\\n@import \'~kui-vue/components/styles/index.less\';\\n\\n// 重新定义变量\\n@main: #3a95ff //主体颜色\\n@success #00bb5d //成功状态颜色\\n@warning #00bb5d //警告颜色\\n@danger #00bb5d //危险颜色\\n\\n@font-color: rgba(0, 0, 0, .75); //字体颜色\\n@title-color: rgba(0, 0, 0, .85); //标题凸显颜色\\n@sub-title-color: rgba(0, 0, 0, .85); //副标题凸显颜色\\n@back-color: #fff; //组件背景\\n@mask-color: rgba(0, 0, 0, .6); //蒙层背景\\n@icon-color: rgba(0, 0, 0, .4); //图标颜色\\n@hover-color:fadeout(@border-color, 60%); //item 的 hover 颜色\\n@selected-color:fadeout(@main, 90%); //item 的 选中 颜色\\n@radius: ~\'2px\'; //圆角大小\\n@border-color: #d8d8d8; //边框颜色\\n@disable-border: #d0d0d0; //禁用边框颜色\\n@disable-back: #f5f5f5;//禁用背景颜色\\n@disable-color: rgba(0, 0, 0, .3); //禁用文字颜色\\n")])]), _c(\'p\', [_vm._v("然后在入口文件 main.js 内导入这个 less 文件即可：")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-js"\n    }\n  }, [_vm._v("import Vue from \'vue\';\\nimport kui from \'kui-vue\';\\nimport \'assets/styles/custom.less\';\\n\\nVue.use(kui);\\n")])])]);\n}];\n\n;// CONCATENATED MODULE: ./src/views/theme.md?vue&type=template&id=67563cb8&\n\n// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(3736);\n;// CONCATENATED MODULE: ./src/views/theme.md\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,componentNormalizer/* default */.Z)(\n  script,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var theme = (component.exports);\n\n//# sourceURL=webpack://kui-vue/./src/views/theme.md_+_2_modules?')}}]);