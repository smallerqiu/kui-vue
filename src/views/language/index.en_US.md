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

<script setup lang="ts">
  import en from "kui-vue/components/locale/en";
</script>
```

## Example

[Multilingual switching example](./demo.vue?show=vertical)

- Switch languages by modifying the locale property of ConfigProvider.

Currently, KUI has the following languages built-in:

- Simplified Chinese (zh-CN)
- Traditional Chinese (zh-TW)
- German (de)
- Greek (el)
- English (en)
- French (fr)
- Italian (it)
- Japanese (ja)
- Korean (ko)
- Russian (ru)
- Thai (th)
- Ukrainian (uk)
- Vietnamese (vi)

We welcome code contributions to support more languages.[Join](https://github.com/smallerqiu/kui-vue/tree/master/components/locale/lang)