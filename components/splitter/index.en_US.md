# Splitter Panel

## When to Use

- Can divide areas horizontally or vertically.
- When you need to freely drag and adjust the size of each area.
- When you need to specify the maximum and minimum width or height of an area.

[Basic Usage](./demo/basic.vue?show=vertical)

- Initialize panel size, panel size limit.

[Vertical direction](./demo/vertical.vue?show=vertical)

- Use vertical layout.

# API

## Splitter

| Property      | Description                      | Type                      | Default    |
| ------------- | -------------------------------- | ------------------------- | ---------- |
| direction     | Layout direction                 | [horizontal, vertical]    | horizontal |
| onResize      | Callback when panel size changes | (sizes: number[]) => void | -          |
| onResizeStart | Callback before dragging starts  | (sizes: number[]) => void | -          |
| onResizeEnd   | Callback when dragging ends      | (sizes: number[]) => void | -          |

## SplitterPanel

| Attribute | Description                                                       | Type            | Default |
| --------- | ----------------------------------------------------------------- | --------------- | ------- |
| size      | Width                                                             | [number,string] | -       |
| min       | Minimum threshold, supports numeric px or text 'percentage%' type | [number,string] | -       |
| max       | Maximum threshold, supports numeric px or text 'percentage%' type | [number,string] | -       |
