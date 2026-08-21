<template>
  <TreeSelect
    virtual
    filterable
    block
    :tree-data="data"
    :virtual-height="260"
    placeholder="Select from 5,000 nodes"
  />
</template>

<script setup lang="ts">
const data = Array.from({ length: 5000 }, (_, index) => ({
  key: `node-${index}`,
  title: `Node ${index + 1}`,
}));
</script>
