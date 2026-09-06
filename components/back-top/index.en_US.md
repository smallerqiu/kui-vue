# BackTop

Button to return to the top of the page.

## When to Use

- When the page content area is relatively long.
- When users need to frequently return to the top to view related content.

## Examples

[Basic Usage](./demo/basic.vue)

- The default position is 50px from the right and bottom of the page. It appears after scrolling 100px.

[Custom button](./demo/custom.vue)

- You can customize the back-to-top button style, for example setting `bottom` to `100px`.

[Custom scroll container](./demo/target.vue)

- Use `target` to specify the scroll container to observe and return to the top.

## API

| Property        | Description                                                                       | Type                        | Default             |
| --------------- | --------------------------------------------------------------------------------- | --------------------------- | ------------------- |
| height          | The BackTop component is displayed only when the scroll height reaches this value | number                      | 100                 |
| bottom          | Distance from the bottom                                                          | string \| number            | 50                  |
| right           | Distance from the right                                                           | string \| number            | 50                  |
| behavior        | Scroll behavior                                                                   | 'smooth' \| 'auto'          | smooth              |
| onClick         | Triggered when the button is clicked                                              | (event: MouseEvent) => void | -                   |
| onVisibleChange | Triggered when visibility changes                                                 | (visible: boolean) => void  | -                   |
| target          | Scroll container                                                                  | () => HTMLElement \| null   | () => document.body |
