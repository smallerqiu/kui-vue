<template>
  <Space vertical block>
    <Input placeholder="Large Input" size="large" :icon="LogoKui" clearable />
    <Input placeholder="Base Input" :icon="LogoKui" clearable />
    <Input
      size="small"
      placeholder="Small Input"
      :icon="LogoKui"
      @icon-click="iconClick"
      clearable
    />
  </Space>
</template>
<script setup lang="ts">
import { LogoKui } from "kui-icons";
import { message } from "kui-vue";
const iconClick = () => {
  message.info("You click the icon");
};
</script>