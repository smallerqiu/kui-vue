import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath } from "node:url";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      // Test the source entry even before es/ and lib/ have been built in CI.
      {
        find: /^kui-vue$/,
        replacement: fileURLToPath(new URL("./components/index.ts", import.meta.url)),
      },
      { find: "kui-icons", replacement: "kui-icons/dist/kui-icons.esm.js" },
    ],
  },
  test: {
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "tests/visual/**"],
    restoreMocks: true,
  },
});
