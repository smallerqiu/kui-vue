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

| Property         | Description                                                                     | Type                             | Default       |
| ---------------- | ------------------------------------------------------------------------------- | -------------------------------- | ------------- |
| valueModel       | Specify the `value` of the selected item, can use `v-model` for two-way binding | string, number, Array            | -             |
| width            | Component width                                                                 | string, number                   | -             |
| placeholder      | Default text of selector                                                        | string                           | Please select |
| disabled         | Whether current item is disabled                                                | bool                             | false         |
| size             | Component size, provides two sizes: `small`, `large`, default is normal         | string                           | -             |
| emptyText        | Prompt displayed when no data                                                   | string                           | 'No data yet' |
| multiple         | Whether to display in multiple selection mode                                   | bool                             | false         |
| loading          | Asynchronous loading state                                                      | bool                             | false         |
| clearable        | Whether options can be cleared                                                  | bool                             | false         |
| bordered         | Whether to show border                                                          | bool                             | true          |
| showArrow        | Whether to show dropdown button                                                 | bool                             | true          |
| theme            | The theme of TreeSelect                                                         | string                           | fill          |
| icon             | Custom icon                                                                     | string                           | -             |
| shape            | When shape='circle', displays rounded corners                                   | string                           | -             |
| treeLoadData     | Method to asynchronously load data                                              | (node: TreeNode) => Promise<any> | -             |
| treeData         | Array of nestable node properties, data to generate `tree`                      | Array                            | [\]           |
| treeCheckable    | Whether to show checkbox                                                        | bool                             | false         |
| showLine         | Whether to show connecting lines                                                | bool                             | false         |
| showIcon         | Whether to show icons                                                           | bool                             | true          |
| treeExpandedKeys | Specify expanded nodes                                                          | Array                            | []            |

## TreeSelect Events

| Property     | Description                            | Callback Parameters                                       | -   |
| ------------ | -------------------------------------- | --------------------------------------------------------- | --- |
| onTreeSelect | Triggered when tree node is clicked    | (value: string, label: string, selected: boolean) => void | -   |
| onSearch     | Triggered during search                | (e: InputEvent) => void                                   | -   |
| onChange     | Triggered when the value changes       | (value: string\|string[]) => void                         | -   |
| onTreeExpand | Triggered when a tree node is expanded | (result: TreeExpandEvent) => void                         | -   |
