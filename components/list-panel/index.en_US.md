# ListPanel

Provides a consistent layout for filters, result summaries, list content and pagination. It can contain a Table, Kanban or card list.

## Demos

[Query list](./demo/basic.vue?show=vertical)

- Organize filters and result counts with `filters` and `summary`.

[Toolbar actions](./demo/actions.vue?show=vertical)

- Place reset, create and other list-level controls in `actions`.

[Pagination and appearance](./demo/footer.vue?show=vertical)

- Put pagination in `footer` and adjust appearance with `size`, `shape` and `theme`.

[Bulk actions](./demo/selection.vue?show=vertical)

- Replace the regular toolbar with `selection` while Table rows are selected.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| summary | Result summary, customizable via the named slot | `VNodeChild` | - |
| bordered | Show border | `boolean` | true |
| theme | Appearance theme | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | outline |
| shape | Panel shape | `"square" \| "round"` | round |
| size | Panel size | `"small" \| "medium" \| "large"` | medium |
| selectedCount | Current selection count used to show bulk actions | `number` | 0 |
| filters | Query controls | VNodeChild | - |
| actions | Toolbar actions | VNodeChild | - |
| selection | Bulk action toolbar, scoped with `{ count }` | VNodeChild | - |
| footer | Pagination or footer actions | VNodeChild | - |

## Theme

`theme` supports five looks — `outline`, `fill`, `plain`, `solid`, `dashed` — and is `outline` when you write nothing. `underlined` belongs to a control you type into, so a list panel falls back to `outline`.

The panel starts no plate of its own: the tier is drawn on the card underneath it, so a tier moves the whole panel's surface and frame, and `bordered=false` only takes the frame away without changing tier. Under `solid` the panel sits on the primary colour and the two parts it colours itself invert with it — the result summary takes the plate's light ink, and the bulk-action strip swaps its grey plate for a pale wash over the primary. Everything else inside the panel is your own content and follows the panel's text colour.
