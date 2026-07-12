<template>
  <Space vertical>
    <Input v-model="value" />
    <QRCode :value="value" :size="100" />
    <QRCode :value="value" :size="100" logo="/favicon.png" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("https://k-ui.cn");
</script>
