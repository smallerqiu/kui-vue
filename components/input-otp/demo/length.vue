<template>
  <Space vertical>
    <code>Value: {{ value || "-" }}</code>
    <InputOTP v-model="value" :length="4" />
    <InputOTP v-model="value1" :length="6" />
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("");
const value1 = ref("");
</script>
