<template>
  <Affix @change="change" :offsetTop="200">
    <Button type="primary">200px to affix top</Button>
  </Affix>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
const change = (value: boolean) => {
  message.info(value ? "fixed" : "reset");
};
</script>
