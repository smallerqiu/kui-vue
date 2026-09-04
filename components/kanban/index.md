# Kanban 看板

按状态分列展示数据，并支持拖拽流转。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 通过插槽渲染任务卡片，拖动卡片可触发状态流转。

[自定义区域](./demo/custom.vue?show=vertical)

- 自定义列头、任务卡片、空状态和列底部，并关闭拖拽。

[自定义字段](./demo/fields.vue?show=vertical)

- 使用 `rowKey`、`statusKey` 和 `minColumnWidth` 适配不同数据结构。

[外观主题](./demo/theme.vue?show=vertical)

- 使用 `fill` 或 `outline` 切换看板列的填充与描边外观。

## API

| 属性           | 说明                           | 类型               | 默认值 |
| -------------- | ------------------------------ | ------------------ | ------ |
| columns        | 看板列配置                     | KanbanColumnData[] | []     |
| data           | 看板数据                       | KanbanItemData[]   | []     |
| rowKey         | 数据唯一键字段                 | string             | id     |
| statusKey      | 状态字段                       | string             | status |
| draggable      | 是否允许拖拽                   | boolean            | true   |
| emptyText      | 空列提示，默认使用全局语言配置 | string             | -      |
| minColumnWidth | 列最小宽度                     | number \| string   | 250    |
| theme          | 看板列外观                     | `fill \| outline`  | fill   |

### KanbanColumnData

| 字段  | 说明                         | 类型             | 必填 |
| ----- | ---------------------------- | ---------------- | ---- |
| key   | 列唯一标识，与数据状态值对应 | string \| number | 是   |
| title | 列标题                       | string           | 是   |
| color | 列状态标识色                 | string           | 否   |

## Events

| 事件名    | 说明                                         | 回调参数                                                   |
| --------- | -------------------------------------------- | ---------------------------------------------------------- |
| move      | 卡片拖入其他列时触发；组件不会直接修改原数据 | `(event: KanbanMoveEvent) => void`                         |
| itemClick | 点击卡片时触发                               | `(item: KanbanItemData, column: KanbanColumnData) => void` |

`KanbanMoveEvent` 包含 `item`、原列标识 `from` 和目标列标识 `to`。

卡片获得焦点后，可以使用 `Alt + ←` 或 `Alt + →` 将其移动到相邻列。

## Slots

| 名称        | 说明             | 作用域参数                |
| ----------- | ---------------- | ------------------------- |
| columnTitle | 自定义列头       | `{ column, items }`       |
| item        | 自定义卡片内容   | `{ item, column, index }` |
| empty       | 自定义空列内容   | `{ column }`              |
| footer      | 自定义列底部内容 | `{ column, items }`       |
