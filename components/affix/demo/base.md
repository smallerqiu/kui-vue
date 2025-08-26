<cn>
#### 基本 
最简单的用法。
</cn>

```vue
<template>
  <Affix :offsetTop="top">
    <Button type="primary" @click="top += 10">Affix top</Button>
  </Affix>
</template>
<script setup>
import { ref } from 'vue';
const top = ref(100);
</script>
```