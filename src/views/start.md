# 快速上手

在开始之前，如果您刚开始接触Vue，建议您先细看 Vue及其相关文档： [vue](https://vuejs.org)，[vuex](https://vuex.vuejs.org)，[vue-router](http://router.vuejs.org/)，[vite](https://vite.dev/)，[vue-devtools](https://github.com/vuejs/vue-devtools)

## 1. 初始化一个项目

```bash
# npm 7+，需要添加额外的 --：
$ npm create vite@latest my-app -- --template vue
#or
$ yarn create vite my-app --template vue
```

然后按照提示操作即可！

## 2. 使用组件

从 yarn 或 npm 安装并引入 kui-vue。

```bash
$ npm install kui-vue
#or
$ yarn add kui-vue
```

一般在入口页面 `main.js` 中如下配置：

```js
import Vue from "vue";
import App from "./App";
import kui from "kui-vue";
import "kui-vue/dist/k-ui.css";

Vue.use(kui);

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
});
```

以上代码便完成了 K UI 的引入。注意: 样式文件需要单独引入。

### 局部导入组件

```js
import Vue from "vue";
import { Button } from "kui-vue";
import App from "./App";

Vue.config.productionTip = false;
Vue.use(Button);

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
});
```

## 兼容性

Kui Vue 支持所有的现代浏览器和 IE9+。

对于 IE 系列浏览器，需提供 [es5-shim](https://github.com/es-shims/es5-shim) 和 [es6-shim](https://github.com/paulmillr/es6-shim) 等 Polyfills 的支持。

如果你使用了 babel，强烈推荐使用 [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) 和 [babel-plugin-transform-runtime](https://babeljs.io/docs/plugins/transform-runtime/) 来替代以上两个 shim。

## 按需加载

- 使用 babel-plugin-import（推荐）。

```js
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { "libraryName": "kui-vue", "style": "css" }] // `style: true` 会加载 less 文件
  ]
}
```

- 手动引入

```js
import { Button } from "kui-vue/components/button";
import "kui-vue/components/button/style";
```

### 使用规范

组件支持全小写或首字母大写，如：`Button`, 或者 `k-button` :

```html
<template>
  <div>
    <button type="primary"></button> ✅ 推荐
    <k-button type="primary"></k-button> ✅
  </div>
</template>
```

但是 `Switch` 、 `Image` 只支持 以k开头 :

```html
<template>
  <div>
    <KSwitch type="primary"></KSwitch> ✅ 推荐 <KImage></KImage> ✅
    <!-- ok -->
    <k-switch type="primary"></k-switch> ✅ <k-image></k-image> ✅
  </div>
</template>
```
