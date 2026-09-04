<template>
  <Space wrap vertical>
    <code>start date: {{ start1 }}</code>
    <code>end date: {{ end1 }}</code>
    <DatePicker mode="dateRange" v-model:startDate="start1" v-model:endDate="end1" />
    <br />
    <code>start date: {{ start2 }}</code>
    <code>end date: {{ end2 }}</code>
    <DatePicker mode="dateTimeRange" v-model:startDate="start2" v-model:endDate="end2" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const start1 = ref("2025-10-01");
const end1 = ref("2025-11-25");
const start2 = ref("2025-09-01 10:10:10");
const end2 = ref("2025-10-01 21:28:28");
</script>
