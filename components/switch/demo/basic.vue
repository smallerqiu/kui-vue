<template>
  <Space vertical>
    value: {{ checked }}
    <k-switch v-model="checked" />
    <Button @click="checked = !checked" size="small">
      {{ !checked ? "Uncheck" : "Checked" }}
    </Button>
    <k-switch checked />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>