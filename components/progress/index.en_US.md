# Progress

Display the current progress of an operation.

## When to Use

When an operation takes a long time to complete, display the current progress and status to the user.

- When an operation interrupts the current interface or needs to run in the background, and may take more than 2 seconds.
- When displaying the completion percentage of an operation.

## Examples

<code src="./demo/circle.vue">Circular Progress</code>
<code src="./demo/color.vue">Color and Format</code>
<code src="./demo/dashboard.vue">Dashboard-style Progress Bar</code>
<code src="./demo/dynamic.vue">Dynamic Display</code>
<code src="./demo/size.vue">Size</code>

## API

| Property      | Description                                                                          | Type                      | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------------------------- | ------- |
| percent       | Progress percentage                                                                  | Number                    | 0       |
| color         | Progress bar color                                                                   | String                    | -       |
| strokeLinecap | Progress bar style                                                                   | [round \| square \| butt] | round   |
| width         | Circular progress bar canvas width, in px                                            | Number                    | -       |
| size          | When value is `small`, displays small size                                           | String                    | -       |
| format        | Custom progress bar text                                                             | Function \| slot          | -       |
| status        | Progress bar status, provides four types: `active`, `exception`, `success`, `normal` | String                    | normal  |
| type          | Progress bar type, provides three types: `line`, `circle`, `dashboard`               | String                    | -       |
| showInfo      | Whether to show progress text                                                        | Boolean                   | true    |
| gapDegree     | Dashboard progress bar gap angle, can be 0 ~ 295                                     | Number                    | 75      |
| strokeWidth   | Circular progress bar line width                                                     | Number                    | 6       |
| strokeHeight  | Progress bar line height                                                             | Number                    | -       |
