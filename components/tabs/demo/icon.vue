<template>
  <Tabs v-model="current">
    <TabPanel key="1" title="Apple" :icon="LogoApple">Content of Apple tab</TabPanel>
    <TabPanel key="2" title="Microsoft" :icon="LogoMicrosoft">Content of Microsoft tab</TabPanel>
  </Tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { LogoApple, LogoMicrosoft } from "kui-icons";
const current = ref("1");
</script>
