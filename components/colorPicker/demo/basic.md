<cn>
### 基本用法
点击打开颜色面板
</cn>

```vue
<template>
  <div class="demo-color-picker">
    <ColorPicker v-model="color" />
  </div>
</template>
<script setup>
import { ref } from "vue";
const color = ref("#3a95ff");
</script>
```
