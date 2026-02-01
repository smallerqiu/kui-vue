<cn>
### 设置图标
通过 `icon` 设置图标
</cn>

```vue
<template>
  <Breadcrumb>
    <BreadcrumbItem href="/" :icon="Home">Home</BreadcrumbItem>
    <BreadcrumbItem href="/navigation/breadcrumb" :icon="Cloud"> App </BreadcrumbItem>
    <BreadcrumbItem :icon="Heart">Other</BreadcrumbItem>
  </Breadcrumb>
</template>
<script setup>
import { Heart, Home, Cloud } from "kui-icons";
</script>
```
