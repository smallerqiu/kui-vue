<template>
  <div class="motion-demo">
    <Button @click="replay">Replay animations</Button>
    <div :key="animationKey" class="motion-demo-grid">
      <div v-for="item in motions" :key="item.className" class="motion-demo-cell">
        <div class="motion-demo-box" :class="item.className" />
        <TypographyText code>{{ item.className }}</TypographyText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const animationKey = ref(0);
const motions = [
  { className: "k-motion-fade-in" },
  { className: "k-motion-scale-in" },
  { className: "k-motion-scale-y-in" },
  { className: "k-motion-slide-in-from-left" },
  { className: "k-motion-slide-in-from-right" },
  { className: "k-motion-slide-in-from-bottom" },
];
const replay = () => animationKey.value++;
</script>

<style scoped>
.motion-demo {
  display: grid;
  gap: 24px;
}
.motion-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
}
.motion-demo-cell {
  display: grid;
  justify-items: center;
  gap: 12px;
  padding: 24px 12px;
  overflow: hidden;
  border: 1px solid var(--kui-color-border);
  border-radius: var(--kui-card-radius);
}
.motion-demo-box {
  width: 64px;
  height: 64px;
  border-radius: var(--kui-shape-round);
  background: var(--kui-color-primary);
}
</style>
