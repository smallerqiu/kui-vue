<cn>
### 边框
`bordered` 可以设置是否显示边框
</cn>
<en>
### Border
Use `bordered` to control whether the border is displayed.
</en>

```vue
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
```
