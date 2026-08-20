<template>
  <Mentions
    v-model="value"
    clearable
    placeholder="输入 @ 提及成员"
    :options="['小北', '设计团队', '开发团队']"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Mentions } from "kui-vue";
const value = ref("");
</script>
