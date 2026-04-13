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

[Basic Usage](./demo/basic.vue)

- A regular table.

[Basic Usage (Using render)](./demo/base-render.vue)

- Use custom `render` to initialize the table.

[Custom Table Header](./demo/custom-header.vue)

- A table with a customizable header. You can define the header via `#header-`.

[Custom Header and Footer](./demo/bordered.vue)

- Add table border lines, header, and footer.

[Sorting](./demo/table-sorter.vue)

- `sorter=true` sorts existing data. When set to a `function`, you can define custom sorting rules.

[Table Row/Column Span](./demo/col-row-span.vue)

- Headers support only column spanning; use colSpan inside column definitions to configure. The table supports row and column spanning; in renders, use cell props colSpan or rowSpan. When set to 0, the cell will not render.

[Editable Cells](./demo/table-edit.vue)

- A table with cell editing functionality.

[Fixed Header/Columns](./demo/fixed-col-header.vue)

- For data with many columns, you can fix the front and back columns and scroll horizontally to view other data. You need to set the table's width `scroll.x` and `scroll.y`.

[Header Grouping](./demo/header-span.vue)

- `columns[n]` can nest `children` to render grouped headers.

[Checkbox Selection](./demo/table-check.vue)

- Set `checkable=true` to automatically enable multi-selection. > Note: The default selection dependency is `key`. You can customize it via the `rowKey` attribute, e.g., `rowKey="ID"`.

[Dynamically Control Table Properties](./demo/size.vue)

- Select different configuration combinations to see the effects.

## Table API

| Property             | Description                                    | Type                  | Default |
| -------------------- | ---------------------------------------------- | --------------------- | ------- |
| bordered             | Whether to display borders                     | Boolean               | false   |
| checkable            | Whether to show checkboxes                     | Boolean               | false   |
| v-model:selectedKeys | Collection of selected keys                    | Array                 | false   |
| size                 | Display compact mode when the value is `small` | String                | -       |
| emptyText            | Prompt displayed when there is no data         | String                | No Data |
| loading              | Table asynchronous loading mode                | Boolean               | false   |
| data                 | Structured data to be displayed                | Array                 | []      |
| columns              | Configuration description of table columns     | Array                 | []      |
| rowKey               | Basis for selection                            | String                | key     |
| onRowClick           | Triggered when clicking a row                  | Function              | -       |
| onSort               | Triggered when clicking to sort                | Function({key,order}) | -       |

## Column API

| Property | Description                                                                                                                    | Type                     | Default |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------- |
| title    | Header display text                                                                                                            | String                   | -       |
| key      | Corresponding column field name                                                                                                | String                   | -       |
| fixed    | Column fixed direction                                                                                                         | left,right               | -       |
| sorter   | Sorting, when `true`, local sorting is enabled                                                                                 | Boolean ,Function        | -       |
| width    | Column width                                                                                                                   | Number                   | -       |
| rowSpan  | Row merge unit, when 0, the current row will not be rendered                                                                   | Number                   | -       |
| colSpan  | Column merge unit, when 0, the current column will not be rendered                                                             | Number                   | -       |
| render   | Custom rendering, refer to [In-depth Data Object](https://cn.vuejs.org/v2/guide/render-function.html#深入数据对象) for details | Function(h,record,index) | -       |
