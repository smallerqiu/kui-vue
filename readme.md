<p align="center">
    <a href="https://k-ui.xyz">
        <img width="100" src="https://k-ui.xyz/img/logo.svg">
    </a>
</p>

# KUI for Vue   

基于VUE 2.x 开发，在追求完美视觉体验的同时也保证了其性能高效。  
欢迎批评、指正、吐槽、[Star](https://github.com/chuchur/kui-vue) 和 [捐助](https://vue.k-ui.xyz/sponsor)   

## 文档
Docs:  [http://k-ui.xyz](https://k-ui.xyz)   
Blog:  [http://chuchur.com](http://chuchur.com)   
GitHub: [https://github.com/chuchur/kui-vue](https://github.com/chuchur/kui-vue)
## 特性   
漂亮的UI，可定制主题   
兼容IE9+   
组件丰富，功能强大

## 更新日志：

Logs: [http://vue.k-ui.xyz/log](https://vue.k-ui.xyz/log)

## 安装   

### 使用npm
```xml
npm install kui-vue --save
```

### 使用CDN   
```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/kui-vue/dist/k-ui.css">
<!-- import kui -->
<script src="//unpkg.com/kui-vue/dist/k-ui.js"></script>
```

### 示例

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>kui example</title>
  <link rel="stylesheet" type="text/css" href="http://unpkg.com/kui-vue/dist/k-ui.css">
  <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
  <script type="text/javascript" src="http://unpkg.com/kui-vue/dist/k-ui.js"></script>
</head>
<body>
<div id="app">
  <k-button @click="show">Click me!</k-button>
  <Modal v-model="visible" title="Welcome">Welcome to use kui</Modal>
</div>
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
</body>
</html>
```
