<template>
  <ListPanel summary="Total 128 users" size="small" shape="square">
    <Table :data="data" :columns="columns" size="small" />
    <template #footer><Page :total="128" :page-size="10" show-total /></template>
  </ListPanel>
</template>
<script setup lang="ts">
import type { Column } from "kui-vue";
const columns: Column[] = [
  { title: "Name", key: "name" },
  { title: "Email", key: "email" },
];
const data = [{ key: 1, name: "Alex", email: "alex@example.com" }];
</script>
