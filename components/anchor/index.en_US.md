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
