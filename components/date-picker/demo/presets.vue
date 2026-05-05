<template>
  <Space wrap vertical>
    <DatePicker :presets="p1" />
    <DatePicker :presets="p2" mode="dateRange" />
    <DatePicker mode="dateTimeRange" :presets="p2" />
    <br />
    <code>slots header and footer</code>
    <DatePicker v-model="value1">
      <template #header="{ emit }">
        <Button @click="setDate1(emit)">Yesterday</Button>
      </template>
    </DatePicker>
    <DatePicker v-model="value2" mode="dateRange">
      <template #footer="{ emit }">
        <Button @click="setDate2(emit)">7 days ago</Button>
      </template>
    </DatePicker>
  </Space>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import { ref } from "vue";
const value1 = ref();
const value2 = ref([]);
const setDate1 = (emit: (fn: any) => void) => {
  let date = dayjs().add(-1, "d");
  emit(date);
};
const setDate2 = (emit: (fn: any) => void) => {
  let date = [dayjs().add(-7, "d"), dayjs()];
  emit(date);
};
const p1 = [
  { label: "Yesterday", value: () => dayjs().add(-1, "d") },
  { label: "7 days ago", value: () => dayjs().add(-7, "d") },
  { label: "Last month", value: () => dayjs().add(-1, "month") },
];
const p2 = [
  { label: "Last 7 days", value: () => [dayjs().add(-7, "d"), dayjs()] },
  { label: "Last 14 days", value: () => [dayjs().add(-14, "d"), dayjs()] },
  { label: "Last 30 days", value: () => [dayjs().add(-30, "d"), dayjs()] },
  { label: "Last 90 days", value: () => [dayjs().add(-90, "d"), dayjs()] },
];
</script>
