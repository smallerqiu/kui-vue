## Table API

| Property             | Description                                    | Type                  | Default   |
| -------------------- | ---------------------------------------------- | --------------------- | --------- |
| bordered             | Whether to display borders                     | Boolean               | false     |
| checkable            | Whether to show checkboxes                     | Boolean               | false     |
| v-model:selectedKeys | Collection of selected keys                    | Array                 | false     |
| size                 | Display compact mode when the value is `small` | String                | -         |
| emptyText            | Prompt displayed when there is no data         | String                | No Data |
| loading              | Table asynchronous loading mode                | Boolean               | false     |
| data                 | Structured data to be displayed                | Array                 | []        |
| columns              | Configuration description of table columns     | Array                 | []        |
| rowKey               | Basis for selection                            | String                | key       |
| onRowClick           | Triggered when clicking a row                  | Function              | -         |
| onSort               | Triggered when clicking to sort                | Function({key,order}) | -         |

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
