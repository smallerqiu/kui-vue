<template>
  <Tree virtual :data="data" :height="320" :item-height="28" />
</template>

<script setup lang="ts">
const data = Array.from({ length: 5000 }, (_, index) => ({
  key: `node-${index}`,
  title: `Node ${index + 1}`,
}));
</script>
