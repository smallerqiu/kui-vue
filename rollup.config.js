import vue from "rollup-plugin-vue";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import banner from "postcss-banner";
import postcss from "rollup-plugin-postcss";
import { name, version } from "./package.json";
import autoprefixer from "autoprefixer";
import fs from "fs";
import path from "path";
import { dts } from "rollup-plugin-dts";

const bannerText = `/*!
 * ${name} v${version}
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Homepage: https://k-ui.cn
 * Author: Qiu / https://chuchur.com
 */\n`;

// build locales
const locales = fs
  .readdirSync(path.resolve("components/locale"))
  .filter((f) => f.endsWith(".js"))
  .map((f) => f.replace(".js", ""));

const localesConfig = locales.map((lang) => ({
  input: `components/locale/${lang}.js`,
  output: {
    file: `dist/locale/${lang}.js`,
    format: "umd",
    name: `kui_lang_${lang.replace("-", "")}`,
    banner: bannerText,
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [["@babel/preset-env", { modules: false }]],
    }),
    terser(),
  ],
}));

export default [
  ...localesConfig,
  {
    input: "types/index.d.ts",
    output: {
      file: "dist/k-ui.d.ts",
      banner: bannerText,
      format: "es",
    },
    plugins: [dts()],
  },
  {
    external: ["vue", "dayjs"],
    input: "components/index.js",
    output: [
      {
        file: "dist/k-ui.esm.js",
        format: "es",
        banner: bannerText,
        exports: "named",
      },
      {
        file: "dist/k-ui.cjs.js",
        format: "cjs",
        banner: bannerText,
        exports: "named",
      },
      {
        file: "dist/k-ui.umd.js",
        format: "umd",
        name: "kui",
        exports: "named",
        banner: bannerText,
        globals: {
          vue: "Vue",
          dayjs: "dayjs",
        },
      },
    ],
    treeshake: {
      moduleSideEffects: false,
    },
    plugins: [
      postcss({
        extract: "k-ui.css",
        minimize: true,
        sourceMap: false,
        use: {
          less: { javascriptEnabled: true },
        },
        plugins: [
          autoprefixer({
            overrideBrowserslist: ["> 1%", "not ie 11", "not dead"],
          }),
          banner({
            banner: `${name} v${version}\nCopyright 2017-present, kui-vue.\nAll rights reserved.\nHomepage: https://k-ui.cn\nAuthor: Qiu / https://www.chuchur.com\n`,
            important: true,
          }),
        ],
      }),
      json(),
      resolve({
        extensions: [".js", ".jsx", ".vue"],
        browser: true,
        preferBuiltins: false,
        alias: {
          vue: "vue/dist/vue.esm.js",
        },
      }),
      commonjs({ include: "node_modules/**" }),
      vue({
        css: true,
        compileTemplate: true, // 显式启用模板编译
        template: {
          isProduction: true, //process.env.NODE_ENV === "production",
          optimizeSSR: false,
        },
        // isWebComponent: false,
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        extensions: [".js", ".jsx", ".vue"],
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false,
              targets: { esmodules: true },
              exclude: ["@babel/plugin-transform-regenerator"],
            },
          ],
          [
            "@vue/babel-preset-jsx",
            {
              compositionAPI: true,
              injectH: true,
            },
          ],
        ],
      }),
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        // mangle: true, // 变量名混淆
      }),
      // license({
      //   banner: `${name} v${version}\nCopyright 2017-present, kui-vue.\nAll rights reserved.\nAuthor: Qiu / www.chuchur.com\n`
      // }),
    ],
  },
];
