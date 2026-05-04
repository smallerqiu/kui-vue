# Tree 树形控件

## 何时使用

文件夹、组织架构、生物分类、国家地区等等,世间万物的大多数结构都是树形结构。使用`树控件` 可以完整展现其中的层级关系并具有展开收起选择等交互功能。

## 代码演示

[基本用法](./demo/basic.vue)

- 最简单的用法，展示可选中，默认展开功能。

[可勾选](./demo/checkable.vue)

- 设置属性 `checkable` 可以对节点进行勾选。

[扩展节点](./demo/custom-render.vue)

- 节点的扩展节点

[禁用节点](./demo/disabled.vue)

- 设置属性 `disabled` 可以禁用节点。

[异步加载](./demo/sync.vue)

- 点击展开节点，动态加载数据 , `isLeaf=true` 表示当前节点是叶子节点,不会有子集

[自定义图标](./demo/icon.vue)

- 可以针对不同的节点定制图标。

[群控](./demo/directory.vue?show=vertical)

- 展示目录、连接线、拖动、复选框、图标、扩展

## Tree API

| 属性          | 说明                                                         | 类型                             | 默认值 |
| ------------- | ------------------------------------------------------------ | -------------------------------- | ------ |
| data          | 可嵌套的节点属性的数组，生成 `tree` 的数据                   | Array                            | []     |
| checkable     | 是否显示多选框                                               | bool                             | false  |
| draggable     | 是否可以拖拽                                                 | bool                             | false  |
| showLine      | 是否展示连接线                                               | bool                             | false  |
| showIcon      | 是否展示图标                                                 | bool                             | true   |
| extra         | 扩展元素                                                     | slot(node)                       | -      |
| showExtra     | 是否默认展示扩展元素                                         | bool                             | false  |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | bool                             | false  |
| checkedKeys   | 选中复选框的树节点                                           | Array                            | []     |
| expandedKeys  | 指定展开的节点                                               | Array                            | []     |
| selectedKeys  | 选中的节点                                                   | Array                            | []     |
| multiple      | 是否支持多选                                                 | bool                             | false  |
| loading       | 异步加载状态                                                 | bool                             | false  |
| loadData      | 异步加载数据的方法                                           | (node: TreeNode) => Promise<any> | -      |
| directory     | 是不显示为目录树                                             | bool                             | false  |

## TreeNode API

| 属性     | 说明                                                                     | 类型   | 默认值 |
| -------- | ------------------------------------------------------------------------ | ------ | ------ |
| title    | 节点标题                                                                 | string | -      |
| icon     | 自定义图标                                                               | string | -      |
| disabled | 是否禁用节点                                                             | bool   | false  |
| children | 子节点                                                                   | Array  | -      |
| isLeaf   | 设置为叶子节点 (设置了 loadData 时有效)。为 false 时会强制将其作为父节点 | bool   | false  |

## Tree 事件

| 属性        | 说明                   | 回调参数                                                                     |
| ----------- | ---------------------- | ---------------------------------------------------------------------------- |
| onSelect    | 点击树节点时触发       | (node: TreeNode) => void                                                     |
| onCheck     | 点击复选框时触发       | (node: TreeNode, checked: boolean, checkedKeys: string[]) => void            |
| onExpand    | 展开和收起子节点时触发 | (result: TreeExpandEvent) => void                                            |
| onDragstart | 开始拖拽时调用         | (node: TreeNode, event: DragEvent) => void                                   |
| onDragend   | dragend 触发时调用     | (node: TreeNode, event: DragEvent) => void                                   |
| onDragenter | dragenter 触发时调用   | (node: TreeNode, event: DragEvent) => void                                   |
| onDragleave | dragleave 触发时调用   | (node: TreeNode, event: DragEvent) => void                                   |
| onDrop      | drop 触发时调用        | (node: { dragNode: TreeNode; dropNode: TreeNode }, event: DragEvent) => void |
