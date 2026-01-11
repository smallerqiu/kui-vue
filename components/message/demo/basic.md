<cn>
### 普通提示
信息提醒反馈。
</cn>

```vue
<template>
  <Space vertical>
    <Button @click="info" type="primary">Show base info </Button>
  </Space>
</template>
<script setup>
import { ref } from "vue";
import { message } from "kui-vue";
let count = ref(0);
const info = () => {
  count.value++;
  message.info("this is a base message number : " + count.value);
};
</script>
```
