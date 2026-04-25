<template>
  <div>
    <Card title="Title" :icon="Heart">
      <template #extra>
        <a href="#">more</a>
      </template>
      <div>card content</div>
      <div>card content</div>
      <div>card content</div>
    </Card>
  </div>
</template>
<script setup lang="ts">
import { Heart } from "kui-icons";
</script>
