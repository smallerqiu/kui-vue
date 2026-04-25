# Quick Start

> You are reading the Vue 3-based documentation!
>
> - Vue 2 reached its end of life on December 31, 2023.
> - UI libraries based on Vue 2 have ceased maintenance. Please upgrade as soon as possible.

Before you begin, if you are new to Vue, it is recommended to first review the Vue documentation and related resources: [vue](https://vuejs.org)，[vuex](https://vuex.vuejs.org)，[vue-router](http://router.vuejs.org/)，[vite](https://vite.dev/)，[vue-devtools](https://github.com/vuejs/vue-devtools).

## 1. Initialize a Project

```bash
npm create vite@latest my-app -- --template vue
```

```bash
pnpm create vite my-app --template vue
```

```bash
yarn create vite my-app --template vue
```

Then, just follow the prompts!

## 2. Using Components

Install and import `kui-vue` from `yarn` or `npm`.

```bash
$ npm install kui-vue
# or
$ yarn add kui-vue
```

Typically, configure it in your entry file `main.js` as follows:

```js
import { createApp } from "vue";
import App from "./App.vue";
import kui from "kui-vue";

// Import styles
import "kui-vue/style/k-ui.css";

const app = createApp(App);

app.use(kui).mount("#app");
```

The above code completes the import of KUI. Note: The style file needs to be imported separately.

### Usage Conventions

Components support either all lowercase or PascalCase (first letter capitalized), such as: `Button`,`KButton` or `k-button`:

```html
<template>
  <div>
    <Button type="primary">button</Button> ✅ Recommended
    <!-- ok -->
    <KButton type="primary">button</KButton> ✅ 
    <!-- ok -->
    <k-button type="primary">button</k-button> ✅
  </div>
</template>
```

Note that the `Switch` and `Image` components only support names starting with 'k'.

```html
<template>
  <div>
    <KSwitch type="primary" /> ✅ Recommended 
    <!-- ok -->
    <KImage src="xxx" /> ✅
    <!-- ok -->
    <k-switch type="primary" /> ✅ 
    <!-- ok -->
    <k-image src="xxx" /> ✅
  </div>
</template>
```
