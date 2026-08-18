<template>
  <InputTag v-model="tags" :separators="[',', ';']" placeholder="使用逗号或分号创建标签" />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { InputTag } from "kui-vue";
const tags = ref<string[]>([]);
</script>
