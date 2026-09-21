<script setup lang="ts">
import { ref } from "vue";
import { Button, Checkbox, Popup, Space } from "kui-vue";
const arrow = ref(true);
const placements = [
  "top-left",
  "top",
  "top-right",
  "bottom-left",
  "bottom",
  "bottom-right",
  "left-top",
  "left",
  "left-bottom",
  "right-top",
  "right",
  "right-bottom",
] as const;
</script>
<template>
  <Space vertical>
    <Checkbox v-model="arrow">Show arrow</Checkbox>
    <div
      style="
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        max-width: 420px;
      "
    >
      <Popup
        v-for="placement in placements"
        :key="placement"
        :placement="placement"
        :arrow="arrow"
        :offset="10"
      >
        <Button>{{ placement }}</Button>
        <template #overlay>{{ placement }}</template>
      </Popup>
    </div>
  </Space>
</template>
