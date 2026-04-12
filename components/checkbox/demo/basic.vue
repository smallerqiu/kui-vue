<template>
  <Space vertical>
    <code>value: {{ checked }}</code>
    <Checkbox v-model="checked">Checkbox</Checkbox>
    <Button @click="checked = !checked" size="small">
      {{ !checked ? "Unchecked" : "Checked" }}
    </Button>
    <Checkbox label="Checkbox" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const checked = ref(true);
</script>