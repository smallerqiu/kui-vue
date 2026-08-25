<template>
  <ListPanel :summary="`${data.length} records`">
    <template #filters>
      <Input
        v-model="keyword"
        clearable
        placeholder="Search users"
        :icon="Search"
        style="width: 200px"
      />
      <Select v-model="status" clearable placeholder="All statuses" :options="options" />
    </template>
    <Table :data="filtered" :columns="columns" />
  </ListPanel>
</template>
<script setup lang="ts">
import { Search } from "kui-icons";
import type { Column } from "kui-vue";
import { computed, ref } from "vue";
const keyword = ref("");
const status = ref<string>();
const options = [
  { label: "Active", value: "Active" },
  { label: "Disabled", value: "Disabled" },
];
const columns: Column[] = [
  { title: "Name", key: "name" },
  { title: "Status", key: "status" },
];
const data = [
  { key: 1, name: "Alex", status: "Active" },
  { key: 2, name: "Mia", status: "Disabled" },
];
const filtered = computed(() =>
  data.filter(
    (item) =>
      (!keyword.value || item.name.includes(keyword.value)) &&
      (!status.value || item.status === status.value),
  ),
);
</script>
