<template>
  <Space vertical>
    <div class="gradient-picker-demo">
      <GradientPicker v-model="value" alpha @change="onChange" />
    </div>
    <code>linear: {{ linear }}</code>
    <code>radial: {{ radial }}</code>
    <div class="gradient-picker-demo">
      <GradientPicker :model-value="value" disabled />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { formatGradient, type GradientStop, type GradientValue } from "kui-vue";

const value = ref<GradientValue>([
  { color: "#ffd166", offset: 0 },
  { color: "#ef476f", offset: 55 },
  { color: "#118ab2", offset: 100 },
]);
const stopsText = (stops: GradientStop[]) =>
  stops.map((stop) => `${stop.color} ${stop.offset}%`).join(", ");
const linear = ref(formatGradient(value.value));
const radial = ref(`radial-gradient(circle, ${stopsText(value.value as GradientStop[])})`);

const onChange = (next: GradientValue) => {
  linear.value = formatGradient(next);
  radial.value = `radial-gradient(circle, ${stopsText(next as GradientStop[])})`;
};
</script>

<style scoped>
.gradient-picker-demo {
  width: 360px;
}
</style>
