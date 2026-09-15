<template>
  <Space vertical>
    <code>value(boolean): {{ value1 }}</code>
    <Switch v-model="value1" />

    <code>value(string): {{ value2 }}</code>
    <Switch v-model="value2" value-type="string" />

    <code>value(number): {{ value3 }}</code>
    <Switch v-model="value3" value-type="number" />

    <Button @click="checked = !checked" size="small">
      {{ !checked ? "Unchecked" : "Checked" }}
    </Button>
    <Switch v-model="checked" />

    <Space>
      <Switch checked type="primary" />
      <Switch checked type="success" />
      <Switch checked type="warning" />
      <Switch checked type="danger" />
      <Switch checked color="#8b5cf6" />
      <Switch checked shape="square" />
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref(true);
const value2 = ref("1");
const value3 = ref(1);
const checked = ref(true);
</script>
