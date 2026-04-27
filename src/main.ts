import kui from "kui-vue";
// import "kui-vue/style/index.css";
import { createApp } from "vue";
import "../components/styles/index.less";
import App from "./App.vue";
import "./assets/css/demo.less";
import "./assets/css/index.less";
import Demo from "./components/demo";
import router from "./router";

const app = createApp(App);
app.component("Demo", Demo);

app.use(kui).use(router).mount("#app");
