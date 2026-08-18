<template>
  <Space vertical>
    <Mentions :rows="1" :options="options" placeholder="单行外观，输入 @" />
    <Mentions :rows="4" :options="options" placeholder="四行文本域，输入 @" />
  </Space>
</template>
<script setup lang="ts">
import { Mentions, Space } from "kui-vue";
const options = ["小北", "设计团队", "开发团队"];
</script>
