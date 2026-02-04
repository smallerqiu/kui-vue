<cn>
### 尺寸
展示小尺寸。
</cn>

```vue
<template>
  <Space vertical>
    <Page :page="page" :total="50" size="small" />
    <Page :page="page" :total="50" size="small" show-sizer />
    <Page :page="page" :total="50" size="small" show-elevator show-sizer />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const page = ref(1);
</script>
```
