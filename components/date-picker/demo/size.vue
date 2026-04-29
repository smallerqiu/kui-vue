<template>
  <Space vertical>
    <RadioGroup v-model="size" type="button">
      <RadioButton value="large" label="Large" />
      <RadioButton value="medium" label="Medium" />
      <RadioButton value="small" label="Small" />
    </RadioGroup>
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
</script>
