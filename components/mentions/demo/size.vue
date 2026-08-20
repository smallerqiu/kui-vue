<template>
  <Space vertical>
    <Mentions size="small" :options="options" placeholder="small size" />
    <Mentions :options="options" placeholder="default size" />
    <Mentions size="large" shape="circle" :options="options" placeholder="large size" />
  </Space>
</template>
<script setup lang="ts">
import { Mentions, Space } from "kui-vue";
const options = ["产品", "设计", "研发"];
</script>
