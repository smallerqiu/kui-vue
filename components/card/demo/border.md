<cn>
### 边框
`bordered` 可以设置是否显示边框
</cn>

```vue
<template>
  <div class="demo-view-fill">
    <Card title="卡片标题" :icon="Heart" bordered>
      <template #extra>
        <a href="#">更多</a>
      </template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </Card>
  </div>
</template>
<script setup>
import { Heart } from "kui-icons";
</script>
```
