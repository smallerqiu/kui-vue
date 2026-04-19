<template>
  <Space vertical>
    <DatePicker shape="circle" />
    <DatePicker theme="light" />
    <DatePicker theme="outline" placeholder="Outline" />
    <DatePicker :dateIcon="ArrowDown" placeholder="Custom Icon" />
    <DatePicker :bordered="false" placeholder="No Border" theme="light" />

    <DatePicker mode="dateRange" theme="light" />
  </Space>
</template>
<script setup lang="ts">
import { ArrowDown } from "kui-icons";
</script>