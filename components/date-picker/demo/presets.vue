<template>
  <Space wrap vertical>
    <DatePicker :presets="p1" />
    <DatePicker :presets="p2" mode="dateRange" />
    <DatePicker mode="dateTimeRange" :presets="p2" />
    <br />
    <code>slots header and footer</code>
    <DatePicker v-model="value1">
      <template #header="{ emit }">
        <Button @click="setDate1(emit)">昨天</Button>
      </template>
    </DatePicker>
    <DatePicker v-model="value2" mode="dateRange">
      <template #footer="{ emit }">
        <Button @click="setDate2(emit)">7天前</Button>
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
  { label: "昨天", value: () => dayjs().add(-1, "d") },
  { label: "7天前", value: () => dayjs().add(-7, "d") },
  { label: "上个月", value: () => dayjs().add(-1, "month") },
];
const p2 = [
  { label: "最近7天", value: () => [dayjs().add(-7, "d"), dayjs()] },
  { label: "最近14天", value: () => [dayjs().add(-14, "d"), dayjs()] },
  { label: "最近30天", value: () => [dayjs().add(-30, "d"), dayjs()] },
  { label: "最近90天", value: () => [dayjs().add(-90, "d"), dayjs()] },
];
</script>
