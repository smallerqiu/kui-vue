<template>
  <Space vertical>
    <code>value(boolean): {{ value1 }}</code>
    <Checkbox v-model="value1">Checkbox</Checkbox>

    <code>value(string): {{ value2 }}</code>
    <Checkbox v-model="value2" value-type="string">Checkbox</Checkbox>

    <code>value(number): {{ value3 }}</code>
    <Checkbox v-model="value3" value-type="number">Checkbox</Checkbox>

    <Button @click="checked = !checked" size="small">
      {{ !checked ? "Unchecked" : "Checked" }}
    </Button>
    <Checkbox label="Checkbox" v-model="checked" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const checked = ref(true);
const value1 = ref(true);
const value2 = ref("1");
const value3 = ref(1);
</script>
