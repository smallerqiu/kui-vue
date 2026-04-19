<template>
  <Table :data="data" :columns="columns" bordered :scroll="{ y: 300 }"> </Table>
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
        sorter: true,
      },
      {
        title: "Address",
        key: "address",
        children: [
          {
            title: "Street",
            key: "street",
          },
          {
            title: "Block",
            key: "block",
            children: [
              {
                title: "Building",
                key: "building",
              },
              {
                title: "Door No.",
                key: "number",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Company",
    key: "Company",
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
