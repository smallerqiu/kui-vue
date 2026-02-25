# Multilingual

Starting from version 3.6+, KUI no longer relies on the i18npackage and implements multilingual support using Vue's provideand inject.

KUI components use Chinese by default internally. If you wish to use another language, you need to configure multilingual settings. Taking English as an example, in App.vue:

```html
<template>
  <ConfigProvider :locale="en">
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
  </ConfigProvider>
</template>

<script setup>
  import en from "kui-vue/components/locale/en";
</script>
```
