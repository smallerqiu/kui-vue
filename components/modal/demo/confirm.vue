<template>
  <Space vertical>
    <Button @click="confirm()">Confirm</Button>
    <Button @click="custom()">Internationalization</Button>
    <Button @click="Async()">Asynchronous shutdown</Button>
    <Button @click="closeAll()">Close All</Button>
  </Space>
</template>
<script setup lang="ts">
import { message, modal } from "kui-vue";

const confirm = () => {
  modal.confirm({
    title: "Are you sure to do this?",
    content: "This operation is irreversible, proceed with caution!!!",
    onOk: () => {
      message.success("you clicked ok");
    },
    onCancel: () => {
      message.info("you clicked cancel");
    },
  });
};
const custom = () => {
  modal.confirm({
    title: "Are you Ok?",
    content: "Yes , I am fine, and you?",
    okText: "OK",
    cancelText: "Cancel",
  });
};
const Async = () => {
  modal.confirm({
    title: "Are you sure to do this?",
    content: "This operation is irreversible, proceed with caution!!!",
    onOk: () => {
      return new Promise((resolve, _) => {
        setTimeout(resolve, 2000);
      });
    },
    onCancel: () => {
      //用户点了取消 应该中断 异步执行
    },
  });
};
const closeAll = () => {
  for (var o = 0; o < 3; o++) {
    setTimeout(() => {
      modal.confirm({
        title: "Destroy All",
        content: "A surprise of the universe",
        cancelText: "Close all",
        onCancel: () => {
          modal.destroyAll();
        },
        onOk: () => {
          return new Promise((resolve, _) => {
            setTimeout(resolve, 2000);
          });
        },
      });
    }, o * 500);
  }
};
</script>
