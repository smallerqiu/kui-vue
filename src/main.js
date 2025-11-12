import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import kui from "kui-vue";
import "kui-vue/styles/index.less";
import './assets/css/index.less'
import Demo from './components/demo'

const app = createApp(App)
app.component("Demo", Demo);

app.use(kui).use(router).mount("#app");
