<template>
  <Space style="font-size:12px;max-width:200px" block vertical>
    <code>v-model: {{ value }}</code>
    <InputNumber v-model="value" @change="change" />
    <code>readonly</code>
    <InputNumber v-model="value" readonly />
    <code>disabled</code>
    <InputNumber v-model="value" disabled />
    <code>group</code>
    <InputGroup>
      <Button @click="value -= 1">-</Button>
      <InputNumber v-model="value" :controls="false" />
      <Button @click="value += 1">+</Button>
    </InputGroup>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref(1);
const change = (value) => {
  console.log("change", value);
};
</script>