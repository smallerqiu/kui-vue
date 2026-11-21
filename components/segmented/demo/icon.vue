<template>
  <Space vertical>
    <Segmented v-model="device" :options="options" />
    <Segmented v-model="layout" :options="layoutOptions" aria-label="Layout" />
  </Space>
</template>

<script setup lang="ts">
import { Monitor, Smartphone, Tablet, List, LayoutGrid } from "kui-icons";
import { ref } from "vue";

const device = ref("desktop");
const layout = ref("list");
const layoutOptions = [
  { value: "list", icon: List },
  { value: "grid", icon: LayoutGrid },
];
const options = [
  { label: "Desktop", value: "desktop", icon: Monitor },
  { label: "Tablet", value: "tablet", icon: Tablet },
  { label: "Mobile", value: "mobile", icon: Smartphone },
];
</script>
