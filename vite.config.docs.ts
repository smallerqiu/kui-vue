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
        // vue: `http://localhost:7005/js/vue/vue.esm-browser${isProd ? ".prod" : ""}.js`,
        // "kui-icons": `${import.meta.env.VITE_APP_IMPORT_URL}/js/kui-icons.esm.js`,
      },
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue", "md"],
    },
    build: {
      outDir: "docs",
      sourcemap: false,
      minify: "terser",
      rollupOptions: {
        output: {
          entryFileNames: "js/[name]-[hash].js",
          chunkFileNames: "js/[name]-[hash].js",
          assetFileNames: (assetInfo) => {
            if (assetInfo.names.some((name) => name.endsWith(".css"))) {
              return "css/[name]-[hash][extname]";
            }
            if (assetInfo.names.some((name) => /\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(name))) {
              return "img/[name]-[hash][extname]";
            }
            if (assetInfo.names.some((name) => /\.(woff2?|eot|ttf|otf)$/.test(name))) {
              return "fonts/[name]-[hash][extname]";
            }
            return "assets/[name]-[hash][extname]";
          },
          manualChunks(id) {
            if (!id.includes("/node_modules/")) return;

            // 只匹配 node_modules 后的真实包路径。不能直接判断 id.includes("kui-vue")，
            // 因为项目目录本身就叫 kui-vue，会把所有第三方依赖都塞进同一个 chunk。
            const packagePath = id.split("/node_modules/").at(-1) || "";
            if (packagePath.startsWith("kui-icons/")) return "ui-icons";
            if (packagePath.startsWith("@vue/compiler-sfc/")) return "sfc-compiler";
            if (packagePath.startsWith("@vue/compiler-")) return "vue-compiler";
            if (packagePath.startsWith("sucrase/")) return "demo-transpiler";
            if (packagePath.startsWith("vue/") || packagePath.startsWith("@vue/")) return "vue";
            if (packagePath.startsWith("vue-router/") || packagePath.startsWith("pinia/"))
              return "vue-vendor";
            if (packagePath.startsWith("dayjs/")) return "dayjs";
            return "vendor";
          },
        },
      },
    },
    optimizeDeps: {
      exclude: ["vue", "kui-vue", "@vue/compiler-sfc"],
    },
  };
});
