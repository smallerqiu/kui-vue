import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { defineConfig } from "vite";
import banner from "./plugins/banner";
import { getLocaleEntries } from "./vite.config";

export default defineConfig({
  publicDir: false,
  plugins: [vue(), vueJsx(), banner()],
  build: {
    outDir: "lib",
    lib: {
      entry: {
        index: path.resolve(__dirname, "components/index.ts"),
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
