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

[基本用法(使用render)](./demo/base-render.vue?show=vertical)

- 使用自定义`render`来初始化表格

[自定义表头](./demo/custom-header.vue?show=vertical)

- 一个可以自定义表头的表格 , 可以通过 `#header-`定义表头

[自定义页头和页脚](./demo/bordered.vue?show=vertical)

- 添加表格边框线，页头和页脚。

[排序](./demo/table-sorter.vue?show=vertical)

- `sorter=true` 现有的数据排序 , 为‘function’时,可自定义排序规则

[表格行/列合并](./demo/col-row-span.vue?show=vertical)

- 表头仅支持列合并；在列定义中使用 colSpan 进行配置。 表格支持行合并与列合并；在渲染时，使用单元格属性 colSpan 或 rowSpan。当设置为 0 时，该单元格将不会渲染。

[可编辑单元格](./demo/table-edit.vue?show=vertical)

- 带单元格编辑功能的表格。

[固定头/列](./demo/fixed-col-header.vue?show=vertical)

- 对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要设置表格的宽度 `scroll.x` 和 `scroll.y `

[表头分组](./demo/header-span.vue?show=vertical)

- columns[n] 可以内嵌 children，以渲染分组表头。

[勾选](./demo/table-check.vue?show=vertical)

- `checkable=true`，即可自动开启多选功能。 > 注意: 默认勾选的依赖为 `key` , 可以通过 `rowKey` 属性进行自定义。 如: `rowKey="ID"`

[动态控制表格属性](./demo/control.vue?show=vertical)

- 选择不同配置组合查看效果。

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
| striped              | 是否展示斑马条纹          | Boolean               | -        |

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
