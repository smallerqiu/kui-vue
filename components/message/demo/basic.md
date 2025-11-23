<cn>
### 普通提示
信息提醒反馈。
</cn>

```vue
<template>
  <Space>
    <Button @click="info" type="primary">Show base info </Button>
    <Button @click="useMessage" type="primary">useMessage</Button>
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
// useMessage
const api = message.useMessage();
const useMessage = () => {
  count.value++;
  api.info("this is a base message number : " + count.value);
};
</script>
```
