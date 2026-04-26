# Affix

Pin page elements within the visible range.

## When to Use

When the content area is long and requires scrolling, the corresponding operations or navigation for this part of the content need to remain visible within the scrolling range. Commonly used for side menus and button combinations.
Use this feature cautiously when the visible area of the page is small to avoid blocking page content.

## Examples

[Basic Usage](./demo/basic.vue)

- The simplest usage.

[Fixed State Change Callback](./demo/callbacks.vue)

- You can get whether it is fixed.

[Scroll Container](./demo/container.vue)

- Use `target` to set the element whose scroll event `Affix` listens to. Defaults to `window`.

## API

| Property     | Description                                                                                                                         | Type           | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------- |
| offsetTop    | Triggered when the specified offset from the top of the window is reached                                                           | String, Number | 0       |
| offsetBottom | Triggered when the specified offset from the bottom of the window is reached                                                        | String, Number | -       |
| onChange     | Triggered when the fixed state changes, returns the current fixed state `false` , `true`                                            | Function       | -       |
| target       | Set the element whose scroll event the Affix needs to listen to. The value is a function that returns the corresponding DOM element | HTMLElement    | window  |
