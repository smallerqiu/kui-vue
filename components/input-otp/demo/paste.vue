<template>
  <Space vertical>
    <div>Copy and paste：123456</div>
    <InputOTP v-model="value" />
    <div>Value: {{ value || "-" }}</div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("");
</script>
