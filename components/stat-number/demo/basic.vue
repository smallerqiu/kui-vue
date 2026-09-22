<template>
  <Space vertical>
    <Space wrap>
      <Button @click="value = 12345" size="small">12,345</Button>
      <Button @click="value = 54321" size="small">54,321</Button>
      <Button @click="value -= 100" size="small">-100</Button>
      <Button @click="value += 100" size="small">+100</Button>
      <Button @click="change" size="small">change</Button>
    </Space>
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
const value = ref(12345);

const change = () => {
  value.value = Math.random() * 10000000;
};
</script>
