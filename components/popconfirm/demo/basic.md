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
  <Popconfirm title="Are you sure delete this task?" @ok="ok" @cancel="cancel">
    <a type="primary">Delete</a>
  </Popconfirm>
</template>
<script setup>
import { message } from "kui-vue";
const ok = () => {
  message.success("Clicked on ok");
};
const cancel = () => {
  message.info("Clicked on cancel");
};
</script>
```
