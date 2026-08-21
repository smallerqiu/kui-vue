# Transfer

Move and select items between two lists.

## Examples

[Basic](./demo/basic.vue?show=vertical)

- Select source items and move them to the target list.

[Search and operations](./demo/search.vue?show=vertical)

- Search list content and customize operation labels.

[Theme](./demo/theme.vue?show=vertical)

- Supports `outline` and `fill`; the search input follows the Transfer theme.

[Disabled](./demo/disabled.vue?show=vertical)

- Disable individual items or the entire transfer.

[Custom content](./demo/custom.vue?show=vertical)

- Customize items, footers, and filtering with slots and a filter function.

[Events](./demo/events.vue?show=vertical)

- Listen for selection and movement changes.

[Pagination](./demo/pagination.vue?show=vertical)

- Compose simple pagination in the footer slot for larger data sets.

## API

| Property     | Description                     | Type                                       | Default              |
| ------------ | ------------------------------- | ------------------------------------------ | -------------------- |
| modelValue   | Target keys, supports `v-model` | TransferKey[]                              | []                   |
| dataSource   | Data source                     | TransferItem[]                             | []                   |
| titles       | List titles                     | [string, string]                           | ['Source', 'Target'] |
| operations   | Right and left operation labels | [string, string]                           | ['', '']             |
| searchable   | Enable search                   | boolean                                    | false                |
| disabled     | Disable the component           | boolean                                    | false                |
| theme        | Appearance theme                | 'outline' \| 'fill'                        | outline              |
| filterOption | Custom filter                   | (keyword, item) => boolean                 | -                    |
| render       | Custom item renderer            | (item) => VNodeChild                       | -                    |
| change       | Emitted after moving items      | (targetKeys, direction, movedKeys) => void | -                    |
| search       | Emitted on search               | (direction, value) => void                 | -                    |
| selectChange | Emitted when selection changes  | (sourceKeys, targetKeys) => void           | -                    |

### TransferItem

| Property    | Description       | Type             | Default |
| ----------- | ----------------- | ---------------- | ------- |
| key         | Unique key        | string \| number | -       |
| title       | Item title        | string           | -       |
| description | Item description  | string           | -       |
| disabled    | Disable this item | boolean          | false   |

### Slots

| Name   | Description        | Parameters             |
| ------ | ------------------ | ---------------------- |
| item   | Custom item        | { item: TransferItem } |
| footer | Custom list footer | { direction }          |
