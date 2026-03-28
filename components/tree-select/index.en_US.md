## TreeSelect API

| Property    | Description                                                                     | Type                             | Default       |
| ----------- | ------------------------------------------------------------------------------- | -------------------------------- | ------------- |
| value       | Specify the `value` of the selected item, can use `v-model` for two-way binding | String, Number, Array            | -             |
| width       | Component width                                                                 | String, Number                   | -             |
| placeholder | Default text of selector                                                        | String                           | Please select |
| disabled    | Whether current item is disabled                                                | Boolean                          | false         |
| size        | Component size, provides two sizes: `small`, `large`, default is normal         | String                           | -             |
| emptyText   | Prompt displayed when no data                                                   | String                           | 'No data yet' |
| multiple    | Whether to display in multiple selection mode                                   | Boolean                          | false         |
| loading     | Asynchronous loading state                                                      | Boolean                          | false         |
| clearable   | Whether options can be cleared                                                  | Boolean                          | false         |
| bordered    | Whether to show border                                                          | Boolean                          | true          |
| showArrow   | Whether to show dropdown button                                                 | Boolean                          | true          |
| change      | Triggered when option state changes                                             | Function(value)                  | -             |
| theme       | When theme='light', displays light theme                                        | String                           | -             |
| icon        | Custom icon                                                                     | String                           | -             |
| shape       | When shape='circle', displays rounded corners                                   | String                           | -             |
| select      | Triggered when tree node is clicked                                             | Function(value, label, selected) | -             |

## Tree API

| Property         | Description                                                | Type    | Default |
| ---------------- | ---------------------------------------------------------- | ------- | ------- |
| treeData         | Array of nestable node properties, data to generate `tree` | Array   | [\]     |
| treeCheckable    | Whether to show checkbox                                   | Boolean | false   |
| showLine         | Whether to show connecting lines                           | Boolean | false   |
| showIcon         | Whether to show icons                                      | Boolean | true    |
| treeExpandedKeys | Specify expanded nodes                                     | Array   | []      |

## Tree Events

| Property     | Description                        | Callback Parameters |
| ------------ | ---------------------------------- | ------------------- |
| treeLoadData | Method to asynchronously load data | Function(node)      |
