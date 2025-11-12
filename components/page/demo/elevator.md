<cn>
#### 跳转
快速跳转到某一页。
</cn>

```vue
<template>
  <div class="demo-page">
    <Page v-model:current="current" :total="200" show-elevator />
  </div>
</template>
<script setup>
import { ref } from "vue";
const current = ref(10);
</script>
```
