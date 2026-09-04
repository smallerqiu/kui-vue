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

[虚拟滚动](./demo/virtual.vue)

- 大数据量时启用虚拟滚动，仅渲染下拉框可视区域内的树节点。

## TreeSelect API

| 属性              | 说明                                                       | 类型                              | 默认值      |
| ----------------- | ---------------------------------------------------------- | --------------------------------- | ----------- |
| modelValue        | 指定选中项目的 `value` 值，可以使用 `v-model` 双向绑定数据 | string \| number \| any[]         | -           |
| width             | 组件宽度                                                   | string \| number                  | -           |
| placeholder       | 选择框默认文字                                             | string                            | 请选择      |
| disabled          | 是否禁用当前项                                             | boolean                           | false       |
| readonly          | 是否只读，不可展开、清空或修改                             | boolean                           | false       |
| size              | 组件尺寸大小,提供`small`、`large`两种尺寸，默认为正常      | string                            | -           |
| placement         | 下拉菜单弹出位置                                           | string                            | bottom-left |
| emptyText         | 没有数据时展示的提示                                       | string                            | '暂无数据'  |
| multiple          | 是否呈现多选模式                                           | boolean                           | false       |
| block             | 是否占满父容器宽度                                         | boolean                           | false       |
| maxTagCount       | 多选时最多展示的标签数量，超出部分通过 Tooltip 展示        | number                            | -           |
| filterable        | 是否支持搜索过滤                                           | boolean                           | false       |
| loading           | 异步加载状态                                               | boolean                           | false       |
| clearable         | 是否可以清空选项                                           | boolean                           | false       |
| bordered          | 是否显示边框                                               | boolean                           | true        |
| showArrow         | 是否显示下拉按钮                                           | boolean                           | true        |
| arrowIcon         | 自定义下拉箭头图标                                         | IconType[]                        | -           |
| theme             | 主题                                                       | string                            | fill        |
| icon              | 自定义图标                                                 | string                            | -           |
| shape             | shape='circle' 时呈现圆角                                  | string                            | -           |
| treeLoadData      | 异步加载数据的方法                                         | (node: TreeNode) => Promise<any\> | -           |
| treeData          | 可嵌套的节点属性的数组，生成 `tree` 的数据                 | TreeNode[]                        | []          |
| treeCheckable     | 是否显示多选框                                             | boolean                           | false       |
| treeCheckStrictly | 是否严格遵循父子节点不关联的勾选方式                       | boolean                           | false       |
| showLine          | 是否展示连接线                                             | boolean                           | false       |
| showIcon          | 是否展示图标                                               | boolean                           | true        |
| treeShowIcon      | 是否展示树节点图标                                         | boolean                           | true        |
| treeShowLine      | 是否展示树节点连接线                                       | boolean                           | false       |
| treeExpandedKeys  | 指定展开的节点                                             | string[]                          | []          |
| virtual           | 是否启用树节点虚拟滚动                                     | boolean                           | false       |
| virtualHeight     | 虚拟滚动下拉视口高度                                       | number \| string                  | 260         |
| itemHeight        | 虚拟滚动节点高度                                           | number                            | 28          |
| overscan          | 可视区域外预渲染的节点数量                                 | number                            | 5           |

## Tree 事件

| 属性         | 说明                   | 回调参数                                                  |
| ------------ | ---------------------- | --------------------------------------------------------- |
| onTreeSelect | 点击树节点时触发       | (value: string, label: string, selected: boolean) => void |
| onSearch     | 搜索时触发             | (e: InputEvent) => void                                   |
| onChange     | 值改变时触发           | (value: string \| string[]) => void                       |
| onTreeExpand | Tree节点展开时触发     | (result: TreeExpandEvent) => void                         |
| onOpenChange | 下拉框展开或收起时触发 | (opened: boolean) => void                                 |
| onClear      | 清空时触发             | () => void                                                |
