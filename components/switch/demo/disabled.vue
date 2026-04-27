<template>
  <Space vertical align="start">
    <k-switch disabled />
    <Space>
      <k-switch :disabled="disabled" v-model="checked" />
      <Button size="small" @click="checked = !checked">
        {{ checked ? "Uncheck" : "Check" }}
      </Button>
      <Button size="small" @click="disabled = !disabled">
        {{ disabled ? "Enable" : "Disabled" }}
      </Button>
    </Space>
    <k-switch disabled true-text="Yes" false-text="No" />
    <k-switch disabled true-text="Yes" false-text="No" checked />
    <k-switch disabled true-text="Yes" false-text="No" checked size="small" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
const disabled = ref(false);
</script>