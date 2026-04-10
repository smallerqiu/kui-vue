<cn>
### 尺寸
通过 `small` ,`large` 来设置选择框的大小呈现
</cn>
<en>
### Size
Use `small` and `large` to set the size of the picker.
</en>

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
      <DatePicker mode="month" :size="size" :picker-size="size" />
      <DatePicker :size="size" mode="dateRange" :picker-size="size" />
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const size = ref("default");
</script>
```
