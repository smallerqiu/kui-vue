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

## 外观与形状

通用控件使用 `round`、`circle`、`square` 三种形状。未传 `shape` 时等同于 `round`；旧的 `default` 值仍兼容。`theme` 的基础外观为 `default`、`fill`、`outline`、`plain`，其中 `plain` 等同于输入类组件原有的 `bordered=false`。

如果需要整套界面（包括弹层容器）切换为方形，可在根节点设置 `shape-mode="square"`。它会统一覆盖控件、卡片和弹层的圆角令牌；组件自身的 `shape` 仍用于局部覆盖。滑块手柄、状态点等具有圆形语义的元素不会被改成方形。

```html
<html shape-mode="square">
```

```css
:root {
  --kui-shape-round: 6px;
  --kui-shape-circle: 9999px;
  --kui-shape-square: 2px;
  --kui-theme-fill-bg: rgb(53 58 65 / 10%);
}
```

`fill` 使用半透明叠加面，在 Table、Card 等容器内部仍能保留层级；控件内部的原生 input 保持透明，避免内外层重复叠色。

## 明暗主题

在根节点或局部容器设置 `theme-mode`：

```html
<div theme-mode="dark">...</div>
```

Select、DatePicker、Poptip 等带触发元素的弹层即使 Teleport 到 `body`，也会自动跟随最近的 `theme-mode`。Modal 等没有触发元素的独立覆盖层，或需要继承局部自定义 Token 时，可通过 `ConfigProvider` 指定弹层容器：

```html
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
