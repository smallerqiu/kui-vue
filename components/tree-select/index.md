# TreeSelect 树选择

树型选择控件。

## 何时使用

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

## 代码演示

[基本用法](./demo/basic.vue)

- 最简单的用法。

[多选](./demo/multiple.vue)

- 多选的树选择。

[可勾选](./demo/checkable.vue)

- 使用勾选框实现多选功能。

[禁用](./demo/disabled.vue)

- 禁用状态

[异步加载](./demo/sync.vue)

- 点击展开节点，动态加载数据。

[尺寸](./demo/size.vue)

- 选择框的尺寸有：`small`、`default`、`large`。

[奇葩的定义](./demo/theme.vue)

- 一些奇奇怪怪的东西

## TreeSelect API

| 属性             | 说明                                                       | 类型                              | 默认值     |
| ---------------- | ---------------------------------------------------------- | --------------------------------- | ---------- |
| modelValue       | 指定选中项目的 `value` 值，可以使用 `v-model` 双向绑定数据 | string,number,any[]               | -          |
| width            | 组件宽度                                                   | string,number                     | -          |
| placeholder      | 选择框默认文字                                             | string                            | 请选择     |
| disabled         | 是否禁用当前项                                             | bool                              | false      |
| size             | 组件尺寸大小,提供`small`,`large`两种尺寸，默认为正常       | string                            | -          |
| emptyText        | 没有数据时展示的提示                                       | string                            | '赞无数据' |
| multiple         | 是否呈现多选模式                                           | bool                              | false      |
| loading          | 异步加载状态                                               | bool                              | false      |
| clearable        | 是否可以清空选项                                           | bool                              | false      |
| bordered         | 是否显示边框                                               | bool                              | true       |
| showArrow        | 是否显示下拉按钮                                           | bool                              | true       |
| theme            | 主题                                                       | string                            | fill       |
| icon             | 自定义图标                                                 | string                            | -          |
| shape            | shape='circle' 时呈现圆角                                  | string                            | -          |
| treeLoadData     | 异步加载数据的方法                                         | (node: TreeNode) => Promise<any\> | -          |
| treeData         | 可嵌套的节点属性的数组，生成 `tree` 的数据                 | TreeNode[]                        | []         |
| treeCheckable    | 是否显示多选框                                             | bool                              | false      |
| showLine         | 是否展示连接线                                             | bool                              | false      |
| showIcon         | 是否展示图标                                               | bool                              | true       |
| treeExpandedKeys | 指定展开的节点                                             | string[]                          | []         |

## Tree 事件

| 属性         | 说明                   | 回调参数                                                  |
| ------------ | ---------------------- | --------------------------------------------------------- |
| onTreeSelect | 点击树节点时触发       | (value: string, label: string, selected: boolean) => void |
| onSearch     | 搜索时触发             | (e: InputEvent) => void                                   |
| onChange     | 值改变时触发           | (value: string\|string[]) => void                         |
| onTreeExpand | Tree节点展开时触发     | (result: TreeExpandEvent) => void                         |
| onOpenChange | 下拉框展开或收起时触发 | (opened: boolean) => void                                 |
| onClear      | 清空时触发             | () => void                                                |
