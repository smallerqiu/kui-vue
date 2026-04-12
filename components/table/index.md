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

[基本用法](./demo/basic.vue)

- 一个普通的表格

[自定义页头和页脚](./demo/bordered.vue)

- 添加表格边框线，页头和页脚。

[Table Row/Column Span](./demo/col-row-span.vue)

- Headers support only column spanning; use colSpan inside column definitions to configure. The table supports row and column spanning; in renders, use cell props colSpan or rowSpan. When set to 0, the cell will not render.

[自定义表头](./demo/custom-header.vue)

- 一个可以自定义表头的表格 , 可以通过 `#header-`定义表头

[固定头/列](./demo/fixed-col-header.vue)

- 对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要设置表格的宽度 `scroll.x` 和 `scroll.y `

[表头分组](./demo/header-span.vue)

- columns[n] 可以内嵌 children，以渲染分组表头。

[动态控制表格属性](./demo/size.vue)

- 选择不同配置组合查看效果。

[勾选](./demo/table-check.vue)

- `checkable=true`，即可自动开启多选功能。 > 注意: 默认勾选的依赖为 `key` , 可以通过 `rowKey` 属性进行自定义。 如: `rowKey="ID"`

[可编辑单元格](./demo/table-edit.vue)

- 带单元格编辑功能的表格。

[排序](./demo/table-sorter.vue)

- `sorter=true` 现有的数据排序 , 为‘function’时,可自定义排序规则

## Table API

| 属性                 | 说明                      | 类型                  | 默认值   |
| -------------------- | ------------------------- | --------------------- | -------- |
| bordered             | 是否显示边框              | Boolean               | false    |
| checkable            | 是否显示勾选框            | Boolean               | false    |
| v-model:selectedKeys | 勾选的key集合             | Array                 | false    |
| size                 | 值为`small`时展示紧凑模式 | String                | -        |
| emptyText            | 没有数据时展示的提示      | String                | 赞无数据 |
| loading              | 表格异步加载模式          | Boolean               | false    |
| data                 | 显示的结构化数据          | Array                 | []       |
| columns              | 表格列的配置描述，        | Array                 | []       |
| rowKey               | 勾选时的依据              | String                | key      |
| onRowClick           | 单击某一行时触发          | Function              | -        |
| onSort               | 点击排序时触发            | Function({key,order}) | -        |

## Column API

| 属性    | 说明                                                                                              | 类型                     | 默认值 |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------ | ------ |
| title   | 列头显示文字                                                                                      | String                   | -      |
| key     | 对应列内容的字段名                                                                                | String                   | -      |
| fixed   | 列固定的方向                                                                                      | left,right               | -      |
| sorter  | 排序,为`true`时,本地排序                                                                          | Boolean ,Function        | -      |
| width   | 列宽                                                                                              | Number                   | -      |
| rowSpan | 行合并单位,为 0 时将不渲染当前行                                                                  | Number                   | -      |
| colSpan | 列合并单位,为 0 时将不渲染当前列                                                                  | Number                   | -      |
| render  | 自定义渲染，可参阅[深入数据对象](https://cn.vuejs.org/v2/guide/render-function.html#深入数据对象) | Function(h,record,index) | -      |
