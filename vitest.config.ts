import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "kui-icons": "kui-icons/dist/kui-icons.esm.js",
    },
  },
  test: {
    environment: "jsdom",
    restoreMocks: true,
  },
});
