<template>
  <Space vertical block>
    <InputNumber placeholder="Large Input" size="large" :icon="LogoKui" />
    <InputNumber placeholder="Base Input" :icon="LogoKui" />
    <InputNumber size="small" placeholder="Small Input" :icon="LogoKui" />
  </Space>
</template>
<script setup lang="ts">
import { LogoKui } from "kui-icons";
</script>
