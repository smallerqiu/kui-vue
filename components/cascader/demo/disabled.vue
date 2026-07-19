<template>
  <Space vertical>
    <code>Disabled item:</code>
    <Cascader
      v-model="departmentPath"
      :options="orgOptions"
      placeholder="请指派归属部门"
      style="width: 280px"
    />
    <code>Disabled:</code>
    <Cascader
      disabled
      v-model="departmentPath"
      :options="orgOptions"
      placeholder="请指派归属部门"
      style="width: 280px"
    />
  </Space>
</template>

<script setup lang="ts">
import type { CascaderOption } from "kui-vue";
import { ref } from "vue";

const departmentPath = ref<(string | number)[]>([]);

const orgOptions: CascaderOption[] = [
  {
    value: "headquarters",
    label: "集团总部",
    children: [
      { value: "hr", label: "人力资源部" },
      { value: "tech", label: "研发中心" },
      { value: "finance", label: "财务风控部" },
    ],
  },
  {
    value: "east_branch",
    label: "华东分公司",
    disabled: true, // 👈 华东分公司整体架构调整中，整体禁用
    children: [
      { value: "sh_sales", label: "上海销售部" },
      { value: "hz_sales", label: "杭州运营中心" },
    ],
  },
  {
    value: "south_branch",
    label: "华南分公司",
    children: [
      { value: "gz_sales", label: "广州市场部" },
      {
        value: "sz_sales",
        label: "深圳前海分部",
        disabled: true, // 👈 仅禁用末梢特殊叶子节点
      },
    ],
  },
];
</script>
