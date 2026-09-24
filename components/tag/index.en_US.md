# Tag

Small labels for marking and categorization.

## When to Use

- Used to mark attributes and dimensions of things.
- For classification.

## Examples

[Basic Usage](./demo/basic.vue)

- Use `closeable` to show a close button. Clicking closes the tag and triggers `close`.

[Size and Shape](./demo/size.vue)

- Control size via `size`.

[Icon](./demo/icon.vue)

- You can set the `icon` attribute or directly use the Icon component inside the Tag.

[Colorful Tags](./demo/color.vue)

- Multiple preset tag colors for different scenarios. If the presets don't meet your needs, you can set a specific color value.

[Dynamic Add and Remove](./demo/dynamic.vue)

- Use `closeable` to show a close button.

## Closing

Clicking the close button triggers `close`. After the exit animation, the content is removed and `afterClose` fires.

For dynamic lists, remove the corresponding item from the array in `afterClose` to preserve the exit animation.

## Tag API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| closeable | Whether to show close button | `boolean` | false |
| compact | Whether to use the compact size for embedding in input controls | `boolean` | false |
| color | Tag color | `string` | - |
| icon | Tag icon | `IconType[]` | - |
| onClose | Triggered when the close button is clicked | `() => void` | - |
| onAfterClose | Triggered after the exit animation | `() => void` | - |
| size | Button size, optional values `small`, `large`, default not selected | `"small" \| "medium" \| "large"` | - |
| theme | The component renders the theme | `"default" \| "fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | fill |
| shape | The shape in which the component is presented | `"default" \| "circle" \| "square" \| "round"` | circle |
