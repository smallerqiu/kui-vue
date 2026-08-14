<template>
  <Space vertical align="start">
    <Switch true-text="Yes" false-text="No" />
    <Switch true-text="｜" false-text="〇" />
    <Switch true-text="｜" false-text="〇" checked />
    <Switch true-text="On" false-text="Off" />
    <Switch>
      <template #checked><Icon :type="Check" /></template>
      <template #unchecked><Icon :type="X" /></template>
    </Switch>
    <Switch>
      <template #checked><Icon :type="LogoApple" /></template>
      <template #unchecked><Icon :type="LogoMicrosoft" /></template>
    </Switch>
    <Switch>
      <template #unchecked><Icon :type="Plane" /></template>
      <template #checked><Icon :type="Wifi" /></template>
    </Switch>
  </Space>
</template>
<script setup lang="ts">
import { Check, LogoApple, LogoMicrosoft, Plane, Wifi, X } from "kui-icons";
</script>
