<cn>
#### 多彩徽标
多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
</cn>

```vue
<template>
  <Space vertical block>
    <Divider orientation="left">Presets:</Divider>
    <div>
      <div v-for="color in colors" :key="color">
        <Badge :color="color" :text="color" />
      </div>
    </div>
    <Divider orientation="left">Custom:</Divider>
    <div>
      <div v-for="color in custom" :key="color">
        <Badge :color="color" :text="color" />
      </div>
    </div>
  </Space>
</template>
<script setup>
const custom = ["#c20", "#39f", "#e3f", "#6c0"];
const colors = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "magenta",
  "volcano",
  "gold",
  "lime",
];
</script>
```
