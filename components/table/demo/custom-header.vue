<template>
  <Table :data="data" :columns="columns">
    <!-- 通过template 定义表头 ，slot 以 `header-` 开头-->
    <template #header-age="{ value }">
      <Flex size="small">
        {{ value }}
        <Tooltip title="How old are you?">
          <Icon :type="CircleAlert" size="18" color="#777" />
        </Tooltip>
      </Flex>
    </template>
    <template #action="{ record }">
      <Button size="small" @click="() => show(record)">more</Button>
    </template>

    <template #header-address="{ value }">
      <Flex size="small">
        {{ value }}
        <Tooltip title="Where are you from?">
          <Icon :type="CircleAlert" size="18" color="#777" />
        </Tooltip>
      </Flex>
    </template>
  </Table>
</template>
<script setup lang="ts">
import { CircleAlert } from "kui-icons";
import { modal, type Column } from "kui-vue";
const data = [
  {
    key: "0",
    name: "Li Lei",
    age: 32,
    address: "Wu Han Guanggu No. 328",
  },
  {
    key: "1",
    name: "Liu Hao",
    age: 28,
    address: "Wu Han Hongshan No. 128",
  },
  { key: "2", name: "Hu Cong", age: 28, address: "Wu Han Nanhu No. 198" },
  { key: "3", name: "Qiu", age: 28, address: "Wu Han Nanhu No. 188" },
];
const columns: Column[] = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
  {
    title: "Address",
    key: "address",
  },
  {
    title: "Operate",
    key: "action",
    width: 90,
  },
];
const show = (record: any) => {
  modal.info({
    title: "More",
    content: `My name is ${record.name}`,
  });
};
</script>
