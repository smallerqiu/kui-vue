import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { defineConfig } from "vite";
import banner from "./plugins/banner/index.ts";
import { getLocaleEntries } from "./vite.config.ts";

export default defineConfig({
  publicDir: false,
  plugins: [vue(), vueJsx(), banner()],
  build: {
    outDir: "lib",
    lib: {
      entry: {
        index: path.resolve(import.meta.dirname, "components/index.ts"),
        ...getLocaleEntries(),
      },
      name: "kui",
      formats: ["cjs"],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    minify: "terser",
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true },
    },
    rollupOptions: {
      external: ["vue", "dayjs"],
      output: {
        exports: "named",
        globals: { vue: "Vue", dayjs: "dayjs" },
      },
    },
  },
});
