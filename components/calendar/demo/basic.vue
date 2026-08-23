<template>
  <Calendar v-model="date" :events="events" @event-click="onEventClick" />
</template>
<script setup lang="ts">
import { message, type CalendarEventData } from "kui-vue";
import { ref } from "vue";
const date = ref("2026-08-23");
const events: CalendarEventData[] = [
  { key: 1, date: "2026-08-23", time: "10:00", title: "Product review", color: "#3a95ff" },
  { key: 2, date: "2026-08-25", title: "Release", color: "#22a06b" },
];
const onEventClick = (event: CalendarEventData) => message.info(event.title);
</script>
