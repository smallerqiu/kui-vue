<cn>
#### 尺寸
`large` 为大尺寸， `small` 为小尺寸
</cn>

```vue
<template>
  <Space style="width:512px;" vertical>
    <InputNumber
      placeholder="Large Input"
      size="large"
      :icon="LogoKui"
      clearable
    />
    <InputNumber placeholder="Base Input" :icon="LogoKui" clearable />
    <InputNumber
      size="small"
      placeholder="Small Input"
      :icon="LogoKui"
      clearable
    />
  </Space>
</template>
<script>
import { LogoKui } from "kui-icons";
export default {
  data() {
    return {
      LogoKui,
    };
  },
};
</script>
```
