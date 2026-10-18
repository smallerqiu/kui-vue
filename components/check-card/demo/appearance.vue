<template>
  <div class="demo-list">
    <CheckCardGroup
      v-for="(tier, index) in tiers"
      :key="tier"
      v-model="selected[index]"
      :theme="tier"
      shape="square"
      size="small"
      :options="items"
    />
    <CheckCardGroup v-model="disabled" theme="solid" shape="square" size="small" :options="items" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { CheckCardValue, SurfaceThemeType } from "kui-vue";

// A check card paints all five surface tiers, and its own default is `outline` rather than the `fill` the
// other cards start on — so the rows are listed from `outline` and shown side by side instead of behind a
// switch. The last row is the disabled state: the tier still decides the shape of the box, but the plate and
// the check mark both step back.
const tiers: SurfaceThemeType[] = ["outline", "fill", "plain", "solid", "dashed"];
const selected = ref<CheckCardValue[]>(tiers.map(() => "basic"));
const disabled = ref<CheckCardValue>("basic");
const items = [
  { value: "basic", title: "Basic", description: "Essential features" },
  { value: "pro", title: "Pro", description: "Advanced capabilities" },
];
</script>

<style scoped>
.demo-list {
  display: grid;
  gap: 24px;
}
</style>
