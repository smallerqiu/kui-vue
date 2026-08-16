<script setup lang="ts">
import { Button, Ripple, Space, Tag } from "kui-vue";
</script>

<template>
  <Ripple
    :style="{
      minHeight: '260px',
      border: '1px solid var(--kui-color-border)',
      borderRadius: 'var(--kui-card-radius)',
      background: 'var(--kui-color-bg-component)',
    }"
  >
    <div style="padding: 32px">
      <Tag color="blue">Interactive surface</Tag>
      <h3 style="margin: 18px 0 8px">点击任意位置，观察水波扩散</h3>
      <p style="margin: 0 0 24px; color: var(--kui-color-text-secondary)">
        在支持 HTML-in-Canvas 的浏览器中，水波会折射下方的实时 DOM 内容。
      </p>
      <Space><Button type="primary">Primary</Button><Button>Default</Button></Space>
    </div>
  </Ripple>
</template>
