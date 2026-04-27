<template>
  <Table :data="data" :columns="columns" :scroll="{ y: 300 }">
    <template #action>
      <Button size="small">test</Button>
    </template>
    <template #action1>
      <Button size="small">test2</Button>
    </template>
  </Table>
</template>
<script setup lang="ts">
import type { Column } from "kui-vue";

const _columns = [],
  dataItem: any = {};
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
const columns: Column[] = [
  { title: "Name", key: "name", fixed: "left" },
  { title: "Age", key: "age", fixed: "left" },
  ..._columns,
  { title: "Operate", key: "action", fixed: "right" },
  { title: "Operate", key: "action1", fixed: "right" },
];
</script>
