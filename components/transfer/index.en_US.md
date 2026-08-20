# Transfer

Move and select items between two lists.

## Examples

[Basic](./demo/basic.vue?show=vertical)

- Select source items and move them to the target list.

[Search and operations](./demo/search.vue?show=vertical)

- Search list content and customize operation labels.

## API

| Property     | Description                     | Type                                       | Default              |
| ------------ | ------------------------------- | ------------------------------------------ | -------------------- |
| modelValue   | Target keys, supports `v-model` | TransferKey[]                              | []                   |
| dataSource   | Data source                     | TransferItem[]                             | []                   |
| titles       | List titles                     | [string, string]                           | ['Source', 'Target'] |
| operations   | Right and left operation labels | [string, string]                           | ['', '']             |
| searchable   | Enable search                   | boolean                                    | false                |
| disabled     | Disable the component           | boolean                                    | false                |
| filterOption | Custom filter                   | (keyword, item) => boolean                 | -                    |
| render       | Custom item renderer            | (item) => VNodeChild                       | -                    |
| change       | Emitted after moving items      | (targetKeys, direction, movedKeys) => void | -                    |
| search       | Emitted on search               | (direction, value) => void                 | -                    |
| selectChange | Emitted when selection changes  | (sourceKeys, targetKeys) => void           | -                    |
