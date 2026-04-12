# Icon

Kui's icons use the open-source project http://ionicons.com/ version 5.5.

Versions after 3.x no longer support `webfont` and use `svg` instead.

To use the icon component, you need to install the `kui-icons` icon package:

```bash
npm install --save kui-icons
```

[Stroke Width](./demo/stroke.vue)

- You can set the icon's stroke width via the `strokeWidth` attribute.

[](./demo/use.en_US.vue)

-

[](./demo/use.vue)

-

## API

| Property    | Description                                   | Type           | Default |
| ----------- | --------------------------------------------- | -------------- | ------- |
| type        | Icon type. Follows the icon naming convention | Array          | -       |
| size        | The size of the icon, unit is px              | String, Number | -       |
| color       | The color of the icon                         | String         | -       |
| spin        | Whether to have rotation animation            | Boolean        | false   |
| strokeWidth | The line thickness of the icon                | Number         | false   |
