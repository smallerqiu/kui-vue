# Table 表格

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 简单示例

指定表格的数据源 data 为一个数组。

```js
const dataSource = [
  {
    key: '1',
    name: 'Li Lei',
    age: 32,
    address: 'Wu Han Guanggu No. 328',
  },
  {
    key: '2',
    name: 'Hu Cong',
    age: 28,
    address: 'Wu Han Guanggu No. 198',
  },
];

const columns = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Age',
    key: 'age',
  },
  {
    title: 'Address',
    key: 'address',
  },
];

<Table :data="dataSource" :columns="columns" />;
```

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 一个普通的表格

[树形数据](./demo/tree.vue?show=vertical)

- 数据包含 `children` 时自动启用树形表格，支持受控展开、默认展开、缩进、勾选和点击行展开。

[基本用法(使用render)](./demo/base-render.vue?show=vertical)

- 使用自定义`render`来初始化表格

[自定义表头](./demo/custom-header.vue?show=vertical)

- 一个可以自定义表头的表格 , 可以通过 `#header-`定义表头

[自定义页头和页脚](./demo/bordered.vue?show=vertical)

- 添加表格边框线，页头和页脚。

[排序](./demo/table-sorter.vue?show=vertical)

- `sorter=true` 现有的数据排序 , 为‘function’时,可自定义排序规则 可排序的表头可以聚焦（`tabindex=0`），`Enter` 或空格键与点击等价；排序方向通过 `aria-sort`（`none`/`ascending`/`descending`）暴露，每激活一次按 升序 → 降序 → 不排序 循环。

[表格行/列合并](./demo/col-row-span.vue?show=vertical)

- 表头仅支持列合并；在列定义中使用 colSpan 进行配置。 表格支持行合并与列合并；在渲染时，使用单元格属性 colSpan 或 rowSpan。当设置为 0 时，该单元格将不会渲染。

[可编辑单元格](./demo/table-edit.vue?show=vertical)

- 带单元格编辑功能的表格。

[固定头/列](./demo/fixed-col-header.vue?show=vertical)

- 对于列数很多的数据，可以固定前后的列并横向滚动。`scroll.x` 设置内容的最小宽度，`scroll.y` 设置**表体**的纵向滚动区域高度（整张表的高度是表头加这段高度）。`scroll.y` 存在时表头拆成独立的一张 `table` 与表体并排：表头容器按实测的纵向滚动条宽度收窄，两者的可视宽度一致，`auto` 列宽与固定列的 sticky 偏移因此天然对齐；裁剪在容器内层那一圈（外层只用 end padding 让出槽位，`overflow: hidden` 只裁到 padding box，裁在外层会连槽位一起被表头内容画穿），横向偏移由表体的 `scrollLeft` 同步到这一层，落在表头上的滚轮也会转发给表体。

[表头分组](./demo/header-span.vue?show=vertical)

- columns[n] 可以内嵌 children，以渲染分组表头。

[勾选](./demo/table-check.vue?show=vertical)

- `checkable=true`，即可自动开启多选功能。 > 注意: 默认勾选的依赖为 `key` , 可以通过 `rowKey` 属性进行自定义。 如: `rowKey="ID"` 若某行按 `rowKey` 取不到 `string`/`number`，组件会按记录对象生成稳定且互不相同的兜底 key，并在控制台告警一次；仍建议为每行提供 `rowKey`。
- 列 `key`、`rowKey` 与 `childrenColumnName` 共用同一个取值器：先按整名取属性，整名不存在且名字里带 `.` 时才按 `.` 逐段下钻，所以 `{ user: { name: "Ann" } }` 可以直接用 `key="user.name"`，`{ tags: ["x", "y"] }` 可以用 `key="tags.1"`。下钻途中遇到 `null` 或非对象就取到空值，不会抛错；`__proto__`/`constructor`/`prototype` 这三段一律取不到值。字段名本身带点号时整名优先，`{ "a.b": 1 }` 配 `key="a.b"` 读到的就是这个字段（kui-vue 行为相同）。vue 侧注意：列 `key` 同时是插槽名，带点号的 key 只能走动态插槽 `v-slot:[...]`。

[嵌套取值](./demo/nested-value.vue?show=vertical)

- 列 `key`、`rowKey`、`childrenColumnName` 直接写 `a.b` 点路径就能读嵌套字段，中途缺字段渲染成空，不用先把数据拍平。

[动态控制表格属性](./demo/control.vue?show=vertical)

- 选择不同配置组合查看效果。

[虚拟滚动](./demo/virtual.vue?show=vertical)

- 配合 `scroll.y` 虚拟化大量固定行高数据。单行内的 `colSpan` 在虚拟模式下正常；跨行的 `rowSpan` 不支持——窗口起点落在合并区间中间时，锚点行不在窗口内不会被渲染，那一行会少一格并整体左移一列（kui-react 行为相同，两仓各有一条用例锁定这份差异）。

[列设置](./demo/column-setting.vue?show=vertical)

- `TableColumnSetting` 根据同一份列配置生成显隐面板，配合 `hiddenColumnKeys` 使用；`disabledKeys` 可保留不允许隐藏的关键列。

- 表格文案统一取自语言包 `k.table`：`emptyText` 空态提示，`columnSettings`/`resetColumns` 列设置面板，`expandRow`/`collapseRow` 是树形展开按钮的可访问名，`selectRow`/`selectAllRows` 是行内与表头勾选框的可访问名；显式传入的 `emptyText`、`title`、`resetText` 优先于语言包。

- 固定列必须有确定宽度：没传 `width` 的固定列按 150 处理，勾选列固定为 50。写了 `width` 的列（固定与否都一样）照原值落到 `<col>` 上，只有没写宽度的普通列才是 `auto`，由它分摊被撑开的剩余宽度；把带宽度的普通列也写成 `auto` 会让它们在 `table-layout: fixed` 下被固定列挤成 0 宽，横向能滚的距离一起消失，固定列就“看着没生效”。 `<col>` 宽度、相邻固定列的 sticky 偏移、勾选列单元格宽度三处共用同一份基准。

- `scroll.y` 存在时表头分栏：多行分组表头整块留在自己的表头容器里，只有表体滚动，不再给每一行算 sticky 偏移。分栏后表体单元格与表头之间没有可读的结构关系，所以每个表头格会生成 `id`，同列的表体格用 `aria-labelledby` 指回去，屏幕阅读器仍能念出列名；没写 `scroll.y` 时表头还在表体那张 `table` 里，不生成这些 `id`。

- 分组表头的父列也可以写 `fixed`：方向会继承给它的每个叶子列（叶子自己显式写的 `fixed` 优先），父格按它覆盖的叶子区间取 sticky 偏移，只有整段区间方向一致时这一格表头才参与固定。

- `expandAllRows` 非受控期间，`data` 变化只把“新出现的父行”展开，用户手动展开或折叠过的行保持不变；从数据里消失又回来的父行算新出现，会被重新展开（组件不记住它曾被折叠，kui-vue 同口径）。

## Table API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 是否显示边框 | `boolean` | false |
| checkable | 是否显示勾选框 | `boolean` | false |
| selectedKeys | 勾选的key集合 | `TableKey[]` | - |
| disabledKeys | 禁用的key集合 | `TableKey[]` | - |
| size | 值为`small`时展示紧凑模式 | `"small" \| "medium" \| "large"` | - |
| emptyText | 没有数据时展示的提示 | `string` | 暂无数据 |
| loading | 表格异步加载模式 | `boolean` | false |
| data | 显示的结构化数据 | `TableRecord[]` | [] |
| columns | 表格列的配置描述， | `Column[]` | [] |
| hiddenColumnKeys | 隐藏的列 key 集合，支持分组列 | `string[]` | [] |
| rowKey | 行的唯一标识，勾选与展开都以它为准；可传字段名，或传函数从记录中取值 | `string \| ((record: TableRecord) => TableKey)` | key |
| childrenColumnName | 子节点字段名 | `string` | children |
| expandedKeys | 展开行 key 集合，支持 `v-model:expanded-keys` | `TableKey[]` | - |
| expandAllRows | 初始化时展开所有树节点；`data` 后续变化时只补新增的父行，用户手动展开或折叠过的行保持不变（expandedKeys 优先） | `boolean` | false |
| expandRowByClick | 点击行时展开或收起 | `boolean` | false |
| indentSize | 每级树节点缩进距离 | `number` | 20 |
| striped | 是否展示斑马条纹 | `boolean` | false |
| onRowClick | 单击某一行时触发 | `(record: TableRecord, index: number) => void` | - |
| onSort | 点击排序时触发 | `(state: SortState) => void` | - |
| onSelect | 点击复选框时触发 | `(record: TableRecord, selected: boolean, keys: TableKey[]) => void` | - |
| onSelectAll | 点击Table头部复选框时触发 | `(selected: boolean, keys: TableKey[]) => void` | - |
| onExpand | 展开状态变化时触发 | `(expanded: boolean, record: TableRecord) => void` | - |
| onExpandedKeysChange | 展开 key 集合变化时触发 | `(keys: TableKey[]) => void` | - |
| scroll | 滚动配置；`x` 为内容最小宽度，`y` 为表体的纵向滚动区域高度 | `{ x?: number \| string; y?: number \| string; }` | {} |
| virtual | 是否启用虚拟滚动，需设置 `scroll.y` | `boolean` | false |
| itemHeight | 虚拟滚动行的固定高度 | `number` | 44 |
| overscan | 视口上下额外渲染的行数 | `number` | 5 |

## TableColumnSetting API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 与 Table 共用的列配置 | `Column[]` | [] |
| hiddenKeys | 隐藏列 key，支持 `v-model:hidden-keys` | `string[]` | [] |
| disabledKeys | 不允许在设置面板中切换的关键列 | `string[]` | [] |
| title | 面板标题及默认触发按钮文字 | `string` | Column settings |
| resetText | 重置按钮文字 | `string` | Reset |
| size | 触发按钮和选择项尺寸 | `"small" \| "medium" \| "large"` | - |
| showReset | 是否显示重置按钮 | `boolean` | true |
| onChange | 隐藏列变化时触发 | `(keys: string[]) => void` | - |

插槽：`default` 可自定义触发元素。

## Column API

| 属性     | 说明                                 | 类型                                                       | 默认值 |
| -------- | ------------------------------------ | ---------------------------------------------------------- | ------ |
| title    | 列头显示文字                         | string                                                     | -      |
| key      | 对应列内容的字段名                   | string                                                     | -      |
| fixed    | 列固定的方向                         | 'left' \| 'right'                                          | -      |
| sorter   | 排序,为`true`时,本地排序             | boolean \| (state: SortState) => void                      | -      |
| width    | 列宽                                 | number                                                     | -      |
| rowSpan  | 行合并单位,为 0 时将不渲染当前行     | number \| ((record: TableRecord, index: number) => number) | -      |
| colSpan  | 列合并单位,为 0 时将不渲染当前列     | number \| ((record: TableRecord, index: number) => number) | -      |
| render   | 自定义渲染，首个参数为当前单元格的值 | (value, record, rowIndex, col) => VNodeChild               | -      |
| children | 分组表头的嵌套子列                   | Column[]                                                   | -      |

### 插槽

- `header` / `footer`：渲染在表格上方 / 下方的自定义区域。
- `<template #列key="scope">`：自定义该列的单元格，`scope` 提供 `value`、`record`、`rowIndex`、`colIndex`、`col`；优先级为 插槽 > `render` > 原始值。
- `<template #header-列key="scope">`：自定义该列的表头，`scope` 提供 `value`（即 `col.title`）、`col`、`index`。

插槽名是拿列的 `key` 直接拼出来的，所以 `key` 还得是一个合法的插槽名：`default`、`header`、`footer` 归组件自己使用（拿它们当列 key 会把表格区域渲染进单元格）；含 `.`、空格等字符的字段名只能用动态插槽名（`v-slot:[expr]`）；这类插槽名在运行时拼接，没有类型检查也没有 IDE 补全，需要跨框架移植时优先用 `render`（签名与 kui-react 一致）。

### 通用外观

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shape | 表格形状 | `"square" \| "round"` | round |
