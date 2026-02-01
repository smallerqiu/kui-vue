<cn>
### 基础用法
选择或者手动输入日期,通过 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Space wrap vertical>
    <code>v-model : {{ year }}</code>
    <DatePicker mode="year" v-model="year" />
    <code>v-model : {{ month }}</code>
    <DatePicker mode="month" v-model="month" />
    <code>v-model : {{ date }}</code>
    <DatePicker mode="date" v-model="date" />
    <code>v-model : {{ time }}</code>
    <DatePicker mode="time" v-model="time" />
    <code>v-model : {{ datetime }}</code>
    <DatePicker mode="dateTime" v-model="datetime" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const datetime = ref("2021-01-01 20:20:20");
const time = ref("20:20:20");
const year = ref("2025");
const month = ref("2025-10");
const date = ref("2025-12-12");
</script>
```
