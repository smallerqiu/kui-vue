<cn>
### 带图标的提醒
通过调用不同的方法，可展示不同的类型
</cn>
<en>
### Notification with Icon
Call different methods to display different types.
</en>

```vue
<template>
  <Space vertical>
    <Button @click="openNotice('info')">Info </Button>
    <Button @click="openNotice('warning')">Warning </Button>
    <Button @click="openNotice('success')">Success </Button>
    <Button @click="openNotice('error')">Error </Button>
  </Space>
</template>
<script setup>
import { notice } from "kui-vue";
const openNotice = (type) => {
  notice[type]({
    title: "Title",
    content: "Content message.",
    duration: 5,
  });
};
</script>
```
