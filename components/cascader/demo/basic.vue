<template>
  <Space vertical>
    <code>Value：{{ selectedArea }}</code>
    <Cascader
      v-model="selectedArea"
      :options="areaOptions"
      placeholder="请选择省市区"
      style="width: 260px"
    />
  </Space>
</template>

<script setup lang="ts">
import type { CascaderOption } from "kui-vue";
import { ref } from "vue";

const selectedArea = ref<(string | number)[]>(["hubei", "wuhan", "wuchang"]);

const areaOptions: CascaderOption[] = [
  {
    value: "hubei",
    label: "湖北省",
    children: [
      {
        value: "wuhan",
        label: "武汉市",
        children: [
          { value: "hongshan", label: "洪山区" },
          { value: "wuchang", label: "武昌区" },
        ],
      },
      {
        value: "huanggang",
        label: "黄冈市",
        children: [{ value: "huangzhou", label: "黄州" }],
      },
    ],
  },
  {
    value: "guangdong",
    label: "广东省",
    children: [
      {
        value: "shenzhen",
        label: "深圳市",
        children: [{ value: "nanshan", label: "南山区" }],
      },
    ],
  },
];
</script>
