<template>
  <Space wrap vertical>
    <code>not before than today</code>
    <DatePicker :disabledDate="disabledDate" />
    <code>not before 09:30</code>
    <DatePicker :disabledTime="disabledTime1" mode="time" />
    <code>not before 12:30 today</code>
    <DatePicker mode="dateTimeRange" :disabledDate="disabledDate" :disabledTime="disabledTime2" />
  </Space>
</template>
<script setup lang="ts">
import dayjs from "dayjs";

const disabledDate = (current: Date) => {
  return current && current < dayjs().endOf("day").toDate();
};
const disabledTime1 = (date: Date) => {
  const target = new Date(date);
  target.setHours(9, 30, 0, 0);
  return date < target;
};
const disabledTime2 = (date: Date) => {
  const target = new Date(date);
  target.setHours(12, 30, 0, 0);
  return date < target;
};
</script>
