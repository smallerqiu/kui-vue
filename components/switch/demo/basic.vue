<template>
  <Space vertical>
    <code>value(boolean): {{ value1 }}</code>
    <k-switch v-model="value1" />

    <code>value(string): {{ value2 }}</code>
    <k-switch v-model="value2" value-type="string" />

    <code>value(number): {{ value3 }}</code>
    <k-switch v-model="value3" value-type="number" />

    <Button @click="checked = !checked" size="small">
      {{ !checked ? "Unchecked" : "Checked" }}
    </Button>
    <k-switch v-model="checked" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref(true);
const value2 = ref("1");
const value3 = ref(1);
const checked = ref(true);
</script>
