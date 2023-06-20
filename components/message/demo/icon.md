<cn>
#### 自定图标
自定图标。
</cn>

```vue
<template>
  <div>
    <Button @click="alipay" :icon="LogoAlipay"></Button>
    <Button @click="wechat" :icon="LogoWechat"></Button>
  </div>
</template>
<script>
import { LogoAlipay, LogoWechat } from "kui-icons";
let count = 0
export default{
  data() {
    return {
      LogoAlipay, LogoWechat
    }
  },
  methods:{
    alipay() {
      this.$Message.config({
        icon:LogoAlipay,
        content:"支付宝到账100万",
      });
    },
    wechat() {
      this.$Message.config({
        color:'green',
        icon:LogoWechat,
        content:"微信收款100万"
      });
    },
  }
}
</script>
```