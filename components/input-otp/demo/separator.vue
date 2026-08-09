<template>
  <Space vertical size="large">
    <InputOTP v-model="value" :length="4" separator="-" />
    <InputOTP v-model="value" :length="4" separator="/" />
    <InputOTP modelValue="123456" separator="•" />
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("");
</script>
