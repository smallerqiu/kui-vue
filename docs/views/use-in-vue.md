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

修改入口文件，一般在 **webpack** 入口页面 `main.js`，引入 kui 组件以及全部样式文件。

```js
import Vue from 'vue';
import App from './App';

import kuiVue from 'kui-vue'; 
import 'kui-vue/dist/k-ui.css'; 

Vue.use(kuiVue);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

## 外部引入
在页面上引入 js 和 css 文件即可开始使用：
> 需要 载入 `moment` 和 `icons`

```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/kui-vue/dist/k-ui.css">
<!-- 暗黑主题 -->
<!-- <link rel="stylesheet" href="//unpkg.com/kui-vue/dist/k-ui-dark.css"> -->
<!-- import kui icons -->
<script src="//unpkg.com/kui-icons/lib/kui-icons.js"></script>
<!-- import moment.js -->
<script src="//unpkg.com/moment/min/moment.min.js"></script>
<!-- import kui -->
<script src="//unpkg.com/kui-vue/dist/k-ui.js"></script>

```

## 如使用CDN，不编译进 bundle
```js
// main.js
....
import kuiVue from 'kui-vue'; 

Vue.use(kuiVue);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

在 `webpack` 如下配置即可

```json
module: {
  ...
},
externals: {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'kui-vue': 'KuiVue',
  ...
},
```
#### 示例

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>KUI - example</title>
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/kui-vue/dist/k-ui.css">
    <script src="//unpkg.com/kui-icons/lib/kui-icons.js"></script>
    <script src="//unpkg.com/moment/min/moment.min.js"></script>
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