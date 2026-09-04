<template>
  <Calendar v-model="date" :events="events" :max-events="2">
    <template #extra><Tag color="blue">Team calendar</Tag></template>
    <template #event="{ event }">
      <button class="custom-event" type="button">
        <i :style="{ background: event.color }"></i>
        {{ event.title }}
      </button>
    </template>
    <template #more="{ count }">
      <span class="more">还有 {{ count }} 项</span>
    </template>
  </Calendar>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { CalendarEventData } from "kui-vue";

const date = ref("2026-08-23");
const events: CalendarEventData[] = [
  { key: 1, date: "2026-08-23", title: "需求评审", color: "#3a95ff" },
  { key: 2, date: "2026-08-23", title: "设计同步", color: "#7b61ff" },
  { key: 3, date: "2026-08-23", title: "版本发布", color: "#22a06b" },
];
</script>
<style scoped>
.custom-event {
  display: flex;
  width: 100%;
  gap: 6px;
  align-items: center;
  border: 0;
  background: transparent;
  color: inherit;
}
.custom-event i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.more {
  color: var(--kui-color-primary);
}
</style>
