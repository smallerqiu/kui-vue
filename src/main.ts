import kui from "kui-vue";
import "kui-vue/styles/index.less";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/demo.less";
import "./assets/css/index.less";
import Demo from "./components/demo";
import router from "./router";

const app = createApp(App);
app.component("Demo", Demo);

app.use(kui).use(router).mount("#app");
