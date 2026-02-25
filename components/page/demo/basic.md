<cn>
### 基本用法
基础分页。
</cn>
<en>
### Basic Usage
Basic pagination.
</en>

```vue
<template>
  <Space vertical>
    <Page v-model:page="page" v-model:pageSize="size" :total="50" @change="onChange" />
    <Page v-model:page="page" v-model:pageSize="size" :total="50" @change="onChange" disabled />
  </Space>
</template>
<script setup>
import { ref } from "vue";
import { message } from "kui-vue";
const page = ref(1);
const size = ref(15);
const onChange = (page, pageSize) => {
  console.log(page, pageSize);
  message.info(`当前页: ${page}, 每页: ${pageSize}`);
};
</script>
```
