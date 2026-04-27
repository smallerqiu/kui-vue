# Support for Nuxt.js

## Nuxt Initialization

```bash
$ npm create nuxt@latest kui-demo
#or
$ npm create nuxt@latest kui-demo
```

Choose `minimal – Minimal setup for Nuxt 4`, where `minimal` includes only the most basic Nuxt 4 configuration

For more details, please visit <https://nuxt.com/>

## Plugins Configuration

Create a new `plugins` directory in the root `app`, then create a `kui.ts` file inside the `plugins` directory and write the following content:

```js
// /app/plugins/kui.ts
import { defineNuxtPlugin } from '#app'
import Kui from 'kui-vue'
import 'kui-vue/style/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Kui)
})
```

Then modify the `nuxt.config.ts` file in the root directory and update the configuration as follows:

```js
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ... // Others config
  plugins: ["~/plugins/kui.ts"],  // add
});
```

At this point, the configuration is complete。
