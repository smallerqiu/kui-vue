<template>
  <Space vertical>
    <Cascader
      v-model="selectedCategory"
      :options="categoryOptions"
      expandTrigger="hover"
      :showAllLevels="false"
      placeholder="请选择商品归属类目"
      style="width: 200px"
    />
    <code> 后端绑定最终叶子节点：{{ selectedCategory[selectedCategory.length - 1] }} </code>
  </Space>
</template>

<script setup lang="ts">
import type { CascaderOption } from "kui-vue";
import { ref } from "vue";

const selectedCategory = ref<(string | number)[]>(["electronics", "computer", "laptop"]);

const categoryOptions: CascaderOption[] = [
  {
    value: "electronics",
    label: "数码电子",
    children: [
      {
        value: "phone",
        label: "智能手机",
        children: [
          { value: "ios", label: "iPhone" },
          { value: "android", label: "安卓手机" },
        ],
      },
      {
        value: "computer",
        label: "电脑办公",
        children: [
          { value: "laptop", label: "笔记本" },
          { value: "desktop", label: "台式机" },
        ],
      },
    ],
  },
  {
    value: "clothing",
    label: "服装服饰",
    children: [
      {
        value: "mens",
        label: "男装",
        children: [
          { value: "jacket", label: "夹克/外套" },
          { value: "tshirt", label: "潮流T恤" },
        ],
      },
    ],
  },
];
</script>
