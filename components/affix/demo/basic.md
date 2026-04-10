<cn>
### 基本用法 
最简单的用法。
</cn>
<en>
### Basic Usage 
The simplest usage.
</en>

```vue
<template>
  <Affix :offsetTop="top">
    <Button type="primary" @click="top += 10">Affix top</Button>
  </Affix>
</template>
<script setup lang="ts">
import { ref } from "vue";
const top = ref(100);
</script>
```
