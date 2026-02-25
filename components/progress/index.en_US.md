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
