<template>
  <Space vertical block>
    <Space>
      <Card v-for="shape in shapes" :key="shape" :shape="shape" style="width: 180px">
        shape: {{ shape }}
      </Card>
    </Space>
    <Space>
      <Card v-for="theme in themes" :key="theme" :theme="theme" shape="square" style="width: 180px">
        theme: {{ theme }}
      </Card>
    </Space>
  </Space>
</template>

<script setup lang="ts">
import type { CardShape, ThemeType } from "kui-vue";

const shapes: CardShape[] = ["round", "square"];
const themes: ThemeType[] = ["default", "fill", "outline", "plain"];
</script>
