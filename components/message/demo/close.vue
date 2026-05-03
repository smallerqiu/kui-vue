<template>
  <Space vertical>
    <Button @click="config">Closing in 10s</Button>
    <Button @click="config3" type="primary">Manually close</Button>
    <Button @click="destroy" type="primary">destroy</Button>
  </Space>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
import { ref } from "vue";
const count = ref(0);
const config = () => {
  message.success("Closing in 10s", 10);
};

const config3 = () => {
  count.value++;
  message.show({
    type: "info",
    duration: 0,
    closable: true,
    content: `Manually close ${count.value}`,
    onClose: () => {
      message.success("I am callback");
    },
  });
};
const destroy = () => {
  message.destroy();
};
</script>
