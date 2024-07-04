<template>
  <div>
    <DatePicker :presets="p1" v-model="d1" mode="dateTime"/>
    <br />
    <DatePicker :presets="p2" mode="dateRange" v-model="dates" />
    <br />
    <DatePicker mode="dateTimeRange" :presets="p2" v-model="dates" />
  </div>
</template>
<script>
import dayjs from 'dayjs';
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)
export default {
  data() {
    return {
      p1: [
        { label: '昨天', value: dayjs().add(-1, 'd') },
        { label: '7天前', value: dayjs().add(-7, 'd') },
        { label: '上个月', value: dayjs().add(-1, 'month') },
      ],
      p2: [
        { label: '最近7天', value: [dayjs().add(-7, 'd'), dayjs()] },
        { label: '最近14天', value: [dayjs().add(-14, 'd'), dayjs()] },
        { label: '最近30天', value: [dayjs().add(-30, 'd'), dayjs()] },
        { label: '最近90天', value: [dayjs().add(-90, 'd'), dayjs()] },
      ],
      d1: dayjs(),
      dates: [dayjs().utcOffset(0).add(-12, 'h'), dayjs().utcOffset(0)],
    }
  }
}
</script>