# 多语言

KUI 不依赖第三方 i18n 包，通过 `ConfigProvider` 为组件提供语言配置。KUI 组件默认使用简体中文。

通常应在应用根部配置语言。以英文为例：

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

## 示例

[多语言切换示例](./demo.vue?show=vertical)

- 示例集中展示日期、选择、分页、空状态和弹层等包含内置文案的组件。
- 修改 `ConfigProvider` 的 `locale` 属性后，后代组件会响应语言变化。
- DatePicker 使用 dayjs 格式化日期；切换语言时，还应加载并设置对应的 dayjs locale。
- 业务文案不会自动翻译，需要由应用自身的国际化方案处理。
- 命令式调用（如 `modal.info`）使用应用根部 `ConfigProvider` 的配置。

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

欢迎贡献代码，以支持更多语言。[参与贡献](https://github.com/smallerqiu/kui-vue/tree/master/components/locale)
