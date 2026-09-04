<template>
  <Kanban
    :columns="columns"
    :data="tickets"
    row-key="key"
    status-key="stage"
    min-column-width="220px"
    @item-click="onClick"
  >
    <template #item="{ item }">
      <Card size="small">{{ item.summary }}</Card>
    </template>
  </Kanban>
</template>
<script setup lang="ts">
import { message, type KanbanItemData } from "kui-vue";
interface Ticket extends KanbanItemData {
  key: string;
  stage: number;
  summary: string;
}
const columns = [
  { key: 0, title: "New" },
  { key: 1, title: "Resolved" },
];
const tickets: Ticket[] = [
  { key: "K-101", stage: 0, summary: "Login page feedback" },
  { key: "K-102", stage: 1, summary: "Update dependencies" },
];
const onClick = (item: KanbanItemData) => message.info(String(item.key));
</script>
