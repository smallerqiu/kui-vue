<cn>
#### 基本用法
默认可以同时展开一个或者多个面板
</cn>

```vue
<template>
  <div class="demo-color-picker">
    <ColorPicker v-model:value="color"/>
  </div>
</template>
<script setup>
const color = '#3a95ff'
</script> 
```