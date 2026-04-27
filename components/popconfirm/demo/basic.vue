<template>
  <Popconfirm title="Are you sure delete this task?" @ok="ok" @cancel="cancel">
    <a type="primary">Delete</a>
  </Popconfirm>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
const ok = () => {
  message.success("Clicked on ok");
};
const cancel = () => {
  message.info("Clicked on cancel");
};
</script>