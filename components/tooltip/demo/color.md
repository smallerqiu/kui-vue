<cn>
### 多彩文字提示
多种预设色彩的文字提示样式，用作不同场景使用。
 </cn>
<en>
### Colorful Text Tips
Multiple preset colors for text tips, used in different scenarios.
 </en>

```vue
<template>
  <div class="demo-tooltip-color">
    <Divider orientation="left">Presets:</Divider>
    <Space wrap>
      <Tooltip :color="color" :title="color" v-for="color in colors" :key="color">
        <Tag :color="color">{{ color }}</Tag>
      </Tooltip>
    </Space>
    <Divider orientation="left">Custom:</Divider>
    <Space>
      <Tooltip :color="color" :title="color" v-for="color in custom" :key="color">
        <Tag :color="color">{{ color }}</Tag>
      </Tooltip>
    </Space>
  </div>
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
