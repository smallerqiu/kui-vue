<cn>
### 基本用法
`Notice` 的基本用法
</cn>
<en>
### Basic Usage
Basic usage of `Notice`.
</en>

```vue
<template>
  <Space vertical>
    <Button @click="info" type="primary">Notice</Button>
  </Space>
</template>
<script setup lang="ts">
import { notice } from "kui-vue";
const info = () => {
  notice.open({
    title: "Title",
    content: "The content of the notice.",
    duration: 5,
  });
};
</script>
```
