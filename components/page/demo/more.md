<cn>
#### 更多
更多分页。
</cn>

```vue
<template>
  <div class="demo-page">
    <Page v-model:current="current" :total="200" />
  </div>
</template>
<script setup>
import { ref } from "vue";
const current = ref(10);
</script>
```
