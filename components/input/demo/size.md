<cn>
### 尺寸
`large` 为大尺寸， `small` 为小尺寸
</cn>
<en>
### Size
`large` for large size, `small` for small size.
</en>

```vue
<template>
  <Space vertical block>
    <Input placeholder="Large Input" size="large" :icon="LogoKui" clearable />
    <Input placeholder="Base Input" :icon="LogoKui" clearable />
    <Input
      size="small"
      placeholder="Small Input"
      :icon="LogoKui"
      @icon-click="iconClick"
      clearable
    />
  </Space>
</template>
<script setup>
import { LogoKui } from "kui-icons";
import { message } from "kui-vue";
const iconClick = () => {
  message.info("You click the icon");
};
</script>
```
