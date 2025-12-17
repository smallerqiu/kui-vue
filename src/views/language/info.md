# 多语言

`3.6+` 不再依赖 i18n 包，使用 `vue` 的 `provide` 和 `inject` 实现多语言。

KUI 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 App.vue 中:

```html
<template>
  <ConfigProvider :locale="en">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </ConfigProvider>
</template>

<script setup>
  import en from "kui-ui/components/locale/en";
</script>
```
