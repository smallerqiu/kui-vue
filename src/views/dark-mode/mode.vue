<template>
  <Button @click="switchMode">Switch</Button>
</template>
<script setup lang="ts">
import { message, theme } from "kui-vue";
const switchMode = (e: MouseEvent) => {
  theme.setThemeMode(e, (isDark: boolean) => {
    message.info(`Current theme mode is ${isDark ? "dark" : "light"}`);
  });
};
</script>
