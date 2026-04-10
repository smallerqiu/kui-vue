import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { defineConfig } from "vite";
import banner from "./plugins/banner";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  publicDir: false,
  plugins: [vue(), vueJsx(), banner()],
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "components/index.ts"),
      name: "kui",
      formats: ["umd"],
      fileName: () => "index.js",
    },
    minify: "terser",
    rollupOptions: {
      external: ["vue", "dayjs"],
      output: {
        globals: {
          vue: "Vue",
          dayjs: "dayjs",
        },
        exports: "named",
      },
    },
  },
});
