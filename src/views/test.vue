<template>
  <Space vertical>
    <Button @click="config">10秒后关闭</Button>
    <Button @click="config2" type="primary">5秒后关闭</Button>
    <Button @click="config3" type="primary">手动关闭</Button>
  </Space>
</template>
<script setup>
import { notice, message } from "kui-vue";

const config = () => {
  notice.open({
    type: "success",
    duration: 10,
    title: "温馨提示",
    content: "10秒后关闭",
  });
};
const config2 = () => {
  notice.open({
    type: "info",
    duration: 5,
    title: "温馨提示",
    content: "5秒后关闭",
  });
};
const config3 = () => {
  notice.open({
    type: "info",
    duration: 0,
    title: "温馨提示",
    content: "手动关闭",
    onClose: () => {
      message.success("我是回调");
    },
  });
};
</script>
