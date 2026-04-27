<template>
  <Space vertical align="start" block style="width: 300px; max-width: 100%">
    <TreeSelect shape="circle" :treeData="data" placeholder="A circle Input..." block />
    <TreeSelect
      shape="circle"
      :icon="Search"
      :treeData="data"
      block
      placeholder="A circle Input with icon"
    />
    <TreeSelect :treeData="data" block placeholder="No Arrow" :showArrow="false" />
    <TreeSelect :treeData="data" block placeholder="Custom Arrow" :arrowIcon="ArrowDownFromLine" />
    <TreeSelect filterable block theme="outline" :treeData="data" placeholder="Outline theme" />
    <TreeSelect :bordered="false" :treeData="data" block placeholder="No Border" theme="solid" />
  </Space>
</template>
<script setup lang="ts">
import { ArrowDownFromLine, Search } from "kui-icons";

const data = [
  {
    title: "tree 1",
    key: "0-1",
    children: [
      {
        title: "tree 1-1",
        key: "1-1",
      },
    ],
  },
];
</script>
