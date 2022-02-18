# 服务端渲染的支持
### nuxt 环境构建
使用npx 或者 yarn 初始化项目,使用npm i npx -g 安装npx 或 yarn

```sh
$ npx create-nuxt-app <project-name>
#or
$ yarn create nuxt-app <project-name>
```

更多详情请参阅 https://nuxtjs.org/guide/installation


一步步完成后找到`plugins`目录，新建`kui.js`，写入以下内容：

```js
import Vue from 'vue';
import kui from 'kui-vue';

Vue.use(kui);
import 'kui-vue/dist/k-ui.css';
```


然后修改根目录`nuxt.config.js`，修改配置文件，如下

```js
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
      { src: '~plugins/kui', ssr: true }  // add
  ],
  //....
}
```
至此，配置完成，所有组件将支持服务端渲染了。只要是对Nuxt universal 模式的支持
