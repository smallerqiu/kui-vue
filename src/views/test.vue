<template>
  <div>
    <Table
      :data="dataSource"
      :columns="columns"
      :scroll="{ x: 600, y: 300 }"
    />
  </div>
</template>

<script setup>
import Table from "@/components/table/tb";

const dataSource = [
  // { key: "1", name: "Li Lei", age: 32, address: "Wu Han No. 1" },
  // { key: "2", name: "Hu Cong", age: 28, address: "Wu Han No. 2" },
  // { key: "3", name: "Wang Wu", age: 28, address: "Wu Han No. 3" }, // 测试合并
  // { key: "4", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
  // { key: "5", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
  // { key: "6", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
  // { key: "41", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
  // { key: "42", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
  // { key: "43", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
  // { key: "44", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
  // { key: "45", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
  // { key: "46", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
  // { key: "74", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
  // { key: "84", name: "Zhao Liu", age: 32, address: "Wu Han No. 4" },
];

const columns = [
  { title: "name", key: "name1", width: 120 },
  { title: "name1", key: "name", fixed: "left", width: 120 },
  { title: "name", key: "name2", width: 120 },
  { title: "name", key: "name3", width: 120 },
  { title: "name", key: "name4", width: 120 },
  { title: "Address", key: "address", fixed: "right", width: 200 },
  // 每 3 行合并一次年龄
  {
    title: "Age",
    key: "age",
    width: 100,
    rowSpan: 3,
    sorter: (order) => console.log("Sort:", order),
  },
];
</script>
