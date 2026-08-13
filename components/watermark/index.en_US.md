# Watermark

Add a watermark to a specific area of the page.

## When to Use

- Use when you need to add a watermark to identify copyright ownership.
- Suitable for preventing information theft.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- The simplest usage.

[Image watermark](./demo/image.vue?show=vertical)

- Specify the image source via the `image` prop. To ensure high definition and prevent distortion, please set the `width` and `height`, and upload an image (e.g., a logo) at least twice the display dimensions.

[Multi-line text watermark](./demo/multiple-lines.vue?show=vertical)

- Set multi-line text content by passing a string or an array composed of `WatermarkText` objects via `content`. Styles can be adjusted independently for each line.

[Used in Modals and Drawers](./demo/in-modal-drawer.vue)

- Using watermarks within Modals and Drawers.

[Custom Configuration](./demo/custom.vue?show=vertical)

- Preview the watermark effect by configuring custom parameters.

## API

| Property   | Description                                                                                                                                                   | Type                                        | Default    |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------ | :--------- |
| content    | The text content of the watermark. Accepts a string or an array for multi-line support. Passing an array of objects allows independent styling for each line. | `string \| string[] \| WatermarkTextItem[]` | `""`       |
| image      | The source URL (Base64 or URL) of the image watermark. If provided, the image watermark takes priority over text.                                             | `string`                                    | `""`       |
| width      | Width of a single watermark cell, in `px`.                                                                                                                    | `number`                                    | `240`      |
| height     | Height of a single watermark cell, in `px`.                                                                                                                   | `number`                                    | `189`      |
| rotate     | Rotation angle of the watermark in degrees.                                                                                                                   | `number`                                    | `-22`      |
| zIndex     | The z-index of the watermark container. It is recommended to increase this value when used inside high-level components like Modals or Drawers.               | `number`                                    | `999`      |
| fullscreen | Whether to enable fullscreen mode. If `true`, the watermark will be mounted directly to the `body`.                                                           | `boolean`                                   | `false`    |
| antiTamper | Whether to enable high-level anti-tampering protection (monitors DOM node removal and attribute modifications via `MutationObserver`).                        | `boolean`                                   | `true`     |
| font       | Global fallback styles for the watermark text (including color, font size, weight, family, and style).                                                        | `WatermarkProps['font']`                    | -          |
| gap        | The horizontal and vertical spacing between watermark cells, formatted as `[x, y]`.                                                                           | `[number, number]`                          | `[40, 40]` |
| offset     | The starting offset origin for the watermark grid tiling, formatted as `[x, y]`. Useful for fine-tuning edge whitespace.                                      | `[number, number]`                          | `[20, 20]` |
| layout     | Layout mode of the watermark. Options: `'grid'` (traditional orthogonal grid) or `'stagger'` (advanced staggered grid with alternating row offsets).          | `'grid' \| 'stagger'`                       | `'grid'`   |

### WatermarkTextItem

When passing an array of objects to `content`, each element is a `WatermarkTextItem`. This allows you to override global configurations and define fine-grained, heterogeneous styles for each individual line:

| Property   | Description                                                                                                                                                                             | Type                                | Default                    |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------- | :------------------------- |
| text       | The text content for the current line.                                                                                                                                                  | `string`                            | Required                   |
| color      | Independent control over the text color for the current line. Supports various CSS color formats (e.g., hex, RGBA). Often used to highlight warnings or de-emphasize audit backgrounds. | `string`                            | Inherits `font.color`      |
| fontSize   | Independent control over the font size for the current line, in `px`. Ideal for creating visual hierarchy (e.g., large titles paired with smaller subtitles).                           | `number`                            | Inherits `font.fontSize`   |
| fontWeight | Independent control over the font weight for the current line (e.g., `bold` or numeric values like `500`).                                                                              | `string \| number`                  | Inherits `font.fontWeight` |
| fontStyle  | Independent control over the font style. Options include `'normal'`, `'italic'`, or `'oblique'`. Helps break the monotony of standard layouts.                                          | `'normal' \| 'italic' \| 'oblique'` | Inherits `font.fontStyle`  |
