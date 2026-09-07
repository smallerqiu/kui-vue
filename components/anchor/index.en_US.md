# Anchor

It is necessary to display the anchor links available for navigation on the current page and enable quick jumps between anchors.

## Examples

[Basic Usage (Sidebar Navigation)](./demo/basic.vue?show=vertical)

- The most common scenario: displaying a long article on the right with fixed anchor navigation on the left or right side.

[Nested Anchors (Complex Document Structure)](./demo/nested-anchors.vue?show=vertical)

- Suitable for documents with multi-level headings.

[Specify container (positioning within a scrolling container)](./demo/within-container.vue?show=vertical)

- If your page does not scroll in full screen but within a specific div.

## Anchor API

| Property  | Description                                                  | Type                            | Default |
| --------- | ------------------------------------------------------------ | ------------------------------- | ------- |
| affix     | Whether to use sticky positioning                            | boolean                         | true    |
| offsetTop | Offset from the container top for positioning and activation | number                          | 0       |
| bounds    | Anchor activation boundary                                   | number                          | 5       |
| container | Scroll container                                             | string \| HTMLElement \| Window | window  |
| change    | Emitted when the active anchor changes                       | (link: string) => void          | -       |
| click     | Emitted when an anchor is clicked                            | (link: string) => void          | -       |

## AnchorLink API

| Property | Description                                   | Type                 | Default |
| -------- | --------------------------------------------- | -------------------- | ------- |
| href     | Anchor link                                   | string               | -       |
| title    | Text content, customizable via the named slot | string \| VNodeChild | -       |
