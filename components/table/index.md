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

<code src="./demo/basic.vue">基本用法</code>
<code src="./demo/bordered.vue">自定义页头和页脚</code>
<code src="./demo/colRowSpan.vue">Table Row/Column Span</code>
<code src="./demo/customHeader.vue">自定义表头</code>
<code src="./demo/fixedColHeader.vue">固定头/列</code>
<code src="./demo/headerSpan.vue">表头分组</code>
<code src="./demo/size.vue">动态控制表格属性</code>
<code src="./demo/tableCheck.vue">勾选</code>
<code src="./demo/tableEdit.vue">可编辑单元格</code>
<code src="./demo/tableSorter.vue">排序</code>

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
