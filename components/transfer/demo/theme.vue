<template>
  <div class="demo-list">
    <Transfer v-model="outlineSelected" searchable theme="outline" :data-source="items" />
    <Transfer v-model="fillSelected" searchable theme="fill" :data-source="items" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const outlineSelected = ref<(string | number)[]>([4]);
const fillSelected = ref<(string | number)[]>([4]);
const items = ["Design", "Development", "Testing", "Deployment"].map((title, index) => ({
  key: index + 1,
  title,
}));
</script>

<style scoped>
.demo-list {
  display: grid;
  gap: 24px;
}
</style>
