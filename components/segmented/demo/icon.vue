<template>
  <Segmented v-model="device" :options="options" />
</template>

<script setup lang="ts">
import { Monitor, Smartphone, Tablet } from "kui-icons";
import { ref } from "vue";

const device = ref("desktop");
const options = [
  { label: "Desktop", value: "desktop", icon: Monitor },
  { label: "Tablet", value: "tablet", icon: Tablet },
  { label: "Mobile", value: "mobile", icon: Smartphone },
];
</script>
