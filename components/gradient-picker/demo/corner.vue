<template>
  <Space vertical>
    <div class="gradient-picker-demo">
      <GradientPicker v-model="corner" type="corner" @change="onChange" />
    </div>
    <code>colors: {{ colors }}</code>
    <div class="gradient-picker-demo">
      <GradientPicker :model-value="corner" type="corner" disabled />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { CornerGradientValue, GradientValue } from "kui-vue";

const corner = ref<GradientValue>(["#ffffff", "#a9f0d1", "#5fe08a", "#3cbf6b"]);
const colors = ref((corner.value as CornerGradientValue).join(", "));

const onChange = (next: GradientValue) => {
  colors.value = (next as CornerGradientValue).join(", ");
};
</script>

<style scoped>
.gradient-picker-demo {
  width: 360px;
}
</style>
