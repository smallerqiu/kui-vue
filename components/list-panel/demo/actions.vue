<template>
  <ListPanel summary="Updated just now">
    <template #filters><Input placeholder="Search projects" :icon="Search" /></template>
    <template #actions><Button :icon="RotateCcw">Reset</Button><Button type="primary" :icon="Plus">Create</Button></template>
    <Empty description="No matching projects" />
  </ListPanel>
</template>
<script setup lang="ts">
import { Plus, RotateCcw, Search } from "kui-icons";
</script>
