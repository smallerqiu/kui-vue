<template>
  <Space vertical>
    <Mentions size="small" theme="plain" :options="options" placeholder="small / plain" />
    <Mentions shape="square" theme="outline" :options="options" placeholder="square / outline" />
    <Mentions size="large" shape="circle" :options="options" placeholder="large / circle" />
  </Space>
</template>
<script setup lang="ts">
import { Mentions, Space } from "kui-vue";
const options = ["产品", "设计", "研发"];
</script>
