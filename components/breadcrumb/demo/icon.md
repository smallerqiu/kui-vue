<cn>
#### 设置图标
通过 `icon` 设置图标
</cn>

```vue
<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem href="/" :icon="Home">Home</BreadcrumbItem>
      <BreadcrumbItem href="/components/breadcrumb" :icon="Cloud">app</BreadcrumbItem>
      <BreadcrumbItem :icon="Heart">other</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script setup>
import { Heart, Home, Cloud } from "kui-icons"
</script>
```