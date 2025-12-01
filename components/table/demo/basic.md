<cn>
### 基本用法
一个普通的表格
</cn>

```vue
<template>
  <Table :data="data" :columns="columns" @rowClick="rowClick" :sticky="52">
    <template #tags="{ value }">
      <Space>
        <Tag
          v-for="tag in value"
          :key="tag"
          :color="tag == 'Python' ? 'green' : 'blue'"
          >{{ tag }}</Tag
        >
      </Space>
    </template>
    <template #gender="{ value }">
      <Icon
        :type="value == 1 ? Sunny : Moon"
        :color="value == 1 ? 'blue' : '#f50cff'"
        size="15"
      />
    </template>
    <template #action="{ value, record, col }">
      <Button size="small" @click.stop="(e) => show(record)">more</Button>
    </template>
  </Table>
</template>
<script setup>
import { Sunny, Moon } from "kui-icons";
import { message, modal } from "kui-vue";
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
    name: "Qiu",
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
  { title: "Action", key: "action" },
];
const show = (record) => {
  modal.info({
    title: "Hi",
    content: `My name is ${record.name}`,
  });
};
const rowClick = (data) => {
  message.info("Test row click: " + data.name);
};
</script>
```
