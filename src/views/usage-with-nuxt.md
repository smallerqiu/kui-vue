# 服务端渲染的支持

## Nuxt 初始化

```bash
$ npm create nuxt@latest kui-demo
#or
$ npm create nuxt@latest kui-demo
```

选择 `minimal – Minimal setup for Nuxt 4` ,`minimal` 只包含最基础的 Nuxt 4 配置

更多详情请参阅 <https://nuxt.com/>

## Plugins 配置

在根目录 `app` 新建`plugins`目录，在`plugins`目录新建`kui.ts`，写入以下内容：

```js
// plugins/kui.ts
import { defineNuxtPlugin } from '#app'
import Kui from 'kui-vue'
import 'kui-vue/dist/k-ui.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Kui)
})
```

然后修改根目录`nuxt.config.ts`，修改配置文件，如下

```js
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ... // 其他配置
  plugins: ["~/plugins/kui.ts"],  // 添加
});
```

至此，配置完成。
