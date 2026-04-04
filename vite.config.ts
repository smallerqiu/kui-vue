import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import banner from "vite-plugin-banner";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

const bannerText = `/*!
 * ${pkg.name} v${pkg.version}
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Homepage: https://k-ui.cn
 * Author: Qiu / https://chuchur.com
 */\n`;

const getLocaleEntries = () => {
  const localePath = path.resolve(__dirname, "components/locale");
  if (!fs.existsSync(localePath)) return {};
  const files = fs.readdirSync(localePath);
  const entries: Record<string, string> = {};
  files.forEach((file) => {
    if (file.endsWith(".ts") || file.endsWith(".js")) {
      const name = file.replace(/\.(ts|js)$/, "");
      entries[`locale/${name}`] = path.resolve(__dirname, `components/locale/${file}`);
    }
  });
  return entries;
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      // rollupTypes: true,
      insertTypesEntry: true, //合并
      tsconfigPath: "./tsconfig.app.json",
      outDir: "dist/types/",
      cleanVueFileName: true, //清理 Vue 文件产生的冗余声明
      entryRoot:'components/components.ts',
      exclude: ['node_modules/**', 'src/**']
    }),
    banner(bannerText),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: "dist",
    lib: {
      // entry: {
      //   index:path.resolve(__dirname, 'components/index.ts'), // 入口文件
      //   ...getLocaleEntries(),
      // },
      entry: path.resolve(__dirname, "components/index.ts"),
      name: "kui", // UMD 格式时的全局变量名
      // fileName: (format) => `k-ui.${format === "es" ? "mjs" : "js"}`,
      fileName: (format) => {
        if (format === "es") return "k-ui.mjs";
        if (format === "cjs") return "k-ui.cjs";
        return "index.js"; // umd
      },
      // fileName: (format, entryName) => {
      //   if (format === 'es') return `${entryName}.mjs`;
      //   return `${entryName}.js`;
      // },
      formats: ["es", "umd", "cjs", "iife"], // 导出格式
    },
    // minify: "terser",
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // },
    rollupOptions: {
      // 确保外部化处理那些不想打包进库的依赖
      external: ["vue", "dayjs"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
        // 保持和原配置一致的静态资源命名（可选）
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "k-ui.css";
          return assetInfo.name as string;
        },
      },
    },
  },
});
