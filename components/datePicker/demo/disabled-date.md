<cn>
### 不可选择日期和时间
可用 `disabledDate` 和 `disabledTime` 分别禁止选择部分日期和时间.
</cn>

```vue
<template>
  <Space wrap vertical>
    <code>not before than today</code>
    <DatePicker :disabledDate="disabledDate" />
    <code>not before 09:30</code>
    <DatePicker :disabledTime="disabledTime1" mode="time" />
    <code>not before 12:30 today</code>
    <DatePicker
      mode="dateTimeRange"
      :disabledDate="disabledDate"
      :disabledTime="disabledTime2"
    />
  </Space>
</template>
<script setup>
import dayjs from "dayjs";

const disabledDate = (current) => {
  return current && current < dayjs().endOf("day");
};
const disabledTime1 = (date) => {
  return date < new Date(date.getTime()).setHours(9, 30, 0, 0);
};
const disabledTime2 = (date) => {
  return date < new Date(date.getTime()).setHours(12, 30, 0, 0);
};
</script>
```
