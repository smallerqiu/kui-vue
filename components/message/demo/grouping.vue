<template>
  <Button @click="info" type="primary">Click Me</Button>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
import { ref } from "vue";
let count = ref(0);
const info = () => {
  count.value++;
  message.show({
    type: "info",
    content: "this is a base message number : " + count.value,
    grouping: "task-batch",
  });
};
</script>
