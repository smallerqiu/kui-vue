<cn>
#### 预设范围
可以预设常用的日期范围以提高用户体验。。
</cn>

```vue
<template>
  <div>
    <DatePicker :presets="p1" />
    <br />
    <DatePicker :presets="p2" mode="dateRange" />
    <br />
    <DatePicker mode="dateTimeRange" :presets="p2" />
  </div>
</template>
<script>
import dayjs from 'dayjs';
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
      ]
    }
  }
}
</script>
```