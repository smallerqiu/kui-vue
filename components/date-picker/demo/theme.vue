<template>
  <Space vertical>
    <DatePicker shape="circle" />
    <DatePicker />
    <DatePicker theme="outline" placeholder="Outline" />
    <DatePicker :dateIcon="ArrowDown" placeholder="Custom Icon" />
    <DatePicker theme="plain" placeholder="Plain" />

    <DatePicker mode="dateRange" />
  </Space>
</template>
<script setup lang="ts">
import { ArrowDown } from "kui-icons";
</script>
