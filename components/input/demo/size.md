<cn>
#### 尺寸
`large` 为大尺寸， `small` 为小尺寸
</cn>

```vue
<template>
  <Space vertical style="width:512px;">
    <Input placeholder="Large Input" size="large" :icon="LogoKui" clearable/>
    <Input placeholder="Base Input" :icon="LogoKui" clearable />
    <Input size="small" placeholder="Small Input" :icon="LogoKui" @icon-click="iconClick" clearable />
  </Space>
</template>
<script setup>
import { LogoKui } from 'kui-icons'
import { message } from "kui-vue";
const iconClick = () => {
  message.info('点击图标事件')
}
</script>
```