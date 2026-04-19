# BackTop

Button to return to the top of the page.

## When to Use

- When the page content area is relatively long.
- When users need to frequently return to the top to view related content.

## Examples

[Basic Usage](./demo/basic.vue)

- The default position is 50px from the right and bottom of the page. It appears when scrolling 400px from the top.

[Basic Usage](./demo/custom.vue)

- You can customize the back-to-top button style, for example setting `bottom` to `100px`.

## API

| Property | Description                                                                            | Type          | Default           |
| -------- | -------------------------------------------------------------------------------------- | ------------- | ----------------- |
| height   | The BackTop component is displayed only when the page scroll height reaches this value | String,Number | 100               |
| bottom   | The distance from the component to the bottom                                          | String,Number | 40                |
| right    | The distance from the component to the right                                           | String,Number | 50                |
| onClick  | Triggered when the button is clicked                                                   | Function      | -                 |
| target   | The container that needs to scroll to the top                                          | Function      | ()=>document.body |
