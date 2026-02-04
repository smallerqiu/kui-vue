<cn>
### 带图标的提醒
通过调用不同的方法，可展示不同的类型
</cn>

```vue
<template>
  <Space vertical>
    <Button @click="openNotice('info')">消息提示 </Button>
    <Button @click="openNotice('warning')">警告提示 </Button>
    <Button @click="openNotice('success')">成功提示 </Button>
    <Button @click="openNotice('error')">错误提示 </Button>
  </Space>
</template>
<script setup>
import { notice } from "kui-vue";
const openNotice = (type) => {
  notice[type]({
    title: "通知的标题",
    content: "通知的描述",
    duration: 5,
  });
};
</script>
```
