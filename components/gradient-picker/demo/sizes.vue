<template>
  <Space vertical>
    <div class="gradient-picker-demo">
      <GradientPicker v-model="small" size="small" />
    </div>
    <div class="gradient-picker-demo">
      <GradientPicker v-model="medium" size="medium" />
    </div>
    <div class="gradient-picker-demo">
      <GradientPicker v-model="large" size="large" />
    </div>
    <div class="gradient-picker-demo">
      <GradientPicker v-model="cornerSmall" type="corner" size="small" />
    </div>
    <div class="gradient-picker-demo">
      <GradientPicker v-model="cornerMedium" type="corner" size="medium" />
    </div>
    <div class="gradient-picker-demo">
      <GradientPicker v-model="cornerLarge" type="corner" size="large" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { GradientValue } from "kui-vue";

const create = (): GradientValue => [
  { color: "#ffd166", offset: 0 },
  { color: "#ef476f", offset: 55 },
  { color: "#118ab2", offset: 100 },
];

const createCorner = (): GradientValue => ["#ffd166", "#ef476f", "#118ab2", "#06d6a0"];

const small = ref(create());
const medium = ref(create());
const large = ref(create());
const cornerSmall = ref(createCorner());
const cornerMedium = ref(createCorner());
const cornerLarge = ref(createCorner());
</script>

<style scoped>
.gradient-picker-demo {
  width: 360px;
}
</style>
