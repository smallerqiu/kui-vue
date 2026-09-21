<script setup lang="ts">
import { Button, Popup, Space } from "kui-vue";
const triggers = ["click", "hover", "focus", "contextmenu"] as const;
</script>
<template>
  <Space wrap>
    <Popup
      v-for="trigger in triggers"
      :key="trigger"
      :trigger="trigger"
      arrow
      :open-delay="150"
      :close-delay="300"
    >
      <Button>{{ trigger }}</Button>
      <template #overlay>Opened by {{ trigger }}</template>
    </Popup>
    <Popup disabled>
      <Button disabled>Disabled</Button>
      <template #overlay>Unavailable</template>
    </Popup>
  </Space>
</template>
