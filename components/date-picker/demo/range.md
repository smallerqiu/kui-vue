<cn>
### 时间区域
支持时间日期区间选择。取值建议用 `startDate` , `endDate`
</cn>
<en>
### Date Range
Supports date and time range selection. It's recommended to use `startDate` and `endDate` for values.
</en>

```vue
<template>
  <Space wrap vertical>
    <code>start date: {{ start1 }}</code>
    <code>end date: {{ end1 }}</code>
    <DatePicker
      mode="dateRange"
      v-model="value1"
      v-model:startDate="start1"
      v-model:endDate="end1"
    />
    <br />
    <code>start date: {{ start2 }}</code>
    <code>end date: {{ end2 }}</code>
    <DatePicker
      mode="dateTimeRange"
      v-model="value2"
      v-model:startDate="start2"
      v-model:endDate="end2"
    />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const start1 = ref("2025-10-01");
const end1 = ref("2025-11-25");
const value1 = ref([start1.value, end1.value]);

const start2 = ref("2025-09-01 10:10:10");
const end2 = ref("2025-10-01 21:28:28");
const value2 = ref([start2.value, end2.value]);
</script>
```
