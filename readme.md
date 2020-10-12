<p align="center">
    <a href="https://k-ui.cn">
        <img width="100" src="https://chuchur.com/kui/vue/logo.svg">
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
</div>

## Docs   
[3.x](https://k-ui.cn) | [2.x](https://v2.k-ui.cn)

## Features
Dozens of useful and beautiful components.    
Friendly API. It's made for people with any skill level.    
Extensive documentation and demos.    
It is quite beautiful.   


## Compatibility
Supports Vue.js 2.x   
Supports SSR   
Supports [Nuxt.js](https://nuxtjs.org/)   
Supports TypeScript   
Supports Electron   
Most components and features support IE9 and above browsers, some   components and features do not support IE

## Install

Using npm:
```sh
npm install kui-vue --save
```
Using a script tag for global use:

```html
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/kui-vue/dist/k-ui.css">
<!-- import kui -->
<script src="//unpkg.com/kui-vue/dist/k-ui.js"></script>
```

## Usage
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
      this.$Message.info('test')
    }
  }
}
</script>
```

## Ecosystem Links
[KUI for react](https://react.k-ui.cn)    

[KUI for mobile](https://gitee.com/chuchur/kui-vue-mobile)


## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Chuchur
