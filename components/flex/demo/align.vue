<template>
  <Flex vertical size="small" align="start">
    <span>Justify</span>
    <Segmented v-model="justify" :options="justifyOps.map((value) => ({ label: value, value }))" />
    <span>Align</span>
    <Segmented v-model="align" :options="alignOps.map((value) => ({ label: value, value }))" />
    <Flex
      :align="align"
      :justify="justify"
      :style="{
        width: '100%',
        height: '120px',
        border: '1px solid var(--kui-color-bg-2)',
        'border-radius': '5px',
      }"
    >
      <Button v-for="x in 3" :key="x">Button</Button>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import type { FlexAlignType, FlexJustifyType } from "kui-vue";
import { ref } from "vue";
const justify = ref<FlexJustifyType>("flex-start");
const align = ref<FlexAlignType>("flex-start");
const justifyOps = ref([
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
]);
const alignOps = ref(["flex-start", "center", "flex-end"]);
</script>
