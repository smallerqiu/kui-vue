<cn>
### 仪表盘卡片布局 (Auto-fill + Min-Width)
无需手动设置断点，依靠 `itemMinWidth` 让容器根据宽度自动增减列数。

> 当设置了 `itemMinWidth` `时，cols` 参数将失效。这是一种内容驱动的布局方式，非常适合图片画廊或卡片列表，它能保证在容器缩放时，卡片始终保持合适的宽度而不会过于拥挤。
</cn>
<en>
### Auto fill + Min-Width
</en>

```vue
<template>
  <Grid :itemMinWidth="256" :xGap="16" :yGap="16">
    <GridItem v-for="(x, i) in data" :key="i" class="box"> 卡片 {{ i + 1 }} (最小 256px) </GridItem>
  </Grid>
</template>
<script setup>
import { ref } from "vue";
const data = ref(Array.from({ length: 7 }));
</script>
<style lang="less" scoped>
.box {
  background: var(--kui-color-bg-3);
  height: 64px;
}
</style>
```
