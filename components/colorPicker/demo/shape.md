<cn>
#### 自定义
可通过 icon 定义图标和 shape='circle' 呈现外型
</cn>

```vue
<template>
  <div class="demo-color-picker">
    <ColorPicker showMode v-model:value="color1" :showArrow="false"/>
    <ColorPicker showMode v-model:value="color2" mode="rgba" :icon="CaretDown"/>
  </div>
</template>
<script setup>
import { CaretDown } from "kui-icons";
const color1 = '#3a95ff'
const color2 = '#3a95ff' 
</script> 
```