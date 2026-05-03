<template>
  <Button @click="loading" type="primary">Display a loading indicator</Button>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
import { ref } from "vue";
let count = ref(0);
const loading = () => {
  count.value++;
  const hide = message.loading("Processing submitted data, please wait..." + count.value, 0);
  setTimeout(hide, 3500);
};
</script>
