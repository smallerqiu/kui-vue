<template>
  <Space vertical size="large">
    <div>Value：{{ value || "-" }}</div>
    <InputOTP v-model="value" @complete="onComplete" />
    <InputOTP v-model="text" type="text" :length="4" mask />
    <InputOTP modelValue="123456" size="small" disabled />
  </Space>
</template>

<script setup lang="ts">
import { message } from "kui-vue";
import { ref } from "vue";

const value = ref("");
const text = ref("");
const onComplete = (code: string) => message.success("complete: " + code);
</script>
