# Anchor

It is necessary to display the anchor links available for navigation on the current page and enable quick jumps between anchors.

## Examples

[Nested Anchors (Complex Document Structure)](./demo/nestedAnchors.vue)
- Suitable for documents with multi-level headings.

[Specify container (positioning within a scrolling container)](./demo/withinContainer.vue)
- If your page does not scroll in full screen but within a specific div.


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
