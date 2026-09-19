<script setup lang="ts">
import { ref } from "vue";
import { Input, Space, Switch } from "kui-vue";

const name = ref("");
const enabled = ref(true);
</script>

<template>
  <Space vertical>
    <Switch v-model="enabled" />
    <Input v-model="name" :disabled="!enabled" placeholder="Your name" aria-label="Your name" />
    <output>Name: {{ name || "—" }}</output>
  </Space>
</template>
