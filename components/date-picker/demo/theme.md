<cn>
### 奇葩的主题
奇奇怪怪的东西
</cn>
<en>
### Weird Theme
Strange things.
</en>

```vue
<template>
  <Space vertical>
    <DatePicker shape="circle" />
    <DatePicker theme="light" />
    <DatePicker :dateIcon="ArrowDown" placeholder="Custom Icon" />
    <DatePicker :bordered="false" placeholder="No Border" theme="light" />

    <DatePicker mode="dateRange" theme="light" />
  </Space>
</template>
<script setup>
import { ArrowDown } from "kui-icons";
</script>
```
