<template>
  <Space wrap>
    <Button type="primary" :icon="Search" shape="circle"></Button>
    <Button type="primary" :icon="Search">Search</Button>
    <Button :icon="Search" shape="circle"></Button>
    <Button :icon="Search">Search</Button>
    <Button type="primary" :icon="Power"></Button>
    <Button :icon="Power"></Button>
    <Button type="primary">Expand<Icon :type="ChevronDown" /></Button>
  </Space>
</template>
<script setup lang="ts">
import { ChevronDown, Search, Power } from "kui-icons";
</script>