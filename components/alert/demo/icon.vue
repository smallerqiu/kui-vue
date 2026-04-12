<template>
  <Space vertical>
    <Checkbox v-model="bordered">Show border</Checkbox>
    <Alert type="success" showIcon :bordered="bordered">Success Text</Alert>
    <Alert type="info" showIcon :bordered="bordered">Info Text</Alert>
    <Alert type="warning" showIcon :bordered="bordered">Warning Text</Alert>
    <Alert type="error" showIcon :bordered="bordered">Error Text</Alert>

    <Alert
      :bordered="bordered"
      type="success"
      showIcon
      message="Success Tip"
      description="Congratulations, the operation is successful."
    />
    <Alert
      :bordered="bordered"
      type="info"
      showIcon
      message="Informational Notes"
      description="Congratulations, the operation is successful."
    />
    <Alert
      :bordered="bordered"
      type="warning"
      showIcon
      message="Warning"
      description="Nuclear bomb launching base, please do not approach!"
    />
    <Alert
      :bordered="bordered"
      type="error"
      showIcon
      message="Error"
      description="Encountered an error, please press any key to continue."
    />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const bordered = ref(true);
</script>