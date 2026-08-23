<template>
  <Space vertical block>
    <TableColumnSetting
      v-model:hidden-keys="hiddenKeys"
      :columns="columns"
      :disabled-keys="['name']"
      title="显示列"
      reset-text="重置"
    />
    <Table :data="data" :columns="columns" :hidden-column-keys="hiddenKeys" />
  </Space>
</template>

<script setup lang="ts">
import type { Column } from "kui-vue";
import { ref } from "vue";

const hiddenKeys = ref<string[]>([]);
const columns: Column[] = [
  { title: "姓名", key: "name" },
  { title: "部门", key: "department" },
  { title: "状态", key: "status" },
];
const data = [{ key: 1, name: "林晓", department: "产品中心", status: "正常" }];
</script>
