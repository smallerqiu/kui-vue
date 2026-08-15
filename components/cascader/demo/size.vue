<template>
  <Space vertical :size="12">
    <Cascader
      v-model="value"
      :options="simpleOptions"
      shape="circle"
      placeholder="Circle"
      style="width: 240px"
    />
    <Cascader
      v-model="value"
      :options="simpleOptions"
      :show-arrow="false"
      placeholder="No Arrow"
      style="width: 240px"
    />
    <Cascader
      v-model="value"
      :options="simpleOptions"
      :arrowIcon="ArrowDown"
      placeholder="Custom Arrow"
      style="width: 240px"
    />
    <Cascader
      v-model="value"
      :options="simpleOptions"
      :icon="Search"
      placeholder="With Icon"
      style="width: 240px"
    />
    <Cascader
      v-model="value"
      :options="simpleOptions"
      placeholder="Solid"
      theme="solid"
      style="width: 240px"
    />
    <Cascader
      v-model="value"
      :options="simpleOptions"
      placeholder="Plain"
      theme="plain"
      style="width: 240px"
    />
    <Cascader
      v-model="value"
      :options="simpleOptions"
      size="large"
      placeholder="Large Size (38px)"
      style="width: 240px"
    />

    <Cascader
      v-model="value"
      :options="simpleOptions"
      placeholder="Default Size (32px)"
      style="width: 240px"
    />

    <Cascader
      v-model="value"
      :options="simpleOptions"
      size="small"
      placeholder="Small Size (24px)"
      style="width: 240px"
    />
  </Space>
</template>

<script setup lang="ts">
import { ArrowDown, Search } from "kui-icons";
import type { CascaderOption } from "kui-vue";
import { ref } from "vue";

const value = ref<(string | number)[]>([]);
// const simpleOptions: CascaderOption[] = [];

const simpleOptions: CascaderOption[] = [
  {
    value: "1",
    label: "选项一",
    children: [
      { value: "1-1", label: "子选项 A" },
      { value: "1-2", label: "子选项 B" },
    ],
  },
  {
    value: "2",
    label: "选项二",
    children: [{ value: "2-1", label: "子选项 C" }],
  },
];
</script>
