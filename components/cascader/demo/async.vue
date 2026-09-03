<template>
  <Cascader
    v-model="value"
    :options="options"
    :loadData="loadData"
    placeholder="请选择地区"
    style="width: 260px"
  />
</template>

<script setup lang="ts">
import type { CascaderLoadData, CascaderOption, CascaderValue } from "kui-vue";
import { ref } from "vue";

const value = ref<CascaderValue>([]);
const options: CascaderOption[] = [
  { label: "浙江省", value: "zhejiang", isLeaf: false },
  { label: "江苏省", value: "jiangsu", isLeaf: false },
];

const children: Record<string, CascaderOption[]> = {
  zhejiang: [
    { label: "杭州市", value: "hangzhou", isLeaf: true },
    { label: "宁波市", value: "ningbo", isLeaf: true },
  ],
  jiangsu: [
    { label: "南京市", value: "nanjing", isLeaf: true },
    { label: "苏州市", value: "suzhou", isLeaf: true },
  ],
};

const loadData: CascaderLoadData = async (option) => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return children[String(option.value)] || [];
};
</script>
