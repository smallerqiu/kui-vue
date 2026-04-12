<template>
  <Space vertical>
    <Button @click="config">Closing in 10s</Button>
    <Button @click="config3" type="primary">Manually close</Button>
    <Button @click="destroy" type="primary">Destroy</Button>
  </Space>
</template>
<script setup lang="ts">
import { notice, message } from "kui-vue";

const config = () => {
  notice.open({
    type: "success",
    duration: 10,
    title: "Title",
    content: "Closing in 10s",
  });
};
const config3 = () => {
  notice.open({
    type: "info",
    duration: 0,
    title: "Alert",
    content: "Manually close",
    onClose: () => {
      message.success("I am a callback.");
    },
  });
};
const destroy = () => {
  notice.destroy();
};
</script>