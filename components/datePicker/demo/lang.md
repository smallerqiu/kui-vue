<cn>
### 多语言
DatePicker 支持多语言。依赖 `dayjs`.
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
import en from "kui-vue/locale/en";
import { ref } from "vue";
import dayjs from "dayjs";
const value = ref("2021-01-01 20:20:20");

import "dayjs/locale/en";
dayjs.locale("en");
</script>
```
