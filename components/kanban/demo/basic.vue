<template>
  <Kanban :columns="columns" :data="tasks" @move="move">
    <template #item="{ item }">
      <Card size="small" bordered>{{ item.title }}</Card>
    </template>
  </Kanban>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { KanbanItemData, KanbanMoveEvent } from "kui-vue";
const columns = [
  { key: "todo", title: "Todo", color: "#87909c" },
  { key: "doing", title: "Doing", color: "#3a95ff" },
  { key: "done", title: "Done", color: "#22a06b" },
];
const tasks = ref<KanbanItemData[]>([
  { id: 1, status: "todo", title: "Define requirements" },
  { id: 2, status: "doing", title: "Build component" },
]);
const move = ({ item, to }: KanbanMoveEvent) => {
  item.status = to;
};
</script>
