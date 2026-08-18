<template>
  <Space vertical>
    <code>{{ tags.join(" / ") }}</code>
    <InputTag v-model="tags" />
    <Button size="small" @click="tags = ['Vue', 'Vite']">重置</Button>
  </Space>
</template>
<script setup lang="ts">
import { Button, InputTag, Space } from "kui-vue";
import { ref } from "vue";
const tags = ref(["Vue", "TypeScript"]);
</script>
