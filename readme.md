<p align="center">
    <a href="https://k-ui.cn">
        <img width="100" src="https://chuchur.com/img/logo-kui.svg">
    </a>
</p>
<h1 align="center">
   KUI for Vue   
</h1>

<div align="center">

A high quality UI components Library with Vue.js

[![View UI](https://img.shields.io/npm/v/kui-vue.svg?style=flat-square)](https://www.npmjs.org/package/kui-vue)
[![NPM downloads](http://img.shields.io/npm/dm/kui-vue.svg?style=flat-square)](https://npmjs.org/package/kui-vue)
[![NPM downloads](https://img.shields.io/npm/dt/kui-vue.svg?style=flat-square)](https://npmjs.org/package/kui-vue)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/kui-vue/dist/k-ui.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/kui-vue/dist/k-ui.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)

![](https://k-ui.cn/img/theme.jpg)

English | [简体中文](./README-zh_CN.md)

</div>


# Documentation   
* [Quick Start](https://k-ui.cn/docs/start)
* [Components Overview](https://k-ui.cn/components/all)
* [Customizing Themes](https://k-ui.cn/docs/theme)
* [Dark Mode](https://k-ui.cn/docs/dark-mode)
* [Icons](https://k-ui.cn/components/icon)
* [Internationalization](https://k-ui.cn/docs/i18n)
* [CHANGELOG](https://k-ui.cn/docs/log)


# Features
- Up to 50 high-quality Components.
- Internationalization Support for Dozens of Languages.
- Supports Vue.js 2.x   
- Supports SSR   
- Supports [Nuxt.js](https://nuxtjs.org/)   
- Supports Electron   
- Most components and features support IE9 and above browsers, some   components and features do not support IE

# Install


```sh
#with npm:
npm install kui-vue

#with yarn:
npm add kui-vue
```

Using a script tag for global use:

```html
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/kui-vue/dist/k-ui.css">
<!-- import kui -->
<script src="//unpkg.com/kui-vue/dist/k-ui.js"></script>
```

# Usage
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
# 👌 Platform Support

KUI supports all major modern browsers.

|[<img alt="chrome" height="24px" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/chrome/chrome.png" />](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/chrome/chrome.png)<br>chrome|[<img alt="firefox" height="24px" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/firefox/firefox.png" />](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/firefox/firefox.png)<br>firefox|[<img alt="safari" height="24px" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/safari/safari.png" />](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/safari/safari.png)<br>safari|[<img alt="IE/Edge" height="24px" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/edge/edge.png" />](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/edge/edge.png)<br> IE/Edge|[<img alt="electron" height="24px" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/electron/electron.png" />](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/electron/electron.png)<br>Electron|
|--|--|--|--|--|
| latest 2 versions | latest 2 versions | latest 2 versions | Edge | latest 2 versions |


# Ecosystem Links
[KUI for react](https://react.k-ui.cn)    

[KUI for mobile](https://gitee.com/chuchur/kui-vue-mobile)


# License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Chuchur
