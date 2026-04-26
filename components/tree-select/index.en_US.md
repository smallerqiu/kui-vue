# TreeSelect

Tree selection control.

## When to Use

Similar to the Select selection control, when the selectable data structure is a tree structure, TreeSelect can be used, such as company hierarchy, subject system, classification directory, etc.

## Examples

[Basic Usage](./demo/basic.vue)

- The simplest usage.

[Multiple Selection](./demo/multiple.vue)

- A tree select component that supports multiple selections.

[Checkable](./demo/checkable.vue)

- Use checkboxes to enable multi-selection.

[Disabled](./demo/disabled.vue)

- Disabled state.

[Asynchronous Loading](./demo/sync.vue)

- Click to expand a node and load data dynamically.

[Size](./demo/size.vue)

- The select box sizes are: `small`, `default`, `large`.

[Weird Definition](./demo/theme.vue)

- Some strange and unusual things.

## TreeSelect API

| Property         | Description                                                                     | Type                   | Default       |
| ---------------- | ------------------------------------------------------------------------------- | ---------------------- | ------------- |
| valueModel       | Specify the `value` of the selected item, can use `v-model` for two-way binding | String, Number, Array  | -             |
| width            | Component width                                                                 | String, Number         | -             |
| placeholder      | Default text of selector                                                        | String                 | Please select |
| disabled         | Whether current item is disabled                                                | Boolean                | false         |
| size             | Component size, provides two sizes: `small`, `large`, default is normal         | String                 | -             |
| emptyText        | Prompt displayed when no data                                                   | String                 | 'No data yet' |
| multiple         | Whether to display in multiple selection mode                                   | Boolean                | false         |
| loading          | Asynchronous loading state                                                      | Boolean                | false         |
| clearable        | Whether options can be cleared                                                  | Boolean                | false         |
| bordered         | Whether to show border                                                          | Boolean                | true          |
| showArrow        | Whether to show dropdown button                                                 | Boolean                | true          |
| onChange           | Triggered when option state changes                                             | Function(value)        | -             |
| theme            | When theme='light', displays light theme                                        | String                 | -             |
| icon             | Custom icon                                                                     | String                 | -             |
| shape            | When shape='circle', displays rounded corners                                   | String                 | -             |
| treeLoadData     | Method to asynchronously load data                                              | Promise Function(node) | -             |
| treeData         | Array of nestable node properties, data to generate `tree`                      | Array                  | [\]           |
| treeCheckable    | Whether to show checkbox                                                        | Boolean                | false         |
| showLine         | Whether to show connecting lines                                                | Boolean                | false         |
| showIcon         | Whether to show icons                                                           | Boolean                | true          |
| treeExpandedKeys | Specify expanded nodes                                                          | Array                  | []            |

## TreeSelect Events

| Property     | Description                            | Callback Parameters                                   | -   |
| ------------ | -------------------------------------- | ----------------------------------------------------- | --- |
| onTreeSelect | Triggered when tree node is clicked    | Function(value, label, selected)                      | -   |
| onSearch     | Triggered during search                | Function(event)                                       | -   |
| onChange     | Triggered when the value changes       | Function(value)                                       | -   |
| onTreeExpand | Triggered when a tree node is expanded | Function({key:string,expanded:boolean,node:TreeNode}) | -   |
