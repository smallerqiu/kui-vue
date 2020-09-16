<p align="center">
    <a href="https://k-ui.cn">
        <img width="100" src="https://chuchur.com/kui/vue/logo.svg">
    </a>
</p>

# KUI for Vue   

基于VUE 2.x 开发，漂亮的UI，可定制主题 ,组件丰富,支持SSR , 支持Nuxt ,兼容IE9。  
欢迎批评、指正    

## 开发   
```xml
npm run dev
```

## 编译   
```xml
//编译文档
npm run build:docs
//编译组件
npm run build
```

## 文档
Docs:  [https://vue.k-ui.cn](https://vue.k-ui.cn)   
Blog:  [http://chuchur.com](http://chuchur.com)   
代码仓库: [https://gitee.com/chuchur/kui-vue](https://gitee.com/chuchur/kui-vue)
## 特性   
漂亮的UI，可定制主题   
兼容IE9+   
支持SSR   
支持Nuxt   
组件丰富   

## For React
[kui-react](https://react.k-ui.cn)

## 更新日志：

Logs: [https://k-ui.cn/#log](https://k-ui.cn/#log)

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
