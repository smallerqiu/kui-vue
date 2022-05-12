<cn>
#### 自定图标
自定图标。
</cn>

```vue
<template>
  <div>
    <Button @click="alipay" icon="logo-alipay"></Button>
    <Button @click="wechat" icon="logo-wechat"></Button>
  </div>
</template>
<script>
let count = 0
export default{
  methods:{
    alipay() {
      this.$Message.config({
        icon:'logo-alipay',
        content:"支付宝到账100万"
      });
    },
    wechat() {
      this.$Message.config({
        color:'green',
        icon:'logo-wechat',
        content:"微信收款100万"
      });
    },
  }
}
</script>
```