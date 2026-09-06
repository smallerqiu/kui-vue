<template>
  <Space vertical>
    <code>已输入 {{ tags.length }} / 3</code>
    <InputTag v-model="tags" :max="3" placeholder="最多输入 3 项" />
    <InputTag
      :value="['Design', 'Develop', 'Test', 'Release']"
      :max-tag-count="2"
      clearable
      placeholder="最多展示 2 项"
    />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const tags = ref(["Design", "Develop"]);
</script>
