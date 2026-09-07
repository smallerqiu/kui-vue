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

[Affix to Bottom](./demo/bottom.vue)

- Use `offsetBottom` to pin an element to the bottom of the viewport.

## API

| Property     | Description                                                                                       | Type                                | Default |
| ------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------- | ------- |
| offsetTop    | Affix after reaching the specified offset from the target top                                     | number                              | 0       |
| offsetBottom | Affix after reaching the specified offset from the target bottom; takes priority over `offsetTop` | number                              | -       |
| target       | Scroll target observed by Affix                                                                   | () => Window \| HTMLElement \| null | window  |
| change       | Emitted when the affixed state changes                                                            | (affixed: boolean) => void          | -       |
