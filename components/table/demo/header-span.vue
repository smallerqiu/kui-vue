<template>
  <!-- `scroll.x` 按叶子列宽度之和给（120+100+140+120+120+200+200+100 = 1_100）。
       不给的话这些窄列会被挤到十几个像素，表头文字竖排换行，四层表头能长到 400 多 px，
       比 `scroll.y` 的可视高度还高，等于把表体整个顶出可视区。与 kui-react 同一份配置。 -->
  <Table
    :data="data"
    :columns="columns"
    bordered
    :scroll="{ x: 1100, y: 300 }"
  ></Table>
</template>
<script setup lang="ts">
import type { Column } from "kui-vue";

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: i + 1,
    street: "Lake Park",
    building: "C",
    number: 2035,
    companyAddress: "Lake Street 42",
    companyName: "SoftLake Co",
    gender: "M",
  });
}
const columns: Column[] = [
  {
    title: "Name",
    key: "name",
    width: 120,
    fixed: "left",
  },
  {
    title: "Other",
    key: "other",
    children: [
      {
        title: "Age",
        key: "age",
        width: 100,
        sorter: true,
      },
      {
        title: "Address",
        key: "address",
        children: [
          {
            title: "Street",
            key: "street",
            width: 140,
          },
          {
            title: "Block",
            key: "block",
            children: [
              {
                title: "Building",
                key: "building",
                width: 120,
              },
              {
                title: "Door No.",
                key: "number",
                width: 120,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Company",
    key: "company",
    children: [
      {
        title: "Company Address",
        key: "companyAddress",
        width: 200,
      },
      {
        title: "Company Name",
        key: "companyName",
        width: 200,
      },
    ],
  },
  {
    title: "Gender",
    key: "gender",
    width: 100,
    fixed: "right",
  },
];
</script>
