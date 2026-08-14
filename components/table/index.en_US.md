# Table

Display row and column data.

## When to Use

- When there is a large amount of structured data to display.
- When complex behaviors such as sorting, searching, pagination, and custom operations are needed on the data.

## Simple Example

Specify the table's data source data as an array.

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

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- A regular table.

[Tree Data](./demo/tree.vue?show=vertical)

- Tree mode is enabled automatically when records contain `children`. Controlled expansion, default expansion, indentation, selection, and row-click expansion are supported.

[Basic Usage (Using render)](./demo/base-render.vue?show=vertical)

- Use custom `render` to initialize the table.

[Custom Table Header](./demo/custom-header.vue?show=vertical)

- A table with a customizable header. You can define the header via `#header-`.

[Custom Header and Footer](./demo/bordered.vue?show=vertical)

- Add table border lines, header, and footer.

[Sorting](./demo/table-sorter.vue?show=vertical)

- `sorter=true` sorts existing data. When set to a `function`, you can define custom sorting rules.

[Table Row/Column Span](./demo/col-row-span.vue?show=vertical)

- Headers support only column spanning; use colSpan inside column definitions to configure. The table supports row and column spanning; in renders, use cell props colSpan or rowSpan. When set to 0, the cell will not render.

[Editable Cells](./demo/table-edit.vue?show=vertical)

- A table with cell editing functionality.

[Fixed Header/Columns](./demo/fixed-col-header.vue?show=vertical)

- For data with many columns, you can fix the front and back columns and scroll horizontally to view other data. You need to set the table's width `scroll.x` and `scroll.y`.

[Header Grouping](./demo/header-span.vue?show=vertical)

- `columns[n]` can nest `children` to render grouped headers.

[Checkbox Selection](./demo/table-check.vue?show=vertical)

- Set `checkable=true` to automatically enable multi-selection. > Note: The default selection dependency is `key`. You can customize it via the `rowKey` attribute, e.g., `rowKey="ID"`.

[Dynamically Control Table Properties](./demo/control.vue?show=vertical)

- Select different configuration combinations to see the effects.

## Table API

| Property     | Description                                              | Type                                                                         | Default |
| ------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------- | ------- |
| bordered     | Whether to display borders                               | boolean                                                                        | false   |
| checkable    | Whether to show checkboxes                               | boolean                                                                        | false   |
| selectedKeys | Collection of selected keys                              | (string \| number)[]                                                         | -       |
| disabledKeys | Disabled key set                                         | (string \| number)[]                                                         | -       |
| size         | Display compact mode when the value is `small`           | string                                                                       | -       |
| emptyText    | Prompt displayed when there is no data                   | string                                                                       | No Data |
| loading      | Table asynchronous loading mode                          | boolean                                                                        | false   |
| data         | Structured data to be displayed                          | any[]                                                                        | []      |
| columns      | Configuration description of table columns               | Column[]                                                                     | []      |
| rowKey       | Basis for selection                                      | string                                                                       | key     |
| childrenColumnName | Field containing child records | string | children |
| expandedKeys | Controlled expanded row keys; supports `v-model:expanded-keys` | (string \| number)[] | - |
| defaultExpandedKeys | Initially expanded row keys | (string \| number)[] | [] |
| defaultExpandAllRows | Expand every tree node initially | boolean| false |
| expandRowByClick | Toggle expansion by clicking a row | boolean| false |
| indentSize | Indentation per tree level | number | 20 |
| striped      | Whether to display zebra stripes                         | boolean                                                                        | false   |
| onRowClick   | Triggered when clicking a row                            | (record: any, index: number) => void                                         | -       |
| onSort       | Triggered when clicking to sort                          | (state: SortState) => void                                                   | -       |
| onSelect     | Triggered when clicking the checkbox                     | (record: any, selected: boolean, selectedKeys: (string \| number)[]) => void | -       |
| onSelectAll  | Triggered when clicking the header checkbox of the Table | (selected: boolean, selectedKeys: (string \| number)[]) => void              | -       |
| onExpand | Called when a row expands or collapses | (expanded: boolean, record: TableRecord) => void | - |
| onExpandedKeysChange | Called when expanded keys change | (expandedKeys: (string \| number)[]) => void | - |

## Column API

| Property | Description                                                        | Type                                               | Default |
| -------- | ------------------------------------------------------------------ | -------------------------------------------------- | ------- |
| title    | Header display text                                                | string                                             | -       |
| key      | Corresponding column field name                                    | string                                             | -       |
| fixed    | Column fixed direction                                             | left,right                                         | -       |
| sorter   | Sorting, when `true`, local sorting is enabled                     | boolean \| (state: SortState) => void              | -       |
| width    | Column width                                                       | number                                             | -       |
| rowSpan  | Row merge unit, when 0, the current row will not be rendered       | number                                             | -       |
| colSpan  | Column merge unit, when 0, the current column will not be rendered | number                                             | -       |
| render   | Custom rendering                                                   | (h, record, colIndex, rowIndex, col) => VNodeChild | -       |
| scroll   | Scrolling attributes                                               | {x:[number ,string],y:[number , string]}           | -       |
