<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from "vue";
import { Button, Input, Page, Space, Table } from "kui-vue";

type Row = { id: number; name: string };
const allRows: Row[] = Array.from({ length: 47 }, (_, index) => ({
  id: index + 1,
  name: `用户 ${index + 1}`,
}));
const columns = [
  { title: "编号", key: "id" },
  { title: "姓名", key: "name" },
];
const keyword = ref("");
const query = ref("");
const page = ref(1);
const pageSize = ref(10);
const data = ref<Row[]>([]);
const total = ref(0);
const loading = ref(false);
const error = ref("");
let requestId = 0;

async function load() {
  const id = ++requestId;
  loading.value = true;
  error.value = "";
  const params = { query: query.value, page: page.value, pageSize: pageSize.value };
  try {
    // Replace this local mock with your paginated API returning { data, total }.
    await new Promise((resolve) => setTimeout(resolve, 200));
    const rows = allRows.filter((row) => row.name.includes(params.query));
    if (id !== requestId) return;
    total.value = rows.length;
    data.value = rows.slice((params.page - 1) * params.pageSize, params.page * params.pageSize);
  } catch {
    if (id === requestId) error.value = "加载失败，请重试";
  } finally {
    if (id === requestId) loading.value = false;
  }
}
function search() {
  query.value = keyword.value.trim();
  page.value = 1;
}
watch([query, page, pageSize], load, { immediate: true });
onBeforeUnmount(() => {
  requestId++;
});
</script>

<template>
  <Space vertical block>
    <Space>
      <Input v-model="keyword" placeholder="搜索姓名" />
      <Button type="primary" @click="search">搜索</Button>
      <Button :disabled="loading" @click="load">刷新</Button>
    </Space>
    <p v-if="error" role="alert">{{ error }}</p>
    <Table :columns="columns" :data="data" :loading="loading" />
    <Page v-model:page="page" v-model:pageSize="pageSize" :total="total" show-sizer />
  </Space>
</template>
