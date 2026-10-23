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

通用控件使用 `round`、`circle`、`square` 三种形状。未传 `shape` 时等同于 `round`；旧的 `default` 值仍兼容。`theme` 有 `fill`、`outline`、`plain`、`solid`、`dashed`、`underlined` 六档，不写 `theme` 时各组件落回自己的默认档，其中 `plain` 是无边框也没有底色，与只去掉边框的 `bordered=false` 是两件事，两者可以同时使用。

外观也可以整体下发：`ConfigProvider` 的 `size`、`theme`、`shape` 作用于所有兼容组件，`Form` 的同名属性只作用于表单内的控件。三个键各自解析，组件只呈现自身支持的档位，传入画不出的档位不会报错。

如果需要整套界面（包括弹层容器）切换为方形，可在根节点设置 `shape-mode="square"`。它会统一覆盖控件、卡片和弹层的圆角令牌；组件自身的 `shape` 仍用于局部覆盖。滑块手柄、状态点等具有圆形语义的元素不会被改成方形。

```html
<html shape-mode="square"></html>
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
      <select :options="options" />
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const themeRoot = ref<HTMLElement>();
</script>
```

## 主要 Token 分类

Token 按“基础语义 → 组件语义 → 组件样式”逐层使用。通常先修改颜色、文字、背景等基础语义；只有某一类组件需要特殊外观时，才覆盖 `control`、`card` 或 `popup` Token。

| 分类       | 主要 Token                                                                                                    | 实际影响                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 品牌及状态 | `--kui-color-primary`、`--kui-color-success`、`--kui-color-warning`、`--kui-color-danger`                     | Button、链接、选中项、校验状态、Progress 等强调色               |
| 文字层级   | `--kui-color-text-title`、`--kui-color-text`、`--kui-color-text-description`、`--kui-color-text-placeholder`  | 标题、正文、辅助说明和输入占位文字                              |
| 页面与容器 | `--kui-color-bg-layout`、`--kui-color-bg-container`、`--kui-color-bg-component`、`--kui-color-bg-pop`         | 页面底色、内容区域、组件表面和下拉面板                          |
| 交互状态   | `--kui-color-item-hover`、`--kui-color-item-active`、`--kui-color-item-selected`、`--kui-color-item-disabled` | Menu、Select、Tree、Table 等列表项状态                          |
| 控件       | `--kui-control-bg`、`--kui-control-border`、`--kui-control-radius`                                            | Input、Select、Button 等表单控件                                |
| 面板       | `--kui-card-*`、`--kui-popup-*`                                                                               | Card、Modal 等内容面板，以及 DatePicker、ColorPicker 等选择面板 |
| 尺寸与动效 | `--kui-control-height-*`、`--kui-font-size-*`、`--kui-spacing-*`、`--kui-motion-*`                            | 整体密度、字号、间距和动画速度                                  |

### 示例：定制一套品牌主题

下面是一份可以直接使用的主题。自定义样式应放在 KUI 样式之后，确保变量能够覆盖默认值。

```ts
import "kui-vue/style/index.css";
import "./brand-theme.css";
```

```css
/* brand-theme.css：浅色主题 */
:root,
[theme-mode="light"] {
  /* 修改主色即可自动派生 hover、active 和透明强调层 */
  --kui-color-primary: #6750e8;
  --kui-color-success: #14804a;
  --kui-color-warning: #c76b00;
  --kui-color-danger: #d92d20;

  /* 从页面底色到浮层逐级抬高，避免所有区域混成一层 */
  --kui-color-bg-layout: #f6f7fb;
  --kui-color-bg-container: #ffffff;
  --kui-color-bg: #ffffff;
  --kui-color-bg-component: #f2f3f8;
  --kui-color-bg-pop: #ffffff;

  --kui-color-text-title: #191b23;
  --kui-color-text: #30323b;
  --kui-color-text-description: #737783;
  --kui-color-text-placeholder: #969aa5;

  --kui-color-item-hover: #f0eefc;
  --kui-color-item-active: #e8e4fb;
  --kui-color-item-selected: color-mix(in srgb, var(--kui-color-primary) 16%, transparent);
  --kui-color-item-disabled: #f4f4f6;
}

/* 深色主题需要单独提供表面和文字层级 */
[theme-mode="dark"] {
  --kui-color-primary: #9385ff;
  --kui-color-bg-layout: #111217;
  --kui-color-bg-container: #181a21;
  --kui-color-bg: #181a21;
  --kui-color-bg-component: #22242d;
  --kui-color-bg-pop: #282a34;

  --kui-color-text-title: #f5f6fa;
  --kui-color-text: #e1e3e9;
  --kui-color-text-description: #a4a8b3;
  --kui-color-text-placeholder: #777c88;

  --kui-color-item-hover: #292c36;
  --kui-color-item-active: #30333f;
  --kui-color-item-selected: color-mix(in srgb, var(--kui-color-primary) 22%, transparent);
  --kui-color-item-disabled: #1d1f27;
}
```

背景 Token 不建议全部设置成同一个颜色。`layout → container → component → pop` 保持轻微层级差，Table 内嵌 Input、Card 内放置 Button，以及浮层覆盖页面时才容易辨认。

### 示例：只调整控件密度

这组修改会同时影响 Input、Select、Button、DatePicker 等使用通用控件尺寸的组件：

```css
:root {
  --kui-control-height-sm: 28px;
  --kui-control-height: 36px;
  --kui-control-height-lg: 44px;

  --kui-font-size-sm: 12px;
  --kui-font-size: 14px;
  --kui-font-size-lg: 16px;

  --kui-spacing-2: 8px;
  --kui-spacing-3: 12px;
  --kui-spacing-4: 16px;
}
```

### 示例：只定制某个区域

CSS Variables 会向下继承，因此无需创建另一份组件样式。下面只有管理后台区域使用紧凑、方形的控件和面板：

```html
<section class="admin-panel">
  <input placeholder="Search" />
  <Card title="Orders">...</Card>
</section>
```

```css
.admin-panel {
  --kui-control-height: 30px;
  --kui-control-radius: 2px;
  --kui-card-radius: 2px;
  --kui-popup-radius: 2px;
  --kui-card-padding: 12px;
  --kui-motion-duration: 0.15s;
}
```

如果只希望 Card 特殊，而不改变 Input 和弹层，应覆盖 `--kui-card-*`；如果希望整个区域统一变化，则优先覆盖基础语义 Token 或使用 `shape-mode`、`theme-mode`。

派生 Token（例如 `--kui-control-bg`、`--kui-control-radius`、`--kui-color-primary-hover`）作为可选覆盖项使用；默认值在组件属性使用处计算，不在根节点预先固定。这样局部基础颜色、圆角变化和嵌套明暗模式也能生效，显式设置的组件 Token 则继续向下继承。

着色相关的派生 Token 也在同一批可选覆盖项里：`--kui-color-primary-hover`、`--kui-color-primary-active`、焦点光晕 `--kui-color-outline`、透明层级 `--kui-color-<色名>-6`/`-9`，色板名字的 hover/active 是 `--kui-color-<色名>-hover`/`-active`。库内不给它们定死默认值，要单独改某一档时显式声明即可；`plain` 档的按压底色读 `--kui-theme-plain-hover`、`--kui-theme-plain-active`，语义类型和色板名字会各自在按钮上重声明这两个。

把色板名字当文字用的那一档是这一族里唯一由库发默认值的：`--kui-color-<色名>-text`，三个语义类型也有 `--kui-color-primary-text`、`--kui-color-danger-text`、`--kui-color-warning-text`。读它的是没有自己底面那几处彩色文字——按钮 `fill` / `outline` / `dashed` / `plain` 四档上的名字与语义类型、带 `color` 的预设标签。明暗两套各烘了一份实底值，把基色推向本主题的黑或白，压在现场任何一块浅底与洗色上都还留够对比，所以组件裸读它、不留兜底。整套换掉彩色文字就重声明这一族；它同样停在构建时，覆盖 `--kui-color-primary` 不会带着它走。

这些着色档位由构建期从基色算好后写进样式表，浏览器不再参与混色，所以只改基色不会带着它们走：覆盖 `--kui-color-primary` 只会挪动静置面，hover 与洗色仍停在构建时那一级。要让某一片走，就显式声明它对应的那一档。`solid` 档面上较淡的那几笔（焦点环 `--kui-theme-solid-outline`、前后缀图标 `--kui-theme-solid-muted`、占位符 `--kui-theme-solid-placeholder`、面上的小标签 `--kui-theme-solid-chip`）读的是同一条反白墨色，明暗两套都给了默认值，整体换一套墨色时改 `--kui-color-text-on-solid` 之外还要把这四个一起重声明。

在自定义 CSS 中直接使用这些可选 Token 时，也应提供基础变量作为回退，例如 `background: var(--kui-control-bg, var(--kui-color-bg))`。读取默认主题颜色时优先使用基础 Token。
