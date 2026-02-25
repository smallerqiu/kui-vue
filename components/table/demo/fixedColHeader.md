<cn>
### 固定头/列
对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要设置表格的宽度 `scroll.x` 和 `scroll.y `
</cn>
<en>
### Fixed Header/Columns
For data with many columns, you can fix the front and back columns and scroll horizontally to view other data. You need to set the table's width `scroll.x` and `scroll.y`.
</en>

```vue
<template>
  <Table :data="data" :columns="columns" :scroll="{ x: true, y: 300 }">
    <template #action>
      <Button size="small">test</Button>
    </template>
  </Table>
</template>
<script setup>
const _columns = [],
  dataItem = {};
for (let i = 0; i < 20; i++) {
  _columns.push({ title: "Col" + i, key: "address" + i, width: 150 });
  dataItem["address" + i] = "Hubei Wuhan SoftBase No.128";
}

const data = new Array(10).fill("").map((_, i) => {
  return {
    key: i,
    name: "Han Mei",
    age: 28,
    address: "Hubei Wuhan SoftBase No.128",
    ...dataItem,
  };
});
const columns = [
  { title: "Name", key: "name", fixed: "left" },
  { title: "Age", key: "age", fixed: "left" },
  ..._columns,
  { title: "Operate", key: "action", fixed: "right" },
  { title: "Operate", key: "action1", fixed: "right" },
];
</script>
```
