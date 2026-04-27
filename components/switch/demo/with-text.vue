<template>
  <Space vertical align="start">
    <k-switch true-text="Yes" false-text="No" />
    <k-switch true-text="｜" false-text="〇" />
    <k-switch true-text="｜" false-text="〇" checked />
    <k-switch true-text="On" false-text="Off" />
    <k-switch>
      <template #checked><Icon :type="Check" /></template>
      <template #unchecked><Icon :type="X" /></template>
    </k-switch>
    <k-switch>
      <template #checked><Icon :type="LogoApple" /></template>
      <template #unchecked><Icon :type="LogoMicrosoft" /></template>
    </k-switch>
    <k-switch>
      <template #unchecked><Icon :type="Plane" /></template>
      <template #checked><Icon :type="Wifi" /></template>
    </k-switch>
  </Space>
</template>
<script setup lang="ts">
import { Check, LogoApple, LogoMicrosoft, Plane, Wifi, X } from "kui-icons";
</script>
