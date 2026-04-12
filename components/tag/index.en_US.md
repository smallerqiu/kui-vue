# Tag

Small labels for marking and categorization.

## When to Use

- Used to mark attributes and dimensions of things.
- For classification.

## Examples

[Colorful Tags](./demo/color.vue)
- Multiple preset tag colors for different scenarios. If the presets don't meet your needs, you can set a specific color value.

[Dynamic Add and Remove](./demo/dynamic.vue)
- Use `closeable` to show a close button.

[Icon](./demo/icon.vue)
- You can set the `icon` attribute or directly use the Icon component inside the Tag.

[Size and Shape](./demo/size.vue)
- Control size via `size`.


## Tag API

| Property  | Description                                                         | Type     | Default |
| --------- | ------------------------------------------------------------------- | -------- | ------- |
| closeable | Whether to show close button                                        | Boolean  | false   |
| color     | Tag color                                                           | String   | -       |
| icon      | Tag icon                                                            | String   | -       |
| close     | Callback event when tag is closed                                   | Function | -       |
| size      | Button size, optional values `small`, `large`, default not selected | String   | -       |
| theme     | The component renders the theme, defaulting to 'light'.             | String   | light   |
