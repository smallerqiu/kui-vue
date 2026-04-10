<cn>
### 基本用法
最简单的用法，浮层的大小由内容区域决定。
 </cn>
<en>
### Basic Usage
The simplest usage. The size of the floating layer is determined by the content area.
 </en>

```vue
<template>
  <Tooltip title="How to behave?">
    <a href="#">Hover me</a>
  </Tooltip>
  <br />
  <br />
  <br />
  <Tooltip :title="clicked ? 'How are you?' : `I'm fine!`">
    <a @click="clicked = !clicked" href="#">Click me!</a>
  </Tooltip>
</template>
<script setup lang="ts">
import { ref } from "vue";
const clicked = ref(false);
</script>
```
