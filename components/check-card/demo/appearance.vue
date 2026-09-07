<template>
  <div class="demo-list">
    <CheckCardGroup
      v-model="outline"
      theme="outline"
      shape="square"
      size="small"
      :options="items"
    />
    <CheckCardGroup v-model="fill" theme="fill" shape="circle" size="large" :options="items" />
    <CheckCardGroup v-model="disabled" disabled :options="items" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { CheckCardValue } from "kui-vue";

const outline = ref<CheckCardValue>("basic");
const fill = ref<CheckCardValue>("pro");
const disabled = ref<CheckCardValue>("basic");
const items = [
  { value: "basic", title: "Basic", description: "Essential features" },
  { value: "pro", title: "Pro", description: "Advanced capabilities" },
];
</script>

<style scoped>
.demo-list {
  display: grid;
  gap: 24px;
}
</style>
