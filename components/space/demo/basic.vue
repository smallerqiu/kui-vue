<template>
  <Space>
    <Button>Button</Button>
    <Button :icon="Search">Button</Button>
    <Tooltip placement="top">
      <Button>Space</Button>
      <template #title>
        <p style="margin:0">I am space</p>
      </template>
    </Tooltip>
  </Space>
</template>
<script setup lang="ts">
import { Search } from "kui-icons";
</script>