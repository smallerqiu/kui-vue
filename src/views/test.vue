<template>
  <div>
    <!-- <DatePicker :presets="p1" v-model="d1" mode="dateTime"/> -->
    <br />
    <!-- <DatePicker :presets="presets" mode="dateRange" v-model="dates" /> -->
    <br />
    <DatePicker mode="dateTimeRange" :presets="presets" v-model="dates" />
  </div>
</template>
<script>
import dayjs from 'dayjs';
// var utc = require('dayjs/plugin/utc')
// dayjs.extend(utc)
export default {
  data() {
    return {
      presets: [
        { label: '1天内', value: [dayjs().add(-1, 'd'), dayjs()] },
        { label: '3天内', value: [dayjs().add(-3, 'd'), dayjs()] },
        { label: '7天内', value: [dayjs().add(-7, 'd'), dayjs()] },
      ],
      p2: [
        { label: '最近7天', value: [dayjs().add(-7, 'd'), dayjs()] },
        { label: '最近14天', value: [dayjs().add(-14, 'd'), dayjs()] },
        { label: '最近30天', value: [dayjs().add(-30, 'd'), dayjs()] },
        { label: '最近90天', value: [dayjs().add(-90, 'd'), dayjs()] },
      ],
      d1: dayjs(),
      dates: [dayjs().subtract(2, 'day') * 1, new Date()],
    }
  }
}
</script>