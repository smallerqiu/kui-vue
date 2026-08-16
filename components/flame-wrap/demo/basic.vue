<script setup lang="ts">
import { Button, FlameWrap, Space, Tag } from "kui-vue";
</script>

<template>
  <div style="padding: 150px 60px 48px">
    <FlameWrap :radius="18">
      <Card :style="{ padding: '20px' }">
        <Tag color="blue">WebGL Effect</Tag>
        <h3 style="margin: 18px 0 8px">Flame wrapped content</h3>
        <p style="margin: 0 0 24px; color: var(--kui-color-text-secondary)">
          火焰沿内容轮廓燃烧，内部仍然是真实且可交互的 DOM。
        </p>
        <Space><Button type="primary">Explore</Button><Button>Details</Button></Space>
      </Card>
    </FlameWrap>
  </div>
</template>
