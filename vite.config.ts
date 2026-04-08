import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import autoprefixer from "autoprefixer";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";
import banner from "./plugins/banner";
import { generateGlobalDts } from "./plugins/resolver";
const bannerText = `/*!
 * ${pkg.name} v${pkg.version}
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Homepage: https://k-ui.cn
 * Author: Qiu / https://chuchur.com
 */\n`;

// const getLocaleEntries = () => {
//   const localePath = path.resolve(__dirname, "components/locale");
//   if (!fs.existsSync(localePath)) return {};
//   const files = fs.readdirSync(localePath);
//   const entries: Record<string, string> = {};
//   files.forEach((file) => {
//     if (file.endsWith(".ts") || file.endsWith(".js")) {
//       const name = file.replace(/\.(ts|js)$/, "");
//       entries[`locale/${name}`] = path.resolve(__dirname, `components/locale/${file}`);
//     }
//   });
//   return entries;
// };

// https://vite.dev/config/
export default defineConfig({
  publicDir: false,
  define: {
    "process.env": { version: pkg.version },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      // rollupTypes: true,
      insertTypesEntry: true, //合并
      tsconfigPath: "./tsconfig.app.json",
      outDir: "./dist/types/",
      entryRoot: path.resolve(__dirname, "components"),
      exclude: ["node_modules/**", "src/**", "plugins"],
      include: ["components/**/*.ts", "components/**/*.tsx"],
      compilerOptions: {
        skipLibCheck: true, // 跳过库检查
        incremental: true, // 增量编译
      },
      cleanVueFileName: false, //清除临时文件
      afterBuild: () => {
        generateGlobalDts();
      },
    }),
    banner(bannerText),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    devSourcemap: true,
  },
  build: {
    outDir: "dist",
    lib: {
      // entry: {
      //   index: path.resolve(__dirname, "components/index.ts"), // 入口文件
      //   resolver: path.resolve(__dirname, "components/resolver.ts"),
      //   // ...getLocaleEntries(),
      // },
      entry: path.resolve(__dirname, "components/index.ts"),
      name: "kui", // UMD 格式时的全局变量名
      fileName: "k-ui",
      formats: ["es", "umd", "cjs", "iife"], // 导出格式
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      external: ["vue", "dayjs"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          dayjs: "dayjs",
        },
        exports: "named",
        // banner: bannerText,
      },
    },
  },
});
