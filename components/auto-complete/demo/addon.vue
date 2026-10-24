<template>
  <Space block vertical>
    <AutoComplete
      v-model="value"
      addon-before="https://"
      addon-after=".com"
      placeholder="Please input domain"
      :options="['kui', 'kui-pro', 'kui-admin', 'kui-docs']"
    />
    <AutoComplete
      prefix="@"
      suffix=".cn"
      placeholder="Please input handle"
      :options="['kui', 'kui-pro', 'kui-admin', 'kui-docs']"
    />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
</script>
