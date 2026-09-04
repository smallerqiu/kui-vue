<template>
  <Space vertical block>
    <RadioGroup v-model="theme" type="button" :options="themes" />
    <Kanban :columns="columns" :data="tasks" :theme="theme">
      <template #item="{ item }">
        <Card size="small" :theme="theme">{{ item.title }}</Card>
      </template>
    </Kanban>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";

const theme = ref<"fill" | "outline">("fill");
const themes = [
  { label: "Fill", value: "fill" },
  { label: "Outline", value: "outline" },
];
const columns = [
  { key: "todo", title: "Todo", color: "#87909c" },
  { key: "doing", title: "Doing", color: "#3a95ff" },
  { key: "done", title: "Done", color: "#22a06b" },
];
const tasks = [
  { id: 1, status: "todo", title: "Define requirements" },
  { id: 2, status: "todo", title: "Build component" },
];
</script>
