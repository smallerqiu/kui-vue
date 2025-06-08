<cn>
#### 颜色编码
编码格式，支持HEX、HSB、RGB。
</cn>

```vue
<template>
  <Space class="demo-color-picker" vertical>
    <Space>
      <ColorPicker v-model:value="color1" /> HEX: {{ color1 }}
    </Space>
    <Space>
      <ColorPicker v-model:value="color2" mode="rgb" /> RGB: {{ color2 }}
    </Space>
    <Space>
      <ColorPicker v-model:value="color3" mode="hsl" /> HSL: {{ color3 }}
    </Space>
  </Space>
</template>
<script setup>
import { ref } from 'vue'
const color1 = ref('#00ff00')
const color2 = ref('rgb(58, 149, 255)')
const color3 = ref('hsl(212, 100%, 61%)')
</script>

```