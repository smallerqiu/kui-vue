## Tree API

| Property      | Description                                                                                                       | Type       | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| data          | Array of nestable node properties, data to generate `tree`                                                        | Array      | []      |
| checkable     | Whether to show checkbox                                                                                          | Boolean    | false   |
| draggable     | Whether it can be dragged                                                                                         | Boolean    | false   |
| showLine      | Whether to show connecting lines                                                                                  | Boolean    | false   |
| showIcon      | Whether to show icons                                                                                             | Boolean    | true    |
| extra         | Extension element                                                                                                 | slot(node) | -       |
| showExtra     | Whether to show extension elements by default                                                                     | Boolean    | false   |
| checkStrictly | In checkable state, node selection is completely controlled (parent-child node selection state no longer related) | Boolean    | false   |
| checkedKeys   | Tree nodes with checked checkboxes                                                                                | Array      | []      |
| expandedKeys  | Specify expanded nodes                                                                                            | Array      | []      |
| selectedKeys  | Selected nodes                                                                                                    | Array      | []      |
| multiple      | Whether to support multiple selection                                                                             | Boolean    | false   |
| loading       | Asynchronous loading state                                                                                        | Boolean    | false   |

## TreeNode API

| Property | Description                                                                           | Type    | Default |
| -------- | ------------------------------------------------------------------------------------- | ------- | ------- |
| title    | Node title                                                                            | String  | -       |
| icon     | Custom icon                                                                           | String  | -       |
| disabled | Whether node is disabled                                                              | Boolean | false   |
| children | Child nodes                                                                           | Array   | -       |
| isLeaf   | Set as leaf node (effective when loadData is set). false will force it as parent node | Boolean | false   |

## Tree Events

| Property  | Description                                           | Callback Parameters                  |
| --------- | ----------------------------------------------------- | ------------------------------------ |
| loadData  | Method to asynchronously load data                    | Promise Function(node)               |
| select    | Triggered when tree node is clicked                   | Function(node)                       |
| check     | Triggered when checkbox is clicked                    | Function(node, checked, checkedKeys) |
| expand    | Triggered when child nodes are expanded and collapsed | Function({key, expanded, node})      |
| dragstart | Called when dragging starts                           | Function(node)                       |
| dragend   | Called when dragend is triggered                      | Function(node)                       |
| dragenter | Called when dragenter is triggered                    | Function(node)                       |
| dragleave | Called when dragleave is triggered                    | Function(node)                       |
| drop      | Called when drop is triggered                         | Function({dragNode, dropNode})       |
