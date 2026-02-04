<cn>
### 基本用法
点击打开颜色面板
</cn>

```vue
<template>
  <Space vertical>
    <code>v-model: {{ color }}</code>
    <ColorPicker v-model="color" />
    <code>mode = hex ,v-model: {{ hexColor }}</code>
    <ColorPicker v-model="hexColor" />
    <code>mode = rgb,v-model: {{ rgbColor }}</code>
    <ColorPicker mode="rgb" v-model="rgbColor" />
    <code>mode = hsl,v-model: {{ hslColor }}</code>
    <ColorPicker mode="hsl" v-model="hslColor" />
    <code>showText = true</code>
    <ColorPicker showText v-model="color" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const color = ref("#3a95ff");
const hexColor = ref("#3a95ff");
const rgbColor = ref("rgba(0, 188, 212, 0.72)");
const hslColor = ref("hsl(207, 90%, 54%)");
</script>
```
