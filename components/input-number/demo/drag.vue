<template>
  <Space vertical block style="max-width: 280px">
    <span>Drag inside the input left or right; click to type, double-click to select.</span>
    <InputNumber v-model="amount" :min="0" :max="10000" addon-after="USD" />
    <InputNumber v-model="decimal" :step="0.01" :precision="2" :min="0" :max="100" />
    <InputNumber :value="10" :draggable="false" placeholder="Drag disabled" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const amount = ref<number | undefined>(100);
const decimal = ref<number | undefined>(1.25);
</script>
