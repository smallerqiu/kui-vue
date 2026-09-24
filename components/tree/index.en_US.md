# Tree

## When to Use

Folders, organizational structures, biological classifications, countries and regions, etc. Most structures in the world are tree structures. Using `tree control` can fully display the hierarchical relationships and have interactive functions such as expand/collapse and selection.

## Examples

[Basic Usage](./demo/basic.vue)

- The simplest usage, showing selectable items with default expansion.

[Checkable](./demo/checkable.vue)

- Set the `checkable` attribute to allow nodes to be checked.

[Extended Node](./demo/custom-render.vue)

- Extended node for a tree item.

[Disabled Node](./demo/disabled.vue)

- Set the `disabled` attribute to disable a node.

[Asynchronous Loading](./demo/sync.vue)

- Click to expand a node and load data dynamically. `isLeaf=true` indicates the current node is a leaf node and has no children.

[Custom Icon](./demo/icon.vue)

- You can customize icons for different nodes.

[Group Control](./demo/directory.vue?show=vertical)

- Displays directories, connecting lines, drag-and-drop, checkboxes, icons, and extensions.

[Virtual Scrolling](./demo/virtual.vue)

- Set `virtual` for large data sets to render only visible nodes. Virtual nodes must have a fixed height.

[Field Mapping and Instance Methods](./demo/advanced.vue?show=vertical)

- Adapt backend fields with `fieldNames`, customize nodes through the `title` slot, and control the tree with instance methods.

Tree supports focus management and Arrow, Home, End, Enter, and Space keyboard operations.

## Tree API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| data | Array of nestable node properties, data to generate `tree` | `TreeNodeData[]` | [] |
| checkable | Whether to show checkbox | `boolean` | false |
| draggable | Whether it can be dragged | `boolean` | false |
| showLine | Whether to show connecting lines | `boolean` | false |
| showIcon | Whether to show icons | `boolean` | true |
| extra | Extension element | slot(node) | - |
| showExtra | Whether to show extension elements by default | `boolean` | false |
| checkStrictly | In checkable state, node selection is completely controlled (parent-child node selection state no longer related) | `boolean` | false |
| checkedKeys | Tree nodes with checked checkboxes | `string[]` | [] |
| expandedKeys | Specify expanded nodes | `string[]` | [] |
| selectedKeys | Selected nodes | `string[]` | [] |
| multiple | Whether to support multiple selection | `boolean` | false |
| loading | Asynchronous loading state | `boolean` | false |
| loadData | Loads children asynchronously; a successful node is not loaded repeatedly | `((node: TreeNode) => Promise<unknown>)` | - |
| fieldNames | Custom node field names | `TreeFieldNames` | - |
| directory | Whether to display a directory tree | `boolean` | false |
| virtual | Whether to enable virtual scrolling | `boolean` | false |
| height | Virtual viewport height | `string \| number` | 300 |
| itemHeight | Fixed virtual node height | `number` | 28 |
| overscan | Number of nodes rendered outside the viewport | `number` | 5 |

## TreeNode API

| Property | Description                                                                           | Type       | Default |
| -------- | ------------------------------------------------------------------------------------- | ---------- | ------- |
| title    | Node title; the `title` slot can also be used                                         | string     | -       |
| icon     | Custom icon                                                                           | string     | -       |
| disabled | Whether node is disabled                                                              | boolean    | false   |
| children | Child nodes                                                                           | TreeNode[] | -       |
| isLeaf   | Set as leaf node (effective when loadData is set). false will force it as parent node | boolean    | false   |

### Events

| Property | Description | Type |
| --- | --- | --- |
| onSelect | Triggered when a tree node is clicked | `(node: TreeNode) => void` |
| onCheck | Triggered when a checkbox is clicked | `(node: TreeNode, checked: boolean, keys: string[]) => void` |
| onExpand | Triggered when a node expands or collapses | `(result: TreeExpandEvent) => void` |
| onDragStart | Triggered when dragging starts | `(node: TreeNode, event: DragEvent) => void` |
| onDragEnd | Triggered when dragging ends | `(node: TreeNode, event: DragEvent) => void` |
| onDragEnter | Triggered when a dragged node enters | `(node: TreeNode, event: DragEvent) => void` |
| onDragLeave | Triggered when a dragged node leaves | `(node: TreeNode, event: DragEvent) => void` |
| onDrop | Triggered when a node is dropped | `(nodes: TreeDropEvent, event: DragEvent) => void` |
| onLoadError | Triggered when asynchronous loading fails | `(_error: unknown, node: TreeNode) => void` |

The first `onDrop` argument also contains `dropPosition: 'before' | 'inside' | 'after'`.

## Instance Methods

| Method           | Description                |
| ---------------- | -------------------------- |
| getNode          | Gets a node by key         |
| getCheckedNodes  | Gets checked nodes         |
| getSelectedNodes | Gets selected nodes        |
| scrollTo         | Scrolls to a node          |
| expandAll        | Expands all non-leaf nodes |
| collapseAll      | Collapses all nodes        |
