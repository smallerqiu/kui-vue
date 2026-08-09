<template>
  <Button type="primary" @click="updateNotice">Update Notice</Button>
</template>

<script setup lang="ts">
import { notice } from "kui-vue";
import { ref } from "vue";

const count = ref(0);
const updateNotice = () => {
  count.value++;
  notice.info({
    title: "Task Progress",
    content: `Processed ${count.value} batch${count.value > 1 ? "es" : ""}.`,
    grouping: "task-batch",
  });
};
</script>
