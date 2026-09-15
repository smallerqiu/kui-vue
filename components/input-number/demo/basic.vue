<template>
  <Space style="font-size: 12px; max-width: 200px" block vertical>
    <code>v-model: {{ value }}</code>
    <InputNumber v-model="value" />
    <code>readonly</code>
    <InputNumber v-model="value" readonly />
    <code>disabled</code>
    <InputNumber v-model="value" disabled />
    <code>group</code>
    <InputGroup>
      <Button @click="value = (value ?? 0) - 1">-</Button>
      <InputNumber v-model="value" :controls="false" />
      <Button @click="value = (value ?? 0) + 1">+</Button>
    </InputGroup>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref<number | undefined>(1);
</script>
