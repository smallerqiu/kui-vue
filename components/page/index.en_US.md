# Pagination

Separate long lists using pagination, loading only one page at a time.

## When to Use

- When loading/rendering all data would take a long time.
- When browsing data by switching page numbers.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- Basic pagination.

[Items / Jump](./demo/sizer-elevator.vue?show=vertical)

- Change the number of items displayed per page.

[Size](./demo/size.vue?show=vertical)

- Displays small, medium, and large sizes.

[Simple](./demo/simple.vue?show=vertical)

- Only shows previous, current/total pages, and next controls; with `showElevator`, the current page becomes editable.

[Responsive pagination](./demo/responsive.vue?show=vertical)

- Drag the bottom-right corner to resize the container. Pagination first reduces page numbers, then switches to Simple when space is limited. The page-size selector remains available and may wrap. Widening the container restores the full layout without changing the page or emitting change events. Set `responsive` to `false` to disable adaptation; `simple` always forces Simple mode.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| page | Current page number(v-model) | `number` | 1 |
| disabled | Disabled status | `boolean` | false |
| total | Total data count | `number` | 0 |
| pageSize | Number of items per page (v-model:pageSize) | `number` | 10 |
| showSizer | Whether to show page size selector | `boolean` | false |
| showTotal | Whether to show total count | `boolean` | true |
| showElevator | Whether to show page elevator | `boolean` | false |
| simple | Use compact pagination | `boolean` | false |
| responsive | Adapt pagination to the available container width | `boolean` | true |
| sizeData | Custom page size data | `number[]` | [10,15,20,30,40] |
| size | Size | `"small" \| "medium" \| "large"` | `medium` |
| theme | Surface theme | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | `fill` |
| onChange | Called when the page or page size changes | `(page: number, pageSize: number) => void` | - |
| shape | Pagination item shape | `"default" \| "circle" \| "square" \| "round"` | round |

## Theme

`theme` supports five looks — `fill`, `outline`, `plain`, `solid`, `dashed` — and is `fill` when you write nothing. `underlined` belongs to a control you type into, so a pagination bar falls back to `fill`.

The tier paints the page boxes rather than the whole bar: `fill` puts a pale plate under each number, `plain` leaves them bare, `outline` draws the library's border colour around the cells and `dashed` turns that frame into a dashed line — neither frame draws the `…` cell, and all five leave the prev/next arrows flat. `solid` fills the number boxes with the primary colour and inverts the digits and the `…` icon with them; the current page swaps plate and ink — primary digits on a white box — and hover lightens the tier's own colour instead of bringing in `fill`'s grey. The total count and the arrows sit on the bar's own background and stay as they are, while the page-size selector and the jump-to input follow the tier the bar resolved to.
