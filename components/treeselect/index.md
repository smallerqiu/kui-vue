## TreeSelect API
| 属性        | 说明                                                       | 类型                           | 默认值     |
| ----------- | ---------------------------------------------------------- | ------------------------------ | ---------- |
| value       | 指定选中项目的 `value` 值，可以使用 `v-model` 双向绑定数据 | String,Number,Array                  | -          |
| width       | 组件宽度                                                   | String,Number                  | -          |
| placeholder | 选择框默认文字                                             | String                         | 请选择     |
| disabled    | 是否禁用当前项                                             | Boolean                        | false      |
| size        | 组件尺寸大小,提供`small`,`large`两种尺寸，默认为正常       | String                         | -          |
| emptyText   | 没有数据时展示的提示                                       | String                         | '赞无数据' |
| multiple    | 是否呈现多选模式                                           | Boolean                        | false      |
| loading     | 是否显示异步加载                                           | Boolean                        | false      |
| clearable   | 是否可以清空选项                                           | Boolean                        | false      |
| bordered    | 是否显示边框                                               | Boolean                        | true       |
| showArrow   | 是否显示下拉按钮                                           | Boolean                        | true       |
| change      | 在选项状态发生改变时触发，返回选择项{value:xx,label:xx}    | Function                       | -          |
| open-change | 下拉框展开或收起时触发                                     | Function                       | -          |
| options     | options 数据，如果设置则不需要手动构造 Option 节点         | Array <{value,label,disabled}> | []         |
| theme       | theme='light' 时呈现浅色主题                               | String                         | -          |
| icon        | 自定义图标                                                 | String                         | -          |
| shape       | shape='circle' 时呈现圆角                                  | String                         | -          |



## Tree API

| tree-data          | 可嵌套的节点属性的数组，生成 `tree` 的数据                   | Array   | []     |
| checkable     | 是否显示多选框                                               | Boolean | false  |
| draggable     | 是否可以拖拽                                                 | Boolean | false  |
| show-line     | 是否展示连接线                                               | Boolean | false  |
| show-icon     | 是否展示图标                                                 | Boolean | true   |
| show-extra    | 是否默认展示扩展元素                                         | Boolean | false  |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | Boolean | false  |

## Tree 事件
| 属性      | 说明                   | 回调参数                                     |
| --------- | ---------------------- | -------------------------------------------- |
| load-data | 异步加载数据的方法     | Function(node,callback)                      |
| select    | 点击树节点时触发       | Function({selectedKeys,selected,node,vnode}) |
| check     | 点击复选框时触发       | Function({checkedKeys,checked,node,vnode})   |
| expand    | 展开和收起子节点时触发 | Function({expandedKeys,expanded,node,vnode}) |
| dragstart | 开始拖拽时调用         | Function({event,node})                       |
| dragend   | dragend 触发时调用     | Function({event,node})                       |
| dragenter | dragenter 触发时调用   | Function({event, node, expandedKeys})        |
| dragleave | dragleave 触发时调用   | Function({event,node})                       |
| drop      | drop 触发时调用        | Function({event,node,dragNode})              |