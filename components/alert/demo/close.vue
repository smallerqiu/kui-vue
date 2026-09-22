<template>
  <Space vertical block>
    <Alert v-if="visible" type="success" showIcon closable @after-close="visible = false">
      Success Text
    </Alert>
    <Button v-else @click="visible = true">Show Alert</Button>
    <Alert type="info" showIcon closable>Info Text</Alert>
    <Alert type="warning" showIcon closable>Warning Text</Alert>
    <Alert type="error" showIcon closable>Error Text</Alert>
    <Alert
      type="success"
      showIcon
      closable
      message="Success Tip"
      description="Congratulations, the operation is successful."
    />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const visible = ref(true);
</script>
