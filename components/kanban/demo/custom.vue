<template>
  <Kanban :columns="columns" :data="tasks" :draggable="false">
    <template #columnTitle="{ column, items }">
      <Space>
        <Badge :color="column.color" />
        {{ column.title }} ({{ items.length }})
      </Space>
    </template>
    <template #item="{ item }">
      <Card size="small">
        <strong>{{ item.title }}</strong>
        <p>{{ item.owner }}</p>
      </Card>
    </template>
    <template #empty><Empty description="当前没有任务" /></template>
    <template #footer="{ column }">
      <Button block>添加到 {{ column.title }}</Button>
    </template>
  </Kanban>
</template>
<script setup lang="ts">
const columns = [
  { key: "todo", title: "待处理", color: "#87909c" },
  { key: "doing", title: "进行中", color: "#3a95ff" },
  { key: "done", title: "已完成", color: "#22a06b" },
];
const tasks = [
  { id: 1, status: "todo", title: "整理需求", owner: "Mia" },
  { id: 2, status: "todo", title: "确认排期", owner: "Leo" },
  { id: 3, status: "doing", title: "开发看板", owner: "Alex" },
];
</script>
<style scoped>
p {
  margin: 8px 0 0;
  color: var(--kui-color-text-description);
}
</style>
