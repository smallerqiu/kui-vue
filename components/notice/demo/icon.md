<cn>
### 自定义图标
自定义图标
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
<script setup lang="ts">
import { notice, Button } from "kui-vue";
import { LogoAlipay, LogoWechat } from "kui-icons";
import { getCurrentInstance, h } from "vue";
const alipay = () => {
  notice.open({
    icon: LogoAlipay,
    color: "#0082d9ff",
    title: "Dear user, hello",
    content:
      "We are pleased to inform you that you don't need to repay your Huabei balance of 12,900 yuan next month！",
    duration: 10,
  });
};
const wechat = () => {
  let content = h("div", {}, [
    h(
      "p",
      { style: "margin:10px 0" },
      "WeChat has added some new features, and we invite you to try them out.！"
    ),
    h(Button, { type: "primary", size: "small" }, { default: () => "Go and see" }),
  ]);
  notice.open({
    icon: LogoWechat,
    color: "#00c87b",
    title: "Dear user, hello",
    content,
    duration: 10,
  });
};
</script>
```
