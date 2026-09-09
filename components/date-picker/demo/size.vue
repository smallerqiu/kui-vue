<template>
  <Space vertical>
    <Segmented v-model="size" :options="sizes" />
    <Space vertical>
      <DatePicker :size="size" />
      <DatePicker mode="month" :size="size" />
      <DatePicker :size="size" mode="dateRange" />
    </Space>
  </Space>
</template>
<script setup lang="ts">
import type { SizeType } from "kui-vue";
import { ref } from "vue";
const size = ref<SizeType>("medium");
const sizes = ["large", "medium", "small"].map((value) => ({ label: value, value }));
</script>
