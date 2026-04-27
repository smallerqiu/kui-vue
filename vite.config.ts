import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import banner from "./plugins/banner";
import { generateGlobalDts } from "./plugins/resolver";

export const getLocaleEntries = () => {
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

export default defineConfig({
  publicDir: false,
  plugins: [
    vue(),
    vueJsx(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
      outDir: "./types/",
      entryRoot: path.resolve(__dirname, "components"),
      exclude: ["node_modules/**", "src/**", "plugins"],
      include: ["components/**/*.ts", "components/**/*.tsx"],
      afterBuild: () => {
        // 在 ES 构建完成后生成 global.d.ts、Vetur 和 Web-Types 配置
        generateGlobalDts();
      },
    }),
    banner(),
  ],
  build: {
    outDir: "es", 
    lib: {
      entry: {
        index: path.resolve(__dirname, "components/index.ts"),
        ...getLocaleEntries(),
      },
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    minify: false, 
    rollupOptions: {
      external: ["vue", "dayjs"],
      output: {
        exports: "named",
        globals: { vue: "Vue", dayjs: "dayjs" },
      },
    },
  },
});
