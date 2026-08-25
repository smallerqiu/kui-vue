<template>
  <ListPanel :selected-count="selectedKeys.length" summary="3 users">
    <template #filters>
      <Input placeholder="Search users" :icon="Search" style="width: 200px" />
    </template>
    <template #selection="{ count }">
      <strong>{{ count }} selected</strong>
      <Button size="small" type="danger" theme="plain">Disable</Button>
      <Button size="small" theme="plain" @click="selectedKeys = []">Clear</Button>
    </template>
    <Table v-model:selected-keys="selectedKeys" checkable :data="data" :columns="columns" />
  </ListPanel>
</template>
<script setup lang="ts">
import { Search } from "kui-icons";
import type { Column, TableKey } from "kui-vue";
import { ref } from "vue";
const selectedKeys = ref<TableKey[]>([]);
const columns: Column[] = [
  { title: "Name", key: "name" },
  { title: "Role", key: "role" },
];
const data = [
  { key: 1, name: "Alex", role: "Admin" },
  { key: 2, name: "Mia", role: "Editor" },
  { key: 3, name: "Leo", role: "Viewer" },
];
</script>
