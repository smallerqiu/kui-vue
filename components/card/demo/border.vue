<template>
  <div class="demo-view-fill">
    <Card title="Title" :icon="Heart" bordered>
      <template #extra>
        <a href="#">more</a>
      </template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </Card>
  </div>
</template>
<script setup lang="ts">
import { Heart } from "kui-icons";
</script>