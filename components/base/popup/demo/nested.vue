<script setup lang="ts">
import { ref } from "vue";
import { Button, Popup, Select, Space } from "kui-vue";
const value = ref("all");
const options = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
];
</script>
<template>
  <Popup arrow>
    <Button>Open filters</Button>
    <template #overlay="{ close }">
      <Space vertical>
        <strong>Filter results</strong>
        <Select v-model="value" style="width: 220px" :clearable="false" :options="options" />
        <Popup placement="right">
          <Button>More details</Button>
          <template #overlay>This is a nested popup.</template>
        </Popup>
        <Button type="primary" @click="close">Apply</Button>
      </Space>
    </template>
  </Popup>
</template>
