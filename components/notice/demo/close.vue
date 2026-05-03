<template>
  <Space vertical>
    <Button @click="config">Closing in 10s</Button>
    <Button @click="config3" type="primary">Manually close</Button>
    <Button @click="destroy" type="primary">Destroy</Button>
  </Space>
</template>
<script setup lang="ts">
import { message, notice } from "kui-vue";
import { ref } from "vue";
const count = ref(0);
const config = () => {
  notice.open({
    type: "success",
    duration: 10,
    title: "Title",
    content: "Closing in 10s",
  });
};
const config3 = () => {
  count.value++;
  notice.open({
    type: "info",
    duration: 0,
    title: "Alert",
    content: `Manually close ${count.value}`,
    onClose: () => {
      message.success("I am a callback.");
    },
  });
};
const destroy = () => {
  notice.destroy();
};
</script>
