<template>
  <Space vertical block>
    <code>v-model: {{ value }}</code>
    <Select
      v-model="value"
      :options="options"
      multiple
      allowCreate
      block
      placeholder="输入内容并按 Enter 创建选项"
    />
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref<string[]>([]);
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Orange", value: "Orange" },
  { label: "Banana", value: "Banana" },
];
</script>
