<template>
  <Segmented v-model="value" :options="options">
    <template #label="{ option, selected }">
      <span class="mode-label" :class="{ selected }">
        <i :style="{ background: option.color }"></i>
        {{ option.label }}
        <kbd>{{ option.shortcut }}</kbd>
      </span>
    </template>
  </Segmented>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("preview");
const options = [
  { label: "编辑", value: "edit", shortcut: "⌘1", color: "#7c5cff" },
  { label: "预览", value: "preview", shortcut: "⌘2", color: "#18a058" },
  { label: "对比", value: "compare", shortcut: "⌘3", color: "#f59e0b" },
];
</script>

<style scoped>
.mode-label {
  display: inline-flex;
  gap: 7px;
  align-items: center;
}
.mode-label i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.mode-label kbd {
  padding: 1px 4px;
  color: var(--kui-color-text-description);
  font: inherit;
  font-size: 11px;
  line-height: 16px;
  background: var(--kui-color-bg-2);
  border-radius: 3px;
}
.mode-label.selected kbd {
  color: var(--kui-color-primary);
}
</style>
