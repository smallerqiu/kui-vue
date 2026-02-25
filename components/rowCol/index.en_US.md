## Row API

| Property | Description                                                                                                            | Type          | Default |
| -------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- | ------- |
| align    | Vertical alignment in flex layout: `top` `middle` `bottom`                                                             | String        | `top`   |
| justify  | Horizontal arrangement in flex layout: `start` `end` `center` `space-around` `space-between`                           | String        | `start` |
| gutter   | Grid spacing, in px, evenly distributed left and right. Use array format to set [horizontal spacing, vertical spacing] | Number, Array | -       |
| type     | Layout mode, optional flex, effective in modern browsers                                                               | String        |         |

## Col API

| Property | Description                                                     | Type           | Default |
| -------- | --------------------------------------------------------------- | -------------- | ------- |
| span     | Number of grid columns occupied, can be integer from 0~24       | Number         | -       |
| offset   | Number of grid columns to offset left, can be integer from 1~24 | Number         | -       |
| flex     | Flex layout fill                                                | Number, String | -       |
