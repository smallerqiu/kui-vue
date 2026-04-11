# Rate

Rating component.

## When to Use

- Display evaluations.
- Quickly rate things.

## Examples

<code src="./demo/character.vue">Other Characters</code>
<code src="./demo/tips.vue">Text Display / Allow Clear</code>

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
