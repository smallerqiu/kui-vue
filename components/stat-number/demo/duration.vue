<template>
  <Space vertical>
    <Button @click="value = value === 12345 ? 54321 : 12345">12,345 ↔ 54,321</Button>
    <Space v-for="duration in [0, 0.6, 1.2, 2]" :key="duration">
      <code>{{ duration }}s</code>
      <StatNumber :model-value="value" type="rollup" :duration="duration" :auto-animate="false" />
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref(12345);
</script>
