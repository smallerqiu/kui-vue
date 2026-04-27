import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { defineConfig } from "vite";
import VueRouter from "vue-router/vite";
import banner from "./plugins/banner";
import vueMarkdown from "./plugins/markdown";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  console.log("isProd:", isProd);
  return {
    define: {
      // VITE_APP_VERSION: 111,
    },
    server: {
      port: 7005,
    },
    plugins: [
      VueRouter({
        routesFolder: ["src/views"],
        extensions: [".tsx"],
      }),
      vueMarkdown(),
      vueJsx(),
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      banner(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "/"),
        "kui-vue": path.resolve(__dirname, "./components"),
        vue: `http://localhost:7005/js/vue/vue.esm-browser${isProd ? ".prod" : ""}.js`,
        // "kui-icons": `${import.meta.env.VITE_APP_IMPORT_URL}/js/kui-icons.esm.js`,
      },
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue", "md"],
    },
    build: {
      outDir: "docs",
      sourcemap: false,
      minify: "terser",
      rollupOptions: {
        external: [
          "vue",
          "kui-vue",
          "@vue/compiler-sfc",
          "kui-icons",
          "dayjs",
          "dayjs/locale/zh-cn",
          "dayjs/locale/de",
        ],
        output: {
          entryFileNames: "js/[name]-[hash].js",
          chunkFileNames: "js/[name]-[hash].js",
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".css")) {
              return "css/[name]-[hash][extname]";
            }
            if (assetInfo.name && /\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(assetInfo.name)) {
              return "img/[name]-[hash][extname]";
            }
            if (assetInfo.name && /\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
              return "fonts/[name]-[hash][extname]";
            }
            return "assets/[name]-[hash][extname]";
          },
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("kui-icons")) return "ui-icons";
              if (id.includes("kui-vue")) return "ui-lib";
              if (id.includes("vue")) return "vue";
              if (id.includes("dayjs")) return "dayjs";
              if (id.includes("vue-router") || id.includes("vuex")) return "vue-vendor";
            }
          },
        },
      },
    },
    optimizeDeps: {
      exclude: ["vue", "kui-vue", "@vue/compiler-sfc"],
    },
  };
});
