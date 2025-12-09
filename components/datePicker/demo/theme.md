<cn>
### 奇葩的主题
奇奇怪怪的东西
</cn>

```vue
<template>
  <Space vertical>
    <DatePicker shape="circle" />
    <DatePicker theme="light" />
    <DatePicker :dateIcon="ArrowDown" placeholder="自定义日期图标" />
    <DatePicker :bordered="false" placeholder="无边框" theme="light" />

    <DatePicker mode="dateRange" theme="light" />
  </Space>
</template>
<script setup>
import { ArrowDown } from "kui-icons";
</script>
```
