# Anchor

It is necessary to display the anchor links available for navigation on the current page and enable quick jumps between anchors.

## Examples

<code src="./demo/nestedAnchors.vue">Nested Anchors (Complex Document Structure)</code>
<code src="./demo/withinContainer.vue">Specify container (positioning within a scrolling container)</code>

## Anchor API

| Property  | Description                                                                         | Type                | Default |
| --------- | ----------------------------------------------------------------------------------- | ------------------- | ------- |
| affix     | Fixed mode                                                                          | boolean             | true    |
| offsetTop | Triggered when the distance from the top of the window reaches the specified offset | number              | -       |
| bounds    | Boundary of the anchor area                                                         | number              | 5       |
| container | Specifies the scrolling container                                                   | String, HTMLElement | -       |
| onChange  | Listens for changes in anchor links and returns the currently focused Link          | Function            | -       |
| onClick   | Click event for Anchor                                                              | Function            | -       |

## AnchorLink API

| Property | Description  | Type   | Default |
| -------- | ------------ | ------ | ------- |
| href     | Anchor link  | String | -       |
| title    | Text content | String | -       |
