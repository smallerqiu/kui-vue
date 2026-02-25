<cn>
### 条目 / 跳转
改变每页显示条目数。
</cn>
<en>
### Items / Jump
Change the number of items displayed per page.
</en>

```vue
<template>
  <Space vertical>
    <Page v-model:page="page" :total="100" />
    <code>showSizer</code>
    <Page v-model:page="page" :total="100" showSizer :page-size="20" />
    <code>showElevator</code>
    <Page
      v-model:page="page"
      :total="100"
      showSizer
      showElevator
      :pageSize="30"
      :sizeData="sizeData"
    />
    <code>theme="light"</code>
    <Page
      v-model:page="page"
      :total="100"
      showSizer
      showElevator
      :pageSize="30"
      theme="light"
      :sizeData="sizeData"
    />
    <code>disabled</code>
    <Page
      v-model:page="page"
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
const page = ref(3);
const sizeData = [30, 50, 80, 100];
</script>
```
