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
      input: path.resolve(import.meta.dirname, "components/styles/index.less"),
      output: {
        assetFileNames: "index.css",
      },
    },
    emptyOutDir: false,
  },
});
