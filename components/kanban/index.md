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

- 切换看板列的外观：铺底、描边、无框、实底反白与虚线框。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 看板列配置 | `KanbanColumnData[]` | [] |
| data | 看板数据 | `KanbanItemData[]` | [] |
| rowKey | 数据唯一键字段 | `string` | id |
| statusKey | 状态字段 | `string` | status |
| draggable | 是否允许拖拽 | `boolean` | true |
| emptyText | 空列提示，默认使用全局语言配置 | `string` | - |
| minColumnWidth | 列最小宽度 | `string \| number` | 250 |
| theme | 外观主题 | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | `fill` |
| columnTitle | 自定义列头，作用域参数为 `{ column, items }` | VNodeChild | - |
| item | 自定义卡片内容，作用域参数为 `{ item, column, index }` | VNodeChild | - |
| empty | 自定义空列内容，作用域参数为 `{ column }` | VNodeChild | - |
| footer | 自定义列底部内容，作用域参数为 `{ column, items }` | VNodeChild | - |

### KanbanColumnData

| 字段  | 说明                         | 类型             | 必填 |
| ----- | ---------------------------- | ---------------- | ---- |
| key   | 列唯一标识，与数据状态值对应 | string \| number | 是   |
| title | 列标题                       | string           | 是   |
| color | 列状态标识色                 | string           | 否   |

## Events

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| move | 卡片拖入其他列时触发；组件不会直接修改原数据 | `(event: KanbanMoveEvent) => void` |
| itemClick | 点击卡片时触发 | `(item: KanbanItemData, column: KanbanColumnData) => void` |

`KanbanMoveEvent` 包含 `item`、原列标识 `from` 和目标列标识 `to`。

卡片获得焦点后，可以使用 `Alt + ←` 或 `Alt + →` 将其移动到相邻列。
## 主题

`theme` 支持 `fill`、`outline`、`plain`、`solid`、`dashed` 五种外观，不写 `theme` 时就是 `fill`；`underlined` 是给可输入的控件用的，看板会按 `fill` 呈现。

外观落在每一列上，不是整块看板：`fill` 给列铺一层浅底，`outline` 只描一条库的边框色，`plain` 既不铺底也不描边，`dashed` 把那一圈换成虚线。`solid` 用主色铺满整列，列标题、计数和列里的卡片一起反白，卡片上的键盘焦点环也跟着换成主色上的一层浅白。列头那颗状态点吃的是 `column.color`，属于数据不属于外观，五种外观都不改它。把卡片拖到某一列上方时的提示——一条主色描边加一层主色浅底——在五种外观下都看得见，`solid` 的列改用铺底的反白色来描这条边。
