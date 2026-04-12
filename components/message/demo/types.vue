<template>
  <Space vertical>
    <Button @click="warning">Warning </Button>
    <Button @click="success">Success </Button>
    <Button @click="error">Error</Button>
  </Space>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
const warning = () => {
  message.warning("I am a warning message.");
};
const success = () => {
  message.success("I am a success message.");
};
const error = () => {
  message.error("I am a error message.");
};
</script>