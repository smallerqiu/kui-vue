# Custom Theme

KUI uses CSS Variables as the public theme interface, allowing you to modify colors, border radius, density, font size, and component surfaces at runtime without recompiling the component library.

## Style Entry

The default entry includes theme variables, base styles, and all component styles:

```ts
import "kui-vue/style/index.css";
```

When you need to control global base styles yourself, you can combine them as needed:

```ts
import "kui-vue/style/theme.css";
import "kui-vue/style/components.css";
// Optional: global base styles such as links, placeholder, and selection
import "kui-vue/style/base.css";
```

## Brand Theme

The hover, active, outline, and transparent levels of the primary color are automatically derived from `--kui-color-primary`:

```css
:root {
  --kui-color-primary: #6d5dfc;
  --kui-border-radius: 8px;
  --kui-border-radius-card: 14px;
}
```

## Density and Typography

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

## Component-level Customization

Component tokens fall back to semantic tokens, allowing both unified skin changes and modifications to specific component types:

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

## Appearance and Shape

Common controls use three shapes: `round`, `circle`, and `square`. When `shape` is not passed, it is equivalent to `round`; the old `default` value remains compatible. The basic appearances for `theme` are `default`, `fill`, `outline`, and `plain`, where `plain` is equivalent to `bordered=false` for input-like components.

If you need to switch the entire interface (including popup containers) to square, you can set `shape-mode="square"` on the root node. This uniformly overrides the border-radius tokens for controls, cards, and popups; the component's own `shape` is still used for local overrides. Elements with circular semantics, such as slider handles and status dots, will not be changed to square.

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

`fill` uses a semi-transparent overlay, which preserves layering inside containers like Table and Card; the native input inside controls remains transparent to avoid double overlaying of colors.

## Light and Dark Theme

Set `theme-mode` on the root node or a local container:

```html
<div theme-mode="dark">...</div>
```

Popups with trigger elements, such as Select, DatePicker, and Poptip, will automatically follow the nearest `theme-mode` even if they are teleported to `body`. For independent overlays without trigger elements, such as Modal, or when you need to inherit local custom tokens, you can specify the popup container via `ConfigProvider`:

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

## Main Token Categories

- Brand and status: `--kui-color-primary`, `success`, `warning`, `danger`
- Text: `--kui-color-text`, `text-title`, `text-description`, `text-placeholder`
- Background: `--kui-color-bg`, `bg-layout`, `bg-container`, `bg-component`, `bg-pop`
- Interactive items: `--kui-color-item-hover`, `item-active`, `item-selected`, `item-disabled`
- Components: `--kui-control-*`, `--kui-card-*`, `--kui-popup-*`
- Dimensions: `--kui-control-height-*`, `--kui-font-size-*`, `--kui-spacing-*`
- Motion: `--kui-motion-duration-*`, `--kui-motion-easing`