# Image

Previewable images.

## When to Use

- Use when you need to display images.
- Display loading or error handling when loading large images.

## Examples

[Basic Usage](./demo/basic.vue)

- Simple display.

[Error Handling](./demo/errors.vue)

- Show an image placeholder on load failure.

[Photo Wall](./demo/group.vue)

- Click the left/right buttons to preview multiple images.

[Extension](./demo/extra.vue)

- Can extend custom tools and panels.

## Image API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| width | The width of the component | `string \| number` | - |
| height | The height of the component | `string \| number` | - |
| src | The default address of the image to display | `string` | - |
| alt | Alternative text when the image cannot be displayed | `string` | - |
| type | Preview content type | `"img" \| "media"` | `img` |
| origin | The large image displayed when clicking the image | `string` | - |
| placeholder | The placeholder displayed when the image fails to load | `string` | - |
| imgStyle | The style of the image | `CSSProperties` | - |
| showPanel | Whether to display the extension panel by default | `boolean` | false |
| onClose | Close trigger event | `() => void` | - |
| switch | Multi-image switch trigger event | `(index: number) => void` | - |
| tool | Custom toolbar buttons | slot | - |
| panel | Custom extension panel | slot | - |

## ImageGroup API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| data | Image data | `string[]` | - |

### Common appearance

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| theme | Appearance theme | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | plain |
| shape | Image shape | `"default" \| "circle" \| "square" \| "round"` | round |

## Theme

`theme` supports five looks — `fill`, `outline`, `plain`, `solid`, `dashed` — and is `plain` when you write nothing: no frame, no plate, the picture edge to edge. `outline` draws the library's border colour around the picture and `dashed` turns that frame into a dashed line; `fill` lays a pale plate under the picture and `solid` fills it with the primary colour, inverting the loading spinner, the failed-load placeholder and any text in the default slot. `underlined` belongs to a control you type into, so a picture falls back to `plain`.
