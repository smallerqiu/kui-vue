<template>
  <Space vertical>
    <Mentions placement="bottom-left" :options="options" placeholder="默认向下展开，输入 @" />
    <Mentions placement="top-right" :options="options" placeholder="优先向上展开，输入 @" />
  </Space>
</template>
<script setup lang="ts">
import { Mentions, Space } from "kui-vue";
const options = ["小北", "设计团队", "开发团队"];
</script>
