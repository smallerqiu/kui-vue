<template>
  <Space vertical block>
    Select:
    <Select :width="220" />
    Table:
    <Table :data="[]" :columns="columns" />
  </Space>
</template>
<script setup lang="ts">
const columns = [{ title: "Name" }, { title: "Age" }];
</script>