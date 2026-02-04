<cn>
### 尺寸
通过 `small` ,`large` 来设置选择框的大小呈现
</cn>

```vue
<template>
  <Space vertical>
    <RadioGroup v-model="size" type="button">
      <RadioButton value="large" label="Large" />
      <RadioButton value="default" label="Default" />
      <RadioButton value="small" label="Small" />
    </RadioGroup>
    <Space vertical>
      <DatePicker :size="size" :picker-size="size" />
      <DatePicker mode="month" placeholder="请选择月份" :size="size" :picker-size="size" />
      <DatePicker :size="size" mode="dateRange" :picker-size="size" />
    </Space>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const size = ref("default");
</script>
```
