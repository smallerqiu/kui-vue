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

| Property      | Description                                       | Type             | Default |
| ------------- | ------------------------------------------------- | ---------------- | ------- |
| summary       | Result summary                                    | string \| number | -       |
| bordered      | Show border                                       | boolean          | false   |
| theme         | Panel theme                                       | ThemeType        | outline |
| shape         | Panel shape                                       | ShapeType        | round   |
| size          | Panel size                                        | SizeType         | medium  |
| selectedCount | Current selection count used to show bulk actions | number           | 0       |

## Slots

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| filters   | Query controls                               |
| summary   | Custom result summary                        |
| actions   | Toolbar actions                              |
| selection | Bulk action toolbar, scoped with `{ count }` |
| default   | Table, list or other primary content         |
| footer    | Pagination or footer actions                 |
