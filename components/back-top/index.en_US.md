# BackTop

Button to return to the top of the page.

## When to Use

- When the page content area is relatively long.
- When users need to frequently return to the top to view related content.

## Examples

<code src="./demo/custom.vue">Basic Usage</code>

## API

| Property | Description                                                                            | Type          | Default           |
| -------- | -------------------------------------------------------------------------------------- | ------------- | ----------------- |
| height   | The BackTop component is displayed only when the page scroll height reaches this value | String,Number | 100               |
| bottom   | The distance from the component to the bottom                                          | String,Number | 40                |
| right    | The distance from the component to the right                                           | String,Number | 50                |
| click    | Triggered when the button is clicked                                                   | Function      | -                 |
| target   | The container that needs to scroll to the top                                          | Function      | ()=>document.body |
