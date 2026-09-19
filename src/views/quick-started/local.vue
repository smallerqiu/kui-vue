<script setup lang="ts">
import { ref } from "vue";
import { Button, Space } from "kui-vue";

const count = ref(0);
</script>

<template>
  <Space>
    <Button type="primary" @click="count++">Count: {{ count }}</Button>
    <Button :disabled="count === 0" @click="count = 0">Reset</Button>
  </Space>
</template>
