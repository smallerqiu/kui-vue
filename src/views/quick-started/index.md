# 快速上手

> 你正在阅读的是 基于 Vue 3 的文档！
>
> - Vue 2 已于 2023 年 12 月 31 日停止维护
> - 基于 Vue 2 的 UI 库已经停止维护,请尽快升级

在开始之前，如果您刚开始接触Vue，建议您先细看 Vue及其相关文档： [vue](https://vuejs.org)，[vuex](https://vuex.vuejs.org)，[vue-router](http://router.vuejs.org/)，[vite](https://vite.dev/)，[vue-devtools](https://github.com/vuejs/vue-devtools)

## 1. 初始化一个项目

```bash
npm create vite@latest my-app -- --template vue
```

```bash
pnpm create vite my-app --template vue
```

```bash
yarn create vite my-app --template vue
```

然后按照提示操作即可！

## 2. 使用组件

从 `yarn` 或 `npm` 安装并引入 `kui-vue`。

```bash
$ npm install kui-vue
#or
$ yarn add kui-vue
```

一般在入口页面 `main.js` 中如下配置：

```js
import { createApp } from "vue";
import App from "./App.vue";
import kui from "kui-vue";

// 引入样式
import "kui-vue/style/k-ui.css";

const app = createApp(App);

app.use(kui).mount("#app");
```

以上代码便完成了 `KUI` 的引入。注意: 样式文件需要单独引入。

[使用规范](./buttons.vue)

- 组件支持全小写或首字母大写，如：`Button` 或者 `k-button` :

[特殊组件](./image.vue)

- 注意 `Switch` 、 `Image`组件只支持 以k开头 :
