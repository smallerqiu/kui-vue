<template>
  <Space vertical>
    <AutoComplete size="small" theme="plain" :options="options" placeholder="small / plain" />
    <AutoComplete shape="square" theme="outline" :options="options" placeholder="square / outline" />
    <AutoComplete size="large" shape="circle" :options="options" placeholder="large / circle" />
  </Space>
</template>
<script setup lang="ts">
import { AutoComplete, Space } from "kui-vue";
const options = ["Vue", "Vite", "Vitest"];
</script>
