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

| Property   | Description                                 | Type                    | Default |
| ---------- | ------------------------------------------- | ----------------------- | ------- |
| modelValue | Current value, controlled value(v-model)    | Number                  | -       |
| allowClear | Whether to allow clearing by clicking again | Boolean                 | false   |
| allowHalf  | Whether to allow half selection             | Boolean                 | -       |
| showScore  | Whether to show score                       | Boolean                 | -       |
| character  | Custom character                            | String                  | -       |
| count      | Total number of stars                       | Number                  | -       |
| icon       | Custom display icon                         | Icon                    | -       |
| size       | Icon size                                   | Number                  | -       |
| color      | Icon color                                  | String                  | -       |
| disabled   | Read-only, cannot interact                  | String                  | -       |
| tooltips   | Custom prompt information for each item     | String[]                | -       |
| onChange   | Callback when selecting                     | Function(value: Number) | -       |
