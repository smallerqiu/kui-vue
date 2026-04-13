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

[Basic Usage](./demo/basic.vue)

- `col` must be placed inside `row`.

[Column Gutter](./demo/gutter.vue)

- Use the `gutter` attribute to set the spacing between columns. For vertical spacing, it can be written as an array [horizontal spacing, vertical spacing].

[Grid Offset](./demo/offset.vue)

- By setting the `offset` attribute, columns can be offset left or right, with the offset grid count being the value of `offset`.

[Flex Alignment](./demo/align.vue)

- Vertical alignment of Flex child elements.

[Flex Layout](./demo/flex.vue)

- Flex layout basics. Use `row-flex` to define a `flex` layout, where its child elements, based on different values like `start`, `center`, `end`, `space-between`, `space-around`, define their layout within the parent node.

[Flex Fill](./demo/fill.vue)

- Col provides a flex property to support filling.

## Row API

| Property | Description                                                                                                            | Type          | Default |
| -------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- | ------- |
| align    | Vertical alignment in flex layout: `top` `middle` `bottom`                                                             | String        | `top`   |
| justify  | Horizontal arrangement in flex layout: `start` `end` `center` `space-around` `space-between`                           | String        | `start` |
| gutter   | Grid spacing, in px, evenly distributed left and right. Use array format to set [horizontal spacing, vertical spacing] | Number, Array | -       |
| type     | Layout mode, optional flex, effective in modern browsers                                                               | String        |         |

## Col API

| Property | Description                                                     | Type           | Default |
| -------- | --------------------------------------------------------------- | -------------- | ------- |
| span     | Number of grid columns occupied, can be integer from 0~24       | Number         | -       |
| offset   | Number of grid columns to offset left, can be integer from 1~24 | Number         | -       |
| flex     | Flex layout fill                                                | Number, String | -       |
