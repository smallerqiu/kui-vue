# 服务端渲染的支持

## nuxt 环境构建

```bash
$ npm create nuxt@latest kui-demo
#or
$ npm create nuxt@latest kui-demo
```

选择 `minimal – Minimal setup for Nuxt 4` ,`minimal` 只包含最基础的 Nuxt 4 配置

更多详情请参阅 <https://nuxt.com/>

一步步完成后找到`plugins`目录，新建`kui.js`，写入以下内容：

```js
import Vue from "vue";
import kui from "kui-vue";

Vue.use(kui);
import "kui-vue/dist/k-ui.css";
```

然后修改根目录`nuxt.config.js`，修改配置文件，如下

```js
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "{ { name }}",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "{ { escape description }}",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  plugins: [
    { src: "~plugins/kui", ssr: true }, // add
  ],
  //....
};
```

至此，配置完成，所有组件将支持服务端渲染了。只要是对Nuxt universal 模式的支持

有遇无法编译问题,修改 `nuxt.config.js`

```js
export default{
  ...
    build:{
++    transpile:['kui-vue']
    }
  ...
}
```
