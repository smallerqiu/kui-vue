<cn>
#### 尺寸
`large` 为大尺寸， `small` 为小尺寸
</cn>

```vue
<template>
  <Space vertical style="width:512px;">
    <Input placeholder="Large Input" size="large" :icon="LogoKui" clearable/>
    <Input placeholder="Base Input" :icon="LogoKui" clearable />
    <Input size="small" placeholder="Small Input" :icon="LogoKui" @icon-click="$Message.info('点击图标事件')" clearable />
  </Space>
</template>
<script>
import { LogoKui } from 'kui-icons'
export default{
  data() {
    return {
      LogoKui
    }
  }
}
</script>
```