import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { defineConfig } from "vite";
import banner from "./plugins/banner/index.ts";
import { getLocaleEntries } from "./scripts/build-entries.ts";

export default defineConfig({
  publicDir: false,
  plugins: [vue(), vueJsx(), banner()],
  build: {
    outDir: "es",
    reportCompressedSize: false,
    lib: {
      entry: {
        index: path.resolve(import.meta.dirname, "components/index.ts"),
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
