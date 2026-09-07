# Splitter Panel

## When to Use

- Can divide areas horizontally or vertically.
- When you need to freely drag and adjust the size of each area.
- When you need to specify the maximum and minimum width or height of an area.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- Initialize panel size, panel size limit.

[Vertical direction](./demo/vertical.vue?show=vertical)

- Use vertical layout.

# API

## Splitter

| Property    | Description                      | Type                       | Default    |
| ----------- | -------------------------------- | -------------------------- | ---------- |
| direction   | Layout direction                 | 'horizontal' \| 'vertical' | horizontal |
| resize      | Emitted while panel sizes change | (sizes: number[]) => void  | -          |
| resizeStart | Emitted when resizing starts     | (sizes: number[]) => void  | -          |
| resizeEnd   | Emitted when resizing ends       | (sizes: number[]) => void  | -          |

## SplitterPanel

| Attribute | Description                                                     | Type             | Default |
| --------- | --------------------------------------------------------------- | ---------------- | ------- |
| size      | Initial size; numbers are px, strings support px or percentages | number \| string | -       |
| min       | Minimum size; numbers are px, strings support px or percentages | number \| string | 0       |
| max       | Maximum size; numbers are px, strings support px or percentages | number \| string | -       |
