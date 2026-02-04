<cn>
### 尺寸
`large` 为大尺寸， `small` 为小尺寸
</cn>

```vue
<template>
  <Space vertical block>
    <InputNumber placeholder="Large Input" size="large" :icon="LogoKui" clearable />
    <InputNumber placeholder="Base Input" :icon="LogoKui" clearable />
    <InputNumber size="small" placeholder="Small Input" :icon="LogoKui" clearable />
  </Space>
</template>
<script setup>
import { LogoKui } from "kui-icons";
</script>
```
