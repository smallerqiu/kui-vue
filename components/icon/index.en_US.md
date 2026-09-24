# Icon

Version 5.x reintroduces icon sets, supporting more icons.
To use the icon component, you need to install the `kui-icons` package:

```bash
npm install --save kui-icons
```

Use

```html
<template>
  <Icon :type="Heart" />
</template>
<script setup lang="ts">
  import { Heart } from "kui-icons";
</script>
```

[IconList](./demo/search.tsx?demo=false)

- Search and browse all icons provided by `kui-icons`.

[Basic Usage](./demo/basic.vue)

- You can set the icon's type, size, and color via the `type`, `size`, and `color` attributes, respectively. You can also use the `spin` attribute to achieve a rotating animation effect.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Icon type. Follows the icon naming convention | `IconType[]` | - |
| size | The size of the icon, unit is px | `string \| number` | - |
| color | The color of the icon | `string` | - |
| spin | Whether to have rotation animation | `boolean` | false |
| strokeWidth | The line thickness of the icon | `string \| number` | 2 |
| onClick | Click event | `(event: MouseEvent) => void` | - |
| reverseFill | Icon borders and inverted fills are only supported for closed icons. | `boolean` | false |
| role | Accessibility role | `string` | - |
| tabindex | Keyboard focus order | `number` | - |
| aria-label | Accessible label | `string` | - |
| onPointerdown | Called when a pointer is pressed | `((event: PointerEvent) => void)` | - |
| onKeydown | Called when a key is pressed | `((event: KeyboardEvent) => void)` | - |
| onPointerup | Called when a pointer is released | `((event: PointerEvent) => void)` | - |
