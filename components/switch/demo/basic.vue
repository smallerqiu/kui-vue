<template>
  <Space vertical>
    <code>value(boolean): {{ value1 }}</code>
    <Switch v-model="value1" @change="change" />

    <code>value(string): {{ value2 }}</code>
    <Switch v-model="value2" value-type="string" @change="change" />

    <code>value(number): {{ value3 }}</code>
    <Switch v-model="value3" value-type="number" @change="change" />

    <Button @click="checked = !checked" size="small">
      {{ !checked ? "Unchecked" : "Checked" }}
    </Button>
    <Switch v-model="checked" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref(true);
const value2 = ref("1");
const value3 = ref(1);
const checked = ref(true);
const change = (val: string | number | boolean) => {
  console.log(val);
};
</script>
