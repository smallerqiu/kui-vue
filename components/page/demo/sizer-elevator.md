<cn>
### 条目 / 跳转
改变每页显示条目数。
</cn>

```vue
<template>
  <Space vertical>
    <Page v-model:current="current" :total="100" />
    <Page v-model:current="current" :total="100" showSizer :page-size="20" />
    <Page
      v-model:current="current"
      :total="100"
      showSizer
      showElevator
      :pageSize="30"
      :sizeData="sizeData"
    />
    <Page
      v-model:current="current"
      :total="100"
      disabled
      showSizer
      showElevator
      :pageSize="30"
      :sizeData="sizeData"
    />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const current = ref(3);
const sizeData = [30, 50, 80, 100];
</script>
```
