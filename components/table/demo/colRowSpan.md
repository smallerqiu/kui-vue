<cn>
### Table Row/Column Span
Headers support only column spanning; use colSpan inside column definitions to configure.
The table supports row and column spanning; in renders, use cell props colSpan or rowSpan. When set to 0, the cell will not render.
</cn>
<en>
### Table Row/Column Span
Headers support only column spanning; use colSpan inside column definitions to configure.
The table supports row and column spanning; in renders, use cell props colSpan or rowSpan. When set to 0, the cell will not render.
</en>

```vue
<template>
  <Table :data="data" :columns="columns" bordered> </Table>
</template>
<script setup lang="ts">
const data = [
  { key: "1", name: "Jim", age: 25, city: "Beijing" },
  { key: "2", name: "Allen", age: 30, city: "Wuhan" },
  { key: "3", name: "Qiu", age: 35, city: "Wuhan" },
  { key: "4", name: "Jake", age: 40, city: "Shanghai" },
  { key: "5", name: "Mask", age: 38, city: "Wuhan" },
];
const columns = [
  {
    title: "Name",
    key: "name",
    width: 100,
    // 第三行第一列向下合并一行
    rowSpan: (record, index) => (index == 2 ? 2 : 1),
  },
  {
    title: "Age",
    key: "age",
    width: 100,
    colSpan: (record, index) => (index == 1 ? 2 : 1),
  },
  {
    title: "City",
    key: "city",
    width: 100,
  },
];
</script>
```
