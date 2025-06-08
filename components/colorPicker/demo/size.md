<cn>
#### 尺寸大小
`small` 为小尺寸， `large` 为大尺寸
</cn>

```vue
<template>
  <div class="demo-color-picker">
    <Space vertical>
      <Space>
        <ColorPicker :value="color3" size="small" />
        <ColorPicker showText :value="color3"   size="small" />
      </Space>
      <Space>
        <ColorPicker :value="color2"/>
        <ColorPicker showText :value="color2"/>
      </Space>
       <Space>
        <ColorPicker :value="color1" size="large"/>
        <ColorPicker showText :value="color1" size="large"/>
      </Space>
    </Space>
  </div>
</template>
<script setup>
const color1 = '#3a95ff'
const color2 = '#3a95ff'
const color3 = '#3a95ff'
</script> 
```