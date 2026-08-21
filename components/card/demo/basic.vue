<template>
  <Space vertical block>
    <Card title="Title" :icon="Heart">
      <template #extra>
        <a href="#">more</a>
      </template>
      <div>card content</div>
    </Card>
    <Card title="Outline" :icon="Heart" theme="outline">
      <template #extra>
        <a href="#">more</a>
      </template>
      <div>card content</div>
    </Card>
    <Card title="Bordered" :icon="Heart" bordered>
      <template #extra>
        <a href="#">more</a>
      </template>
      <div>card content</div>
    </Card>
  </Space>
</template>
<script setup lang="ts">
import { Heart } from "kui-icons";
</script>
