<template>
  <Space vertical>
    <Button @click="showAlipay" :icon="LogoAlipay"></Button>
    <Button @click="showWechat" :icon="LogoWechat"></Button>
  </Space>
</template>
<script setup lang="ts">
import { LogoAlipay, LogoWechat } from "kui-icons";
import { message } from "kui-vue";

const showAlipay = () => {
  message.show({
    color: "#0f87ffff",
    icon: LogoAlipay,
    content: "You have received 1,000,000 yuan via Alipay.",
  });
};
const showWechat = () => {
  message.show({
    color: "#00d76fff",
    icon: LogoWechat,
    content: "WeChat payment received: 1 million yuan",
  });
};
</script>
