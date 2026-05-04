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

## API

| Property    | Description                                                          | Type              | Default |
| ----------- | -------------------------------------------------------------------- | ----------------- | ------- |
| type        | Icon type. Follows the icon naming convention                        | IconPath[]        | -       |
| size        | The size of the icon, unit is px                                     | string, number    | -       |
| color       | The color of the icon                                                | string            | -       |
| spin        | Whether to have rotation animation                                   | bool              | false   |
| strokeWidth | The line thickness of the icon                                       | number            | 2       |
| onClick     | Click event                                                          | (e:Event) => void | -       |
| reverseFill | Icon borders and inverted fills are only supported for closed icons. | bool              | false   |
