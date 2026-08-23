import kui from "kui-vue";
// import "kui-vue/style/index.css";
import { createApp } from "vue";
import "../components/styles/index.less";
import App from "./App.vue";
import "./assets/css/demo.less";
import "./assets/css/index.less";
import demo from "./components/demo";
import router from "./router";

try {
  const storedThemeMode = localStorage.getItem("theme-mode");
  if (storedThemeMode === "light" || storedThemeMode === "dark") {
    document.documentElement.setAttribute("theme-mode", storedThemeMode);
  }
} catch {
  // Keep the default theme when storage is unavailable.
}

const app = createApp(App);

app.use(kui).use(demo).use(router).mount("#app");
