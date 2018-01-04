<template>
  <div>
    <h2>快速上手</h2>
    <h3>引入 KYUI</h3>
    <p>一般在 webpack 入口页面 main.js 中如下配置：</p>
            <Code lang="js javascript">{{ins}}</Code>
    <h3>使用规范</h3>
    <p>在非 template/render 模式下（例如使用 CDN 引用时），组件名要分隔，例如 Buton 必须要写成 k-button。</p>
    <p>以下组件，在非 template/render 模式下，需要加前缀 k-</p>
    <p>Table: k-table</p>
    <p>Button: k-button</p>
    <p>Input: k-input</p>
    <p>Switch: k-button</p>
    <p>Select: k-select</p>
    <p>Col: k-col</p>
    <p>以下组件，在非 template/render 模式下，组件名要分隔</p>
    <p>datePicker: date-picker</p>

  </div>
</template>
<script>
export default {
  data() {
    return {
      ins: `import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import kyui from 'kyui'; 

Vue.use(VueRouter);
Vue.use(kyui);

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
    };
  }
};
</script>
