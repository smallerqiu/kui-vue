/*!
 * kui-vue v3.3.5-d
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[2540],{3262:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": function() { return /* binding */ dark_mode; }\n});\n\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./src/views/dark-mode/base.md?vue&type=template&id=d6ebf9f2&\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h1\', [_vm._v("暗色模式")]), _c(\'p\', [_vm._v("3.2.5+ 版本 重新设计了 浅色模式和暗色模式, 可以更方便的切换, 并且支持局部范围使用暗色模式")]), _c(\'h2\', {\n    attrs: {\n      "id": "使用",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#使用"\n    }\n  }, [_vm._v("使用")])]), _c(\'p\', [_vm._v("3.2.5之后的版本暗色模式的切换是通过给 根元素节点 添加属性 [theme-mode=\'dark\'] 来实现的 ,下面是例子:")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-js"\n    }\n  }, [_vm._v("const body = document.documentElement;\\nif (body.hasAttribute(\'theme-mode\')) {\\n    body.removeAttribute(\'theme-mode\');\\n} else {\\n    body.setAttribute(\'theme-mode\', \'dark\');\\n}\\n")])])]);\n}];\n\n;// CONCATENATED MODULE: ./src/views/dark-mode/base.md?vue&type=template&id=d6ebf9f2&\n\n// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(3736);\n;// CONCATENATED MODULE: ./src/views/dark-mode/base.md\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,componentNormalizer/* default */.Z)(\n  script,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var base = (component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./src/views/dark-mode/mode.md?vue&type=template&id=610b9ba8&\nvar modevue_type_template_id_610b9ba8_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'Button\', {\n    attrs: {\n      "theme": "light"\n    },\n    on: {\n      "click": _vm.switchMode\n    }\n  }, [_vm._v("切换主题")])], 1), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "切换主题",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#切换主题"\n    }\n  }, [_vm._v("切换主题")])]), _c(\'p\', [_vm._v("简单的切换例子")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <Button theme=\\"light\\" @click=\\"switchMode\\">切换主题</Button>\\n</template>\\n\\n<script>\\nexport default {\\n  methods: {\\n    switchMode(){\\n      const body = document.documentElement;\\n      if (body.hasAttribute(\'theme-mode\')) {\\n          body.removeAttribute(\'theme-mode\');\\n          // localStorage.removeItem(\'theme\')\\n      } else {\\n          body.setAttribute(\'theme-mode\', \'dark\');\\n          // localStorage.setItem(\'theme\',\'dark\')\\n      }\\n    }\\n  },\\n}\\n<\/script>\\n\\n")])])])], 2);\n};\nvar modevue_type_template_id_610b9ba8_staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./src/views/dark-mode/mode.md?vue&type=script&lang=js&\n/* harmony default export */ var modevue_type_script_lang_js_ = ({\n  methods: {\n    switchMode() {\n      const body = document.documentElement;\n      if (body.hasAttribute(\'theme-mode\')) {\n        body.removeAttribute(\'theme-mode\');\n        // localStorage.removeItem(\'theme\')\n      } else {\n        body.setAttribute(\'theme-mode\', \'dark\');\n        // localStorage.setItem(\'theme\',\'dark\')\n      }\n    }\n  }\n});\n;// CONCATENATED MODULE: ./src/views/dark-mode/mode.md?vue&type=script&lang=js&\n /* harmony default export */ var dark_mode_modevue_type_script_lang_js_ = (modevue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./src/views/dark-mode/mode.md\n\n\n\n\n\n/* normalize component */\n;\nvar mode_component = (0,componentNormalizer/* default */.Z)(\n  dark_mode_modevue_type_script_lang_js_,\n  modevue_type_template_id_610b9ba8_render,\n  modevue_type_template_id_610b9ba8_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var mode = (mode_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./src/views/dark-mode/local.md?vue&type=template&id=03dc5aba&\nvar localvue_type_template_id_03dc5aba_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar localvue_type_template_id_03dc5aba_staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'div\', {\n    staticClass: "markdown-body"\n  }, [_c(\'h2\', {\n    attrs: {\n      "id": "主题跟随系统",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#主题跟随系统"\n    }\n  }, [_vm._v("主题跟随系统")])]), _c(\'p\', [_vm._v("macOS 下的系统主题可以通过 系统偏好设置 -> 通用 -> 外观 来配置。")]), _c(\'p\', [_vm._v("在浏览器 (Chrome >= 76, Safari >= 12.1) 中可以通过媒体查询来设定:")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-css"\n    }\n  }, [_vm._v(".day   { background: #eee; color: black; }\\n.night { background: #333; color: white; }\\n\\n@media (prefers-color-scheme: dark) {\\n  .day.dark-scheme   { background:  #333; color: white; }\\n  .night.dark-scheme { background: black; color:  #ddd; }\\n}\\n\\n@media (prefers-color-scheme: light) {\\n  .day.light-scheme   { background: white; color:  #555; }\\n  .night.light-scheme { background:  #eee; color: black; }\\n}\\n")])]), _c(\'p\', [_vm._v("当然也可以通过JS 来监听 :")]), _c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-js"\n    }\n  }, [_vm._v("const monitor = window.matchMedia(\'(prefers-color-scheme: dark)\');\\n\\nfunction matchMode(e) {\\n    const body = document.documentElement;\\n    if (e.matches) {\\n        if (!body.hasAttribute(\'theme-mode\')) {\\n            body.setAttribute(\'theme-mode\', \'dark\');\\n        }\\n    } else {\\n        if (body.hasAttribute(\'theme-mode\')) {\\n            body.removeAttribute(\'theme-mode\');\\n        }\\n    }\\n}\\n\\n// monitor.addListener(matchMode); //旧的api已经废弃 \\nmonitor.addEventListener(\'change\',matchMode)\\n")])]), _c(\'h1\', [_vm._v("局部模式")]), _c(\'p\', [_vm._v("在顶级元素上添加 \'theme-mode=dark\' 或者 \'theme-mode=light\' 属性 ，这个元素下的组件会使用对应模式的颜色变量。")]), _c(\'blockquote\', [_c(\'p\', [_vm._v("局部暗色/亮色对弹出层不生效")])])]);\n}];\n\n;// CONCATENATED MODULE: ./src/views/dark-mode/local.md?vue&type=template&id=03dc5aba&\n\n;// CONCATENATED MODULE: ./src/views/dark-mode/local.md\n\nvar local_script = {}\n\n\n/* normalize component */\n;\nvar local_component = (0,componentNormalizer/* default */.Z)(\n  local_script,\n  localvue_type_template_id_03dc5aba_render,\n  localvue_type_template_id_03dc5aba_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var local = (local_component.exports);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./src/views/dark-mode/local-eg.md?vue&type=template&id=30bfd87e&scoped=true&\nvar local_egvue_type_template_id_30bfd87e_scoped_true_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\'Demo\', [_c(\'template\', {\n    slot: "component"\n  }, [_c(\'div\', [_c(\'Button\', {\n    attrs: {\n      "theme": "light"\n    },\n    on: {\n      "click": _vm.change\n    }\n  }, [_vm._v("局部暗色")]), _c(\'div\', {\n    staticClass: "k-demo-layout"\n  }, [_c(\'Layout\', {\n    staticClass: "layout-back"\n  }, [_c(\'Sider\', {\n    staticClass: "demo-sider",\n    style: {\n      width: _vm.collapsed ? \'60px\' : \'200px\'\n    }\n  }, [_c(\'div\', {\n    staticClass: "logo-box"\n  }, [_c(\'Icon\', {\n    staticClass: "logo",\n    attrs: {\n      "type": _vm.LogoKui,\n      "size": "30"\n    }\n  }), _c(\'transition\', [_c(\'span\', {\n    directives: [{\n      name: "show",\n      rawName: "v-show",\n      value: !_vm.collapsed,\n      expression: "!collapsed"\n    }]\n  }, [_vm._v("KUI运营后台")])])], 1), _c(\'Menu\', {\n    staticStyle: {\n      "border": "none"\n    },\n    attrs: {\n      "mode": "inline",\n      "inline-collapsed": _vm.collapsed\n    },\n    model: {\n      value: _vm.left,\n      callback: function ($$v) {\n        _vm.left = $$v;\n      },\n      expression: "left"\n    }\n  }, [_c(\'MenuItem\', {\n    key: "1-1",\n    attrs: {\n      "icon": _vm.Home\n    }\n  }, [_c(\'span\', [_vm._v("首页")])]), _c(\'MenuItem\', {\n    key: "1-2",\n    attrs: {\n      "icon": _vm.Heart\n    }\n  }, [_c(\'span\', [_vm._v("数据统计")])]), _c(\'MenuItem\', {\n    key: "1-3",\n    attrs: {\n      "icon": _vm.Settings\n    }\n  }, [_c(\'span\', [_vm._v("能源管理")])])], 1), _c(\'Button\', {\n    staticClass: "btn-expand",\n    attrs: {\n      "theme": "light",\n      "icon": !_vm.collapsed ? _vm.ChevronBack : _vm.ChevronForward\n    },\n    on: {\n      "click": _vm.toggle\n    }\n  })], 1), _c(\'Content\', {\n    staticClass: "k-demo-main"\n  }, [_c(\'Row\', {\n    staticClass: "header-nav",\n    attrs: {\n      "type": "flex",\n      "align": "middle"\n    }\n  }, [_c(\'Col\', {\n    attrs: {\n      "flex": "1"\n    }\n  }), _c(\'Col\', [_c(\'Space\', {\n    attrs: {\n      "size": 20\n    }\n  }, [_c(\'Input\', {\n    staticStyle: {\n      "width": "200px"\n    },\n    attrs: {\n      "icon": _vm.Search,\n      "theme": "light",\n      "shape": "circle",\n      "placeholder": "搜索"\n    }\n  }), _c(\'Button\', {\n    attrs: {\n      "icon": _vm.NotificationsOutline,\n      "theme": "normal"\n    }\n  }), _c(\'Avatar\', {\n    staticStyle: {\n      "background": "#3a95ff"\n    },\n    attrs: {\n      "size": 40,\n      "shape": "square"\n    }\n  }, [_vm._v("K")])], 1)], 1)], 1), _c(\'Breadcrumb\', {\n    staticClass: "nav"\n  }, [_c(\'BreadcrumbItem\', [_vm._v("Home")]), _c(\'BreadcrumbItem\', [_vm._v("List")]), _c(\'BreadcrumbItem\', [_vm._v("App")])], 1), _c(\'div\', {\n    staticClass: "demo-dark",\n    attrs: {\n      "theme-mode": _vm.dark ? \'dark\' : \'light\'\n    }\n  }, [_c(\'Menu\', {\n    attrs: {\n      "mode": "horizontal"\n    },\n    model: {\n      value: _vm.current,\n      callback: function ($$v) {\n        _vm.current = $$v;\n      },\n      expression: "current"\n    }\n  }, [_c(\'MenuItem\', {\n    key: "1",\n    attrs: {\n      "icon": _vm.Mail\n    }\n  }, [_vm._v("Navigation One")]), _c(\'MenuItem\', {\n    key: "2",\n    attrs: {\n      "icon": _vm.Heart,\n      "disabled": ""\n    }\n  }, [_vm._v("Navigation Two")]), _c(\'MenuItem\', {\n    key: "4"\n  }, [_c(\'a\', {\n    attrs: {\n      "href": "https://k-ui.cn",\n      "target": "_blank"\n    }\n  }, [_vm._v("Navigation -Link")])])], 1), _c(\'Page\', {\n    attrs: {\n      "current": 1,\n      "total": 50\n    }\n  }), _c(\'div\', [_c(\'Tag\', [_vm._v("标签1")]), _c(\'Tag\', [_vm._v("标签2")]), _c(\'Tag\', [_vm._v("标签3")]), _c(\'Tag\', {\n    attrs: {\n      "closeable": ""\n    }\n  }, [_vm._v("标签4")])], 1), _c(\'div\', {\n    staticStyle: {\n      "width": "512px"\n    }\n  }, [_c(\'Form\', {\n    attrs: {\n      "labelCol": {\n        span: 5\n      },\n      "wrapperCol": {\n        span: 16\n      },\n      "size": _vm.size,\n      "theme": _vm.theme ? \'light\' : \'\',\n      "shape": _vm.checked ? \'circle\' : \'\'\n    }\n  }, [_c(\'FormItem\', {\n    attrs: {\n      "label": "主题"\n    }\n  }, [_c(\'Checkbox\', {\n    staticStyle: {\n      "margin-right": "8px"\n    },\n    attrs: {\n      "label": "Light"\n    },\n    model: {\n      value: _vm.theme,\n      callback: function ($$v) {\n        _vm.theme = $$v;\n      },\n      expression: "theme"\n    }\n  }), _c(\'Checkbox\', {\n    attrs: {\n      "label": "Shape"\n    },\n    model: {\n      value: _vm.checked,\n      callback: function ($$v) {\n        _vm.checked = $$v;\n      },\n      expression: "checked"\n    }\n  })], 1), _c(\'FormItem\', {\n    attrs: {\n      "label": "尺寸"\n    }\n  }, [_c(\'RadioGroup\', {\n    model: {\n      value: _vm.size,\n      callback: function ($$v) {\n        _vm.size = $$v;\n      },\n      expression: "size"\n    }\n  }, [_c(\'RadioButton\', {\n    attrs: {\n      "value": "large",\n      "label": "Large"\n    }\n  }), _c(\'RadioButton\', {\n    attrs: {\n      "value": "default",\n      "label": "Default"\n    }\n  }), _c(\'RadioButton\', {\n    attrs: {\n      "value": "small",\n      "label": "Small"\n    }\n  })], 1)], 1), _c(\'FormItem\', {\n    attrs: {\n      "label": "Input"\n    }\n  }, [_c(\'Input\', {\n    attrs: {\n      "placeholder": "input..."\n    }\n  })], 1), _c(\'FormItem\', {\n    attrs: {\n      "label": "Select"\n    }\n  }, [_c(\'Select\', [_c(\'Option\', {\n    attrs: {\n      "value": "0",\n      "label": "Apple"\n    }\n  }), _c(\'Option\', {\n    attrs: {\n      "value": "1",\n      "label": "Banana"\n    }\n  }), _c(\'Option\', {\n    attrs: {\n      "value": "2",\n      "label": "Orange"\n    }\n  })], 1)], 1), _c(\'FormItem\', {\n    attrs: {\n      "label": "DatePicker"\n    }\n  }, [_c(\'DatePicker\')], 1), _c(\'FormItem\', {\n    attrs: {\n      "label": "Radio"\n    }\n  }, [_c(\'RadioGroup\', [_c(\'Radio\', {\n    attrs: {\n      "value": "0",\n      "label": "Apple"\n    }\n  }), _c(\'Radio\', {\n    attrs: {\n      "value": "1",\n      "label": "Banana"\n    }\n  }), _c(\'Radio\', {\n    attrs: {\n      "value": "2",\n      "label": "Orange"\n    }\n  })], 1)], 1), _c(\'FormItem\', {\n    attrs: {\n      "label": "Checkbox"\n    }\n  }, [_c(\'CheckboxGroup\', [_c(\'Checkbox\', {\n    attrs: {\n      "value": "0",\n      "label": "Apple"\n    }\n  }), _c(\'Checkbox\', {\n    attrs: {\n      "value": "1",\n      "label": "Banana"\n    }\n  }), _c(\'Checkbox\', {\n    attrs: {\n      "value": "2",\n      "label": "Orange"\n    }\n  })], 1)], 1), _c(\'FormItem\', {\n    attrs: {\n      "label": "Switch"\n    }\n  }, [_c(\'k-switch\', {\n    attrs: {\n      "true-text": "Yes",\n      "false-text": "No"\n    }\n  })], 1), _c(\'FormItem\', {\n    attrs: {\n      "label": "Text"\n    }\n  }, [_c(\'TextArea\', {\n    attrs: {\n      "placeholder": "Please input..."\n    }\n  })], 1), _c(\'FormItem\', {\n    attrs: {\n      "wrapperCol": {\n        offset: 5\n      }\n    }\n  }, [_c(\'Button\', {\n    attrs: {\n      "type": "primary",\n      "circle": ""\n    }\n  }, [_vm._v("Submit")]), _c(\'Button\', {\n    staticStyle: {\n      "margin-left": "10px"\n    },\n    attrs: {\n      "circle": ""\n    }\n  }, [_vm._v("Cancel")])], 1)], 1)], 1)], 1), _c(\'Footer\', [_vm._v("KUI ©2018 Created by chuchur")])], 1)], 1)], 1)], 1)]), _c(\'template\', {\n    slot: "description"\n  }, [_c(\'h4\', {\n    attrs: {\n      "id": "切换主题",\n      "tabindex": "-1"\n    }\n  }, [_c(\'a\', {\n    staticClass: "header-anchor",\n    attrs: {\n      "href": "#切换主题"\n    }\n  }, [_vm._v("切换主题")])]), _c(\'p\', [_vm._v("简单的切换例子")])]), _c(\'template\', {\n    slot: "code"\n  }, [_c(\'pre\', {\n    pre: true\n  }, [_c(\'code\', {\n    pre: true,\n    attrs: {\n      "v-pre": "",\n      "class": "language-html"\n    }\n  }, [_vm._v("<template>\\n  <div>\\n  <Button theme=\\"light\\" @click=\\"change\\">局部暗色</Button>\\n  <div class=\\"k-demo-layout\\">\\n    <Layout  class=\\"layout-back\\">\\n      <Sider class=\\"demo-sider\\" :style=\\"{width:collapsed?\'60px\':\'200px\'}\\">\\n        <div class=\\"logo-box\\">\\n          <Icon :type=\\"LogoKui\\" size=\\"30\\" class=\\"logo\\"/>\\n          <transition>\\n            <span v-show=\\"!collapsed\\">KUI运营后台</span>\\n          </transition>\\n        </div>\\n        <Menu mode=\\"inline\\" v-model=\\"left\\" :inline-collapsed=\\"collapsed\\" style=\\"border:none;\\">\\n          <MenuItem key=\\"1-1\\" :icon=\\"Home\\"><span>首页</span></MenuItem>\\n          <MenuItem key=\\"1-2\\" :icon=\\"Heart\\"><span>数据统计</span></MenuItem>\\n          <MenuItem key=\\"1-3\\" :icon=\\"Settings\\"><span>能源管理</span></MenuItem>\\n        </Menu>\\n        <Button theme=\\"light\\" :icon=\\"!collapsed?ChevronBack:ChevronForward\\" @click=\\"toggle\\" class=\\"btn-expand\\"/>\\n      </Sider>\\n      <Content class=\\"k-demo-main\\">\\n        <Row type=\\"flex\\" align=\\"middle\\" class=\\"header-nav\\">\\n          <Col flex=\\"1\\"></Col>\\n          <Col>\\n            <Space :size=\\"20\\">\\n              <Input :icon=\\"Search\\" theme=\\"light\\" shape=\\"circle\\" placeholder=\\"搜索\\" style=\\"width:200px\\"/>\\n              <Button :icon=\\"NotificationsOutline\\" theme=\\"normal\\"/>\\n              <Avatar style=\\"background:#3a95ff\\" :size=\\"40\\" shape=\\"square\\">K</Avatar>\\n            </Space>\\n          </Col>\\n        </Row>\\n        <Breadcrumb class=\\"nav\\">\\n          <BreadcrumbItem>Home</BreadcrumbItem>\\n          <BreadcrumbItem>List</BreadcrumbItem>\\n          <BreadcrumbItem>App</BreadcrumbItem>\\n        </Breadcrumb> \\n        <div class=\\"demo-dark\\" :theme-mode=\\"dark?\'dark\':\'light\'\\">\\n            <Menu mode=\\"horizontal\\" v-model=\\"current\\">\\n            <MenuItem key=\\"1\\" :icon=\\"Mail\\">Navigation One</MenuItem>\\n            <MenuItem key=\\"2\\" :icon=\\"Heart\\" disabled>Navigation Two</MenuItem>\\n            <MenuItem key=\\"4\\">\\n            <a href=\\"https://k-ui.cn\\" target=\\"_blank\\">Navigation -Link</a>\\n            </MenuItem>\\n          </Menu>\\n          <Page :current=\\"1\\" :total=\\"50\\"/>\\n          <div>\\n            <Tag>标签1</Tag>\\n            <Tag>标签2</Tag>\\n            <Tag>标签3</Tag>\\n            <Tag closeable>标签4</Tag>\\n          </div>\\n          <div style=\\"width:512px;\\">\\n            <Form :labelCol=\\"{span:5}\\" :wrapperCol=\\"{span:16}\\" :size=\\"size\\" :theme=\\"theme?\'light\':\'\'\\" :shape=\\"checked?\'circle\':\'\'\\"> \\n              <FormItem label=\\"主题\\">\\n                <Checkbox v-model=\\"theme\\" label=\\"Light\\" style=\\"margin-right:8px;\\"/>\\n                <Checkbox v-model=\\"checked\\" label=\\"Shape\\"/>\\n              </FormItem>\\n              <FormItem label=\\"尺寸\\">\\n                <RadioGroup v-model=\\"size\\" >\\n                  <RadioButton value=\\"large\\" label=\\"Large\\" />\\n                  <RadioButton value=\\"default\\" label=\\"Default\\" />\\n                  <RadioButton value=\\"small\\" label=\\"Small\\" />\\n                </RadioGroup>\\n              </FormItem>\\n              <FormItem label=\\"Input\\">\\n                <Input placeholder=\\"input...\\"/>\\n              </FormItem>\\n              <FormItem label=\\"Select\\">\\n                <Select >\\n                  <Option value=\\"0\\" label=\\"Apple\\" />\\n                  <Option value=\\"1\\" label=\\"Banana\\" />\\n                  <Option value=\\"2\\" label=\\"Orange\\" />\\n                </Select>\\n              </FormItem>\\n              <FormItem label=\\"DatePicker\\">\\n                <DatePicker  />\\n              </FormItem>\\n              <FormItem label=\\"Radio\\">\\n                <RadioGroup>\\n                  <Radio value=\\"0\\" label=\\"Apple\\" />\\n                  <Radio value=\\"1\\" label=\\"Banana\\" />\\n                  <Radio value=\\"2\\" label=\\"Orange\\" />\\n                </RadioGroup>\\n              </FormItem>\\n              <FormItem label=\\"Checkbox\\">\\n                <CheckboxGroup>\\n                  <Checkbox value=\\"0\\" label=\\"Apple\\" />\\n                  <Checkbox value=\\"1\\" label=\\"Banana\\" />\\n                  <Checkbox value=\\"2\\" label=\\"Orange\\" />\\n                </CheckboxGroup>\\n              </FormItem>\\n              <FormItem label=\\"Switch\\">\\n              <k-switch true-text=\\"Yes\\" false-text=\\"No\\" />\\n              </FormItem>\\n              <FormItem label=\\"Text\\">\\n                <TextArea placeholder=\\"Please input...\\"/>\\n              </FormItem>\\n              <FormItem :wrapperCol=\\"{offset:5}\\">\\n                <Button type=\\"primary\\" circle >Submit</Button>\\n                <Button style=\\"margin-left: 10px\\" circle >Cancel</Button>\\n              </FormItem>\\n            </Form>\\n            </div>\\n        </div>\\n        <Footer>KUI ©2018 Created by chuchur</Footer>\\n      </Content> \\n    </Layout>\\n  </div>\\n  </div>\\n</template>\\n<script>\\nimport { LogoKui ,Home, Heart, Settings, ChevronBack, ChevronForward, Search,NotificationsOutline,Mail } from \\"kui-icons\\";\\nexport default{\\n  data() {\\n    return {\\n      LogoKui,Home, Heart, Settings, ChevronBack, ChevronForward, Search, NotificationsOutline,Mail,\\n      current:[\'1\'],\\n      left:[\'1-1\'],\\n      collapsed:false,\\n      dark:false,\\n       size:\'default\',\\n      theme:false,\\n      checked:false,\\n      shape:\'\'\\n    }\\n  },\\n  methods:{\\n    change(){\\n      this.dark = !this.dark\\n    },\\n    toggle(){\\n      this.collapsed = !this.collapsed\\n    }\\n  }\\n}\\n<\/script>\\n<style scoped lang=\\"less\\"> \\n.demo-dark{\\n  padding:20px 0;\\n  color:#ddd;\\n  margin:20px;\\n  background:var(--kui-color-back);\\n}\\n.k-demo-layout{\\n  .logo-box {\\n    box-sizing: border-box;\\n    display:flex;\\n    align-items:center;\\n    padding:16px 0 17px 16px;\\n    /* background:var(--kui-color-gray-90); */\\n    white-space:nowrap;\\n    overflow:hidden;\\n    .logo{\\n      margin-right:8px;\\n    }\\n  } \\n  .header-nav{\\n    border-bottom:1px solid var(--kui-color-border);\\n    padding-bottom:10px;\\n  }\\n}\\n.btn-expand{\\n  position:absolute;\\n  bottom:10px;\\n  left:12px;\\n}\\n.k-demo-layout .demo-sider{\\n  left: 0;\\n  position:relative;\\n  border-right:1px solid var(--kui-color-border);\\n  transition: all 0.3s ease 0s;\\n}\\n.k-demo-layout .k-demo-main .nav{\\n   padding:16px 0 0 16px;\\n }\\n.k-demo-layout .k-demo-main{\\n  overflow:auto;\\n}\\n.k-demo-layout .k-layout-footer{\\n  text-align:center;\\n  color:#999;\\n }\\n</style>\\n\\n")])])])], 2);\n};\nvar local_egvue_type_template_id_30bfd87e_scoped_true_staticRenderFns = [];\n\n// EXTERNAL MODULE: ./node_modules/kui-icons/lib/dist.js\nvar dist = __webpack_require__(5118);\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js!./src/utils/md-loader.js!./node_modules/kui-loader/index.js??clonedRuleSet-41.use[2]!./src/views/dark-mode/local-eg.md?vue&type=script&lang=js&\n\n/* harmony default export */ var local_egvue_type_script_lang_js_ = ({\n  data() {\n    return {\n      LogoKui: dist.LogoKui,\n      Home: dist.Home,\n      Heart: dist.Heart,\n      Settings: dist.Settings,\n      ChevronBack: dist.ChevronBack,\n      ChevronForward: dist.ChevronForward,\n      Search: dist.Search,\n      NotificationsOutline: dist.NotificationsOutline,\n      Mail: dist.Mail,\n      current: [\'1\'],\n      left: [\'1-1\'],\n      collapsed: false,\n      dark: false,\n      size: \'default\',\n      theme: false,\n      checked: false,\n      shape: \'\'\n    };\n  },\n  methods: {\n    change() {\n      this.dark = !this.dark;\n    },\n    toggle() {\n      this.collapsed = !this.collapsed;\n    }\n  }\n});\n;// CONCATENATED MODULE: ./src/views/dark-mode/local-eg.md?vue&type=script&lang=js&\n /* harmony default export */ var dark_mode_local_egvue_type_script_lang_js_ = (local_egvue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./src/views/dark-mode/local-eg.md\n\n\n\n;\n\n\n/* normalize component */\n\nvar local_eg_component = (0,componentNormalizer/* default */.Z)(\n  dark_mode_local_egvue_type_script_lang_js_,\n  local_egvue_type_template_id_30bfd87e_scoped_true_render,\n  local_egvue_type_template_id_30bfd87e_scoped_true_staticRenderFns,\n  false,\n  null,\n  "30bfd87e",\n  null\n  \n)\n\n/* harmony default export */ var local_eg = (local_eg_component.exports);\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/dark-mode/index.vue?vue&type=script&lang=js&\n\n\n\n\n/* harmony default export */ var dark_modevue_type_script_lang_js_ = ({\n  render() {\n    const h = arguments[0];\n    return h("div", [h(base), h(mode), h(local), h(local_eg)]);\n  }\n});\n;// CONCATENATED MODULE: ./src/views/dark-mode/index.vue?vue&type=script&lang=js&\n /* harmony default export */ var views_dark_modevue_type_script_lang_js_ = (dark_modevue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./src/views/dark-mode/index.vue\nvar dark_mode_render, dark_mode_staticRenderFns\n;\n\n\n\n/* normalize component */\n;\nvar dark_mode_component = (0,componentNormalizer/* default */.Z)(\n  views_dark_modevue_type_script_lang_js_,\n  dark_mode_render,\n  dark_mode_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var dark_mode = (dark_mode_component.exports);\n\n//# sourceURL=webpack://kui-vue/./src/views/dark-mode/index.vue_+_16_modules?')}}]);