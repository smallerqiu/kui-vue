<template>
  <VirtualList :data="items" :height="280" :item-height="40" item-key="id">
    <template #default="{ item, index }">
      <div class="virtual-row">
        <span>#{{ index + 1 }}</span>
        <span>{{ item.label }}</span>
      </div>
    </template>
  </VirtualList>
</template>

<script setup lang="ts">
const items = Array.from({ length: 10000 }, (_, index) => ({
  id: index + 1,
  label: `Virtual item ${index + 1}`,
}));
</script>

<style scoped>
.virtual-row {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid var(--kui-color-border);
  gap: 16px;
}
</style>
