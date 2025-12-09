<cn>
### 基础用法
选择或者手动输入日期,通过 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Space wrap vertical>
    <DatePicker mode="year" />
    <DatePicker mode="month" />
    <DatePicker mode="date" />
    <DatePicker mode="time" />
    <DatePicker mode="dateTime" v-model="value" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value = ref("2021-01-01 20:20:20");
</script>
```
