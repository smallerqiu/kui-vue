<template>
  <Table
    virtual
    striped
    :data="data"
    :columns="columns"
    :scroll="{ x: 900, y: 360 }"
    :item-height="44"
    :overscan="6"
  />
</template>

<script setup lang="ts">
import type { Column } from "kui-vue";

const data = Array.from({ length: 10000 }, (_, index) => ({
  key: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  status: index % 3 === 0 ? "Active" : "Pending",
}));
const columns: Column[] = [
  { title: "ID", key: "key", width: 100 },
  { title: "Name", key: "name" },
  { title: "Email", key: "email" },
  { title: "Email1", key: "email1" },
  { title: "Email2", key: "email2" },
  { title: "Email3", key: "email3" },
  { title: "Email4", key: "email4" },
  { title: "Email5", key: "email5" },
  { title: "Status", key: "status", width: 140, fixed: "right" },
];
</script>
