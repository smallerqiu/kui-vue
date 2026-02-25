<cn>
### 自定图标
自定图标。
</cn>
<en>
### Custom Icon
Custom icon.
</en>

```vue
<template>
  <Space vertical>
    <Button @click="alipay" :icon="LogoAlipay"></Button>
    <Button @click="wechat" :icon="LogoWechat"></Button>
  </Space>
</template>
<script setup>
import { message } from "kui-vue";
import { LogoAlipay, LogoWechat } from "kui-icons";

const alipay = () => {
  message.show({
    color: "#0f87ffff",
    icon: LogoAlipay,
    content: "You have received 1,000,000 yuan via Alipay.",
  });
};
const wechat = () => {
  message.show({
    color: "#00d76fff",
    icon: LogoWechat,
    content: "WeChat payment received: 1 million yuan",
  });
};
</script>
```
