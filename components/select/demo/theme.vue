<template>
  <Space vertical align="start" block style="width: 300px;max-width:100%;">
    <Select shape="circle" :options="options" placeholder="A circle Input" />
    <Select shape="circle" :icon="Search" :options="options" placeholder="A circle Input with icon" />
    <Select :options="options" placeholder="No Arrow" :showArrow="false" />
    <Select :options="options" placeholder="Custom Arrow" :arrowIcon="CaretDown" />
    <Select multiple v-model="value" filterable theme="light" :options="options" />
    <Select filterable theme="solid" :options="options" placeholder="Light theme" />
    <Select :bordered="false" theme="solid" :options="options" placeholder="No Border" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Search, CaretDown } from "kui-icons";

const value = ref(["1", "3"]);
const options = [
  { label: "Apple", value: "1" },
  { label: "Orange", value: "2" },
  { label: "Banana", value: "3" },
  { label: "Pear", value: "4" },
];
</script>