<template>
  <Space vertical>
    <Card title="Card" :icon="Heart" style="width:256px">
      <p>card content</p>
      <p>card content</p>
    </Card>
    <Card title="Card" :icon="Heart" style="width:256px">
      <p>card content</p>
      <p>card content</p>
    </Card>
  </Space>
</template>
<script setup lang="ts">
import { Heart } from "kui-icons";
</script>