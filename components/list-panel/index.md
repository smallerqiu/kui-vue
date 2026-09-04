# ListPanel 列表面板

为查询条件、结果摘要、列表内容和分页提供统一布局，可容纳 Table、Kanban 或卡片列表。

## 代码演示

[查询列表](./demo/basic.vue?show=vertical)

- 使用 `filters` 和 `summary` 组织查询条件与结果数量。

[工具操作](./demo/actions.vue?show=vertical)

- 使用 `actions` 放置重置、新建等列表级操作。

[分页与外观](./demo/footer.vue?show=vertical)

- 使用 `footer` 放置分页，并通过 `size`、`shape` 和 `theme` 调整外观。

[批量操作](./demo/selection.vue?show=vertical)

- 配合 Table 的勾选状态，在存在选中项时用 `selection` 替换普通查询栏。

## API

| 属性          | 说明                             | 类型                           | 默认值  |
| ------------- | -------------------------------- | ------------------------------ | ------- |
| summary       | 结果摘要                         | string \| number \| VNodeChild | -       |
| bordered      | 是否显示边框                     | boolean                        | true    |
| theme         | 面板外观                         | `fill \| outline \| plain`     | outline |
| shape         | 面板形状                         | ShapeType                      | round   |
| size          | 面板尺寸                         | SizeType                       | medium  |
| selectedCount | 当前选中数量，用于切换批量操作栏 | number                         | 0       |

## Slots

| 名称      | 说明                                 |
| --------- | ------------------------------------ |
| filters   | 查询条件区域                         |
| summary   | 自定义结果摘要                       |
| actions   | 查询栏右侧操作                       |
| selection | 批量操作栏，作用域参数为 `{ count }` |
| default   | 列表、表格或其他主要内容             |
| footer    | 分页或列表底部操作                   |
