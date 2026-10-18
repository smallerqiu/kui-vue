<template>
  <Space vertical block>
    <Space v-for="tier in tiers" :key="tier" vertical>
      <code>theme: {{ tier }}</code>
      <CheckboxGroup :options="options" v-model="grouped" :theme="tier" />
      <Space>
        <Checkbox v-model="single" label="Checked" :theme="tier" />
        <Checkbox label="Disabled" disabled :theme="tier" />
      </Space>
    </Space>
  </Space>
</template>
<script setup lang="ts">
import type { CheckboxOption, CheckboxValue, MarkThemeType } from "kui-vue";
import { ref } from "vue";

// A check box paints two tiers, and both land on the square rather than on the label: `fill` — what it does
// when nobody writes a theme — gives the box a pale plate, `outline` puts a border on it instead. Whatever the
// tier, a checked box is still primary and a disabled one still reads as disabled, and a group hands its own
// tier to every item that did not write one.
const tiers: MarkThemeType[] = ["fill", "outline"];
const grouped = ref<CheckboxValue[]>(["apple", "banana"]);
const single = ref(true);
const options: CheckboxOption[] = ["Apple", "Orange", "Banana"].map((label) => ({
  label,
  value: label.toLowerCase(),
}));
</script>
