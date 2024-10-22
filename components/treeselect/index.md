## TreeSelect API
| 属性        | 说明                                                       | 类型                                         | 默认值     |
| ----------- | ---------------------------------------------------------- | -------------------------------------------- | ---------- |
| value       | 指定选中项目的 `value` 值，可以使用 `v-model` 双向绑定数据 | String,Number,Array                          | -          |
| width       | 组件宽度                                                   | String,Number                                | -          |
| placeholder | 选择框默认文字                                             | String                                       | 请选择     |
| disabled    | 是否禁用当前项                                             | Boolean                                      | false      |
| size        | 组件尺寸大小,提供`small`,`large`两种尺寸，默认为正常       | String                                       | -          |
| emptyText   | 没有数据时展示的提示                                       | String                                       | '赞无数据' |
| multiple    | 是否呈现多选模式                                           | Boolean                                      | false      |
| loading     | 是否显示异步加载                                           | Boolean                                      | false      |
| clearable   | 是否可以清空选项                                           | Boolean                                      | false      |
| bordered    | 是否显示边框                                               | Boolean                                      | true       |
| showArrow   | 是否显示下拉按钮                                           | Boolean                                      | true       |
| change      | 在选项状态发生改变时触发                                   | Function                                     | -          |
| open-change | 下拉框展开或收起时触发                                     | Function                                     | -          |
| theme       | theme='light' 时呈现浅色主题                               | String                                       | -          |
| icon        | 自定义图标                                                 | String                                       | -          |
| shape       | shape='circle' 时呈现圆角                                  | String                                       | -          |
| select      | 点击树节点时触发                                           | Function({selectedKeys,selected,node,vnode}) |


## Tree API
| 属性              | 说明                                                         | 回调参数 |
| ----------------- | ------------------------------------------------------------ | -------- |
| tree-data         | 可嵌套的节点属性的数组，生成 `tree` 的数据                   | Array    | [\]   |
| treeCheckable     | 是否显示多选框                                               | Boolean  | false |
| show-line         | 是否展示连接线                                               | Boolean  | false |
| show-icon         | 是否展示图标                                                 | Boolean  | true  |
| show-extra        | 是否默认展示扩展元素                                         | Boolean  | false |
| treeCheckStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | Boolean  | false |
| treeExpandedKeys  | 指定展开的节点                                               | Array    | []    |
| treeExpandedAll   | 是否展开所有节点                                             | Boolean  | false |

## Tree 事件
| 属性           | 说明               | 回调参数                |
| -------------- | ------------------ | ----------------------- |
| tree-load-data | 异步加载数据的方法 | Function(node,callback) |