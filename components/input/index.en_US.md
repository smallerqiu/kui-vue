## Input API

| Property            | Description                                                         | Type           | Default |
| ------------------- | ------------------------------------------------------------------- | -------------- | ------- |
| value               | Bound value, can use `v-model` for two-way binding                  | String, Number | -       |
| size                | Button size, optional values `small`, `large`, default not selected | String         | -       |
| icon                | Input box icon                                                      | String         | -       |
| suffix              | Extension suffix                                                    | String, Slot   | -       |
| prefix              | Extension prefix                                                    | String, Slot   | -       |
| search              | Search event callback                                               | Function       | right   |
| theme               | When theme='light', presents a light theme                          | String         | right   |
| clearable           | Whether to show the clear button                                    | Boolean        | false   |
| visiblePassword     | Password initially displayed in plain text                          | Boolean        | false   |
| visiblePasswordIcon | Whether to show the toggle button or control password visibility    | Boolean        | true    |

## Input Group API

| Property | Description                                                                         | Type    | Default |
| -------- | ----------------------------------------------------------------------------------- | ------- | ------- |
| block    | Whether to inherit the parent width                                                 | Boolean | false   |
| compact  | Whether to use compact mode                                                         | Boolean | false   |
| size     | Spacing of child components, optional values `small`, `large`, default not selected | String  | -       |
