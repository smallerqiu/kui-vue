<cn>
#### 尺寸
`large` 为大尺寸， `small` 为小尺寸
</cn>

```vue
<template>
  <div style="width:512px;">
    <InputNumber placeholder="Large Input" size="large" :icon="LogoKui" clearable />
    <br/>
    <br/>
    <InputNumber placeholder="Base Input" :icon="LogoKui" clearable />
    <br/>
    <br/>
    <InputNumber size="small" placeholder="Small Input" :icon="LogoKui" clearable />
  </div>
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