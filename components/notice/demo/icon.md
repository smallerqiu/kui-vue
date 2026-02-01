<cn>
### 自定义图标
自定义图标
</cn>

```vue
<template>
  <Space vertical>
    <Button @click="alipay" :icon="LogoAlipay"></Button>
    <Button @click="wechat" :icon="LogoWechat"></Button>
  </Space>
</template>
<script setup>
import { notice } from "kui-vue";
import { LogoAlipay, LogoWechat } from "kui-icons";
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const alipay = () => {
  notice.open({
    icon: LogoAlipay,
    color: "#0082d9ff",
    title: "尊敬的用户你好",
    content: "我们很高兴通知您，您下个月花呗12900元，不用还了！",
    duration: 10,
  });
};
const h = proxy.$createElement;
const wechat = () => {
  let content = h("div", {}, [
    h("p", { attrs: { style: "margin:10px 0" } }, "微信新增了一些新功能，我们邀请您体验！"),
    h("Button", { props: { type: "primary", size: "small" } }, "去看看"),
  ]);
  console.log(content);
  notice.open({
    icon: LogoWechat,
    color: "#00ff9e",
    title: "尊敬的用户你好",
    content,
    duration: 10,
  });
};
</script>
```
