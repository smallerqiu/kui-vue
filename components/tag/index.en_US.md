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

- The preset color names are the same 18 `Badge` uses (`red`, `olive`, `teal`, `violet`, `brown` and `gray` among them), for different scenarios. If the presets don't meet your needs, you can set a specific color value.
- When `color` is set, the color wins: both preset and custom colors keep their own border and text color, and `theme` only decides the surface of a tag that has no color.

[Dynamic Add and Remove](./demo/dynamic.vue)

- Use `closeable` to show a close button.

[Appearance](./demo/appearance.vue)

- Five looks, `fill` when nothing is written. `solid` puts the chip on the primary and inverts its label and close button; a `color` written on the tag outranks the tier.

## Theme

`theme` supports `fill`, `outline`, `plain`, `solid` and `dashed`. Leaving it unset means `fill`; `underlined` belongs to controls you type into, so a tag renders as `fill`.

Multi-select controls (`Select`, `TreeSelect`, `InputTag`) pass their own `theme` down to the tags they render, so a chip follows its control.

## Closing

Clicking the close button triggers `close`. After the exit animation, the content is removed and `afterClose` fires.

For dynamic lists, remove the corresponding item from the array in `afterClose` to preserve the exit animation.

## Tag API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| closeable | Whether to show close button | `boolean` | false |
| compact | Whether to use the compact size for embedding in input controls | `boolean` | false |
| color | Tag color: a preset name (the same set `Badge` uses, e.g. `blue`) or any readable color value | `string` | - |
| icon | Tag icon | `IconType[]` | - |
| onClose | Triggered when the close button is clicked | `() => void` | - |
| onAfterClose | Triggered after the exit animation | `() => void` | - |
| size | Tag size, optional values `small`, `medium`, `large` | `"small" \| "medium" \| "large"` | small |
| theme | The component renders the theme | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | fill |
| shape | The shape in which the component is presented | `"default" \| "circle" \| "square" \| "round"` | circle |
