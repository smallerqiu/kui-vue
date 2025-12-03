<cn>
### 勾选
`checkable=true`，即可自动开启多选功能。
</cn>

```vue
<template>
  <Table :data="data" :columns="columns" ref="selection" checkable>
    <template #tags="{ value }">
      <Space>
        <Tag
          v-for="tag in value"
          :key="tag"
          :color="tag == 'Python' ? 'green' : 'blue'"
        >
          {{ tag }}
        </Tag>
      </Space>
    </template>
    <template #action>
      <a href="javascript:;">Edit</a>
      <a href="javascript:;">Delete</a>
    </template>
  </Table>
</template>
<script setup>
const data = [
  {
    key: "0",
    name: "Li Lei",
    gender: 0,
    age: 32,
    address: "Wu Han Guanggu No. 328",
    tags: ["Python", "Java"],
  },
  {
    key: "1",
    name: "Liu Hao",
    gender: 1,
    age: 28,
    address: "Wu Han Hongshan No. 128",
    tags: ["Python", "Java"],
  },
  {
    key: "2",
    name: "Hu Cong",
    gender: 0,
    age: 28,
    address: "Wu Han Nanhu No. 198",
    tags: ["JS", "CSS"],
  },
  {
    key: "3",
    name: "Chuchur",
    gender: 1,
    age: 28,
    address: "Wu Han Nanhu No. 188",
    tags: ["Go", "Python"],
  },
];
const columns = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
  { title: "Gender", key: "gender" },
  { title: "Address", key: "address" },
  { title: "Tags", key: "tags" },
];
</script>
```
