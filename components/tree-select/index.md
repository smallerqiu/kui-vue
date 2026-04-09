## TreeSelect API

| 属性         | 说明                                                       | 类型                             | 默认值     |
| ------------ | ---------------------------------------------------------- | -------------------------------- | ---------- |
| value        | 指定选中项目的 `value` 值，可以使用 `v-model` 双向绑定数据 | String,Number,Array              | -          |
| width        | 组件宽度                                                   | String,Number                    | -          |
| placeholder  | 选择框默认文字                                             | String                           | 请选择     |
| disabled     | 是否禁用当前项                                             | Boolean                          | false      |
| size         | 组件尺寸大小,提供`small`,`large`两种尺寸，默认为正常       | String                           | -          |
| emptyText    | 没有数据时展示的提示                                       | String                           | '赞无数据' |
| multiple     | 是否呈现多选模式                                           | Boolean                          | false      |
| loading      | 异步加载状态                                               | Boolean                          | false      |
| clearable    | 是否可以清空选项                                           | Boolean                          | false      |
| bordered     | 是否显示边框                                               | Boolean                          | true       |
| showArrow    | 是否显示下拉按钮                                           | Boolean                          | true       |
| change       | 在选项状态发生改变时触发                                   | Function(value)                  | -          |
| theme        | theme='light' 时呈现浅色主题                               | String                           | -          |
| icon         | 自定义图标                                                 | String                           | -          |
| shape        | shape='circle' 时呈现圆角                                  | String                           | -          |
| onTreeSelect | 点击树节点时触发                                           | Function(value, label, selected) | -          |
| onSearch     | 搜索时触发                                                 | Function(event)                  | -          |
| onChange     | 值改变时触发                                               | Function(value)                  | -          |

## Tree API

| 属性             | 说明                                       | 类型    | 默认值 |
| ---------------- | ------------------------------------------ | ------- | ------ |
| treeData         | 可嵌套的节点属性的数组，生成 `tree` 的数据 | Array   | [\]    |
| treeCheckable    | 是否显示多选框                             | Boolean | false  |
| showLine         | 是否展示连接线                             | Boolean | false  |
| showIcon         | 是否展示图标                               | Boolean | true   |
| treeExpandedKeys | 指定展开的节点                             | Array   | []     |

## Tree 事件

| 属性         | 说明               | 回调参数       |
| ------------ | ------------------ | -------------- |
| treeLoadData | 异步加载数据的方法 | Function(node) |
