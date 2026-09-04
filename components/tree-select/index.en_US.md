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

[Virtual Scrolling](./demo/virtual.vue)

- Enable virtual scrolling for large data sets to render only visible tree nodes in the dropdown.

## TreeSelect API

| Property          | Description                                                                     | Type                              | Default       |
| ----------------- | ------------------------------------------------------------------------------- | --------------------------------- | ------------- |
| modelValue        | Specify the `value` of the selected item, can use `v-model` for two-way binding | string \| number \| any[]         | -             |
| width             | Component width                                                                 | string \| number                  | -             |
| placeholder       | Default text of selector                                                        | string                            | Please select |
| disabled          | Whether current item is disabled                                                | boolean                           | false         |
| readonly          | Read-only; prevents opening, clearing and changing                              | boolean                           | false         |
| size              | Component size, provides two sizes: `small`, `large`, default is normal         | string                            | -             |
| placement         | Dropdown placement                                                              | string                            | bottom-left   |
| emptyText         | Prompt displayed when no data                                                   | string                            | 'No data yet' |
| multiple          | Whether to display in multiple selection mode                                   | boolean                           | false         |
| block             | Whether to fill the parent width                                                | boolean                           | false         |
| maxTagCount       | Maximum visible tags in multiple mode; excess tags are shown in a Tooltip       | number                            | -             |
| filterable        | Whether search filtering is enabled                                             | boolean                           | false         |
| loading           | Asynchronous loading state                                                      | boolean                           | false         |
| clearable         | Whether options can be cleared                                                  | boolean                           | false         |
| bordered          | Whether to show border                                                          | boolean                           | true          |
| showArrow         | Whether to show dropdown button                                                 | boolean                           | true          |
| arrowIcon         | Custom dropdown arrow icon                                                      | IconType[]                        | -             |
| theme             | The theme of TreeSelect                                                         | string                            | fill          |
| icon              | Custom icon                                                                     | string                            | -             |
| shape             | When shape='circle', displays rounded corners                                   | string                            | -             |
| treeLoadData      | Method to asynchronously load data                                              | (node: TreeNode) => Promise<any\> | -             |
| treeData          | Array of nestable node properties, data to generate `tree`                      | TreeNode[]                        | []            |
| treeCheckable     | Whether to show checkbox                                                        | boolean                           | false         |
| treeCheckStrictly | Whether parent and child check states are independent                           | boolean                           | false         |
| showLine          | Whether to show connecting lines                                                | boolean                           | false         |
| showIcon          | Whether to show icons                                                           | boolean                           | true          |
| treeShowIcon      | Whether to show tree node icons                                                 | boolean                           | true          |
| treeShowLine      | Whether to show tree connection lines                                           | boolean                           | false         |
| treeExpandedKeys  | Specify expanded nodes                                                          | string[]                          | []            |
| virtual           | Whether to enable virtual scrolling for tree nodes                              | boolean                           | false         |
| virtualHeight     | Virtual dropdown viewport height                                                | number \| string                  | 260           |
| itemHeight        | Fixed virtual node height                                                       | number                            | 28            |
| overscan          | Number of nodes rendered outside the viewport                                   | number                            | 5             |

## TreeSelect Events

| Property     | Description                                      | Callback Parameters                                       |
| ------------ | ------------------------------------------------ | --------------------------------------------------------- |
| onTreeSelect | Triggered when tree node is clicked              | (value: string, label: string, selected: boolean) => void |
| onSearch     | Triggered during search                          | (e: InputEvent) => void                                   |
| onChange     | Triggered when the value changes                 | (value: string \| string[]) => void                       |
| onTreeExpand | Triggered when a tree node is expanded           | (result: TreeExpandEvent) => void                         |
| onOpenChange | Triggered when the dropdown expands or collapses | (opened: boolean) => void                                 |
| onClear      | Triggered when cleared                           | () => void                                                |
