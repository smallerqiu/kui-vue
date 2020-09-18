# 在 vue 中使用
## 安装和初始化

我们需要在命令行中安装 vue-cli 工具。

```sh
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli
```

初始化一个项目

```sh
$ vue create kui-demo
```

从 yarn 或 npm 安装并引入 kui-vue。

```sh
$ npm install kuiv-ue
#or
$ yarn add kui-vue
```

使用组件

修改入口文件，一般在 **webpack** 入口页面` main.js`，引入 kui 组件以及全部样式文件。

```js
import Vue from 'vue';
import App from './App';

import kui from 'kui-vue'; 
import 'kui-vue/dist/k-ui.css'; 

Vue.use(kui);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

## 使用CDN
在页面上引入 js 和 css 文件即可开始使用：

```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/kui-vue/dist/k-ui.css">
<!-- import kui -->
<script src="//unpkg.com/kui-vue/dist/k-ui.js"></script>

```
#### 示例

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>KUI - example</title>
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/kui-vue/dist/k-ui.css">
    <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
    <script type="text/javascript" src="http://unpkg.com/kui-vue/dist/k-ui.js"></script>
</head>

<body>
  <div id="app">
    <k-button @click="show">Click me!</k-button>
    <Modal v-model="visible" title="Welcome">Welcome to use KUI</Modal>
  </div>
</body>
<script>
new Vue({
  el: '#app',
  data: {
    visible: false
  },
  methods: {
    show: function () {
      this.visible = true;
    }
  }
})
</script>
</html>
```