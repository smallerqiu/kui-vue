# InputTag

Convert continuous input into an addable and removable tag collection.

## Examples

[Basic](./demo/basic.vue)

- Press Enter to add and Backspace to remove tags.

[Controlled tags](./demo/controlled.vue)

- Manage the collection through v-model.

[Maximum count](./demo/limit.vue)

- Limit the number of tags with max.

[Separators](./demo/separators.vue)

- Commit tags with comma or semicolon.

[Appearance and disabled](./demo/appearance.vue)

- Shows size, theme, shape, and disabled states.

## InputTag API

| Property        | Description      | Type                           | Default |
| --------------- | ---------------- | ------------------------------ | ------- |
| modelValue      | Tags (v-model)   | string[]                       | -       |
| defaultValue    | Initial tags     | string[]                       | []      |
| placeholder     | Placeholder      | string                         | -       |
| size            | Size             | small\|medium\|large           | medium  |
| theme           | Theme            | fill\|outline\|plain           | fill    |
| shape           | Shape            | circle\|square\|round\|default | default |
| disabled        | Disabled         | boolean                        | false   |
| allowDuplicates | Allow duplicates | boolean                        | false   |
| max             | Maximum count    | number                         | -       |
| separators      | Commit keys      | string[]                       | [',']   |
| onChange        | Tags change      | function                       | -       |
| onAdd           | Tag added        | function                       | -       |
| onRemove        | Tag removed      | function                       | -       |
