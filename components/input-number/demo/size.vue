<template>
  <Space vertical block>
    <InputNumber placeholder="Large Input" size="large" :icon="LogoKui" clearable />
    <InputNumber placeholder="Base Input" :icon="LogoKui" clearable />
    <InputNumber size="small" placeholder="Small Input" :icon="LogoKui" clearable />
  </Space>
</template>
<script setup lang="ts">
import { LogoKui } from "kui-icons";
</script>