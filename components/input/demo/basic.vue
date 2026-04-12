<template>
  <Space vertical block>
    <code>v-model: {{ value }}</code>
    <Input placeholder="Please input" @blur="blur" @focus="focus" v-model="value" />
    <Input placeholder="clearable=false" :clearable="false" />
    <Input placeholder="Disabled" disabled />
    <Input placeholder="Readonly" readonly v-model="value" />
    <TextArea v-model="value" placeholder="TextArea"/>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
const blur = () => {
  console.log("blur");
};
const focus = () => {
  console.log("focus");
};
const change = () => {
  console.log("change");
};
</script>