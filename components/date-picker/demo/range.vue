<template>
  <Space wrap vertical>
    <code>start date: {{ start1 }}</code>
    <code>end date: {{ end1 }}</code>
    <DatePicker
      mode="dateRange"
      v-model:startDate="start1"
      v-model:endDate="end1"
      valueType="timestamp"
    />
    <br />
    <code>start date: {{ start2 }}</code>
    <code>end date: {{ end2 }}</code>
    <DatePicker mode="dateTimeRange" v-model:startDate="start2" v-model:endDate="end2" />

    <br />
    <code>value: {{ value }}</code>
    <code>start date: {{ start3 }}</code>
    <code>end date: {{ end3 }}</code>
    <DatePicker
      mode="dateTimeRange"
      v-model="value"
      v-model:startDate="start3"
      v-model:endDate="end3"
      valueType="timestamp"
    />
  </Space>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import { ref } from "vue";
const start1 = ref("2025-10-01");
const end1 = ref("2025-11-25");
const start2 = ref("2025-09-01 10:10:10");
const end2 = ref("2025-10-01 21:28:28");

const value = ref<[number, number]>([dayjs().add(-12, "h").valueOf(), dayjs().valueOf()]);
const start3 = ref<number>(dayjs().add(-12, "h").valueOf());
const end3 = ref(dayjs().valueOf());
</script>
