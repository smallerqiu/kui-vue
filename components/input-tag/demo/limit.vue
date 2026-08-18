<template>
  <Space vertical>
    <InputTag v-model="tags" :max="3" placeholder="最多输入 3 项" />
    <span>已输入 {{ tags.length }} / 3</span>
  </Space>
</template>
<script setup lang="ts">
import { InputTag, Space } from "kui-vue";
import { ref } from "vue";
const tags = ref(["设计", "开发"]);
</script>
