<cn>
### 尺寸大小 / 不可用
`small` 为小尺寸， `large` 为大尺寸
</cn>

```vue
<template>
  <Space vertical>
    <Space>
      <Space vertical>
        <ColorPicker :modelValue="color3" size="small" />
        <ColorPicker :modelValue="color2" />
        <ColorPicker :modelValue="color1" size="large" />
      </Space>
      <Space vertical>
        <ColorPicker showText :modelValue="color3" size="small" />
        <ColorPicker showText :modelValue="color2" />
        <ColorPicker showText :modelValue="color1" size="large" />
      </Space>
    </Space>
    <br />
    <Space vertical>
      <code>disabled</code>
      <Space>
        <ColorPicker :modelValue="color2" disabled />
        <ColorPicker showText :modelValue="color2" disabled />
      </Space>
      <br />
      <code>disabledAlpha</code>
      <ColorPicker showText disabledAlpha :modelValue="color2" />
      <code>presets colors</code>
      <ColorPicker v-model="color1" :presets="presetsColors" />
    </Space>
  </Space>
</template>
<script setup>
const color1 = "#3a95ff";
const color2 = "#3a95ff";
const color3 = "#3a95ff";
const presetsColors = ["#9c27b0", "red", "blue"];
</script>
```
