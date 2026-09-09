<template>
  <Transfer v-model="selected" :data-source="visibleItems" :titles="['全部成员', '已选择']">
    <template #footer="{ direction }">
      <Page
        v-if="direction === 'left'"
        v-model:page="page"
        simple
        show-elevator
        size="small"
        :show-total="false"
        :total="sourceItems.length"
        :page-size="pageSize"
      />
      <span v-else>已选择 {{ selected.length }} 项</span>
    </template>
  </Transfer>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const page = ref(1);
const pageSize = 5;
const selected = ref<(string | number)[]>([2]);
const items = Array.from({ length: 23 }, (_, index) => ({
  key: index + 1,
  title: `Member ${index + 1}`,
}));
const sourceItems = computed(() => items.filter((item) => !selected.value.includes(item.key)));
const targetItems = computed(() => items.filter((item) => selected.value.includes(item.key)));
watch(
  () => sourceItems.value.length,
  (total) => {
    page.value = Math.min(page.value, Math.ceil(total / pageSize) || 1);
  },
);
const visibleItems = computed(() => {
  const start = (page.value - 1) * pageSize;
  return [...sourceItems.value.slice(start, start + pageSize), ...targetItems.value];
});
</script>
