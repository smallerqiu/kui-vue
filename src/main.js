import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import kui from "kui-vue";
Vue.use(kui);
import Copy from "vue-clipboard2";
Vue.use(Copy);
import "@/src/assets/css/index.less";
import "@/src/assets/css/demo.less";
import Demo from "@/src/components/demo";
Vue.use(Demo);
new Vue({
  // kui,
  router,
  render: (h) => h(App),
}).$mount("#app");