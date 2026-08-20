<template>
  <Transfer v-model="selected" searchable :data-source="items" :operations="['Add', 'Remove']" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const selected = ref<(string | number)[]>([]);
const items = ["Design", "Development", "Testing", "Deployment"].map((title, key) => ({
  key,
  title,
}));
</script>
