<cn>
### 表头分组 
columns[n] 可以内嵌 children，以渲染分组表头。
</cn>
<en>
### Grouped Headers
Columns[n] can nest children to render grouped headers.
</en>

```vue
<template>
  <Table :data="data" :columns="columns" bordered :scroll="{ x: true, y: 300 }">
  </Table>
</template>
<script setup>
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
const columns = [
  {
    title: "Name",
    key: "name",
    width: 120,
    fixed: "left",
  },
  {
    title: "Other",
    children: [
      {
        title: "Age",
        key: "age",
        sorter: true,
      },
      {
        title: "Address",
        children: [
          {
            title: "Street",
            key: "street",
          },
          {
            title: "Block",
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
```
