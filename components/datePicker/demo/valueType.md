<cn>
### 输出类型
通过 `valueType` 指定输出类型
</cn>

```vue
<template>
  <Space wrap vertical>
    <code>string, v-model: {{ value1 }}</code>
    <DatePicker v-model="value1" valueType="string" />
    <code>format, v-model: {{ value2 }}</code>
    <DatePicker v-model="value2" format="YYYY/MM/DD" />
    <code>date, v-model: {{ value3 }}</code>
    <DatePicker v-model="value3" valueType="date" />
    <code>timestamp, v-model: {{ value4 }}</code>
    <DatePicker v-model="value4" valueType="timestamp" />
    <code>unix, v-model: {{ value5 }}</code>
    <DatePicker v-model="value5" valueType="unix" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref("2025-11-30");
const value2 = ref("2025/11/30");
const value3 = ref(new Date());
const value4 = ref(new Date().getTime());
const value5 = ref(Math.floor(Date.now() / 1000));
</script>
```
