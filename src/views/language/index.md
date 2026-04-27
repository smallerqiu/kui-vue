# 多语言

`3.6+` 不再依赖 i18n 包，使用 `vue` 的 `provide` 和 `inject` 实现多语言。

KUI 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 App.vue 中:

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

## 示例

[多语言切换示例](./demo.vue?show=vertical)

- 通过修改 ConfigProvider 的 locale 属性，切换语言。

目前 KUI 内置了以下语言：

- 简体中文(zh-CN)
- 繁体中文(zh-TW)
- 德语(de)
- 希腊语(el)
- 英语(en)
- 法语(fr)
- 意大利语(it)
- 日语(ja)
- 韩语(ko)
- 俄语(ru)
- 泰语(th)
- 乌克兰语(uk)
- 越南语(vi)

欢迎贡献代码，以支持更多语言。[Join](https://github.com/smallerqiu/kui-vue/tree/master/components/locale/lang)
