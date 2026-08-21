<template>
  <CheckCardGroup v-model="platform">
    <CheckCard value="apple" title="Apple" description="macOS 与 iOS">
      <template #symbol="{ checked }">
        <Icon :type="LogoApple" :color="checked ? 'var(--kui-color-primary)' : undefined" />
      </template>
    </CheckCard>
    <CheckCard value="microsoft" title="Microsoft" description="Windows 与 Azure">
      <template #symbol="{ checked }">
        <Icon :type="LogoMicrosoft" :color="checked ? 'var(--kui-color-primary)' : undefined" />
      </template>
    </CheckCard>
  </CheckCardGroup>
</template>

<script setup lang="ts">
import { LogoApple, LogoMicrosoft } from "kui-icons";
import { ref } from "vue";

const platform = ref("apple");
</script>
