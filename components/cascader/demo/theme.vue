<template>
  <Space vertical block style="width: 260px; max-width: 100%">
    <div v-for="tier in tiers" :key="tier" class="tier">
      <code>theme: {{ tier }}</code>
      <Cascader
        v-model="selected"
        :options="areaOptions"
        :theme="tier"
        placeholder="请选择省市区"
        style="width: 100%"
      />
    </div>
  </Space>
</template>

<script setup lang="ts">
import type { CascaderOption, ThemeType } from "kui-vue";
import { ref } from "vue";

// A cascader is a text control with a tree behind it, so it paints the same six tiers an input does: `fill`
// — its own look — plates the box, `outline` and `dashed` edge it, `plain` leaves it bare, `solid` plates it
// on the primary and inverts the chosen path and the arrow, `underlined` keeps only the bottom rule. Only the
// trigger box takes a tier; the popup it opens keeps the library's popup surface in every one of them.
const tiers: ThemeType[] = ["fill", "outline", "plain", "solid", "dashed", "underlined"];

const selected = ref<(string | number)[]>(["guangdong", "shenzhen", "nanshan"]);

const areaOptions: CascaderOption[] = [
  {
    value: "hubei",
    label: "湖北省",
    children: [
      { value: "wuhan", label: "武汉市", children: [{ value: "hongshan", label: "洪山区" }] },
      { value: "huanggang", label: "黄冈市" },
    ],
  },
  {
    value: "guangdong",
    label: "广东省",
    children: [
      { value: "shenzhen", label: "深圳市", children: [{ value: "nanshan", label: "南山区" }] },
      { value: "guangzhou", label: "广州市" },
    ],
  },
];
</script>

<style scoped>
.tier {
  display: grid;
  gap: 4px;
  justify-items: start;
}
</style>
