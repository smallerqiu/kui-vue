<cn>
### 自定图标
自定图标。
</cn>

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
let count = 0;

const alipay = () => {
  message.show({
    color: "#0f87ffff",
    icon: LogoAlipay,
    content: "支付宝到账100万",
  });
};
const wechat = () => {
  message.show({
    color: "#00d76fff",
    icon: LogoWechat,
    content: "微信收款100万",
  });
};
</script>
```
