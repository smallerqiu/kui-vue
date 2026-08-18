<template>
  <Mentions
    v-model="value"
    :options="options"
    :filter-option="startsWith"
    placeholder="输入 @ 后按名称开头过滤"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Mentions, type MentionOption } from "kui-vue";
const value = ref("");
const options = ["Alice", "Alex", "Bob", "Bella"];
const startsWith = (query: string, option: MentionOption) =>
  option.value.toLowerCase().startsWith(query.toLowerCase());
</script>
