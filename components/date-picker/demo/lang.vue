<template>
  <Space wrap vertical>
    <DatePicker mode="year" />
    <DatePicker mode="month" />
    <DatePicker mode="date" />
    <DatePicker mode="time" />
    <DatePicker mode="dateTime" v-model="value" />
  </Space>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import { ref } from "vue";
const value = ref("2021-01-01 20:20:20");

import "dayjs/locale/en";
dayjs.locale("en");
</script>
