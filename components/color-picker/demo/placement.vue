<template>
  <Space wrap>
    <template v-for="placement in placements">
      <ColorPicker modelValue="red" size="small" :placement="placement">
        <Button>{{ placement }}</Button>
      </ColorPicker>
    </template>
  </Space>
</template>

<script setup lang="ts">
import type { DropPlacementsType } from "kui-vue";

const placements: DropPlacementsType[] = [
  "bottom-left",
  "bottom",
  "bottom-right",
  "top-left",
  "top",
  "top-right",
];
</script>
