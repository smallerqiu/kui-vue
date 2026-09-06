<template>
  <Space vertical>
    <Page v-model:page="page" :total="50" />
    <Page v-model:page="page" :total="50" size="small" show-sizer />
    <Page v-model:page="page" :total="50" size="large" show-elevator show-sizer />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const page = ref(1);
</script>
