<cn>
### 自定义表头
一个可以自定义表头的表格  , 可以通过 `#header-`定义表头
</cn>

```vue
<template>
  <Table :data="data" :columns="columns">
    <!-- 通过template 定义表头 ，slot 以 `header-` 开头-->
    <template #header-age="{ value }">
      <Flex size="small">
        {{ value }}
        <Tooltip title="How old are you?">
          <Icon :type="AlertCircle" size="18" color="#777" />
        </Tooltip>
      </Flex>
    </template>
    <template #action="{ value, record, col }">
      <Button size="small" @click="(e) => show(record)">more</Button>
    </template>

    <template #header-address="{ value }">
      <Flex size="small">
        {{ value }}
        <Tooltip title="Where are you from?">
          <Icon :type="AlertCircle" size="18" color="#777" />
        </Tooltip>
      </Flex>
    </template>
  </Table>
</template>
<script setup>
import { modal } from "kui-vue";
import { AlertCircle } from "kui-icons";
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
  { key: "3", name: "Chuchur", age: 28, address: "Wu Han Nanhu No. 188" },
];
const columns = [
  { title: "Name", key: "name" },
  { title: "年龄", key: "age" },
  {
    title: "地址",
    key: "address",
  },
  {
    title: "Operate",
    key: "action",
    width: 90,
  },
];
const show = (record) => {
  modal.info({
    title: "More",
    content: `My name is ${record.name}`,
  });
};
</script>
```
