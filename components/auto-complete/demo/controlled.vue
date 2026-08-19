<template>
  <Space vertical>
    <code>value: {{ value || "-" }}</code>
    <AutoComplete v-model="value" :options="options" placeholder="Please choose city" />
    <Button size="small" @click="value = 'Shenzhen'">Shenzhen</Button>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
const options = ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Hangzhou"];
</script>
