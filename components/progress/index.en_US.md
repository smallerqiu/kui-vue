# Progress

Display the current progress of an operation.

## When to Use

When an operation takes a long time to complete, display the current progress and status to the user.

- When an operation interrupts the current interface or needs to run in the background, and may take more than 2 seconds.
- When displaying the completion percentage of an operation.

## Examples

[Progress Bar](./demo/basic.vue)

- A standard progress bar.

[Circular Progress](./demo/circle.vue)

- A circular progress bar.

[Dashboard-style Progress Bar](./demo/dashboard.vue)

- Dashboard-style progress bar. Adjust the gap size via `gapDegree`. Use `strokeLinecap="square|round"` to adjust the shape of the progress bar's edges.

[Dynamic Display](./demo/dynamic.vue)

- A moving progress bar is a good progress bar.

[Color and Format](./demo/color.vue)

- Customize color and format.

[Size](./demo/size.vue)

- Suitable for placement in narrower areas.

## API

| Property      | Description                                                                          | Type                              | Default |
| ------------- | ------------------------------------------------------------------------------------ | --------------------------------- | ------- |
| percent       | Progress percentage                                                                  | number                            | 0       |
| color         | Progress bar color                                                                   | string                            | -       |
| strokeLinecap | Progress bar style                                                                   | [round \| square \| butt]         | round   |
| width         | Circular progress bar canvas width, in px                                            | number                            | -       |
| size          | When value is `small`, displays small size                                           | string                            | -       |
| format        | Custom progress bar text                                                             | (percent: number) => any \| VNode | -       |
| status        | Progress bar status, provides four types: `active`, `exception`, `success`, `normal` | string                            | normal  |
| type          | Progress bar type, provides three types: `line`, `circle`, `dashboard`               | string                            | -       |
| showInfo      | Whether to show progress text                                                        | bool                              | true    |
| gapDegree     | Dashboard progress bar gap angle, can be 0 ~ 295                                     | number                            | 75      |
| strokeWidth   | Circular progress bar line width                                                     | number                            | 6       |
| strokeHeight  | Progress bar line height                                                             | number                            | -       |
