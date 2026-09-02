# Descriptions

Display multiple read-only fields in groups.

## When to Use

Commonly seen in detail page information display.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- Simple display.

[Bordered](./demo/bordered.vue?show=vertical)

- List with borders and background colors.

[Custom Size](./demo/size.vue?show=vertical)

- Customize the size to adapt to various containers.

[Responsive Columns](./demo/responsive.vue?show=vertical)

- Adjust the number of items per row according to the component container width.

[Vertical](./demo/vertical.vue?show=vertical)

- Vertical list.

[Vertical Bordered](./demo/vertical-bordered.vue?show=vertical)

- Vertical list with borders and background colors.

## API

| Property | Description                                                                     | Type                                              | Default    |
| -------- | ------------------------------------------------------------------------------- | ------------------------------------------------- | ---------- |
| bordered | Whether to show the border                                                      | boolean                                           | false      |
| column   | Items per row; supports responsive configuration                                | number \| Partial\<Record\<Breakpoint, number\>\> | 3          |
| extra    | The operation area of the description list, displayed in the upper right corner | string \| Slot                                    | -          |
| layout   | Description layout                                                              | `'horizontal'` \| `'vertical'`                    | horizontal |
| size     | List size                                                                       | `'large'` \| `'medium'` \| `'small'`              | large      |
| title    | The title of the description list, displayed at the very top                    | string \| Slot                                    | -          |

## Item props

| Property | Description                 | Type   | Default |
| -------- | --------------------------- | ------ | ------- |
| label    | Description of the content  | string | -       |
| span     | number of columns displayed | number | 1       |

### Common appearance

| Property | Description            | Type      | Default |
| -------- | ---------------------- | --------- | ------- |
| shape    | Description list shape | ShapeType | round   |
