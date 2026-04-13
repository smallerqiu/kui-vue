# Icon

Kui's icons use the open-source project http://ionicons.com/ version 5.5.

Versions after 3.x no longer support `webfont` and use `svg` instead.

To use the icon component, you need to install the `kui-icons` icon package:

```bash
npm install --save kui-icons
```

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
