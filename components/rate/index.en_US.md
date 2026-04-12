# Rate

Rating component.

## When to Use

- Display evaluations.
- Quickly rate things.

## Examples

[Other Characters](./demo/character.vue)

- Stars can be replaced with other characters, such as letters, numbers, font icons, or even Chinese characters.

[Text Display / Allow Clear](./demo/tips.vue)

- Add text display to the rating component.

## Rate API

| Property            | Description                                 | Type                    | Default |
| ------------------- | ------------------------------------------- | ----------------------- | ------- |
| modelValue(v-model) | Current value, controlled value             | Number                  | -       |
| allowClear          | Whether to allow clearing by clicking again | Boolean                 | false   |
| allowHalf           | Whether to allow half selection             | Boolean                 | -       |
| showScore           | Whether to show score                       | Boolean                 | -       |
| character           | Custom character                            | String                  | -       |
| count               | Total number of stars                       | Number                  | -       |
| disabled            | Read-only, cannot interact                  | String                  | -       |
| tooltips            | Custom prompt information for each item     | String[]                | -       |
| change              | Callback when selecting                     | Function(value: Number) | -       |
