<template>
  <div class="segmented-demo">
    <Segmented v-model="value" :options="options" size="small" />
    <Segmented v-model="value" :options="options" block />
    <Segmented v-model="value" :options="options" direction="vertical" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("vue");
const options = [
  { label: "Vue", value: "vue" },
  { label: "React", value: "react" },
  { label: "禁用项", value: "disabled", disabled: true },
];
</script>
<style scoped>
.segmented-demo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
</style>