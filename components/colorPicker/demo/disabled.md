<cn>
### 禁用
设置为禁用状态。
</cn>

```vue
<template>
  <Space class="demo-color-picker" vertical>
    <ColorPicker :value="color" disabled />
    <ColorPicker :value="color" disabled showText />
  </Space>
</template>
<script setup>
const color = "#3a95ff";
</script>
```
