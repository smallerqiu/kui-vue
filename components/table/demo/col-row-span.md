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
  {
    key: "0",
    name: "Li Lei",
    age: 32,
    night: "orange",
    morning: "apple",
  },
  { key: "1", name: "Liu Hao", age: 28, night: "orange", morning: "ale" },
  { key: "2", name: "Hu Cong", age: 28, night: "orange", morning: "ale" },
  { key: "3", name: "Qiu", age: 28, night: "orange", morning: "ale" },
  {
    key: "4",
    name: "WangKang",
    age: 28,
    night: "orange",
    morning: "apple",
  },
];
const columns = [
  {
    title: "Name",
    key: "name",
    rowSpan: 3,
    fixed: "left",
  },
  {
    title: "Age",
    key: "age",
    colSpan: 2,
  },
  { title: "Morning", key: "morning" },
  { title: "Night", key: "night" },
];
</script>
```
