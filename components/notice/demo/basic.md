<cn>
### 基本用法
`Notice` 的基本用法
</cn>

```vue
<template>
  <Space vertical>
    <Button @click="info" type="primary">普通提示</Button>
  </Space>
</template>
<script setup>
import { notice } from "kui-vue";
const info = () => {
  notice.open({
    title: "通知的标题",
    content: "通知的描述",
    duration: 5,
  });
};
</script>
```
