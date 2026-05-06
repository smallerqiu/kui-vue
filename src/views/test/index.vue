<template>
  <Space vertical>
    <TextArea v-model="v1" @change="change" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const v1 = ref({ a: 1 });
const change = (e: string) => {
  console.log(e);
};
</script>
