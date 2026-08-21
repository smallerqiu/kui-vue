<template>
  <div class="demo-list">
    <Transfer v-model="selected" :data-source="items" :titles="['成员', '项目成员']" />
    <Transfer v-model="selected" disabled :data-source="items" :titles="['成员', '项目成员']" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selected = ref<(string | number)[]>([2]);
const items = [
  { key: 1, title: "Ava", description: "Product designer" },
  { key: 2, title: "Leo", description: "Frontend developer" },
  { key: 3, title: "Mia", description: "Project owner", disabled: true },
  { key: 4, title: "Noah", description: "QA engineer" },
];
</script>

<style scoped>
.demo-list {
  display: grid;
  gap: 24px;
}
</style>
