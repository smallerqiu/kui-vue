# 定制主题

KUI 使用 CSS Variables 作为公开主题接口，可以在运行时修改颜色、圆角、密度、字号和组件表面，无需重新编译组件库。

## 样式入口

默认入口包含主题变量、基础样式和全部组件样式：

```ts
import "kui-vue/style/index.css";
```

需要自行控制全局基础样式时，可以按需组合：

```ts
import "kui-vue/style/theme.css";
import "kui-vue/style/components.css";
// 可选：链接、placeholder 和 selection 等全局基础样式
import "kui-vue/style/base.css";
```

## 品牌主题

主色的 hover、active、outline 和透明层级会从 `--kui-color-primary` 自动派生：

```css
:root {
  --kui-color-primary: #6d5dfc;
  --kui-border-radius: 8px;
  --kui-border-radius-card: 14px;
}
```

## 密度与排版

```css
:root {
  --kui-control-height-sm: 26px;
  --kui-control-height: 36px;
  --kui-control-height-lg: 44px;
  --kui-font-size-sm: 12px;
  --kui-font-size: 14px;
  --kui-font-size-lg: 16px;
  --kui-spacing-4: 18px;
}
```

## 组件级定制

组件 Token 会回退到语义 Token，既可以统一换肤，也可以只修改某类组件：

```css
:root {
  --kui-control-bg: #fff;
  --kui-control-border: #d8dbe2;
  --kui-control-radius: 10px;
  --kui-card-bg: #fff;
  --kui-card-radius: 16px;
  --kui-card-padding: 20px;
  --kui-popup-bg: #fff;
  --kui-popup-shadow: 0 12px 36px rgb(0 0 0 / 12%);
}
```

## 明暗主题

在根节点或局部容器设置 `theme-mode`：

```html
<div theme-mode="dark">...</div>
```

局部主题中的下拉框、气泡和弹窗默认会 Teleport 到 `body`。通过 `ConfigProvider` 指定弹层容器，弹层就能继承局部主题变量：

```vue
<template>
  <div ref="themeRoot" theme-mode="dark">
    <ConfigProvider :getPopupContainer="() => themeRoot">
      <Select :options="options" />
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const themeRoot = ref<HTMLElement>();
</script>
```

## 主要 Token 分类

- 品牌及状态：`--kui-color-primary`、`success`、`warning`、`danger`
- 文字：`--kui-color-text`、`text-title`、`text-description`、`text-placeholder`
- 背景：`--kui-color-bg`、`bg-layout`、`bg-container`、`bg-component`、`bg-pop`
- 交互项：`--kui-color-item-hover`、`item-active`、`item-selected`、`item-disabled`
- 组件：`--kui-control-*`、`--kui-card-*`、`--kui-popup-*`
- 尺寸：`--kui-control-height-*`、`--kui-font-size-*`、`--kui-spacing-*`
- 动效：`--kui-motion-duration-*`、`--kui-motion-easing`
