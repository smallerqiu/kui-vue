<template>
  <Space vertical>
    <RadioGroup v-model="size" type="button">
      <RadioButton value="large" label="Large" />
      <RadioButton value="default" label="Default" />
      <RadioButton value="small" label="Small" />
    </RadioGroup>
    <Space vertical>
      <DatePicker :size="size" :picker-size="size" />
      <DatePicker mode="month" :size="size" :picker-size="size" />
      <DatePicker :size="size" mode="dateRange" :picker-size="size" />
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const size = ref("default");
</script>