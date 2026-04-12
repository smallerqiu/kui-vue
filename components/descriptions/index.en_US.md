# Descriptions

Display multiple read-only fields in groups.

## When to Use

Commonly seen in detail page information display.

## Examples

[Bordered](./demo/bordered.vue)

- List with borders and background colors.

[Custom Size](./demo/size.vue)

- Customize the size to adapt to various containers.

[Vertical](./demo/vertical.vue)

- Vertical list.

[Vertical Bordered](./demo/vertical-bordered.vue)

- Vertical list with borders and background colors.

## API

| Property | Description                                                                     | Type                       | Default    |
| -------- | ------------------------------------------------------------------------------- | -------------------------- | ---------- |
| bordered | Whether to show the border                                                      | Boolean                    | false      |
| column   | The number of DescriptionItems in one row                                       | Number                     | 3          |
| extra    | The operation area of the description list, displayed in the upper right corner | String, slot               | -          |
| layout   | Description layout                                                              | horizontal \| vertical     | horizontal |
| size     | Set the size of the list. Can be set to middle, small                           | default \| middle \| small | default    |
| title    | The title of the description list, displayed at the very top                    | String, slot               | -          |

## Item props

| Property | Description                | Type           | Default |
| -------- | -------------------------- | -------------- | ------- |
| label    | Description of the content | String \| slot | -       |
