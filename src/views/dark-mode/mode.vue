<template>
  <Button theme="light" @click="switchMode">Switch</Button>
</template>
<script setup lang="ts">
import { message, theme } from "kui-vue";
const switchMode = (e: PointerEvent) => {
  message.info(`Current theme mode`);
  theme.setThemeMode(e, (isDark: boolean) => {
    message.info(`Current theme mode is ${isDark ? "dark" : "light"}`);
  });
};
</script>