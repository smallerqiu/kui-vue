# Poptip

Click/mouse over an element to pop up a bubble-style card floating layer.

## When to Use

When a target element has further descriptions and related operations, they can be accommodated in a card and displayed based on user actions.

The difference from `Tooltip` is that users can operate on elements in the floating layer, so it can carry more complex content, such as links or buttons.

## Examples

<code src="./demo/closeinside.vue">Close from Inside the Floating Layer</code>
<code src="./demo/placement.vue">Position</code>
<code src="./demo/trigger.vue">Trigger Mode</code>

## API

| Property  | Description                                                                                                                                                                                           | Type           | Default |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------- |
| trigger   | Trigger method, optional values: `hover` (hover) `click` (click)                                                                                                                                      | String         | click   |
| title     | Displayed title                                                                                                                                                                                       | String         | -       |
| content   | Displayed main content                                                                                                                                                                                | slots          | -       |
| placement | Position where the tooltip appears, optional values: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom` | String         | top     |
| width     | Display width, defaults to content area size                                                                                                                                                          | String, Number | -       |
| show      | Whether to display                                                                                                                                                                                    | Boolean        | -       |
