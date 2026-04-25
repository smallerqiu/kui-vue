<template>
  <Space vertical>
    <Button @click="change" size="small">change</Button>
    <code>default:</code>
    <StatNumber v-model="value" />
    <code>type=`rollup`:</code>
    <StatNumber v-model="value" type="rollup" />
    <code>precision=`3`:</code>
    <StatNumber v-model="value" :precision="3" />
    <StatNumber v-model="value" type="rollup" :precision="3" />
    <code>prefix & suffix:</code>
    <StatNumber v-model="value" prefix="$" />
    <StatNumber v-model="value" type="rollup" suffix="元" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref(Math.random() * 100000);

const change = () => {
  value.value = Math.random() * 10000000;
};
</script>
