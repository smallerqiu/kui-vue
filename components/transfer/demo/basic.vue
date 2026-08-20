<template>
  <Transfer v-model="selected" :data-source="items" :titles="['Available', 'Selected']" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const selected = ref<(string | number)[]>([2]);
const items = Array.from({ length: 8 }, (_, i) => ({
  key: i + 1,
  title: `Item ${i + 1}`,
  disabled: i === 4,
}));
</script>
