<cn>
#### 基础用法
最简单的用法，浮层的大小由内容区域决定。
</cn>

```vue
<template>
  <Tooltip title="明月几时有,把酒问青天!">
    <a href="#">月几时有,把酒问青天</a>
  </Tooltip>
  <br/>
  <br/>
  <br/>
  <Tooltip :title="clicked?'窗前明月光':'凝视地上霜,好冷！'">
    <a @click="clicked=!clicked" href="#">Click me!</a>
  </Tooltip>

</template>
<script setup>
import { ref } from 'vue'
const clicked = ref(false)
</script>
```