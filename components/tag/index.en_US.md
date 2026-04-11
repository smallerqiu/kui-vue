# Tag

Small labels for marking and categorization.

## When to Use

- Used to mark attributes and dimensions of things.
- For classification.

## Examples

<code src="./demo/color.vue">Colorful Tags</code>
<code src="./demo/dynamic.vue">Dynamic Add and Remove</code>
<code src="./demo/icon.vue">Icon</code>
<code src="./demo/size.vue">Size and Shape</code>

## Tag API

| Property  | Description                                                         | Type     | Default |
| --------- | ------------------------------------------------------------------- | -------- | ------- |
| closeable | Whether to show close button                                        | Boolean  | false   |
| color     | Tag color                                                           | String   | -       |
| icon      | Tag icon                                                            | String   | -       |
| close     | Callback event when tag is closed                                   | Function | -       |
| size      | Button size, optional values `small`, `large`, default not selected | String   | -       |
| theme     | The component renders the theme, defaulting to 'light'.             | String   | light   |
