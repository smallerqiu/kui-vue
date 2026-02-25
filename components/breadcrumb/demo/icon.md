<cn>
### 设置图标
通过 `icon` 设置图标
</cn>
<en>
### Set Icon
Set the icon via `icon`.
</en>

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
