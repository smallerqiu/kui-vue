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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Target keys, supports `v-model` | `TransferKey[]` | - |
| value | Initial value, read only on mount. Use modelValue for subsequent updates; modelValue takes precedence when both are provided. | `TransferKey[]` | [] |
| dataSource | Data source | `TransferItem[]` | [] |
| titles | List titles | `[string, string]` | ['Source', 'Target'] |
| operations | Right and left operation labels | `[string, string]` | ['', ''] |
| searchable | Enable search | `boolean` | false |
| disabled | Disable the component | `boolean` | false |
| readonly | Read-only; searchable but items cannot be selected or moved | `boolean` | false |
| theme | Appearance theme | `"fill" \| "outline"` | outline |
| filterOption | Custom filter | `((keyword: string, item: TransferItem) => boolean)` | - |
| render | Custom item renderer | `((item: TransferItem) => VNodeChild)` | - |
| item | Custom item, scoped with `{ item: TransferItem }` | VNodeChild | - |
| change | Emitted after moving items | `(targetKeys: TransferKey[], direction: "left" \| "right", movedKeys: TransferKey[]) => void` | - |
| search | Emitted on search | `(direction: "left" \| "right", value: string) => void` | - |
| selectChange | Emitted when selection changes | `(sourceKeys: TransferKey[], targetKeys: TransferKey[]) => void` | - |
| footer | Custom list footer, scoped with `{ direction }` | VNodeChild | - |

### TransferItem

| Property    | Description       | Type             | Default |
| ----------- | ----------------- | ---------------- | ------- |
| key         | Unique key        | string \| number | -       |
| title       | Item title        | string           | -       |
| description | Item description  | string           | -       |
| disabled    | Disable this item | boolean          | false   |
