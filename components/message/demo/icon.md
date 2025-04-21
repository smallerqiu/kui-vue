<cn>
#### 自定图标
自定图标。
</cn>

```vue
<template>
  <Space>
    <Button @click="alipay" :icon="LogoAlipay"></Button>
    <Button @click="wechat" :icon="LogoWechat"></Button>
  </Space>
</template>
<script setup>
import { message } from "kui-vue";
import { LogoAlipay, LogoWechat } from "kui-icons";
let count = 0

const alipay = ()=> {
  message.config({
    icon:LogoAlipay,
    content:"支付宝到账100万",
  });
}
const wechat = ()=> {
  message.config({
    color:'green',
    icon:LogoWechat,
    content:"微信收款100万"
  });
}
</script>
```