<template>
  <Space vertical block>
    Select:
    <Select :width="220" />
    Table:
    <Table :data="[]" :columns="columns" />
  </Space>
</template>
<script setup lang="ts">
import type { Column } from "kui-vue";

const columns: Column[] = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
];
</script>
