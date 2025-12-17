<cn>
### 尺寸
展示小尺寸。
</cn>

```vue
<template>
  <Space vertical>
    <Page :current="current" :total="50" size="small" />
    <Page :current="current" :total="50" size="small" show-sizer />
    <Page
      :current="current"
      :total="50"
      size="small"
      show-elevator
      show-sizer
    />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const current = ref(1);
</script>
```
