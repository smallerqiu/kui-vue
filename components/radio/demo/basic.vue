<template>
  <Space vertical>
    <code>value: {{ checked }}</code>
    <Radio v-model="checked">Radio</Radio>
    <Button @click="checked = !checked" size="small">
      {{ !checked ? "Unchecked" : "Checked" }}
    </Button>
    <Radio label="Radio" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const checked = ref(true);
</script>