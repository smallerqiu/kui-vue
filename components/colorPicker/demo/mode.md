<cn>
#### 颜色编码
编码格式，支持HEX、HSB、RGB。
</cn>

```vue
<template>
  <Space class="demo-color-picker" vertical>
    <Space>
      <ColorPicker v-model="color1" /> HEX: {{ color1 }}
    </Space>
    <Space>
      <ColorPicker v-model="color2" mode="rgb" /> RGB: {{ color2 }}
    </Space>
    <Space>
      <ColorPicker v-model="color3" mode="hsl" /> HSL: {{ color3 }}
    </Space>
  </Space>
</template>
<script>
export default {
  data() {
    return {
      color1: '#00ff00',
      color2: 'rgb(58, 149, 255)',
      color3: 'hsl(212, 100%, 61%)',
    };
  }
}
</script> 
```