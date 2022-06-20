<cn>
#### 分隔符
通过 `separator` 设置分隔符
</cn>

```vue
<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem to="/" :icon="Home" separator="~">Home</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb" :icon="Cloud" separator="~">breadcrumb</BreadcrumbItem>
      <BreadcrumbItem :icon="Heart" separator="~">other</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script>
import { Heart, Home, Cloud } from 'kui-icons'
export default{
  data() {
    return {
      Heart, Home, Cloud
    }
  }
}
</script>
```