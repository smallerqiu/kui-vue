# Select

Dropdown selector.

## When to Use

- Pop up a dropdown menu for user selection operations, used to replace native selectors, or when a more elegant multi-selector is needed.
- When there are few options (less than 5), it is recommended to lay out the options directly. Using Radio is a better choice.

## Examples

[Disabled and Non-clearable](./demo/disabled.vue)
- Use `v-model` for two-way data binding.

[Filtering and Searching](./demo/filterable.vue)
- Set the `filterable` value to present filtering mode. > `filterable` and `onSearch` cannot be used simultaneously; search results will be filtered.

[Multiple Selection](./demo/multiple.vue)
- Set the `multiple` value to present multi-select mode.

[Size](./demo/size.vue)
- Control component size via `width` and `size`.

[Weird Definition](./demo/theme.vue)
- Some strange things.


## Select API

| Property    | Description                                                                       | Type                              | Default       |
| ----------- | --------------------------------------------------------------------------------- | --------------------------------- | ------------- |
| value       | Specifies the `value` of the selected item, can use `v-model` for two-way binding | String, Number                    | -             |
| width       | Component width                                                                   | String, Number                    | -             |
| placeholder | Default text of selector                                                          | String                            | Please select |
| disabled    | Whether current item is disabled                                                  | Boolean                           | false         |
| size        | Component size, provides two sizes: `small`, `large`, default is normal           | String                            | -             |
| emptyText   | Prompt displayed when no data                                                     | String                            | 'No data yet' |
| maxTagCount | Maximum number of tags to display, excess shown with ellipsis                     | Number                            | -             |
| multiple    | Whether to display in multiple selection mode                                     | Boolean                           | false         |
| loading     | Whether to show asynchronous loading                                              | Boolean                           | false         |
| clearable   | Whether options can be cleared                                                    | Boolean                           | false         |
| bordered    | Whether to show border                                                            | Boolean                           | true          |
| extendWidth | Whether dropdown width matches input width                                        | Boolean                           | true          |
| showArrow   | Whether to show dropdown button                                                   | Boolean                           | true          |
| change      | Triggered when option state changes, returns selected value                       | Function(value)                   | -             |
| select      | Triggered when an item is selected                                                | Function({value, label, checked}) | -             |
| openChange  | Triggered when dropdown expands or collapses                                      | Function                          | -             |
| options     | options data, if set, no need to manually construct Option nodes                  | Array <{value, label, disabled}>  | []            |
| theme       | When theme='light', displays light theme                                          | String                            | -             |
| icon        | Custom icon                                                                       | String                            | -             |
| shape       | When shape='circle', displays rounded corners                                     | String                            | -             |

## Option API

| Property | Description                                                                                                                    | Type           | Default |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------- | ------- |
| key      | Same meaning as value. If Vue requires this setting, this value should be the same as value, then value setting can be omitted | String, Number | -       |
| value    | Option value, used for filtering by default, required                                                                          | String, Number | -       |
| label    | Option display content                                                                                                         | String, Number | -       |
| disabled | Whether current item is disabled                                                                                               | Boolean        | false   |
