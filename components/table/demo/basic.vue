<template>
  <Table :data="data" :columns="columns" @rowClick="rowClick">
    <template #tags="{ value }">
      <Space>
        <Tag v-for="tag in value" :key="tag" :color="tag == 'Python' ? 'green' : 'blue'">{{
          tag
        }}</Tag>
      </Space>
    </template>
    <template #gender="{ value }">
      <Icon :type="value == 1 ? Sun : Moon" :color="value == 1 ? 'blue' : '#f50cff'" size="15" />
    </template>
    <template #action="{ record, rowIndex }">
      <Space>
        <Button size="small" @click.stop="() => moveUp(rowIndex)" :icon="ArrowUp"> </Button>
        <Button size="small" @click.stop="() => moveDown(rowIndex)" :icon="ArrowDown"> </Button>
        <Button size="small" @click.stop="() => deleteRow(rowIndex)" :icon="Trash2"> </Button>
        <Button size="small" @click.stop="() => show(record)">more</Button>
      </Space>
    </template>
  </Table>
</template>
<script setup lang="ts">
import { ArrowDown, ArrowUp, Moon, Sun, Trash2 } from "kui-icons";
import { message, modal, type Column } from "kui-vue";
import { reactive } from "vue";
const data = reactive([
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
]);
const columns: Column[] = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
  { title: "Gender", key: "gender" },
  { title: "Address", key: "address" },
  { title: "Tags", key: "tags" },
  { title: "Operate", key: "action" },
];
const moveUp = (rowIndex: number) => {
  if (rowIndex > 0) [data[rowIndex], data[rowIndex - 1]] = [data[rowIndex - 1], data[rowIndex]];
};
const moveDown = (rowIndex: number) => {
  if (rowIndex < data.length - 1)
    [data[rowIndex], data[rowIndex + 1]] = [data[rowIndex + 1], data[rowIndex]];
};
const deleteRow = (rowIndex: number) => {
  data.splice(rowIndex, 1);
};
const show = (record: any) => {
  modal.info({
    title: "Hi",
    content: `My name is ${record.name}`,
  });
};
const rowClick = (data: any) => {
  message.info("Test row click: " + data.name);
};
</script>
