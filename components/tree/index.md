## Tree API

| 属性          | 说明                                                         | 类型    | 默认值 |
| ------------- | ------------------------------------------------------------ | ------- | ------ |
| data          | 可嵌套的节点属性的数组，生成 `tree` 的数据                   | Array   | []     |
| checkable     | 是否显示多选框                                               | Boolean | false  |
| draggable     | 是否可以拖拽                                                 | Boolean | false  |
| showLine      | 是否展示连接线                                               | Boolean | false  |
| showIcon      | 是否展示图标                                                 | Boolean | true   |
| extra         | 扩展元素                                                     | slot(node)    | -      |
| showExtra     | 是否默认展示扩展元素                                         | Boolean | false  |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | Boolean | false  |
| checkedKeys   | 选中复选框的树节点                                           | Array   | []     |
| expandedKeys  | 指定展开的节点                                               | Array   | []     |
| selectedKeys  | 选中的节点                                                   | Array   | []     |
| multiple      | 是否支持多选                                                 | Boolean | false  |
| loading       | 异步加载状态                                                 | Boolean | false  |

## TreeNode API

| 属性     | 说明                                                                     | 类型    | 默认值 |
| -------- | ------------------------------------------------------------------------ | ------- | ------ |
| title    | 节点标题                                                                 | String  | -      |
| icon     | 自定义图标                                                               | String  | -      |
| disabled | 是否禁用节点                                                             | Boolean | false  |
| children | 子节点                                                                   | Array   | -      |
| isLeaf   | 设置为叶子节点 (设置了 loadData 时有效)。为 false 时会强制将其作为父节点 | Boolean | false  |

## Tree 事件

| 属性      | 说明                   | 回调参数                           |
| --------- | ---------------------- | ---------------------------------- |
| loadData  | 异步加载数据的方法     | Promise Function(node)             |
| select    | 点击树节点时触发       | Function(node)                     |
| check     | 点击复选框时触发       | Function(node,checked,checkedKeys) |
| expand    | 展开和收起子节点时触发 | Function({key,expanded,node})      |
| dragstart | 开始拖拽时调用         | Function(node)                     |
| dragend   | dragend 触发时调用     | Function(node)                     |
| dragenter | dragenter 触发时调用   | Function(node)                     |
| dragleave | dragleave 触发时调用   | Function(node)                     |
| drop      | drop 触发时调用        | Function({dragNode,dropNode})      |
