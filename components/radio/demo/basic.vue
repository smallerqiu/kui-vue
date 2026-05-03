<template>
  <Space vertical>
    <code>value: {{ checked }}</code>
    <Radio v-model="checked">Radio</Radio>
    <Button @click="checked = !checked" size="small">
      {{ !checked ? "Unchecked" : "Checked" }}
    </Button>
    <Radio label="Radio" />
    <RadioGroup v-model="value" theme="card" :options="items" type="button" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const checked = ref(true);
const value = ref("apple");
const items = [
  { label: "Apple", value: "apple" },
  { label: "Orange", value: "orange" },
  { label: "Banana", value: "banana" },
];
</script>
