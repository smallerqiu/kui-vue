<cn>
#### 尺寸大小
`small` 为小尺寸， `large` 为大尺寸
</cn>

```vue
<template>
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
</template>
<script>
export default {
  data() {
    return {
      color1: '#f44336',
      color2: '#9c27b0',
      color3: '#03a9f4',
    };
  }
}
</script> 
```