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

<code src="./demo/basic.vue">Basic Usage</code>
<code src="./demo/bordered.vue">Custom Header and Footer</code>
<code src="./demo/colRowSpan.vue">Table Row/Column Span</code>
<code src="./demo/customHeader.vue">Custom Table Header</code>
<code src="./demo/fixedColHeader.vue">Fixed Header/Columns</code>
<code src="./demo/headerSpan.vue">Header Grouping</code>
<code src="./demo/size.vue">Dynamically Control Table Properties</code>
<code src="./demo/tableCheck.vue">Checkbox Selection</code>
<code src="./demo/tableEdit.vue">Editable Cells</code>
<code src="./demo/tableSorter.vue">Sorting</code>

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
