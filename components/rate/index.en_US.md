# Rate

Rating component.

## When to Use

- Display evaluations.
- Quickly rate things.

## Examples

[Basic Usage](./demo/basic.vue)

- The simplest usage.

[Text Display / Allow Clear](./demo/tips.vue)

- Add text display to the rating component.

[Other Characters](./demo/character.vue)

- Stars can be replaced with other characters, such as letters, numbers, font icons, or even Chinese characters.

## Rate API

| Property          | Description                                   | Type                    | Default |
| ----------------- | --------------------------------------------- | ----------------------- | ------- |
| modelValue        | Current controlled value, used with `v-model` | number                  | -       |
| value             | Initial value in uncontrolled mode            | number                  | 0       |
| allowClear        | Whether to allow clearing by clicking again   | boolean                 | true    |
| allowHalf         | Whether to allow half selection               | boolean                 | false   |
| showScore         | Whether to show score                         | boolean                 | false   |
| character         | Custom character                              | string                  | -       |
| count             | Total number of stars                         | number                  | 5       |
| icon              | Custom display icon                           | Icon                    | -       |
| size              | Icon size                                     | number                  | -       |
| color             | Icon color                                    | string                  | -       |
| disabled          | Read-only, cannot interact                    | boolean                 | false   |
| tooltips          | Custom prompt information for each item       | string[]                | -       |
| onChange          | Callback when selecting                       | (value: number) => void | -       |
| symbolReverseFill | Symbol Inverted Fill Color                    | boolean                 | false   |
| strokeWidth       | Symbol Border Unit                            | number                  | 1       |
