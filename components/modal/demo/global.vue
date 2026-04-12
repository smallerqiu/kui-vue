<template>
  <Space vertical>
    <Button @click="success">Success</Button>
    <Button @click="error" type="danger">Error</Button>
    <Button @click="warning">Warning</Button>
    <Button @click="info" type="primary">Info</Button>
    <Button @click="show" :icon="Moon">Custom icon</Button>
  </Space>
</template>
<script setup lang="ts">
import { Moon } from "kui-icons";
import { modal, message } from "kui-vue";
//
const success = () => {
  modal.success({
    title: "Successfully Done",
    content: "Congratulations on your successful operation!",
    onOk: () => {
      message.info("success");
    },
  });
};

const error = () => {
  modal.error({
    title: "Failed",
    content: "Sorry, operation failed！",
    onOk: () => {
      message.info("error");
    },
  });
};

const warning = () => {
  modal.warning({
    title: "Warning",
    content: "This is a warning message.",
    onOk: () => {
      message.info("warning");
    },
  });
};

const info = () => {
  modal.info({
    title: "Alert",
    content: "You opened a modal.",
    onOk: () => {
      message.info("info");
    },
  });
};

const show = () => {
  modal.show({
    title: "I ams a modal",
    content: "See the light through the mist.",
    icon: Moon,
    color: "#eccb23",
    onOk: () => {
      message.info("show");
    },
  });
};
</script>