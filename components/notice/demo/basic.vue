<template>
  <Space vertical>
    <Button @click="info" type="primary">Notice</Button>
  </Space>
</template>
<script setup lang="ts">
import { notice } from "kui-vue";
const info = () => {
  notice.open({
    title: "Title",
    content: "The content of the notice.",
    duration: 5,
  });
};
</script>