<cn>
#### 设置图标
通过 `icon` 设置图标
</cn>

```vue
<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem to="/" :icon="Home">Home</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb" :icon="Cloud">app</BreadcrumbItem>
      <BreadcrumbItem :icon="Heart">other</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script setup>
import { Heart, Home, Cloud } from "kui-icons"
</script>
```