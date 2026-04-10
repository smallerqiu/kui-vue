<cn>
### 基本用法
通过 `title` 和 `icon` 可设置标题和图标
</cn>
<en>
### Basic Usage
Set the title and icon via `title` and `icon`.
</en>

```vue
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
```
