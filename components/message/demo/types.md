<cn>
### 提示类型
通过 `type` 来设置提示类型
</cn>

```vue
<template>
  <Space vertical>
    <Button @click="warning">Warning </Button>
    <Button @click="success">Success </Button>
    <Button @click="error">Error</Button>
  </Space>
</template>
<script setup>
import { message } from "kui-vue";
const warning = () => {
  message.warning("警告提示");
};
const success = () => {
  message.success("成功提示");
};
const error = () => {
  message.error("错误提示");
};
</script>
```
