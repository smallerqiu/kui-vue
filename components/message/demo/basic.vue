<template>
  <Button @click="info" type="primary">Show base info </Button>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
import { ref } from "vue";
let count = ref(0);
const info = () => {
  count.value++;
  message.info("this is a base message number : " + count.value);
};
</script>
