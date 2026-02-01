// eslint.config.js — Vue2.7 + JSX (ESLint 9 Flat Config)

import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import babelParser from "@babel/eslint-parser";
import globals from "globals";

export default [
  // 忽略目录
  {
    ignores: ["dist", "node_modules", "docs"],
  },

  // Vue + JSX 文件配置
  {
    files: ["**/*.vue", "**/*.jsx", "**/*.js"],
    languageOptions: {
      parser: vueParser, // Vue 文件用 vue-eslint-parser
      parserOptions: {
        parser: babelParser, // 内部再用 babel 解析 JS/JSX
        ecmaVersion: 2021,
        sourceType: "module",
        requireConfigFile: false, // 不需要 .babelrc
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      vue,
    },

    rules: {
      // 使用 Vue 2 的推荐规则
      ...vue.configs["base"].rules,
      ...vue.configs["essential"].rules,
      ...vue.configs["strongly-recommended"].rules,
      ...vue.configs["recommended"].rules,

      // 你可能需要关掉的一些规则
      "vue/no-v-html": "off",
      "vue/multi-word-component-names": "off",
      "vue/max-attributes-per-line": "off", // 允许单行多属性

      // 可选：JS 规则（按需开启）
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
];
