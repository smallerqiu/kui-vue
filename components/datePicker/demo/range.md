<cn>
### 时间区域
支持时间日期区间选择。取值建议用 `startDate` , `endDate`
</cn>

```vue
<template>
  <Space wrap vertical>
    <code>start date: {{ start1 }}</code>
    <code>end date: {{ end1 }}</code>
    <DatePicker
      mode="dateRange"
      v-model="value1"
      :startDate.sync="start1"
      :endDate.sync="end1"
    />
    <br />
    <code>start date: {{ start2 }}</code>
    <code>end date: {{ end2 }}</code>
    <DatePicker
      mode="dateTimeRange"
      v-model="value2"
      :startDate.sync="start2"
      :endDate.sync="end2"
    />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const start1 = ref("2025-10-01");
const end1 = ref("2025-11-25");
const value1 = ref([start1.value, end1.value]);

const start2 = ref("2025-09-01 10:10:10");
const end2 = ref("2025-10-01 21:28:28");
const value2 = ref([start2.value, end2.value]);
</script>
```
