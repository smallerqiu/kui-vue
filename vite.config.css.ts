import autoprefixer from "autoprefixer";
import path from "path";
import { defineConfig } from "vite";
import banner from "./plugins/banner/index.ts";

export default defineConfig({
  publicDir: false,
  plugins: [banner()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
    preprocessorOptions: {
      less: { javascriptEnabled: true },
    },
  },
  build: {
    outDir: "style",
    assetsDir: "",
    rollupOptions: {
      input: {
        index: path.resolve(import.meta.dirname, "components/styles/index.less"),
        components: path.resolve(import.meta.dirname, "components/styles/components.less"),
        base: path.resolve(import.meta.dirname, "components/styles/base.less"),
        theme: path.resolve(import.meta.dirname, "components/styles/less-css-var.less"),
      },
      output: {
        assetFileNames: "[name].css",
      },
    },
    emptyOutDir: false,
  },
});
