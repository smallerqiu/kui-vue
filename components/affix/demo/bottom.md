<cn>
### 固定底部
最简单的用法。
</cn>

```vue
<template>
  <Affix :offsetBottom="bottom">
    <Button type="primary" @click="bottom += 10">120px to affix bottom</Button>
  </Affix>
</template>
<script setup>
import { ref } from "vue";
const bottom = ref(120);
</script>
```
