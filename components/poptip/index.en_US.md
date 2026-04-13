# Poptip

Click/mouse over an element to pop up a bubble-style card floating layer.

## When to Use

When a target element has further descriptions and related operations, they can be accommodated in a card and displayed based on user actions.

The difference from `Tooltip` is that users can operate on elements in the floating layer, so it can carry more complex content, such as links or buttons.

## Examples

[Basic Usage](./demo/basic.vue)

- The simplest usage, where the floating layer's size is determined by the content area.

[Trigger Mode](./demo/trigger.vue)

- Control the trigger mode via `trigger`, with options for mouse hover (`hover`) or click (`click`).

[Close from Inside the Floating Layer](./demo/closeinside.vue)

- Use the `v-model` attribute to control the floating layer's visibility.

[Position](./demo/placement.vue)

- Control the direction via `placement`, with twelve available positions.

## API

| Property  | Description                                                                                                                                                                                           | Type           | Default |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------- |
| trigger   | Trigger method, optional values: `hover` (hover) `click` (click)                                                                                                                                      | String         | click   |
| title     | Displayed title                                                                                                                                                                                       | String         | -       |
| content   | Displayed main content                                                                                                                                                                                | slots          | -       |
| placement | Position where the tooltip appears, optional values: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom` | String         | top     |
| width     | Display width, defaults to content area size                                                                                                                                                          | String, Number | -       |
| show      | Whether to display                                                                                                                                                                                    | Boolean        | -       |
