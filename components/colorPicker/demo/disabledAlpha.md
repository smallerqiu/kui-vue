<cn>
#### 禁用透明度
禁用颜色透明度。
</cn>

```vue
<template>
  <Space class="demo-color-picker" vertical>
    <ColorPicker :value="color" disabledAlpha />
  </Space>
</template>
<script setup>
const color = '#3a95ff'
</script> 
```