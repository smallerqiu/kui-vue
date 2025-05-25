<cn>
#### 分隔符
通过 `separator` 设置分隔符
</cn>

```vue
<template>
  <Breadcrumb>
    <BreadcrumbItem href="/" :icon="Home" separator="~">Home</BreadcrumbItem>
    <BreadcrumbItem href="/components/breadcrumb" :icon="Cloud" separator="~">breadcrumb</BreadcrumbItem>
    <BreadcrumbItem :icon="Heart" separator="~">other</BreadcrumbItem>
  </Breadcrumb>
</template>
<script setup>
import { Heart, Home, Cloud } from 'kui-icons'
</script>
```