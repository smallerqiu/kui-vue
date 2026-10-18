<template>
  <Space vertical block>
    <Space v-for="tier in marks" :key="`dot-${tier}`" vertical>
      <code>theme: {{ tier }}</code>
      <RadioGroup :options="fruits" v-model="dot" :theme="tier" />
    </Space>
    <Space v-for="tier in buttons" :key="`button-${tier}`" vertical>
      <code>{{ tier ? `theme: ${tier}` : "no theme" }}</code>
      <RadioGroup type="button" :options="fruits" v-model="button" :theme="tier" />
    </Space>
  </Space>
</template>
<script setup lang="ts">
import type { MarkThemeType, SurfaceThemeType } from "kui-vue";
import { ref } from "vue";

// A radio dot paints the two tiers a mark has, and the tier lands on the dot rather than on the label: `fill`
// — what it does when nobody writes a theme — gives it a pale plate, `outline` puts a border on it instead.
// `type="button"` is a different surface entirely: the group renders buttons, so it paints the five tiers a
// button has, and writing no theme at all keeps the buttons' own type-driven look — the checked one primary,
// the rest outlined. Only `fill` changes how the buttons are joined; the others keep their adjacent borders.
const marks: MarkThemeType[] = ["fill", "outline"];
const buttons: (SurfaceThemeType | undefined)[] = [
  undefined,
  "fill",
  "outline",
  "plain",
  "solid",
  "dashed",
];
const dot = ref("apple");
const button = ref("apple");
const fruits = ["Apple", "Orange", "Banana"].map((label) => ({
  label,
  value: label.toLowerCase(),
}));
</script>
