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

[IconList](./demo/search.tsx)

[Basic Usage](./demo/basic.vue)

- You can set the icon's type, size, and color via the `type`, `size`, and `color` attributes, respectively. You can also use the `spin` attribute to achieve a rotating animation effect.

[Stroke Width](./demo/stroke.vue)

- You can set the icon's stroke width via the `strokeWidth` attribute.

## API

| Property    | Description                                   | Type           | Default |
| ----------- | --------------------------------------------- | -------------- | ------- |
| type        | Icon type. Follows the icon naming convention | Array          | -       |
| size        | The size of the icon, unit is px              | String, Number | -       |
| color       | The color of the icon                         | String         | -       |
| spin        | Whether to have rotation animation            | Boolean        | false   |
| strokeWidth | The line thickness of the icon                | Number         | false   |
