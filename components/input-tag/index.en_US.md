# InputTag

Convert continuous input into an addable and removable tag collection.

## Examples

[Basic](./demo/basic.vue)

- Press Enter to add and Backspace to remove tags.

[Controlled tags](./demo/controlled.vue)

- Manage the collection through v-model.

[Maximum count](./demo/limit.vue)

- Use `max` to limit the total number of tags and `maxTagCount` to limit visible tags.

[Separators](./demo/separators.vue)

- Commit tags with comma or semicolon.

[Size](./demo/size.vue)

- Different sizes.

[Appearance and disabled](./demo/appearance.vue)

- Shows theme, shape, and disabled states.

## InputTag API

| Property        | Description                                        | Type                           | Default |
| --------------- | -------------------------------------------------- | ------------------------------ | ------- |
| modelValue      | Tags (v-model)                                     | string[]                       | -       |
| value           | Initial tags                                       | string[]                       | []      |
| placeholder     | Placeholder                                        | string                         | -       |
| size            | Size                                               | small\|medium\|large           | medium  |
| theme           | Theme                                              | fill\|outline\|plain           | fill    |
| shape           | Shape                                              | circle\|square\|round\|default | default |
| disabled        | Disabled                                           | boolean                        | false   |
| clearable       | Whether to show the clear button                   | boolean                        | false   |
| block           | Fill the parent width                              | boolean                        | false   |
| allowDuplicates | Allow duplicates                                   | boolean                        | false   |
| max             | Maximum count                                      | number                         | -       |
| maxTagCount     | Maximum visible tags; the remainder is shown as +N | number                         | -       |
| separators      | Commit keys                                        | string[]                       | [',']   |
| onChange        | Tags change                                        | function                       | -       |
| onAdd           | Tag added                                          | function                       | -       |
| onRemove        | Tag removed                                        | function                       | -       |
| onClear         | Tags cleared                                       | function                       | -       |
