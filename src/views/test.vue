<template>
  <div style="width: 800px; height: 400px">
    <Table :data="dataSource" :columns="columns" />
  </div>
</template>

<script setup>
import Table from "@/components/table/tb";

const dataSource = [
  { key: "1", name: "Li Lei", age: 32, address: "Wu Han No. 1" },
  { key: "2", name: "Hu Cong", age: 28, address: "Wu Han No. 2" },
  { key: "3", name: "Wang Wu", age: 28, address: "Wu Han No. 3" }, // 测试合并
  { key: "4", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
];

const columns = [
  { title: "姓名", key: "name1", width: 120 },
  { title: "姓名1", key: "name", fixed: "left", width: 120 },
  { title: "姓名", key: "name2", width: 120 },
  { title: "姓名", key: "name3", width: 120 },
  { title: "姓名", key: "name4", width: 120 },
  // 每 3 行合并一次年龄
  {
    title: "年龄",
    key: "age",
    width: 100,
    rowSpan: 3,
    sorter: (order) => console.log("Sort:", order),
  },
  { title: "住址", key: "address", fixed: "right", width: 200 },
];
</script>
