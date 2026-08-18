<template>
  <Mentions
    v-model="value"
    :triggers="['@', '#']"
    :options="options"
    placeholder="输入 @ 提及成员，输入 # 关联话题"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Mentions } from "kui-vue";
const value = ref("");
const options = ["xiaobei", "前端", "组件库", "设计系统"];
</script>
