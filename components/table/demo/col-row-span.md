<cn>
### 表格行/列合并
表头只支持列合并，使用 column 里的 colSpan 进行设置。
表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。
</cn>

```vue
<template>
  <Table :data="data" :columns="columns" bordered> </Table>
</template>
<script setup>
const data = [
  { key: "1", name: "张三", age: 25, city: "北京" },
  { key: "2", name: "李四", age: 30, city: "上海" },
  { key: "3", name: "王五", age: 35, city: "广州" },
  { key: "4", name: "赵六", age: 40, city: "深圳" },
  { key: "5", name: "邱大", age: 38, city: "武汉" },
];
const columns = [
  {
    title: "姓名",
    key: "name",
    width: 100,
    // 第三行第一列向下合并一行
    rowSpan: (record, index) => (index == 2 ? 2 : 1),
  },
  {
    title: "年龄",
    key: "age",
    width: 100,
    colSpan: (record, index) => (index == 1 ? 2 : 1),
  },
  {
    title: "城市",
    key: "city",
    width: 100,
  },
];
</script>
```
