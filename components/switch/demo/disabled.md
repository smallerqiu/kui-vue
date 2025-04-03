<cn>
#### 禁用 / 可控
通过 `disabled` 属性设置组件是否被禁用
</cn>

```vue
<template>
  <Space vertical align="start">
    <k-switch disabled />
    <Space>
      <k-switch :disabled="disabled" v-model:checked="checked" />
      <Button size="small" @click="checked=!checked">{{checked?'Uncheck':'Check'}}</Button>
      <Button size="small" @click="disabled=!disabled">{{disabled?'Enable':'Disabled'}}</Button>
    </Space>
    <k-switch disabled true-text="Yes" false-text="No" />
    <k-switch disabled true-text="Yes" false-text="No" checked />
    <k-switch disabled true-text="Yes" false-text="No" checked size="small"/>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const checked = ref(false);
const disabled = ref(false);
</script>
```