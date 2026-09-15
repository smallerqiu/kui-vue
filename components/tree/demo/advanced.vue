<template>
  <Space vertical>
    <Space>
      <Button @click="treeRef?.expandAll()">Expand all</Button>
      <Button @click="treeRef?.collapseAll()">Collapse all</Button>
      <Button @click="treeRef?.scrollTo('api')">Scroll to API</Button>
    </Space>
    <Tree ref="treeRef" :data="data" :fieldNames="fieldNames" :height="180">
      <template #title="node">
        <span>{{ node.name }}</span>
        <Tag v-if="node.kind" size="small">{{ node.kind }}</Tag>
      </template>
    </Tree>
  </Space>
</template>

<script setup lang="ts">
import type { TreeExpose, TreeFieldNames } from "kui-vue";
import { ref } from "vue";

const treeRef = ref<TreeExpose>();
const fieldNames: TreeFieldNames = { key: "id", title: "name", children: "items" };
const data = [
  {
    id: "guide",
    name: "Guide",
    kind: "group",
    items: [
      { id: "start", name: "Quick Start" },
      { id: "theme", name: "Theme" },
    ],
  },
  {
    id: "components",
    name: "Components",
    kind: "group",
    items: [
      { id: "button", name: "Button" },
      { id: "tree", name: "Tree" },
      { id: "api", name: "API" },
    ],
  },
];
</script>
