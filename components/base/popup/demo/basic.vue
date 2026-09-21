<script setup lang="ts">
import { Button, Input, Popup, Space } from "kui-vue";
</script>
<template>
  <Popup arrow>
    <Button>Open popup</Button>
    <template #overlay="{ close }">
      <Space vertical>
        <strong>Quick note</strong>
        <Input aria-label="Note" placeholder="Write a note…" />
        <Button type="primary" @click="close">Done</Button>
      </Space>
    </template>
  </Popup>
</template>
