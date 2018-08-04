let code = {}

code.webpack = `import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import kui from 'kui-vue'; 
import 'kui-vue/dist/k-ui.css'; 

Vue.use(VueRouter);
Vue.use(kui);

// The routing configuration
const RouterConfig = {
  routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});`

export default code