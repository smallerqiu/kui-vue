<p align="center">
    <a href="https://k-ui.cn">
        <img width="100" src="https://chuchur.com/img/logo-kui.svg">
    </a>
</p>
<h1 align="center">
   KUI for Vue   
</h1>

<div align="center">

轻量级桌面UI组件库for Vue.js

[![View UI](https://img.shields.io/npm/v/kui-vue.svg?style=flat-square)](https://www.npmjs.org/package/kui-vue)
[![NPM downloads](http://img.shields.io/npm/dm/kui-vue.svg?style=flat-square)](https://npmjs.org/package/kui-vue)
[![NPM downloads](https://img.shields.io/npm/dt/kui-vue.svg?style=flat-square)](https://npmjs.org/package/kui-vue)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/kui-vue/dist/k-ui.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/kui-vue/dist/k-ui.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)

![](https://k-ui.cn/img/theme.jpg)

[English](./readme.md) | 简体中文
</div>


# 文档   
* [快速开始](https://k-ui.cn/docs/start)
* [组件总览](https://k-ui.cn/components/all)
* [自定义主题](https://k-ui.cn/docs/theme)
* [暗色模式](https://k-ui.cn/docs/dark-mode)
* [Icons](https://k-ui.cn/components/icon)
* [国际化](https://k-ui.cn/docs/i18n)
* [更新日志](https://k-ui.cn/docs/log)


# 特性
- 50+高质量组件
- 国际化支持 14 种语言
- 支持Vue2.x  
- 支持 SSR   
- 支持 [Nuxt.js](https://nuxtjs.org/)   
- 支持 Electron   
- 大多数组件和功能支持IE9及以上浏览器，一些组件和功能不支持IE



# 安装


```sh
#with npm:
npm install kui-vue

#with yarn:
npm add kui-vue
```

使用脚本标记进行全局使用：

```html
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/kui-vue/dist/k-ui.css">
<!-- import kui -->
<script src="//unpkg.com/kui-vue/dist/k-ui.js"></script>
```

# 使用
```html
<template>
  <div>
    <Button type="primary" @click="test">Primary</Button>
  </div>
</template>
<script>
export default{
  data(){
    return{

    }
  },
  methods:{
    test(){
      this.$Message.info('Hello kui !')
    }
  }
}
</script>
```
# 平台支持

KUI 支持所有主要的现代浏览器。

|[<img alt="chrome" height="24px" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/chrome/chrome.png" />](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/chrome/chrome.png)<br>chrome|[<img alt="firefox" height="24px" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/firefox/firefox.png" />](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/firefox/firefox.png)<br>firefox|[<img alt="safari" height="24px" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/safari/safari.png" />](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/safari/safari.png)<br>safari|[<img alt="IE/Edge" height="24px" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/edge/edge.png" />](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/edge/edge.png)<br> IE/Edge|[<img alt="electron" height="24px" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/electron/electron.png" />](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/electron/electron.png)<br>Electron|
|--|--|--|--|--|
| latest 2 versions | latest 2 versions | latest 2 versions | Edge | latest 2 versions |


# 生态
[KUI for react](https://react.k-ui.cn)    

[KUI for mobile](https://gitee.com/chuchur/kui-vue-mobile)


# 协议
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Chuchur
