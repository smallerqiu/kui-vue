<template>
  <Space vertical>
    <Space>
      <ColorPicker v-model="color" theme="outline" showText />
      <ColorPicker v-model="color" theme="fill" showText />
      <ColorPicker v-model="color" theme="plain" showText />
    </Space>
    <Space>
      <ColorPicker v-model="color" shape="round" showText />
      <ColorPicker v-model="color" shape="circle" showText />
      <ColorPicker v-model="color" shape="square" showText />
    </Space>
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const color = ref("#3a95ff");
</script>
