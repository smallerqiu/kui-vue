<template>
  <Space vertical>
    <Button @click="openNotice('info')">Info </Button>
    <Button @click="openNotice('warning')">Warning </Button>
    <Button @click="openNotice('success')">Success </Button>
    <Button @click="openNotice('error')">Error </Button>
  </Space>
</template>
<script setup lang="ts">
import { notice } from "kui-vue";
const openNotice = (type: "info" | "warning" | "success" | "error") => {
  notice[type]({
    title: "Title",
    content: "Content message.",
    duration: 5,
  });
};
</script>
