# Multilingual

KUI does not depend on a third-party i18n package. `ConfigProvider` supplies locale data to KUI components, which use Simplified Chinese by default.

Locale is normally configured at the root of the application. For example:

```html
<template>
  <ConfigProvider :locale="en">
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
  </ConfigProvider>
</template>

<script setup lang="ts">
  import en from "kui-vue/locale/en";
</script>
```

## Example

[Multilingual switching example](./demo.vue?show=vertical)

- The demo focuses on components with built-in copy: date and selection controls, pagination, empty states, and overlays.
- Descendant components react when the `locale` property of `ConfigProvider` changes.
- DatePicker uses dayjs for date formatting. Load and set the matching dayjs locale when switching languages.
- Application copy is not translated automatically; use your application's internationalization solution for it.
- Programmatic APIs such as `modal.info` use the application's root `ConfigProvider` configuration.

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

Contributions for additional languages are welcome. [Contribute](https://github.com/smallerqiu/kui-vue/tree/master/components/locale)
