# Row / Col

Uses a 24-grid system, dividing the area into 24 equal parts, making it easy to handle most layout problems.
Two concepts: row `row` and column `col`. Specific usage is as follows:

- Use `row` to create a row horizontally
- Insert a group of `col` into the `row`
- Type your own content in each `col`
- Specify the span range by setting the `span` parameter of `col`, ranging from 1 to 24
- The sum of `col` in each `row` should be 24

> Note: In non-template/render mode, use k-col.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- `col` must be placed inside `row`.

[Column Gutter](./demo/gutter.vue?show=vertical)

- Use the `gutter` attribute to set the spacing between columns. For vertical spacing, it can be written as an array [horizontal spacing, vertical spacing].

[Grid Offset](./demo/offset.vue?show=vertical)

- By setting the `offset` attribute, columns can be offset left or right, with the offset grid count being the value of `offset`.

[Responsive Grid](./demo/responsive.vue?show=vertical)

- Six responsive sizes are available: `xs`, `sm`, `md`, `lg`, `xl`, and `xxl`. Pass a span number directly, or an object containing `span`, `offset`, `order`, `push`, and `pull`.

[Flex Alignment](./demo/align.vue?show=vertical)

- Vertical alignment of Flex child elements.

[Flex Layout](./demo/flex.vue?show=vertical)

- Row uses Flex layout by default. Set `justify` to control the horizontal alignment of its children.

[Flex Fill](./demo/fill.vue?show=vertical)

- Col provides a flex property to support filling.

## Row API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| align | Vertical alignment in flex layout: `top` `middle` `bottom` | `"top" \| "bottom" \| "middle"` | `top` |
| justify | Horizontal arrangement in flex layout: `start` `end` `center` `space-around` `space-between` | `"center" \| "start" \| "end" \| "space-between" \| "space-around"` | `start` |
| gutter | Grid spacing in px. Use `[horizontal, vertical]` to set both directions | `number \| [number, number]` | - |

## Col API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| span | Occupied columns from 0~24; `0` hides the column | `number` | - |
| offset | Left offset from 0~24 | `number` | - |
| order | Column order from 0~24 | `number` | - |
| push | Move the column right by 0~24 columns | `number` | - |
| pull | Move the column left by 0~24 columns | `number` | - |
| flex | Flex fill, such as `1`, `auto`, `100px`, or `1 1 200px` | `string \| number` | - |
| xs | `<576px`; accepts a span number or a responsive object | `ColResponsiveSize` | - |
| sm | `≥576px` | `ColResponsiveSize` | - |
| md | `≥768px` | `ColResponsiveSize` | - |
| lg | `≥992px` | `ColResponsiveSize` | - |
| xl | `≥1200px` | `ColResponsiveSize` | - |
| xxl | `≥1600px` | `ColResponsiveSize` | - |

```ts
interface ColSize {
  span?: number;
  offset?: number;
  order?: number;
  push?: number;
  pull?: number;
}
```
