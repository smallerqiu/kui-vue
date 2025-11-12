<cn>
#### 条目数和自定义条目数
改变每页显示条目数。
</cn>

```vue
<template>
  <div class="demo-page">
    <Page v-model:current="current" :total="200" showSizer />
    <Page v-model:current="current" :total="200" showSizer :page-size="20" />
    <Page
      v-model:current="current"
      :total="1000"
      showSizer
      :page-size="30"
      :size-data="sizeData"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
const current = ref(3);
const sizeData = [30, 50, 80, 100];
</script>
```
