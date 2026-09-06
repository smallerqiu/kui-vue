<template>
  <Space vertical>
    <code>{{ tags.join(" / ") }}</code>
    <InputTag v-model="tags" />
    <Button size="small" @click="tags = ['Design', 'TypeScript']">重置</Button>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const tags = ref(["Design", "TypeScript"]);
</script>
