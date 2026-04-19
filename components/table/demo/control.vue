<template>
  <div>
    <Space wrap>
      Size:<RadioGroup v-model="size" size="small" type="button">
        <RadioButton value="large" label="Large" />
        <RadioButton value="default" label="Default" />
        <RadioButton value="small" label="Small" />
      </RadioGroup>
      Border: <k-switch v-model="bordered" />
      Loading:
      <k-switch v-model="loading" />
      Checkbox: <k-switch v-model="checkable" />
      Empty:
      <k-switch v-model="empty" @change="setEmpty" />
      Striped:
      <k-switch v-model="striped" />
    </Space>
    <Table
      :data="dataSource"
      :columns="columns"
      :loading="loading"
      :size="size"
      :striped="striped"
      :bordered="bordered"
      :checkable="checkable"
    >
      <template #header> <div>header</div> </template>
      <template #footer> <div>footer</div> </template>
      <template #tags="{ value }">
        <Space>
          <Tag v-for="tag in value" :key="tag" :color="tag == 'Python' ? 'green' : 'blue'">
            {{ tag }}
          </Tag>
        </Space>
      </template>
      <template #gender="{ value }">
        <Icon
          :type="value == 1 ? Moon : Sunny"
          :color="value == 1 ? 'blue' : '#f50cff'"
          size="15"
        />
      </template>
      <template #action>
        <Button size="small">test</Button>
      </template>
    </Table>
  </div>
</template>
<script setup lang="ts">
import { Moon, Sunny } from "kui-icons";
import type { Column, SizeType } from "kui-vue";
import { ref } from "vue";
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
const columns: Column[] = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age", sorter: true },
  { title: "Gender", key: "gender" },
  { title: "Address", key: "address" },
  { title: "Tags", key: "tags" },
  { title: "Operate", key: "action" },
];
const size = ref<SizeType>("default");
const bordered = ref(true);
const checkable = ref(false);
const loading = ref(false);
const empty = ref(false);
const dataSource = ref(data);
const striped = ref(false);

const setEmpty = (empty: boolean) => {
  dataSource.value = empty ? [] : data;
};
</script>
