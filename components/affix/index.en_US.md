## API

| Property     | Description                                                                                                                         | Type           | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------- |
| offsetTop    | Triggered when the specified offset from the top of the window is reached                                                           | String, Number | 0       |
| offsetBottom | Triggered when the specified offset from the bottom of the window is reached                                                        | String, Number | -       |
| change       | Triggered when the fixed state changes, returns the current fixed state `false` , `true`                                            | Function       | -       |
| target       | Set the element whose scroll event the Affix needs to listen to. The value is a function that returns the corresponding DOM element | HTMLElement    | window  |
