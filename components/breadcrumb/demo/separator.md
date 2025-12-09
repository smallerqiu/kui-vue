<cn>
### 分隔符
通过 `separator` 设置分隔符
</cn>

```vue
<template>
  <Breadcrumb separator=">">
    <BreadcrumbItem href="/" :icon="Home"></BreadcrumbItem>
    <BreadcrumbItem href="/navigation/breadcrumb" :icon="Cloud"
      >Breadcrumb</BreadcrumbItem
    >
    <BreadcrumbItem :icon="Heart">Other</BreadcrumbItem>
  </Breadcrumb>
  <Breadcrumb>
    <template #separator><span style="color:red">></span></template>
    <BreadcrumbItem href="/" :icon="Home"></BreadcrumbItem>
    <BreadcrumbItem href="/navigation/breadcrumb" :icon="Cloud"
      >Breadcrumb</BreadcrumbItem
    >
    <BreadcrumbItem :icon="Heart">Other</BreadcrumbItem>
  </Breadcrumb>
</template>
<script setup>
import { Heart, Home, Cloud } from "kui-icons";
</script>
```
