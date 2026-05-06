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

| Property          | Description                                 | Type                    | Default |
| ----------------- | ------------------------------------------- | ----------------------- | ------- |
| modelValue        | Current value, controlled value(v-model)    | number                  | -       |
| allowClear        | Whether to allow clearing by clicking again | bool                    | false   |
| allowHalf         | Whether to allow half selection             | bool                    | false   |
| showScore         | Whether to show score                       | bool                    | false   |
| character         | Custom character                            | string                  | -       |
| count             | Total number of stars                       | number                  | -       |
| icon              | Custom display icon                         | Icon                    | -       |
| size              | Icon size                                   | number                  | -       |
| color             | Icon color                                  | string                  | -       |
| disabled          | Read-only, cannot interact                  | string                  | -       |
| tooltips          | Custom prompt information for each item     | string[]                | -       |
| onChange          | Callback when selecting                     | (value: number) => void | -       |
| symbolReverseFill | Symbol Inverted Fill Color                  | bool                    | false   |
| strokeWidth       | Symbol Border Unit                          | number                  | 1       |
